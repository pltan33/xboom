/**
 * Xboom XBMC
 */

var xbmc = {};

xbmc.WebSocket = _.extend({
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


xbmc.Sync = _.extend({
    initialize: function() {
        _.bindAll(this);
        this.listenTo(xbmc.WebSocket, 'all', this.onMessage);
    },
    onMessage: function(e, data) {
        if (!data) {
            return false;
        }

        if (data.id == 'libMovies') {
            this.syncMovies(data);
        }
    },
    sync: function() {
        this.getMovies();
    },
    getMovies: function() {
        xbmc.WebSocket.send('{"jsonrpc": "2.0", "method": "VideoLibrary.GetMovies", "params": { "filter": {"field": "playcount", "operator": "is", "value": "0"}, "limits": { "start" : 0, "end": 75 }, "properties" : ["art", "rating", "thumbnail", "playcount", "file"], "sort": { "order": "ascending", "method": "label", "ignorearticle": true } }, "id": "libMovies"}');
    },
    syncMovies: function(data) {
        var movies = data.result.movies;
        localStorage.setItem(data.id, JSON.stringify(movies));
    }
}, Backbone.Events);

// Start XBMC Sync
xbmc.Sync.initialize();
xbmc.WebSocket.on('socket:open', function() { xbmc.Sync.sync(); });
