cordova.define("cordova/plugins/Pgbaidulogin", 
  function(require, exports, module) {
    var exec = require("cordova/exec");
    var Pgbaidulogin = function() {};
    
    //----------------------------//sina登陆---------------------------------------
    Pgbaidulogin.prototype.sina = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'sina', []);
    };

	        //----------------------------//开心网--------------------------------------

    Pgbaidulogin.prototype.kaixin = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'kaixin', []);
    };

	
	    //----------------------------//人人网---------------------------------------
    Pgbaidulogin.prototype.renren = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'renren', []);
    };
        //----------------------------//百度---------------------------------------
    Pgbaidulogin.prototype.baidu = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'baidu', []);
    };
	        //----------------------------//qq微博---------------------------------------
    Pgbaidulogin.prototype.qqweibo = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
		
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'qqweibo', []);
    };
		        //----------------------------//qq登陆---------------------------------------
    Pgbaidulogin.prototype.qq = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
		
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'qq', []);
    };
/*	   //----------------------------//淘宝登陆---------------------------------------
    Pgbaidulogin.prototype.taobao = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
		
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'taobao', []);
    };
	   //----------------------------//支付宝登陆---------------------------------------
    Pgbaidulogin.prototype.zfb = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
		
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'zfb', []);
    };
	   //----------------------------//豆瓣登陆---------------------------------------
    Pgbaidulogin.prototype.douban = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
		
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'douban', []);
    };
	   //----------------------------//网易登陆---------------------------------------
    Pgbaidulogin.prototype.wangyi = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
		
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'wangyi', []);
    };*/
    
      //----------------------------//退出---------------------------------------
    Pgbaidulogin.prototype.logout = function(successCallback, errorCallback) {  
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
		
    
        exec(successCallback, errorCallback, 'Pgbaidulogin', 'logout', []);
    };
     
    
    var Pgbaidulogin = new Pgbaidulogin();
     module.exports = Pgbaidulogin;

});

 
if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.Pgbaidulogin) {
    window.plugins.Pgbaidulogin = cordova.require("cordova/plugins/Pgbaidulogin");
}

 