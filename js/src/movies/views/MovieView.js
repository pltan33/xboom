xboom.Views.Movie = Backbone.View.extend({
    className: 'Movie view',
    template: xboom.Templates['js/src/movies/templates/MovieTemplate.html'],
    events: {
        'click .js-info': 'onInfo',
        'click .js-back': 'onBack',
        'click .js-play': 'onPlay',
        'click .js-remote': 'onRemote'
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
    onBack: function(e) {
        e.preventDefault();
        var _this = this;
        app.remove(this, function() {
            _this.remove();
        });
    },
    onPlay: function() {
        xbmc.Controls.open(this.model.toJSON());
    },
    onRemote: function() {
        console.log('snowy');
        var remoteControl = new xboom.Views.RemoteControl({});
    }
});

