xboom.Views.MovieInfo = Backbone.View.extend({
    className: 'MovieInfo view',
    template: xboom.Templates['js/src/movies/templates/MovieInfoTemplate.html'],
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        app.add(this);
        return this;
    }
});

