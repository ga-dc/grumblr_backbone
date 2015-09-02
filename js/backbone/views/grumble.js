App.Views.Grumble = Backbone.View.extend({
	className: "grumble",

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
		this.listenTo(this.model.comments, "add", this.renderComment);

		this.template = Handlebars.compile( $("#grumbleTemplate").html() );
		this.editTemplate = Handlebars.compile( $("#grumbleFormTemplate").html() );
		this.render();
	},

	render: function() {
		this.$el.html( this.template(this.model.attributes) );
	},

	renderComment: function() {
		var commentView = new App.Views.Comment({model: comment});
		this.$el.find(".comment").append(commentView.$el);
	}

	renderEditForm: function() {
		this.$el.html( this.editTemplate(this.model.attributes) );
	},

	events: {
		'click .edit': 'renderEditForm',
		'click .cancel': 'render',
		'click .delete': 'deleteGrumble',
		'click .submit': 'updateGrumble',
		'click .submitComment': 'createComment'
	},

	deleteGrumble: function() {
		this.model.destroy();
		this.$el.fadeOut();
	},

	updateGrumble: function(event) {
		event.preventDefault();
		info = {
			title: this.$( "input[name='title']" ).val(),
			authorName: this.$( "input[name='authorName']" ).val(),
			content: this.$( "input[name='content']" ).val(),
			photoUrl: this.$( "input[name='photoUrl']" ).val()
		}
		this.model.save(info)
	},

	createComment: function(event) {
		event.preventDefault();
		info = {
			authorName: this.$( "input[name='commentAuthor']" ).val(),
			content: this.$( "input[name='commentContent']" ).val()
		}
		this.model.comments.create(info);
		this.model.comments.$el.find("input").val("");
	}
});