App.Collections.Comments = Backbone.Collection.extend({
  initialize: function(){
    console.log("Created a new comments collection!")
  },
  model: App.Models.Comment
})