Handlebars.registerHelper("userAddress", function () {

	if (Session.get("userAddress") && Session.get("userAddress").address_components)

		//console.log(Session.get("userAddress").address_components);
		return _.reduce(Session.get("userAddress").address_components, function (memo, comp, index) {
			var compType = comp.types[0];
			if (compType === "street_number" || compType === "route")
				return memo + " " + comp.long_name;
			else if (index === 3)
				return memo + ", " + comp.long_name;
			else
				return memo;
		}, "");
});
