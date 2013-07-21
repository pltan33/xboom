var movieDetailsModel = Backbone.Model.extend({

});

var moviesDetailCollection = Backbone.Collection.extend({

    url: 'http://api.themoviedb.org/3/discover/movie?api_key=3fd368493f319457e264c78df906f5ad&with_genres=35&release_date.gte=2013-01-06',
    model: movieDetailsModel,
    parse: function(movieData) {
        // console.log('::collection', movieData.results);
        return movieData.results;
    }

});

var movieDetailsView = Backbone.View.extend({

    template: '#movieDetailsTemplate',

    initialize: function() {
        this.movieDetails = new moviesDetailCollection();
        this.listenTo(this.movieDetails, 'reset add destroy change', this.render);
        this.movieDetails.fetch({reset: true});
        this.render();
    },

    render: function() {
        var compile = Handlebars.compile($(this.template).html());
        _.forEach(this.movieDetails.models, function(m) {
            var data = m.toJSON();
            console.log(data);
            this.$el.append(compile(data));
        },this);
        // var data = this.movieDetails.toJSON();
        return this;
    }

});

$(document).ready(function() {
    var xboomApp = new movieDetailsView();
    $('body').append(xboomApp.el);
});

