// Make Subscription To Shared Data
getCurrentActivity = SharedState.findOne({});

// Viewport (side 1 of our pair)
Template.ViewPort.helpers({
	content: function(data){
		return "I Am The View Port";
	}
});

// Phoneport (side 2 of the pair)
Template.PhonePort.helpers({
	content: function(data){
		return "I am the Phone Port";
	}
});