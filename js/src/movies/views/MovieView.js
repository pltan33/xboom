xboom.Views.Movie = Backbone.View.extend({
    template: xboom.Templates['js/src/movies/templates/MovieTemplate.html'],
    initialize: function() {
        console.log(this.model.toJSON());
        this.render();
    },
    render: function() {
        return this;
    }
});

