window.app = {
	
	serverUrl : "https://127.0.0.1:8080",
	
	USERINFO: "userInfo",
	TIMEOUTVAL: 5000,//超时时间
	WAITTIME: 4,
	SALT: 'chqm-uftg*498.aa81@1',
	ACC_TOKEN: "ACCESS_TOKEN",
	isNotNull: function(str) {
		if (str != null && str != "" && str != undefined) {
			return true;
		}
		return false;
	},
	
	validEmail: function(email) {
		var regexp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		return regexp.test(email);
	},
	
	setGlobalCache: function(key, value){
		var valueStr = JSON.stringify(value);
		window.localStorage.setItem(key, valueStr);
	},
	
	getGlobalCache: function(key){
		var value = window.localStorage.getItem(key);
		return JSON.parse(value);
	}
}
