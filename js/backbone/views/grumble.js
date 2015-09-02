App.Views.Grumble = Backbone.View.extend({

  className: 'grumble',
  tagName: 'div',


  events: {
    'click .edit': 'renderEditForm',
    'click .cancel': 'render',
    'click .submit': 'updateGrumble',
    'click .delete': 'deleteGrumble',
    'click .commentForm button': 'createComment'
  },


  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model.comments, 'add', this.renderComment);

    this.template = Handlebars.compile($("#grumbleTemplate").html());
    this.editTemplate = Handlebars.compile($("#grumbleFormTemplate").html());

    this.render();
  },


  render: function() {
    event.preventDefault();
    this.$el.html(this.template(this.model.toJSON()));

    this.model.comments.fetch();
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
    };
    this.model.save(data);
  },


  deleteGrumble: function(){
    this.model.destroy();
    this.$el.fadeOut();
  },


  renderComment: function(comment) {
    var commentView = new App.Views.Comment({model: comment});
    this.$el.find(".comments").append(commentView.$el);
  },


  createComment: function(e){
    e.preventDefault();
    var data = {
      authorName: this.$("[name='authorName']").val(),
      content: this.$("[name='content']").val()
    };
    this.model.comments.create(data);
  }


});
