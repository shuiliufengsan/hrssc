/*
*所有配置信息
*/
Ext.define('ChuangCai.config', {
    alternateClassName: 'config', //设置别名是为了方便调用，这样直接config.weather就能获取到变量。
    statics: {
        //需要登录验证的页面http://115.28.15.238/MobileB/',
    //   webSite: 'http://192.168.0.177/NewParking/',
       webSite: 'http://115.28.34.127:8080/Parking/',
     //   webSite: 'http://192.168.0.177/NewParking/',
     //   webSite: 'http://10.6.11.60/BaoPai/',
        ckLogin: {
            userInfo: false
        },
        //用户信息
        user: false,
        //登录成功跳转页面
        redirec: false,
        //是否需要登录才能使用系统
        isCheckLogin: 'N',
        //登录前是否显示欢迎页
        isShowGuide: "N",

        productName: "park",
        version: 1.0,
        updateUrl: 'http://dl.ops.baidu.com/baidusearch_AndroidPhone_757b.apk',

        tempParams: "", //{ 'stationId': record.data.id, 'stationName': record.data.station_name };

        hometitle_zh: '',
        favorite_zh: '收藏',
        setup_zh: '设置',
        about_zh: '关于'
    }
});