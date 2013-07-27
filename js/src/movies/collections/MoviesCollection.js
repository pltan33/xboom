xboom.Collections.Movies = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('libMovies'),
    model: xboom.Models.Movie,
    parse: function() {
        return JSON.parse(localStorage.getItem('libMovies'));
    }
});