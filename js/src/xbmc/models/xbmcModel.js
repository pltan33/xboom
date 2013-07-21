var xbmcModel = Backbone.Model.extend({
	url: 'http://192.168.2.2:8080/jsonrpc?request={%22jsonrpc%22:%20%222.0%22,%20%22method%22:%20%22VideoLibrary.GetMovies%22,%20%22params%22:%20{%20%22filter%22:%20{%22field%22:%20%22playcount%22,%20%22operator%22:%20%22is%22,%20%22value%22:%20%220%22},%20%22limits%22:%20{%20%22start%22%20:%200,%20%22end%22:%2075%20},%20%22properties%22%20:%20[%22art%22,%20%22rating%22,%20%22thumbnail%22,%20%22playcount%22,%20%22file%22],%20%22sort%22:%20{%20%22order%22:%20%22ascending%22,%20%22method%22:%20%22label%22,%20%22ignorearticle%22:%20true%20}%20},%20%22id%22:%20%22libMovies%22}',
	parse: function(x) {
		console.log(x);
	}
});

Backbone.emulateHTTP = true;

var xbmc = new xbmcModel();

xbmc.on('all', function(e) {
	// console.log(e);
});


xbmc.fetch({
	dataType: 'jsonp',
	crossDomain:true,
	parse: true,
	success: function() {
		// console.log(xbmc);
	},
	error: function(e, a) {
		// console.log(a);
		// console.log(a.getResponseHeader());
	}
});