App.Views.Grumble = Backbone.View.extend({
  className: 'grumble',
  tagName: 'div',

  events: {
    'click .edit': 'renderEditForm',
    'click .cancel': 'render',
    'click .submit': 'updateGrumble',
    'click .delete': 'deleteGrumble'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);

    this.template = Handlebars.compile($("#grumbleTemplate").html());
    this.editTemplate = Handlebars.compile($("#grumbleFormTemplate").html());

    this.render();
  },

  render: function() {
    event.preventDefault();
    var self = this;
    this.$el.html(this.template(this.model.toJSON()));

    this.model.comments.fetch().then(function() {
      self.model.comments.models.forEach(function(comment) {
        var commentView = new App.Views.Comment({model: comment});
        self.$el.find(".comments").append(commentView.$el);
      });
    });
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
    this.model.save(data)
  },

  deleteGrumble: function(){
    var self = this;

    self.model.destroy();
    self.$el.fadeOut(function() { self.$el.remove(); });
  }
});
