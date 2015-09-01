App.Views.Grumble = Backbone.View.extend({
  className: 'grumble',
  tagName: 'div',

  events: {
    'click .edit': 'renderEditForm',
    'click .cancel': 'render',
    'click .submit': 'updateGrumble',
    'click .delete': 'deleteGrumble',
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model.comments, 'add', this.renderComment); // Render comments

    this.template = Handlebars.compile($("#grumbleTemplate").html());
    this.editTemplate = Handlebars.compile($("#grumbleFormTemplate").html());

    this.render();
  },

  render: function() {
    if(event) {
      event.preventDefault();
    }
    this.$el.html(this.template(this.model.toJSON()));
  },

  renderEditForm: function(){
    this.$el.html(this.editTemplate(this.model.toJSON()));
  },

  updateGrumble: function() {
    event.preventDefault();
    var data = {
      title: this.$("[name='title']").val(),
      authorName: this.$("[name='authorName']").val(),
      content: this.$("[name='content']").val(),
      photoUrl: this.$("[name='photoUrl']").val()
    }
    this.model.save(data);
    this.render();
  },

  deleteGrumble: function(){
    this.model.destroy();
    this.$el.fadeOut();
  },

  renderComment: function(comment) {
    console.log("render comment method is trying")
    var commentView = new App.Views.Comment({model: comment});
    this.$el.find(".comments").append(commentView.$el);
  }

});
