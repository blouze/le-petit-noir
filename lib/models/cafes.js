var cafe_schema = new SimpleSchema({
    nom: {
        type: String,
        label: "nom",
        max: 200
    },
    adresse: {
        type: String,
        label: "adresse"
    },
    arrondissement: {
        type: String,
        label: "arrondissement"
    },
    geo_latitude: {
        type: [Number],
        label: "geo_latitude",
        decimal: true,
        optional: true
    },
    record_timestamp: {
        type: Number,
        label: "record_timestamp"
    },
    record_id: {
        type: String,
        label: "recorded_id"
    }
});

Cafes = new Meteor.Collection("cafes");
Cafes.attachSchema(cafe_schema);

if (Meteor.isServer)
    Cafes._ensureIndex({ geo_latitude: "2dsphere" });