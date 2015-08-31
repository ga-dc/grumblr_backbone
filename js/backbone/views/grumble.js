GrumbleView = Backbone.View.extend({
  className: 'grumble',
  tagName: 'div',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#grumbleTemplate").html());
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});