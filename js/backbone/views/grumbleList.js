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
    var view = new GrumbleView({ model: grumble });
    this.$el.append(view.$el);
  }
});
