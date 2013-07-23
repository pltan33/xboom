xboom.Views.Movie = Backbone.View.extend({
    template: xboom.Templates['js/src/movies/templates/MovieTemplate.html'],
    initialize: function() {
        this.movie = new xboom.Collections.Movies();
        // this.listenTo(this.movie, 'reset add destroy change', this.render);
        this.movie.fetch({reset: true});
        this.render();
    },
    render: function() {
        _.forEach(this.movie.models, function(m) {
            var data = m.toJSON();
            console.log('::render', data);
            this.$el.append(this.template(data));
        },this);
        // var data = this.movieDetails.toJSON();
        // console.log('::render', data);
        // this.$el.append(this.template(data));
        return this;
    }
});

