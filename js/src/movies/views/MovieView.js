xboom.Views.Movie = Backbone.View.extend({
    template: xboom.Templates['js/src/movies/templates/MovieTemplate.html'],
    initialize: function() {
        // console.log(this.model.toJSON());
        this.render();
    },
    render: function() {
        var data = this.model.toJSON();
        this.$el.html(this.template(data));
        console.log(data);
        xboom.LayoutManager.add(this);
        return this;
    }
});

