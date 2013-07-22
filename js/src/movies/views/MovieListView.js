xboom.Views.MovieList = Backbone.View.extend({
    template: xboom.Templates['js/src/movies/templates/MovieListTemplate.html'],
    initialize: function() {
        this.movieDetails = new xboom.Collections.Movies();
        this.listenTo(this.movieDetails, 'reset add destroy change', this.render);
        this.movieDetails.fetch({reset: true});
        this.render();
    },
    render: function() {
        _.forEach(this.movieDetails.models, function(m) {
            var data = m.toJSON();
            // console.log('::render', data);
            this.$el.append(this.template(data));
        },this);
        // var data = this.movieDetails.toJSON();
        return this;
    }
});

