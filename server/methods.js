Meteor.methods({
	findCafesNear: function (longitude, latitude, maxDistance) {

		maxDistance = maxDistance || 500;
		console.log(latitude, longitude, maxDistance)

		return Cafes.find({
			geo_latitude: {
				$nearSphere: {
					$geometry : { type : "Point" , coordinates: [ latitude, longitude ] },
					$maxDistance : maxDistance
				}
			}
		}).fetch();
	},
	lookupLonLat: function (longitude, latitude) {

		this.unblock();
		return Meteor.http.call("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
			latitude + "," + longitude +
			"&sensor=true_or_false" +
			"&key=AIzaSyB4bC14BQMXhYWZH-_l904q34BsnmClbUk" +
			"&result_type=street_address");
	}
});