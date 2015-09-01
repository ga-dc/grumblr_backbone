App.Models.Grumble = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/grumbles',
  
  initialize: function() {
  	this.comments = new App.Models.Comments();
  	this.comments.url = this.url() + "/comments";
  }
});

// urlRoot: "http://grumblr.wdidc.org/grumbles",