xboom.Views.Settings = Backbone.View.extend({
    className: 'Settings view',
    template: xboom.Templates['js/src/settings/templates/SettingsTemplate.html'],
    events: {
        'click .js-cancel': 'onCancel'
    },
    initialize: function() {
        _.bindAll(this);

        this.model = new xboom.Models.Settings();
        this.model.fetch({
            success: this.render
        });
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    onCancel: function(e) {
        e.preventDefault();
    }
});
