xboom.Views.RemoteControl = Backbone.View.extend({
    className: 'RemoteControl view',
    template: xboom.Templates['js/src/remoteControl/templates/RemoteControlTemplate.html'],
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
        app.add(this);
        return this;
    },
    onRight: function() {
        xbmc.Controls.navigate('Right');
    },
    onUp: function() {
        xbmc.Controls.navigate('Up');
    },
    onLeft: function() {
        xbmc.Controls.navigate('Left');
    },
    onDown: function() {
        xbmc.Controls.navigate('Down');
    }
});