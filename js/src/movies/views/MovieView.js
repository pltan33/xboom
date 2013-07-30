xboom.Views.Movie = Backbone.View.extend({
    className: 'Movie view',
    template: xboom.Templates['js/src/movies/templates/MovieTemplate.html'],
    events: {
        'click .js-info': 'onInfo',
        'click .js-back': 'onBack',
        'click .js-play': 'onPlay'
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        xboom.LayoutManager.add(this);
        return this;
    },
    onInfo: function(e) {
        var movieInfo = new xboom.Views.MovieInfo({model: this.model});
    },
    onBack: function(e) {
        e.preventDefault();
        var _this = this;
        xboom.LayoutManager.remove(this, function() {
            _this.remove();
        });
    },
    onPlay: function() {
        xbmc.Controls.play();
    }
});

