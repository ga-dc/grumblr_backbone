App.Models.Grumble = Backbone.Model.extend({
  urlRoot: 'http://grumblr.wdidc.org/grumbles',

  initialize: function () {
   this.comments = new App.Collections.Comments();
   this.comments.url = this.url() + '/comments';
 }
});
