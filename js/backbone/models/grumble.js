App.Models.Grumble = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/grumbles',
  initialize: function(){
    this.comments = new Comments();
    this.comments.url = this.url() + "/comments";
  }
});
