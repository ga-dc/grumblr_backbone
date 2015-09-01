App.Collections.Grumbles = Backbone.Collection.extend({
  // initialize:function(){
  //   console.log("Created a new grumbles collection.")
  // },

  model: App.Models.Grumble,
  url: "http://localhost:3000/grumbles"
});