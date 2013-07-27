xboom.LayoutManager = _.extend({
    initialize: function() {
        this.$el = $('body');
        this._views = [];
        this._pos = 1;
    },
    add: function(view) {
        if (!this.viewExists(view)) {
            var i = this._views.push(view);
            this.$el.find('.region-' + i).append(view.el).css('display', 'block');

            var _this = this;
            setTimeout(function() {
                _this.updatePos();    
            }, 0);
            

            if (i > 1) {
                var _this = this;
                setTimeout(function() {
                    _this.$el.find('.region-' + (i-1)).css('display', 'none');
                }, 310);
            }
        }
    },
    remove: function(view, callback) {
        this._views.pop();
        var l = this._views.length;

        this.$el.find('.region-' + l).css('display', 'block');

        var _this = this;
        setTimeout(function() {
            _this.updatePos();    
        }, 0);
        
        setTimeout(function() {
            _this.$el.find('.region-' + (l+1)).css('display', 'none');
            if (callback) {
                callback();
            }
        }, 310);
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
