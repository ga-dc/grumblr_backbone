App.Views.Grumble = Backbone.View.extend({
  className: 'grumble',
  tagName: 'div',

  events: {
    'click .edit': 'renderEditForm',
    'click .cancel': 'render',
    'click .submit': 'updateGrumble',
    'click .delete': 'deleteGrumble',

    'click .submit-comment': 'createComment', // Setup event click for comment form

  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model.comments, 'add', this.renderComment); // Listen to the comments collection and anytime a comment is added, render the comment

    this.template = Handlebars.compile($("#grumbleTemplate").html());
    this.editTemplate = Handlebars.compile($("#grumbleFormTemplate").html());

    this.createCommentTemplate = Handlebars.compile($('#commentTemplate').html());

    this.render();
  },

  render: function() {
    if(event) {
      event.preventDefault();
    }
    this.$el.html(this.template(this.model.toJSON()));

    this.model.comments.fetch(); // The magic to get all comments of this grumble
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
    this.$el.find(".comments").append(commentView.$el); // Append to the comments div in the index
  },

  createComment: function(){ // The comment will go into a grumble so it needs to be created on this view
    event.preventDefault();

    var data = {
      authorName: this.$("[name='authorName']").val(),
      content: this.$("[name='content']").val(),
    }

    this.model.comments.create(data); // The magic to get the comment to post to the specific grumble

    console.log("create comment click working")
  },

});
