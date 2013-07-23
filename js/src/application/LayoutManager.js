xboom.LayoutManager = _.extend({
    initialize: function() {
        this.$el = $('body');
        this._views = [];
        this._pos = 1;
    },
    add: function(view) {
        if (!this.viewExists(view)) {
            var i = this._views.push(view);
            console.log(i);
            this.$el.find('.region-' + i).append(view.el);
            this.updatePos();
        }
    },
    remove: function(view) {
        this._views.pop();
        this.updatePos();
    },
    viewExists: function(view) {
        var exists = _.find(this._views, function(v) {
            return v.cid == view.cid;
        });

        return exists ? true : false;
    },
    updatePos: function() {
        var pos = this._views.length;
        if (pos != this._pos) {
            this.$el.removeClass('pos-' + this._pos).addClass('pos-' + pos);
            this._pos = pos;
        }
    },
    showSettings: function() {
        this.$el.removeClass('pos-' + this._pos).addClass('pos-0');
    },
    hideSettings: function() {
        this.$el.addClass('pos-' + this._pos).removeClass('pos-0');
    }
}, Backbone.Events);
