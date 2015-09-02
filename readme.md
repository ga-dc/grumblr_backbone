# Grumblr Backbone - HW#2 - Views

## Goal

Your goal for tonight is to implement views for **showing** and **creating** comments. To do so, you'll take advantage of the comments collection and models that you created last night.

### User Stories

* As a user, I want to see a list of comments at the bottom of each grumble,
so I can see what others have to say about a grumble.
* As a user, I want to be able to post a new comment on a grumble using a form that's always visible under each grumble, so that I can share my feelings.

At a minimum:

* You should use Handlebars templates to render comments
* You should create at least 1 new BB view constructor

## Starter Code

Starter code is available on this branch.

## Hints

Feel free to attempt tonight's homework with or without any of the hints below:

### Showing Comments

1. You'll definitely want a comment view ('item view').
  * That comment view should render it's associated model comment using a template
2. You'll probably want a new `div` for comments in your grumble 'show' template.
  * This is so you have a place to append comments to each grumble.
  * You'll probably want to give it a meaningful class, like `.comments`
3. To show comments, you'll want to do a few things in your grumble view:
  * When you initialize a grumble's view, fetch the model's comments
  * `this.model.comments.fetch()`
  * You can then get those comments into the `.comments` div by either:
    * using event listeners for `add` events on the collection `this.model.comments` (in conjuction with a method to renderOne Comment)
    * or you can iterate over `this.model.comments.each`
  * either way, you'll want to instantiate a Comment View for each comment and append the `el` for that view into the '.comments' div

### Creating Comments

1. The form to create a new comment should live in the Grumble 'show' view.
  * You don't have to worry about toggling the comment for visible/invisible (Keep it simple)
2. Most of the functionality for creating comments can be handled in the Grumble View (no need to make a separate Comment Create View)
  * keep in mind you can call create on a collection (e.g. `this.model.comments.create(some_comment_data)`)

## Bonus

## Sorting Grumbles

Implement sorting for grumbles in the collection view (by title, authorName, etc). Hint: Lookup the `comparator` property and `sort()` functions for collections.

## Update / Delete Comments

Implement edit / update / destroy for comments.
