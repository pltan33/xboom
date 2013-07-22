xboom.Views.Settings = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this);

        this.model = new xboom.Models.Settings();
        this.model.fetch({
            success: this.render
        });
    },
    render: function() {
        console.log('::render', this.model);
    }
});
