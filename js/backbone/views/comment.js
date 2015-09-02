App.Views.Comment = Backbone.View.extend ({
  className: 'comment',
  tagName: 'div',
  events: {
    'click .deleteComment': 'commentDelete'
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#commentTemplate").html());
      this.render();
  },
  render: function() {
    if(event) {
      event.preventDefault();
    }
    this.$el.html(this.template(this.model.toJSON()));
  },
  commentDelete: function(){
    this.model.destroy();
    this.$el.fadeOut();
  }
})
