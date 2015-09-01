App.Views.GrumbleList = Backbone.View.extend({
  el: '#grumbles',

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
    this.$el.prepend(view.$el);
  }
});
