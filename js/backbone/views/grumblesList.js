App.Views.GrumblesList = Backbone.View.extend({

	el: "#grumbles",

  initialize: function(){
  	this.listenTo(this.collection, "reset", this.renderAll);
  	this.listenTo(this.collection, "add", this.renderOne);
  },

  renderOne: function(grumble) {
  	var grumbleView = new App.Views.Grumble({model: grumble});
  	this.$el.prepend( grumbleView.$el );
  },

  renderAll: function() {
   	this.$el.empty();
   	this.collection.each( this.renderOne.bind(this) );
  }

});