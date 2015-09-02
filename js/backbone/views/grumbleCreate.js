GrumbleCreateView = Backbone.View.extend({
  el: '#createGrumble',

  events: {
    'click .new': 'toggleForm',
    'click .cancel': 'toggleForm'
    'click .submit': 'createGrumble'
  },

  initialize: function(){
    this.template = Handlebars.compile($("#grumbleFormTemplate").html());
    this.$(".formContainer").html(this.template({}));
    this.$(".formContainer").hide();
  },

  toggleForm: function(){
    if(this.$('.toggle-form').text() === "New Grumble") {
      this.$('.toggle-form').text("Hide Form");
    } else {
      this.$('.toggle-form').text("New Grumble");

    }
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
  }

});

//boom
