App.Router.Grumbles = Backbone.Router.extend({
  routes: {
    '': 'index',
    'grumbles/new': 'newGrumble',
    'grumbles/:id/edit': 'editGrumble'
  },
  initialize: function() {
    console.log('New Router!');
    App.Collections.grumbles = new App.GrumbleCollection();
    App.Views.grumbleListView = new App.GrumbleListView({collection: App.Collections.grumbles});
    App.Views.grumbleFormView = new App.GrumbleFormView({collection: App.Collections.grumbles});
  }

})
