xboom.Views.RemoteControl = Backbone.View.extend({
    className: 'RemoteControl view',
    template: xboom.Templates['js/src/movies/templates/RemoteControlTemplate.html'],
    events: {
        'click .js-right': 'onRight',
        'click .js-up': 'onUp',
        'click .js-left': 'onLeft',
        'click .js-down': 'onDown'
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());
        xboom.LayoutManager.add(this);
        return this;
    },
    onRight: function() {
        console.log('you clicked right');
    },
    onUp: function() {
        console.log('you clicked up');
    },
    onLeft: function() {
        console.log('you clicked left');
    },
    onDown: function() {
        console.log('you clicked down');
    }
});