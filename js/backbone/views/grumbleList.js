App.Views.GrumbleList = Backbone.View.extend({
  el: '#grumbles',
  views: [],

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },

  renderOne: function(grumble) {
    var view = new App.Views.Grumble({ model: grumble });
    this.views.push(view);
    this.$el.prepend(view.$el);
  },

  findView: function(idArray){
    var views = []
    for(var j=0;j<idArray.length;j++){
      for(var i=0;i<this.views.length;i++){
        if (this.views[i].model.get("id") == idArray[j]) {
          views.push(this.views[i])
          break
        }
      }
    }
    return views
  }
});
