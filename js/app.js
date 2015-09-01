App = {
	Models: {},
	Views: {},
	Collections: {},
	Routers: {}
}

$(document).ready(function() {
  grumbles = new App.Collections.Grumbles();
  grumbles.fetch({reset: true});

  listView = new App.Views.GrumbleList({collection: grumbles});
  grumbleCreateView = new App.Views.GrumbleCreate({collection: grumbles})

});
