App.Routers.Grumblr = Backbone.Router.extend({
  routes:{
    '' : 'index',
    'new' : 'newGrumble',
    'grumbles/*path/edit' : 'editGrumble'
  },

  initialize: function(){
    App.Collections.grumbles = new App.Collections.Grumbles();
    App.Views.grumbleList = new App.Views.GrumbleList({collection: App.Collections.grumbles});
    App.Views.grumbleCreate = new App.Views.GrumbleCreate({collection: App.Collections.grumbles});
  },

  index: function(){
    App.Collections.grumbles.fetch({reset: true});
  },

  newGrumble: function(){
    App.Views.grumbleCreate.toggleForm()
  },

  editGrumble: function(id){
    grumbles= id.split("/")
    console.log(grumbles)
    App.Collections.grumbles.fetch().then(function() {
      views = App.Views.grumbleList.findView(grumbles);
      for(i=0;i<views.length;i++){
        views[i].renderEditForm();
      }
    });
  }


})
