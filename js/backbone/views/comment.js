App.Views.Comment = Backbone.View.extend({
  className: 'comment',
  tagName: 'div',

  initialize: function(){
    this.listenTo(this.model, 'add', this.renderOne);
    this.template = Handlebars.compile($("#commentTemplate").html());
    this.render();
  },
  renderOne: function(comment){
    var view = new App.Views.Comment ({model: comment});
    this.$el.prepend(view.$el);
  }
});
