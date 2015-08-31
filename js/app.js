App = {
  Models: {},
  View: {},
  Collections: {}
};

$(document).ready(function() {
  console.log("JQ loaded!")
  
  grumbles = new App.Collections.Grumbles();
  grumbles.fetch({reset: true});

  // listView = new App.Views.GrumbleList({collection: grumbles});
  // grumbleCreateView = new App.Views.GrumbleCreate({collection: grumbles});
});