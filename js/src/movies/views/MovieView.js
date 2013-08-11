xboom.Views.Movie = Backbone.View.extend({
    className: 'Movie view',
    template: xboom.Templates['js/src/movies/templates/MovieTemplate.html'],
    events: {
        'click .js-info': 'onInfo',
        'click .js-remote': 'onRemote',
        'click .js-play': 'onPlay'
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        app.add(this);
        return this;
    },
    onInfo: function(e) {
        var movieInfo = new xboom.Views.MovieInfo({model: this.model});
    },
    onPlay: function() {
        xbmc.Controls.open(this.model.toJSON());
    },
    onRemote: function() {
        var remoteControl = new xboom.Views.RemoteControl({});
    }

});

