SoleUserCollection = new Meteor.Collection("SoleUserCollection");
InteractorVars     = new Meteor.Collection("InteractorVars");

Meteor.publish(null, function() {
	return SoleUserCollection.find();
});

Meteor.publish("interaction", function(sessionUUID) {
	InteractorVars.remove();
	
});
