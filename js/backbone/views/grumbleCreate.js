GrumbleCreateView = Backbone.View.extend({
  el: '#newGrumble',

  events: {
    'click .toggle-form': 'toggleForm',
    'click .create': 'createGrumble'
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
  }

});