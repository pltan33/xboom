xboom.Views.MovieList = Backbone.View.extend({
    template: '#movieDetailsTemplate',
    initialize: function() {
        this.movieDetails = new xboom.Collections.Movies();
        this.listenTo(this.movieDetails, 'reset add destroy change', this.render);
        this.movieDetails.fetch({reset: true});
        this.render();
    },
    render: function() {
        var compile = Handlebars.compile($(this.template).html());
        _.forEach(this.movieDetails.models, function(m) {
            var data = m.toJSON();
            console.log(data);
            this.$el.append(compile(data));
        },this);
        // var data = this.movieDetails.toJSON();
        return this;
    }
});

