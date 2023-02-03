window.app = {
	
	serverUrl : "http://127.0.0.1:8068",
	
	isNotNull: function(str) {
		if (str != null && str != "" && str != undefined) {
			return true;
		}
		return false;
	},
	
	validEmail: function(email) {
		var regexp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		return regexp.test(email);
	}
}
