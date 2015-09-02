App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  console.log("JQ loaded!");
  
  grumbles = new App.Collections.Grumbles();
  grumbles.fetch({reset: true});

  new App.Views.GrumbleCreate({collection: grumbles})
  new App.Views.GrumbleList({collection: grumbles});
});