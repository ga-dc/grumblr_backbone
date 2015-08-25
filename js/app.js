App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
}

$(document).ready(function() {
  var grumbles = new App.Collections.Grumbles();
  grumbles.fetch({reset: true});

  App.Collections.grumbles = grumbles;

  var listView = new App.Views.GrumbleList({collection: grumbles});
  var grumbleCreateView = new App.Views.GrumbleCreate({collection: grumbles});
});
