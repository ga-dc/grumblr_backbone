App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}   //not sure what this is, but it's in the 'comments' branch, which i think is the branch for this night's hw solution?
};


$(document).ready(function() {
  var grumbles = new App.Collections.Grumbles();
  grumbles.fetch({reset: true});

  // for debugging in the console
  App.Collections.grumbles = grumbles;

  var listView = new App.Views.GrumbleList({collection: grumbles});
  var grumbleCreateView = new App.Views.GrumbleCreate({collection: grumbles});
});
