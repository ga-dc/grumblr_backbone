App.Views.GrumbleCreate = Backbone.View.extend({
  el: '#newGrumble',

  events: {
      "click .new": "renderNewForm",
      "click .cancel": "renderNewForm",
      "click .create": "createGrumble"
    },

    initialize: function(){
      this.template = Handlebars.compile($("#grumbleFormTemplate").html());
      this.$(".formContainer").html(this.template({}));
      this.$(".formContainer").hide();
    },

    renderNewForm: function(){
      console.log("Button clicked.")
      this.$(".formContainer").slideToggle();
      // this.$el.html(this.template({}))
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
