App.Models.Grumble = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/grumbles',
  defaults: { posts: [] },

  initialize: function () {
   var self = this;
   this.comments = new App.Collections.Comments(this.get('comments'));
   this.comments.url = function () {
       return self.url() + '/comments';
   };
   this.comments.fetch();
 }
});
