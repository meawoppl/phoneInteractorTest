Template.qrWaiter.rendered = function() {
	qrCodeBaseURL = "http://phoneInteractorTest.meteor.com/interact/";
	qrUUID = Meteor.uuid();
	$('#qrcode').qrcode(qrCodeBaseURL + qrUUID);
};

Template.qrDisp.qrs =  function() {return Interactors.find()};
Template.qrDisp.rendered = function () {
	console.log("QRD Rendered");
};