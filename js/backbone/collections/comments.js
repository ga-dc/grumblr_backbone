App.Collections.Comments = Backbone.Collection.extend({
  model: App.Models.Comment,
  url: "http://localhost:3000/grumbles"
})
