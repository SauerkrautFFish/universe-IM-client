window.app = {
	
	serverUrl : "http://127.0.0.1:8068",
	
	USERINFO: "userInfo",
	TIMEOUTVAL: 5000,//超时时间
	WAITTIME: 4,
	SALT: 'chqm-uftg*498.aa81@1',
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
		plus.storage.setItem(key",valueStr);
	},
	
	getGlobalCache: function(key){
		var value = plus.storage.getItem(key);
		return JSON.parse(value);
	}
}
