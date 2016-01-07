App = {
  Models: {},
  Views: {
    grumbleViews: []
  },
  Collections: {},
  Routers:{}
};

$(document).ready(function() {
  App.Routers.grumblr = new App.Routers.Grumblr();
  Backbone.history.start()
  //grumbles = new App.Collections.Grumbles();
  //grumbles.fetch({reset: true});

//  listView = new App.Views.GrumbleList({collection: grumbles});
//  grumbleCreateView = new App.Views.GrumbleCreate({collection: grumbles});
});
