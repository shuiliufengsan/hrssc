/**
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) Matt Kane 2010
 * Copyright (c) 2011, IBM Corporation
 */

cordova.define("cordova/plugins/BaiduMap", 
  function(require, exports, module) {
    var exec = require("cordova/exec");
    var BaiduMap = function() {};
     //----------------------------//地址查询---------------------------------------
	  BaiduMap.prototype.baiduad = function(address,city,successCallback, errorCallback) {
        if (errorCallback == null) { errorCallback = function() {}}
    
        if (typeof errorCallback != "function")  {
            console.log("pgbaidumap.scan failure: failure parameter not a function");
            return
        }
    
        if (typeof successCallback != "function") {
            console.log("pgbaidumap.scan failure: success callback parameter must be a function");
            return
        }
    
        exec(successCallback, errorCallback, 'BaiduMap', 'baiduad', [{"address":address, "city": city}]);
    };
	
    var BaiduMap = new BaiduMap();
    module.exports = BaiduMap;

});

  
if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.BaiduMap) {
    window.plugins.BaiduMap = cordova.require("cordova/plugins/BaiduMap");
}


// 地址转换为坐标

function adtoloc(ad) {
    var key = "0cvMlj16I4Q6TdAtvWcA85vk"; // 百度Geocoding API 申请key（即获取密钥）
	   var address = encodeURIComponent(ad);	   
		var B_SERVER_URL    = "http://api.map.baidu.com/geocoder/v2/?ak="+key+"&output=json&address="+address;//远程服务器地址
        $.getJSON(
            B_SERVER_URL,            
            function(data){
				     	
                     var  lng1 = data.result.location.lng;
					 var  lat1 = data.result.location.lat;
					 var location = lat1+','+lng1;		
					  console.log('location:'+location);				 
					 return location;	
					 
				
                 
            }
        );              
    }
 