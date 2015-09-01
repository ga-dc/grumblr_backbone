App.Views.Comment = Backbone.View.extend({
  className: 'comment', // the div should have a class comment
  tagName: 'div', // be explicit

  events: {
    'click .delete-comment': 'deleteComment', // Setup event click for delete comment
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render); // We want our model to be listened to, and if it changes, render the new view
    this.template = Handlebars.compile($("#commentTemplate").html()); // Set comment template
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON())); // .this refers to the view and .html will fill the div element the template
    //console.log("commment view is working")
  },

  deleteComment: function(){
    console.log("this model comment is ", this.model) // This function needs to be in the comment view, so it can recognize the specific comment
    this.model.destroy();
    this.$el.fadeOut();
  }


});
