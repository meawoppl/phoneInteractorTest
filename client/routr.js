Meteor.subscribe("all-interactors");

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  // Root URL. . . not used?
  this.route('default', {
    path: '/',
    template: 'home'
  });

  this.route("viewport", {
    path: "/viewport",
    template: "ViewPort",
    before: function () { /* TODO: Auth Check? */ },
  });

  this.route('interactor', {
    path: '/interact/:_id',
    template: "PhonePort",
    before: function () { 
      Meteor.call("tryQRLogin", this.params._id); 
    }
  });

});
	    