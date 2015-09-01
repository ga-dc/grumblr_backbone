// App.Models.Grumble = Backbone.Model.extend({
//   // initialize: function(){
//   //   console.log("New grumble!")
//   // },

//   urlRoot: "http://localhost:3000/grumbles"
// });

App.Models.Grumble = Backbone.Model.extend({
  urlRoot: "http://localhost:3000/comments",
  initialize: function(){
    this.comments = new App.Collections.Comments();
    this.comments.url = this.url() + "/comments";
  }
});