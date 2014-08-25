Router.configure({
	layoutTemplate: "layout",
	yieldTemplates: {
		"header": { to: "header" },
		"footer": { to: "footer" }
	}
});

Router.map(function() {

	this.route("home", {
		path: "/"
	});

	this.route("cafes", {
		path: "/cafes",
		onBeforeAction: function () {
			Session.set("userAddress", null);
			Session.set("cafe_ids", null);
		},
		onAfterAction: function () {
			getUserPosition();
		}
	});
});