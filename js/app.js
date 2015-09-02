App = {
  Models: {},
  Views: {
    grumbleViews: []
  },
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  App.Collections.grumbles = new App.Collections.Grumbles();

  App.Views.listView = new App.Views.GrumbleList({collection: App.Collections.grumbles});
  App.Views.grumbleCreateView = new App.Views.GrumbleCreate({collection: App.Collections.grumbles});

  App.Collections.grumbles.fetch()
});
