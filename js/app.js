App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
	var grumbles = new App.Collections.Grumbles();
	var grumbleCreate = new App.Views.GrumbleCreate( {collection: grumbles} );
	var grumblesList = new App.Views.GrumblesList({ collection: grumbles });
	grumbles.fetch();
});