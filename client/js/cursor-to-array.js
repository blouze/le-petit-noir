cursorToArray = function (cursor, data, createFn) {

	cursor.observe({
		addedAt: function (document, atIndex, before) {
			data.splice(atIndex, 0, createFn(document));
		},
		changedAt: function (newDocument, oldDocument, atIndex) {
			data[atIndex] = createFn(newDocument);
		},
		removedAt: function (oldDocument, atIndex) {
			data.splice(atIndex, -1);
		},
		movedTo: function (document, fromIndex, toIndex, before) {
			this.removedAt(undefined, fromIndex);
			this.addedAt(document, toIndex);
		}
	});
};