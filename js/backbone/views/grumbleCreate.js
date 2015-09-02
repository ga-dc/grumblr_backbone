App.Views.GrumbleCreate = Backbone.View.extend({
  el: "#createGrumble",

  events: {
    'click .new':    'toggleForm',
    'click .cancel': 'toggleForm',
    'click .submit': 'createGrumble',
    'click .commentForm button': 'createComment'
  },

  initialize: function(){
    this.template = Handlebars.compile($("#grumbleFormTemplate").html());

    this.$(".formContainer").html(this.template({}));
    this.$(".formContainer").hide();
  },

  toggleForm: function(){
    event.preventDefault();
    this.$(".formContainer").slideToggle();
  },

  createGrumble: function(){
    event.preventDefault();
    var data = {
      title: this.$("[name='title']").val(),
      authorName: this.$("[name='authorName']").val(),
      content: this.$("[name='content']").val(),
      photoUrl: this.$("[name='photoUrl']").val()
    }
    this.collection.create(data);

    this.$el.find("input, textarea").val("");
    this.toggleForm();
  },

  renderComment: function(comment) {
    var commentView = new App.Views.Comment({model: comment});
    this.$el.find(".comments").append(commentView.$el);
  },

  createComment: function(){
    event.preventDefault();
    var data = {
      authorName: this.$("[name='authorName']").val(),
      content: this.$("[name='content']").val()
    }
    this.model.comments.create(data);
  }
});
