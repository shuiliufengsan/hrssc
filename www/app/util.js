var fileCount = 0;
var fileArray = null;
var pickUrl = '';
var globalBar = null;
var tempParams = null;
var fileArray = null;
var leftCategoryId = null;
var categoryName = null;
var searchBrwName = null;
var rightCategoryId = null;
var loadItemEl = null;
var dict = null;
var totalSecond = 60;
var Vtimeout = null;
var productRecord = null;
var openid = null;
/*公共类*/
Ext.define('ChuangCai.util', {
    alternateClassName: 'util',
    statics: {
        //加载stroe
        storeLoad: function (id) {
            var store = Ext.getStore(id);
            if (store.getCount() < 1) {
                store.load();
            }
        },
        //加载data数据
        dataLoad: function (view, url, params) {
            Ext.Ajax.request({
                url: url,
                params: params,
                success: function (result, request) {
                    result = Ext.decode(result.responseText);
                    console.log(result.result[5]);
                    view.setData(result.result[5]);
                }
            });
        },
        getDateTimePicker: function (newValue) {
            var currentDate = new Date(newValue);
            var year = currentDate.getFullYear();
            var month = currentDate.getMonth() + 1;
            var day = currentDate.getDate();
            var hour = currentDate.getHours();
            var minute = currentDate.getMinutes();
            var beginDate = {
                year: year,
                month: month,
                day: day,
                hour: hour,
                minute: minute
            };
            return beginDate;
        },
        //加载record数据
        recordLoad: function (record, view, url, params, ckName) {
            if (record.data.ckName) {
                view.setData(record.data);
                return;
            }
            Ext.Ajax.request({
                url: url,
                params: params,
                success: function (result, request) {
                    result = Ext.decode(result.responseText);
                    record.set(result);
                    view.setData(record.data);
                }
            });
        },
        //显示pick
        showPick: function (xtype, params) {
            var pick = Ext.create(xtype);
            Ext.Viewport.add(pick);
            pick.show(params);
        },
        //结束pick
        endPick: function (xtype) {
            var pick = Ext.Viewport.down(xtype);
            if (pick) {
                pick.endPick();
            }
        },
        //Viewport添加新项,Viewport之中始终只有一项
        ePush: function (xtype) {
            var me = Ext.Viewport,
            view = me.getActiveItem();
            if (view && view.getItemId() == xtype) {
                return;
            }
            view = Ext.create(xtype, {
                itemId: xtype
            });
            //切换
            me.animateActiveItem(view, {
                type: 'slide',
                direction: 'left'
            });
        },
        //监控Viewport界面切换,切换时销毁旧项
        eActiveitemchange: function () {
            var me = Ext.Viewport;
            me.onAfter('activeitemchange',
            function (t, value, oldValue, eOpts) {
                if (oldValue) {
                    //强制销毁，防止销毁不完全引发错误
                    me.remove(oldValue, true);
                }
            });
        },
        /*为Ext.Viewport添加一个消息提示组件*/
        addMessage: function () {
            Ext.Viewport.setMasked({
                xtype: 'loadmask',
                cls: 'message',
                transparent: true,
                indicator: false
            });
            this.hideMessage();
        },
        addCSSfile: function (filename) {
            var headID = document.getElementsByTagName("head")[0];
            var cssNode = document.createElement('link');
            cssNode.type = 'text/css';
            cssNode.rel = 'stylesheet';
            cssNode.href = '../resources/css/' + filename + '.css';
            cssNode.media = 'screen';
            headID.appendChild(cssNode);
        },
        /*显示一个消息提示*/
        showMessage: function (mes, autoHide, seconds) {
            var me = this,
            message = this.getMessage();
            message.setMessage(mes);
            if (!seconds) {
                seconds = 2;
            }
            message.show();
            //是否自动关闭提示
            if (autoHide) {
                setTimeout(function () {
                    message.hide();
                },
                seconds * 1000);
            }
        },
        showMessage1: function (mes, autoHide) {
            var me = this,
            message = this.getMessage();
            message.setMessage(mes);
            message.show();
            //是否自动关闭提示
            if (autoHide) {
                setTimeout(function () {
                    message.hide();
                },
                500);
            }
        },
        /*修改消息提示*/
        modifyMessage: function (mes, autoHide, seconds) {
            message = this.getMessage();
            message.setMessage(mes);
            if (!seconds) {
                seconds = 2;
            }
            //是否自动关闭提示
            if (autoHide) {
                setTimeout(function () {
                    message.hide();
                },
                seconds * 1000);
            }
        },
        /*隐藏消息提示*/
        hideMessage: function () {
            this.getMessage().hide();
        },
        //消息组件
        getMessage: function () {
            return Ext.Viewport.getMasked();
        },
        showWarning: function (content) {
            var _thiss = this;
            if (!this.LoginMessage) {
                this.LoginMessage = new Ext.Panel({
                    style: "padding:10px 5px;",
                    hidden: true,
                    hideOnMaskTap: true,
                    modal: true,
                    width: 200,
                    bottom: 100,
                    left: (document.body.clientWidth - 200) / 2,
                    cls: "errorPrompt",
                    items: [{
                        xtype: "panel",
                        layout: "vbox",
                        id: "loginInfo",
                        width: "100%",
                        html: ""
                    }]
                });
                Ext.getCmp("loginInfo").setHtml(content);
                Ext.Viewport.add(this.LoginMessage);
                this.LoginMessage.show()
            } else {
                Ext.getCmp("loginInfo").setHtml(content);
                this.LoginMessage.show()
            }
        },

        setMasked: function (isTrue, message) {
            if (isTrue) {
                Ext.Viewport.setMasked({
                    xtype: "loadmask",
                    message: message ? message : "加载中...",
                    cls: "u-loadmask"
                })
            } else {
                if (!isTrue) {
                    Ext.Viewport.setMasked(false)
                }
            }
        },
        //验证模型
        valid: function (model, from) {
            var tmpModel = Ext.create(model),
            me = this,
            errors, valid;
            from.updateRecord(tmpModel);
            errors = tmpModel.validate();
            valid = errors.isValid();
            if (!valid) {
                errors.each(function (err) {
                    me.showMessage(err.getMessage(), true);
                    return;
                });
            }
            return valid;
        },
        //重写ajax
        overrideAjax: function () {
            var me = this;
            //开始加载
            Ext.Ajax.on('beforerequest',
            function (connection, options) {
                if (!options.hidMessage) {
                    //me.showMessage('正在努力加载中...');
                }
            });
            //加载成功
            Ext.Ajax.on('requestcomplete',
            function (connection, options) {
                //me.hideMessage();
            });
            //加载失败
            Ext.Ajax.on('requestexception',
            function (connection, options) {
                if (!options.hidMessage) {
                    //me.showMessage('加载失败，请稍后再试...', true);
                }
            });
        },
        //重写list
        overrideList: function () {
            //重写分页插件
            Ext.define("Ext.zh.plugin.ListPaging", {
                override: "Ext.plugin.ListPaging",
                config: {
                    //自动加载
                    autoPaging: true,
                    //滚动到最底部时是否自动加载下一页数据
                    noMoreRecordsText: '已经显示全部',
                    loadMoreText: '显示更多...' //加载更多按钮显示内容
                }
            });
            //重写List
            Ext.define("Ext.zh.List", {
                override: "Ext.List",
                config: {
                    //取消选择效果
                    selectedCls: '',
                    //禁用加载遮罩，防止跳转时页面卡顿，使用统一的遮罩效果
                    loadingText: false,
                    emptyText: '已经显示全部'
                }
            });
        },
        //重写Pick相关
        overridePick: function () {
            Ext.Date.monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
            Ext.define("Ext.zh.DatePicker", {
                override: "Ext.picker.Date",
                config: {
                    yearFrom: 2000,
                    yearText: '年',
                    monthText: '月',
                    dayText: '日'
                }
            });
            Ext.define("Ext.local_zh_cn.Picker", {
                override: "Ext.picker.Picker",
                applyDoneButton: function (config) {
                    if (config) {
                        if (Ext.isBoolean(config)) {
                            config = {};
                        }
                        if (typeof config == "string") {
                            config = {
                                text: config
                            };
                        }
                        Ext.applyIf(config, {
                            ui: 'action',
                            align: 'right',
                            text: '确定'
                        });
                    }
                    return Ext.factory(config, 'Ext.Button', this.getDoneButton());
                },
                applyCancelButton: function (config) {
                    if (config) {
                        if (Ext.isBoolean(config)) {
                            config = {};
                        }
                        if (typeof config == "string") {
                            config = {
                                text: config
                            };
                        }
                        Ext.applyIf(config, {
                            align: 'left',
                            text: '取消'
                        });
                    }
                    return Ext.factory(config, 'Ext.Button', this.getCancelButton());
                }

            });
        },
        redirectTo: function (url) {
            location.replace('#' + url);
        },
        getFace: function (key) {
            var language = ux.locale.Manager.getLanguage();
            result = eval('config.' + key + '_' + language);
            return result;
        },
        getUserInfo: function () {
            return this.isLogin();
        },
        isLogin: function () {
            var result = null;
            Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
                scope: this,
                success: function (cachedLoggedInUser) {
                    result = cachedLoggedInUser;
                }
            });
            return result;
        },
        getCompanyId: function () {
            var companyid = null;
            var logindata = localStorage.getItem('login-data-1');
            if (logindata) {
                var login_data = Ext.decode(logindata);
                companyid = login_data['companyid'];
            }
            return companyid;
        },
        getUserId: function () {
            var userId = null;
            var logindata = localStorage.getItem('login-data-1');
            if (logindata) {
                var login_data = Ext.decode(logindata);
                userId = login_data['userid'];
            }
            return userId;
        },
        getQQLogin: function () {
            var username = getCookie("username");
            var picurl = getCookie("picurl");
            if (username && picurl) {
                return username + "&" + pickUrl;
            } else {
                return null;
            }
        },
        getUserCode: function () {
            var userCode = null;
            var logindata = localStorage.getItem('login-data-1');
            if (logindata) {
                var login_data = Ext.decode(logindata);
                userCode = login_data['usercode'];
            }
            return userCode;  // 
        },
        getUserName: function () {
            var userName = null;
            var logindata = localStorage.getItem('login-data-1');
            if (logindata) {
                var login_data = Ext.decode(logindata);
                userName = login_data['username'];
            }
            return userName;
        },
        getEmpId: function () {
            var empid = null;
            var logindata = localStorage.getItem('login-data-1');
            if (logindata) {
                var login_data = Ext.decode(logindata);
                empid = login_data['empid'];
            }
            return empid;
        },
        //初始化多国语言
        initLocale: function () {
            ux.locale.Manager.setConfig({
                ajaxConfig: {
                    method: 'GET'
                },
                language: 'zh', //navigator.language ? navigator.language.split('-')[0] : navigator.userLanguage.split('-')[0],
                tpl: 'locales/{locale}.json',
                type: 'ajax'
            });

            ux.locale.Manager.init();
        },
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return unescape(r[2]);
            return null;
        },
        isInstallToPhone: function () {
            var result = false;
            if (typeof (device) != "undefined") {
                var result = true;
            }
            return result;
        },
        isAndroid: function () {
            var result = false;
            if (this.isInstallToPhone() == true && this.getClientType() == "Android") {
                result = true;
            }
            return result;
        },
        isIOS: function () {
            var result = false;
            if (this.isInstallToPhone() == true && this.getClientType() == "iPhone") {
                result = true;
            }
            return result;
        },
        isWeixin: function () {
            var result = false;
            //if (typeof (wx) != "undefined" && typeof (wx.hideOptionMenu()) != "undefined") {
            if (typeof (wx) != "undefined") {
                result = true;
            }
            return result;
        },
        getMobileSite: function () {
            return config.webSite + "Mobile/";
        },
        getWeixinSite: function () {
            return config.webSite + "Weixin/";
        },
        checkClientType: function () {
            var result = true;
            if (Ext.os.is('Windows') == true || Ext.os.is('MacOS') == true || Ext.os.is('Linux') == true || Ext.os.is('Other') == true) {
                result = true;
            }
            return result;
        },
        getClientType: function () {
            var result = null;
            if (Ext.os.is('iPhone')) {
                result = "iPhone";
            }
            else if (Ext.os.is('iPad')) {
                result = "iPad";
            }
            else if (Ext.os.is('iOS')) {
                result = "iOS";
            }
            else if (Ext.os.is('Android')) {
                result = "Android";
            }
            else if (Ext.os.is('WebOS')) {
                result = "WebOS";
            }
            else if (Ext.os.is('RIMTablet')) {
                result = "RIMTablet";
            }
            else if (Ext.os.is('Bada')) {
                result = "BlackBerry";
            }
            else if (Ext.os.is('Windows')) {
                result = "Windows";
            }
            else if (Ext.os.is('MacOS')) {
                result = "MacOS";
            }
            return result;
        },
        getOsVersion: function () {
            //返回一个整数
            var result = Ext.os.version.getMajor();
            return result;
        },
        //格式化字符串         
        format: function () {
            return Ext.util.Format.format.apply(this, arguments);
        },
        dealStatusBar: function () {
            if (this.isInstallToPhone() == true && this.getClientType() == "iPhone") {
                StatusBar.overlaysWebView(false);
                StatusBar.backgroundColorByHexString('#1b78c6');
            }
        },
        checkAppVersion: function () {
            if (this.isInstallToPhone() == true && this.getClientType() == "Android") {
                var currentVersion = config.version;
                //从服务器获取的版本
                var serverVersion = '1.0';
                var url = '';
                Ext.Ajax.request({
                    url: this.getMobileSite() + "SystemManage/GetVersion.ashx",
                    success: function (result, context) {
                        var temp = Ext.decode(result.responseText);
                        url = temp[0]['url'];
                        serverVersion = temp[0]['version'];
                        if (serverVersion > currentVersion) {
                            Ext.Msg.show({
                                title: '提示',
                                message: '当前软件有最新版本，是否更新？',
                                buttons: Ext.MessageBox.OKCANCEL,
                                fn: function test(btn) {
                                    if (btn == 'ok') {
                                        var fileTransfer = new FileTransfer();
                                        //var uri = encodeURI(config.webSite+"Mobile/Download/Bear.apk");
                                        var uri = encodeURI(url);
                                        //var fileURL = "file:///mnt/sdcard/bear/bear.apk";
                                        var fileURL = 'file:///mnt/sdcard/' + config.productName + '/' + config.productName + '.apk';
                                        fileTransfer.download(
                                            uri,
                                            fileURL,
                                            function (entry) {
                                                //下载完成后自动安装 
                                                navigator.install.execute('/sdcard/' + config.productName + '/' + config.productName + '.apk', function (success) {
                                                },
                                                  function (fail) {
                                                  });
                                            },
                                            function (error) {
                                                console.log("download error source " + error.source);
                                                console.log("download error target " + error.target);
                                                console.log("upload error code" + error.code);
                                            },
                                            false,
                                            {
                                                headers: {
                                                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                                                }
                                            }
                                        );
                                    }
                                },
                                icon: Ext.MessageBox.QUESTION
                            });
                        }
                    },
                    failure: function (result, context) {
                        //alert(result.responseText.toString());
                    },
                    method: "POST"
                });
            }
        },
        dealSpecialCall: function () {
            //http://127.0.0.1:8008/BPM/index.html?code=accountBound
            //Ext.Viewport.setActiveItem('accountBound', { type: 'slide', direction: 'left' });
        },
        dealWeixinCall: function () {
            //alert(this.getUrlParam('code'));
            Ext.Ajax.request({
                url: util.getWeixinSite() + "GetUserInfo.ashx",
                params: {
                    code: this.getUrlParam('code')
                },
                success: function (result, context) {
                    var temp = Ext.decode(result.responseText);
                    openid = temp.openid;
                },
                failure: function (result, context) {
                    alert(result.responseText.toString());

                },
                method: "POST"
            });
        },
        dealWeixinJsSdk: function () {
            Ext.Ajax.request({
                url: util.getWeixinSite() + "GetWxJsSdk.ashx",
                params: {
                    url: location.href.split('#')[0]
                },
                success: function (result, context) {
                    var json = result.responseText;
                    json = Ext.decode(json);
                    var timestamp = json[0]["timestamp"];
                    var nonceStr = json[0]["nonceStr"];
                    var signature = json[0]["signature"];
                    //debugger;
                    //alert(signature);
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: 'wx551122b6030e4316', // 必填，公众号的唯一标识
                        timestamp: timestamp, // 必填，生成签名的时间戳
                        nonceStr: nonceStr, // 必填，生成签名的随机串
                        signature: signature,// 必填，签名，见附录1
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'hideMenuItems',
                            'chooseImage',
                            'getNetworkType',
                            'openLocation',
                            'getLocation',
                            'startRecord',
                            'stopRecord',
                            'onVoiceRecordEnd',
                            'playVoice',
                            'pauseVoice',
                            'stopVoice',
                            'onVoicePlayEnd',
                            'uploadVoice',
                            'downloadVoice',
                            'previewImage',
                            'uploadImage',
                            'downloadImage',
                            'translateVoice',
                            'hideOptionMenu',
                            'showOptionMenu',
                            'showMenuItems',
                            'hideAllNonBaseMenuItem',
                            'showAllNonBaseMenuItem',
                            'closeWindow',
                            'scanQRCode',
                            'chooseWXPay',
                            'openProductSpecificView',
                            'addCard',
                            'chooseCard',
                            'openCard',
                        ]
                    });
                    //wx.hideOptionMenu();
                    wx.getNetworkType({
                        success: function (res) {
                            var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
                            //alert(networkType);
                        }
                    });
                    //wx.ready(function(){
                    //    wx.getLocation({
                    //        success: function (res) {
                    //            var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    //            var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    //            var speed = res.speed; // 速度，以米/每秒计
                    //            var accuracy = res.accuracy; // 位置精度
                    //            alert(longitude);
                    //        }
                    //    });
                    //});
                    //wx.ready(function(){
                    //    wx.chooseImage({
                    //        success: function (res) {
                    //            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    //        }
                    //    });
                    //});
                },
                failure: function (result, context) {
                    alert(result.responseText.toString());
                },
                method: "POST"
            });
        },
        //app初始化执行
        init: function () {
            this.getClientType();
            this.eActiveitemchange();
            this.overrideList();
            this.overrideAjax();
            this.addMessage();
            this.overridePick();
            this.initLocale();
            //this.dealStatusBar();
            this.dealSpecialCall();
            //this.dealWeixinCall();
            //this.dealWeixinJsSdk();
            //this.checkAppVersion();
        }
    }
});