App.Views.Comment = Backbone.View.extend({
  tagName: "div",
  className: "comment",

  initialize: function(){
    console.log("new comment view initialized");
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#commentTemplate").html());
    this.renderComment();
  },

  renderComment: function(){
    if(event) {
      event.preventDefault();
    }
    this.$el.html(this.template(this.model.toJSON()));
    console.log(this.$el);
  }


})
