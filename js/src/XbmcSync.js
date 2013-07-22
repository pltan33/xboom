var xbmc = {};

xbmc.Sync = _.extend({
    initialize: function() {
        _.bindAll(this);
        this.listenTo(Xboom.WebSocket, 'all', this.onMessage);
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
        Xboom.WebSocket.send('{"jsonrpc": "2.0", "method": "VideoLibrary.GetMovies", "params": { "filter": {"field": "playcount", "operator": "is", "value": "0"}, "limits": { "start" : 0, "end": 75 }, "properties" : ["art", "rating", "thumbnail", "playcount", "file"], "sort": { "order": "ascending", "method": "label", "ignorearticle": true } }, "id": "libMovies"}');
    },
    syncMovies: function(data) {
        var movies = data.result.movies;
        localStorage.setItem(data.id, JSON.stringify(movies));
    }
}, Backbone.Events);

// Start XBMC Sync
xbmc.Sync.initialize();
Xboom.WebSocket.on('socket:open', function() { xbmc.Sync.sync(); });
