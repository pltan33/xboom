var Xboom = {};
Xboom.WebSocket = _.extend({
    connect: function(options) {
        _.bindAll(this);
        this._socket = new WebSocket(options.path);
        this._socket.onopen = this.onOpen;
        this._socket.onclose = this.onClose;
        this._socket.onmessage = this.onMessage;
    },
    disconnect: function() {
        this._socket.close();
    },
    onOpen: function() {
        this.trigger('socket:open');
    },
    onClose: function() {
        this.trigger('socket:closed');
    },
    onMessage: function(message) {
        var data = JSON.parse(message.data);

        this.trigger('socket:' + data.id, data);
    },
    send: function(message) {
        this._socket.send(message);
    }
}, Backbone.Events);
