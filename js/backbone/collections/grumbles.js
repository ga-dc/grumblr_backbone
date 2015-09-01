App.Collections.Grumbles = Backbone.Collection.extend({
	initialize: function() {
		console.log("Created a new comments collection!")
	},
	model: App.Models.Grumble,
	url: "http://localhost:3000/grumbles"
})
