// Make Subscription To Shared Data
// getCurrentActivity = SharedState.findOne({});

Template.QRCodeDisplay.rendered = function() {
	Meteor.call("getQRUUID", function (err, result) {
		var url = "http://phoneInteractorTest.meteor.com/interact/" + result;
		$('#qrcode').qrcode(url);
	});
};

Template.QRDump.siJSON = function() {
	return JSON.stringify(SoleUserCollection.findOne());
}

Template.ViewPort.content = function(data) {
	return Template["QRDiagnostic"](data);
};

Template.PhonePort.content = function(data){
	return Meteor.render(data.currentTemplate);
}
