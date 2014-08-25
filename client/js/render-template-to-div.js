renderTemplateToDiv = function (template, data) {
	var div = document.createElement('div');
	UI.insert(data ? UI.renderWithData(template, data) : UI.render(template), div);
	return div;
}