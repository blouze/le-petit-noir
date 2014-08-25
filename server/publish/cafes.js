Meteor.publish("cafes", function (selector) {
	return Cafes.find();
});

Meteor.publish("cafe", function (selector) {
	return Cafes.findOne(selector);
});