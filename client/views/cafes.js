Template.cafes.helpers({

	items: function () {

		console.log(Session.get("cafe_ids"));

		if (Session.get("cafe_ids"))
			//return Cafes.find();
			return Cafes.find({ _id: { $in: Session.get("cafe_ids") } });
	}
});

Template.cafeItem.helpers({

	fullAddress: function () {

		return this.adresse + ", " + this.arrondissement + " Paris";
	}
});

Deps.autorun(function () {

	var position = Session.get("userPosition");

	if (position) {

		Meteor.call("lookupLonLat", position.longitude, position.latitude, function (err, res) {
			if (err)
				console.log(err);
			else {
	            //console.log(res.data.status);
	            if (res.data.status === "OK") {
	            	Session.set("userAddress", res.data.results[0]);
	            }
	        }
	    });

		Meteor.call("findCafesNear", position.longitude, position.latitude, function(error, results) {
			if (error)
				console.log(error);
			else {
				var cafe_ids = _.pluck(results, "_id");
				Session.set("cafe_ids", cafe_ids);
				Meteor.subscribe("cafes", { _id: { $in: cafe_ids } });
			}
		});
	}
});