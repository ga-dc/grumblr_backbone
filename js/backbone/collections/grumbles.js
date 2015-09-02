App.Collections.Grumbles = Backbone.Collection.extend({
  model: App.Models.Grumble,
  url: "http://grumblr.wdidc.org/grumbles"
});
