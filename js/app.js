App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
}

$(document).ready(function() {
  console.log("jq is working!");
  grumbles = new App.Collections.Grumbles();
  grumbles.fetch({reset: true});

  // listView = new App.Views.GrumbleList({collection: grumbles});
  // grumbleCreateView = new App.Views.GrumbleCreate({collection: grumbles})

});
