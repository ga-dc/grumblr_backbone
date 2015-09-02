App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  grumbles = new GrumblesCollection();
  grumbles.fetch({reset: true});

  listView = new GrumbleListView({collection: grumbles});
  grumbleCreateView = new GrumbleCreateView({collection: grumbles})

});
