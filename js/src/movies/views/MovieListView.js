xboom.Views.MovieList = Backbone.View.extend({
    className: 'MovieList view',
    template: xboom.Templates['js/src/movies/templates/MovieListTemplate.html'],
    initialize: function() {
        this.collection = new xboom.Collections.Movies();
        this.listenTo(this.collection, 'reset add destroy change', this.render);
        this.collection.fetch({reset: true});
    },
    render: function() {
        var m = this.collection.models[0];

        this.$el.append(this.template(m));

        return this;
    }
});

