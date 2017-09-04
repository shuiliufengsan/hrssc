/*
*用户管理
*/
Ext.define('ChuangCai.controller.User', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['user.Login', 'user.AccountBound', 'user.Register', 'user.SellerRegister'],
        models: ['User'],
        refs: {
            main: 'main',
            userInfo: 'userInfo',
            //accountBound: 'accountBound',
            userLogin: 'userLogin',
            //register:'register',
            login: 'userLogin [action=login]',
            logOut: 'userInfo [action=logout]'
            //register:'register [action=register]'
        },
        control: {
            'userLogin button[itemId=registerUserBtn]': {
                tap: 'onIntoRegisterTap'
            },
            'userLogin button[itemId=sellerUserRegBtn]': {
                tap: 'onIntoSellerUserRegBtnTap'
            },
            'userRegister button[itemId=regToLogin]': {
                tap: 'onIntoLoginTap'
            },
            'userRegister button[itemId=getSmsValidNo]': {
                tap: 'onGetSmsValidNoTap'
            },
            'userRegister button[itemId=useRegisterBtn]': {
                tap: 'onUserRegisterTap'
            },
            'sellerRegister button[itemId=getSmsValidNo]': {
                tap: 'onSellerSmsValidNoTap'
            },
            'sellerRegister button[itemId=useRegisterBtn]': {
                tap: 'onSellerRegisterTap'
            },
            'sellerRegister button[itemId=regToLogin]': {
                tap: 'onIntoLoginTap'
            },
            //开始登录
            login: {
                tap: function () {
                    var login = this.getUserLogin();
                    if (util.valid('ChuangCai.model.User', login)) {
                        this.logCheck(login.getValues());
                    }
                }
            },
            logOut: {
                //退出登录
                tap: function () {
                    Ext.Msg.confirm('提示', '你真的要退出登陆吗?',
                    function (confirmed) {
                        confirmed == 'yes' && this.logOut();
                    },
                    this);
                }
            },
            //用户详细页
            accountBound: {
                activate: function (t) {
                }
            },
            userInfo: {
                activate: function (t) {
                    t.setData(config.user);
                },
                loginOut: function (t) {
                    //if (t.isExit) {
                    //    this.logOut();
                    //} else {
                    //    t.isExit = true;
                    //    util.showMessage1('再按一次退出登录...', true);

                    //}
                    //Ext.Msg.confirm('提示', '你真的要退出登陆吗?',
                    //        function (confirmed) {
                    //            if (confirmed == 'yes') {
                    //                //this.logOut();
                    //            }
                    //        },
                    //    this);
                    Ext.Msg.show({
                        title: '提示',
                        message: '你真的要退出登陆吗?',
                        buttons: Ext.MessageBox.OKCANCEL,
                        fn: function test(btn) {
                            if (btn == 'ok') {
                                Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
                                    success: function (user) {
                                        user.erase();
                                    }
                                });
                                config.user = false;
                                Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
                            }
                        },
                        icon: Ext.MessageBox.QUESTION
                    });

                }
            }
        }
    },
    //launch: function () {
    //    debugger;
    //    //检测是否自动登录
    //    var user = util.isLogin();
    //    if (user) {

    //    }
    //    else {
    //        if (config.isCheckLogin == "Y") {
    //            if (config.isShowGuide == "Y") {
    //                Ext.Viewport.setActiveItem('guide', { type: 'slide', direction: 'left' });
    //            }
    //            else {
    //                Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
    //            }
    //        }
    //    }
    //},
    //登录成功
    logUserIn: function (user) {
        config.user = user;
        var login = this.getUserLogin();
        if (login) {
            var redirect = login.config.redirect || 0;
            this.redirectTo('redirec/' + redirect + '/1');
        }
    },
    //开始登录
    logCheck: function (user) {
        if (user.username.length > 0 && user.password.length > 0) {
            // TODO: Login using server-side authentication service
            if (util.checkClientType() == false) {
                util.showWarning("为了您的信息安全，请使用手机访问！");
            }
            else {
                //Ext.data.JsonP.request({
                //    url: config.webSite + "Services/WirelessService.asmx/LoginCheck",
                //    params: {
                //        companyId: '20080101', userCode: user.username, password: user.password
                //    },
                //    callbackKey: "callback",
                //    callback: function (success, result) {
                //    }
                //});
                Ext.Ajax.request({
                    url: config.webSite + "Services/WirelessService.asmx/LoginCheck",
                    params: {
                        companyId: '20080101', userCode: user.username, password: user.password
                    },
                    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                    success: function (result, context) {
                        var msg = result.responseXML.getElementsByTagName("*")[0].firstChild.nodeValue;
                        var msgs = Ext.decode(msg);
                        msg = msgs[0]['result'];
                        var userId = msgs[0]['userid'];
                        var empId = msgs[0]['empid'];
                        var userName = msgs[0]['username'];
                        if (msg == "Y") {
                            if (user.keepUser == 1) {
                                var logUser = Ext.create('ChuangCai.model.User', {
                                    id: 1,
                                    companyid: '20080101',
                                    userid: userId,
                                    usercode: user.username,
                                    username: userName,
                                    empid: empId
                                });
                                logUser.save();
                            }
                            if (config.tempParams !== undefined) {
                                Ext.Viewport.setActiveItem('main', { type: 'slide', direction: 'left' });
                                //Ext.Viewport.setActiveItem(config.tempParams.redirectToType, { type: 'slide', direction: 'left' });
                            }
                            else {
                                Ext.Viewport.setActiveItem('main', { type: 'slide', direction: 'left' });
                            }
                        }
                        else {
                            Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
                            util.showWarning(msg);
                        }
                    },
                    failure: function (result, context) {
                        var msg = result.responseXML.getElementsByTagName("*")[0].firstChild.nodeValue;
                        util.showWarning(msg);
                    },
                    method: "POST"
                });
            }

        } else {
            var me = this;
            Ext.Msg.alert('提示', '请输入帐号密码', function () {
                me.getMainView().query('textfield[name=username]')[0].focus();
            });
        }
    },
    //保存用户信息
    keepUser: function (user) {
        //不这样写无法储存数据
        var logUser = Ext.create('ChuangCai.model.User', {
            id: 1
        });
        logUser.set(user);
        logUser.save();
    },

    //退出登录
    logOut: function (user) {
        alert("ddd");
        Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
            success: function (user) {
                user.erase();
            }
        });
        config.user = false;
        //this.redirectTo('redirec/userInfo/1');
        Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
    },
    onIntoLoginTap: function () {
        Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
    },
    onIntoRegisterTap: function () {
        Ext.Viewport.setActiveItem('userRegister', { type: 'slide', direction: 'left' });
    },
    onIntoSellerUserRegBtnTap: function () {
        Ext.Viewport.setActiveItem('sellerRegister', { type: 'slide', direction: 'left' });
    },
    setMiao: function () {
        if (totalSecond > 0) {
            Ext.getCmp("getSmsValidNo").setHtml(totalSecond);
            totalSecond = totalSecond - 1;
        }
        else {
            Ext.getCmp("getSmsValidNo").setHtml("获取验证码");
            Ext.getCmp("getSmsValidNo").setDisabled(false);
            clearInterval(Vtimeout);
        }
    },
    VerificationF: function () {
        var me = this;
        totalSecond = 60;
        Vtimeout = setInterval(function () {
            me.setMiao();
        },
        1e3)
    },
    //获取验证码
    onGetSmsValidNoTap: function () {
        var rgPhoneNumber = Ext.getCmp('RgPhoneNumber').getValue();
       // Ext.getCmp("getSmsValidNo").setDisabled(true);
        var me = this;

        if (rgPhoneNumber == "") {
            util.showWarning("手机号码不能为空"); return;
        }
        //var checkPhoneNumber = /^1\d{10}$/;
        //if (!checkPhoneNumber.test(rgPhoneNumber)) {
        //    util.showWarning("请输入有效的手机号码"); return;
        //}
        Ext.Ajax.request({
            url: util.getMobileSite() + "SystemManage/GetSmsValidNo.ashx",
            params: {
                rgPhoneNumber: rgPhoneNumber
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            success: function (result, context) {
                var checkNo = result.responseText;
                if (checkNo == "N") {
                    util.showWarning('该手机号码已被注册，请登录');
                } else {
                    //util.setMasked(true, "正在发送验证码...");
                    util.showMessage("获取成功,请检查短信", true);
                    Ext.getCmp("loadValidNo").setValue(checkNo);
                    me.VerificationF();
                }

            },
            failure: function (result, context) {
                util.setMasked(false);
                util.showMessage("网络异常，请重试", true);
            },
            method: "POST"
        });
    },
    //注册账号 
    onUserRegisterTap: function () {

        //util.showWarning("activate success");
        var rgPhoneNumber = Ext.getCmp('RgPhoneNumber').getValue();
        var verificationNumber = Ext.getCmp("VerificationNumber").getValue();
        var loadValidNo = Ext.getCmp("loadValidNo").getValue();
        var passwordText = Ext.getCmp('passwordText').getValue();
        var passwordTextAgin = Ext.getCmp('passwordTextAgin').getValue();
        if (rgPhoneNumber == "") {
            util.showWarning("手机号码不能为空"); return;
        }
        //var checkPhoneNumber = /^1\d{10}$/;
        //if (!checkPhoneNumber.test(rgPhoneNumber)) {
        //    util.showWarning("请输入有效的手机号码"); return;
        //}
        if (loadValidNo == "") {
            util.showWarning("请您先获取验证码"); return;
        }
        if (verificationNumber == "") {
            util.showWarning("验证码不能为空"); return;
        }
        if (passwordText == "" || passwordText == "") {
            util.showWarning("密码不能为空"); return;
        }
        if (passwordText.length < 6) {
            util.showWarning("密码至少六位"); return;
        }
        if (passwordText != passwordTextAgin) {
            util.showWarning("前后密码不一致"); return;
        }
        if (verificationNumber != loadValidNo) {
            util.showWarning("验证码输入有误"); return;
        }
        if (passwordText == passwordTextAgin) {
            util.setMasked(true, "正在注册...");
            Ext.Ajax.request({
                url: util.getMobileSite() + "Shop/RegisterUser.ashx",
                params: {
                    rgPhoneNumber: rgPhoneNumber, passwordText: passwordText
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    util.setMasked(false);
                    util.showWarning('注册成功');
                },
                failure: function (result, context) {
                    util.setMasked(false);
                    util.showMessage("网络异常，请重试", true);
                },
                method: "POST"
            });
        }
    },


    //买家注册
    onSellerSmsValidNoTap: function () {
        var rgPhoneNumber = Ext.getCmp('RgPhoneNumber').getValue();
        //Ext.getCmp("getSmsValidNo").setDisabled(true);
        var me = this;

        if (rgPhoneNumber == "") {
            util.showWarning("手机号码不能为空"); return;
        }
        //var checkPhoneNumber = /^1\d{10}$/;
        //if (!checkPhoneNumber.test(rgPhoneNumber)) {
        //    util.showWarning("请输入有效的手机号码"); return;
        //}
        Ext.Ajax.request({
            url: util.getMobileSite() + "SystemManage/GetSellerSmsValidNo.ashx",
            params: {
                rgPhoneNumber: rgPhoneNumber
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            success: function (result, context) {
                var checkNo = result.responseText;
                if (checkNo == "N") {
                    util.showWarning('该手机号码已被注册，请登录');
                } else {
                    //util.setMasked(true, "正在发送验证码...");
                    util.showMessage("获取成功,请检查短信", true);
                    Ext.getCmp("loadValidNo").setValue(checkNo);
                    me.VerificationF();
                }

            },
            failure: function (result, context) {
                util.setMasked(false);
                util.showMessage("网络异常，请重试", true);
            },
            method: "POST"
        });
    },

    onSellerRegisterTap: function () {
        //util.showWarning("activate success");
        var rgPhoneNumber = Ext.getCmp('RgPhoneNumber').getValue();
        var verificationNumber = Ext.getCmp("VerificationNumber").getValue();
        var loadValidNo = Ext.getCmp("loadValidNo").getValue();
        var companyName = Ext.getCmp("CompanyName").getValue();
        var passwordText = Ext.getCmp('passwordText').getValue();
        var passwordTextAgin = Ext.getCmp('passwordTextAgin').getValue();
        if (rgPhoneNumber == "") {
            util.showWarning("手机号码不能为空"); return;
        }
        //var checkPhoneNumber = /^1\d{10}$/;
        //if (!checkPhoneNumber.test(rgPhoneNumber)) {
        //    util.showWarning("请输入有效的手机号码"); return;
        //}
        if (loadValidNo == "") {
            util.showWarning("请您先获取验证码"); return;
        }
        if (verificationNumber == "") {
            util.showWarning("验证码不能为空"); return;
        }
        if (passwordText == "" || passwordText == "") {
            util.showWarning("密码不能为空"); return;
        }
        if (passwordText.length < 6) {
            util.showWarning("密码至少六位"); return;
        }
        if (passwordText != passwordTextAgin) {
            util.showWarning("前后密码不一致"); return;
        }
        if (verificationNumber != loadValidNo) {
            util.showWarning("验证码输入有误"); return;
        }
        if (passwordText == passwordTextAgin) {
            //util.setMasked(true, "正在注册...");
            Ext.Ajax.request({
                url: util.getMobileSite() + "Shop/RegisterSeller.ashx",
                params: {
                    rgPhoneNumber: rgPhoneNumber, passwordText: passwordText, companyName: companyName
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    util.setMasked(false);
                    util.showWarning('注册成功');
                },
                failure: function (result, context) {
                    util.setMasked(false);
                    util.showMessage("网络异常，请重试", true);
                },
                method: "POST"
            });
        }
    },
});