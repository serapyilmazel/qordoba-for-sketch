@import 'api.js'

var onRun = function (context) {
	qordobaSDK.common.init(context);
 	if(utils.checkLastVersionChecked(context) == true){
		fireUpdate(context,false);
 	}

 	if (qordobaSDK.common.token == false) {
		fireLoginWindowWithContext(context)
	} else {
		fireUploadForm(0, context)
	}
}