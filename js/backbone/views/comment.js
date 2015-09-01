App.Views.Comment = Backbone.View.extend({
  className: 'comment', // the div should have a class comment
  tagName: 'div', // be explicit

  events: {
    // click events will go here
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render); // We want our model to be listened to, and if it changes, render the new view

    this.template = Handlebars.compile($("#commentTemplate").html());

    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    console.log("commment view is working")
  }

});
