App.Views.GrumbleCreate = Backbone.View.extend({
	el: "#createGrumble",

	events: {
		'click .new':    'toggleForm',
		'click .cancel': 'toggleForm',
		'click .submit': 'createGrumble'
	},

	initialize: function() {

		this.template = Handlebars.compile( $("#grumbleFormTemplate").html() );

		this.$(".formContainer").html( this.template({}) );
		this.$(".formContainer").hide();
	},

	toggleForm: function() {
		this.toggleButton(this.$(".new").text());
		event.preventDefault();
		this.$(".formContainer").slideToggle();
	},

	toggleButton: function(state) {
		if(state === "New Grumble") {
			this.$(".new").text("Hide Form")
		} else {
			this.$(".new").text("New Grumble")
		}
	},

	createGrumble: function() {
		event.preventDefault();
		info = {
			title: this.$( "input[name='title']" ).val(),
			authorName: this.$( "input[name='authorName']" ).val(),
			content: this.$( "input[name='content']" ).val(),
			photoUrl: this.$( "input[name='photoUrl']" ).val()
		}
		this.collection.create(info);

		this.$el.find("input, textarea").val("");
		this.toggleForm();
	}
});