Meteor.subscribe("all-interactors");

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
  this.route('default', {
    path: '/',
    template: 'home'
  });

  /**
   * The route's name is "posts"
   * The route's path is "/posts"
   * The route's template is inferred to be "posts"
   */
  this.route('interactor', {
    path: '/interact/:_id',
    load: function () {
      // called on first load
      console.log(this.params._id);
      var timeInMs = (new Date).getTime();
      Interactors.insert({_id: this.params._id, time: timeInMs})
    }
  });
});
	    