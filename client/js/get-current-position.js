getUserPosition = function () {

	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function (pos) {

			//console.log(pos);

			if (pos) {

				var position = pos.coords;

				// Le Paris hack
				var radius = 0.035;
				var parisPos = {
					longitude: 2.3470599 - 2 * (Math.random() * radius) + radius,
					latitude: 48.8588589 - 2 * (Math.random() * radius) + radius
				}
				position = parisPos;

				Session.set("userPosition", position);
			}
		}, function (err) {
			console.log(err);
		}, {
			timeout: 30000,
			enableHighAccuracy: true,
			maximumAge: 0
		});
	}
}