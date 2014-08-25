Meteor.http.call("GET",
	"http://parisdata.opendatasoft.com/api/records/1.0/search?dataset=liste-des-cafes-a-un-euro&facet=arrondissement"
	+ "&rows=200" , function function_name (err, results) {
		if (err)
			console.log(err)
		else {
			_.each(results.data.records, function (rec) {
				var cafe = Cafes.findOne({ record_id: rec.recordid });
				if (!cafe) {
					console.log(rec.fields["nom"])
					var record_timestamp = moment(rec.record_timestamp).unix();
					Cafes.insert({
						nom: rec.fields["nom"],
						adresse: rec.fields["adresse"],
						arrondissement: rec.fields["arrondissement"],
						geo_latitude: rec.fields["geo_latitude"],
						record_timestamp: record_timestamp,
						record_id: rec.recordid,
					}, function (err) {
						if (err)
							console.log(err);
					});
				}
			});
		}
	});