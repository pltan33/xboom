xboom.Models.Settings = Backbone.Model.extend({
	localStorage: new Backbone.LocalStorage('settings'),
	parse: function(d) {
		d = JSON.parse(localStorage.getItem('settings'));
		return d;
	}
});