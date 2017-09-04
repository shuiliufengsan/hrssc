
cordova.define("cordova/plugins/PgmediaPlayer", 
  function(require, exports, module) {
    var exec = require("cordova/exec");
    var PgmediaPlayer = function() {};
     
	  PgmediaPlayer.prototype.vplay = function(url,successCallback, errorCallback) {
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("PgmediaPlayer failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("PgmediaPlayer failure: success callback parameter must be a function");
            return
        }
    
        exec(successCallback, errorCallback, 'PgmediaPlayer', 'vplay', [url]);
    };
	
    var PgmediaPlayer = new PgmediaPlayer();
    module.exports = PgmediaPlayer;

});

  
if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.PgmediaPlayer) {
    window.plugins.PgmediaPlayer = cordova.require("cordova/plugins/PgmediaPlayer");
}

 