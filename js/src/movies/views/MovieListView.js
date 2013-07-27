xboom.Views.MovieList = Backbone.View.extend({
    className: 'MovieList view',
    template: xboom.Templates['js/src/movies/templates/MovieListTemplate.html'],
    events: {
        'click .js-settings': 'onSettings',
        'click .js-movie': 'onMovieSelected'

    },
    initialize: function() {
        this.collection = new xboom.Collections.Movies();
        this.listenTo(this.collection, 'reset add destroy change', this.render);
        this.collection.fetch({reset: true});
    },
    render: function() {
        var data = {};
        data.models = this.collection.toJSON();
        this.$el.html(this.template(data));
        return this;
    },
    onSettings: function(e) {
        e.preventDefault();
        xboom.LayoutManager.showSettings();
    },

    onMovieSelected: function(e) {
        var movieid = this.$(e.currentTarget).attr('data-movieid');
        var movieData = _.find(this.collection.models, function(m) {
            if (m.get('movieid') == movieid) {
                return true;
            }
            return false;
        });

        var movie = new xboom.Views.Movie({model: movieData});
    }
});

