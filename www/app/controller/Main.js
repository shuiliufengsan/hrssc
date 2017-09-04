/*
*视图切换控制
*/
Ext.define('ChuangCai.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['Config'],
        views: ['FirstStart','Main'],
        refs: {
            main: 'main',
            //home: 'home',
            guide: 'guide',
            bottomBar: 'bottomBar',
            firstStart: 'firstStart',
            //weather: 'main #weather',
            //newBrw:'newBrw',
            //navBtn: 'button[action=navBtn]',
            otherBtn: 'button[action=other]',
            redirectBtn: 'button[action=redirect]',
            redirectByParamsBtn: 'button[action=redirectByParams]'
        },
        control: {
            //'home button[itemId=pOnline1]': {
            //    tap: 'onChangeTitleTap'
            //},
            firstStart: {
                showMain: 'onGuide'
            },
            guide: {
                showMain: 'onGuide'
            },
            main: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (dict == null) {
                        dict = new Dictionary();
                    }
                    if (util.getUserId() != null && productRecord != null) {
                        if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                            Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                        }
                        Ext.Viewport.EmptyView.setRecord(productRecord);
                        this.redirectTo('redirec/productListView');
                    }
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {

                }
            },
            //动态传参
            redirectByParamsBtn: {
                tap: function (t, value) {
                    config.tempParams = t.config.params;
                    //this.redirectTo('redirec/' + t.config.redirect);
                    CSS.swapStyleSheet('default');
                }
            },
            //跳转按钮
            redirectBtn: {
                tap: function (t, value) {
                    config.patrolParams = { 'fromId': t._itemId };
                    this.redirectTo('redirec/' + t.config.redirect);
                }
            },
            //导航栏按钮
            navBtn: {
                tap: function () {
                    util.showMessage('我是导航栏按钮，在当前激活的子项中配置-_-', true);
                }
            },
            //其他按钮
            otherBtn: {
                tap: function () {
                    //util.showMessage('我是一个toast提示- -', true);
                    CSS.swapStyleSheet('multiselect');
                }
            }
        },
        //路由，由redirectTo方法触发
        routes: {
            'firstStart': 'showFirstStart',
            'main': 'showMain',
            'redirec/:view': 'redirec',
            'redirec/:view/:isPop': 'redirec'
        }
    },
    launch: function () {
        var me = this;
        var user = util.isLogin();
        if (!user) {
            if (config.isCheckLogin == "Y") {
                Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
            }
        }
        //检测是否第一次启动程序
        //Ext.ModelMgr.getModel('ChuangCai.model.Config').load(1, {
        //    scope: this,
        //    success: function (config) {
        //        debugger;
        //        //this.redirectTo('userLogin');
        //        Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
        //    },
        //    failure: function (error) {
        //        debugger;
                
        //        if (config.isCheckLogin == "Y") {
        //            //this.redirectTo('firstStart');
        //            Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
        //            //this.redirectTo('userLogin');
        //        }
        //    }
        //});
    },
    //显示欢迎页面
    showFirstStart: function () {
        //console.log('首次启动,进入欢迎页面');
        util.ePush('firstStart');
        //存储配置信息
        var config = Ext.create('ChuangCai.model.Config', {
            id: 1
        });
        config.save();
    },
    //显示首页
    showMain: function () {
        console.log('进入首页');
        var xtype = 'main';
        //登录检测
        var user = util.isLogin();
        if (user == null) {
            xtype = 'userLogin';
        }
        util.ePush(xtype);
    },
    //跳转到首页路由
    onGuide: function () {
        this.redirectTo('main');
    },
    //动态传参
    //显示视图xtype:这里是指alternateClassName
    redirec: function (xtype, isCheckLogin,isPop) {
        //console.log('进入:',xtype,'页面，是否pop模式：',isPop==1);
        var params = config.tempParams;
        //登录检测
        if (!util.isLogin() && isCheckLogin == "Y") {
            //params = params || {};
            //params.redirect = xtype;
            //xtype = 'userLogin';
            //this.redirectTo('userLogin');
            config.tempParams = { 'redirectToType': xtype };
            Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
        }
        else {
            this.pushView({ xtype: xtype, params: params, isPop: isPop });
        }
    },
    pushView: function (params) {
        var main = this.getMain();
        if (!main) return;
        this.isExit = false;
        if (params.isPop) {
            var xtype = false;
            if (params.xtype != 0) {
                xtype = params.xtype;
            }
            main.popAndPush(xtype, params.params);
        } else {
            main.push(params.xtype, params.params);
        }
        delete config.tempParams;
    },
    //监听安卓返回键
    onbackTap: function () {
        var cardPanel = this.getMain();
        console.log('点击返回按钮');
        if (cardPanel) {
            var back = cardPanel.viewStack;
            if (back.length > 1) {
                cardPanel.onBackButtonTap();
            } else {
                this.appExit();
            }
        } else {
            this.appExit();
        }
    },
    appExit: function () {
        if (this.isExit) {
            navigator.app.exitApp();
        } else {
            this.isExit = true;
            util.showMessage('再按一次退出程序', true);
        }
    },
    //onChangeTitleTap: function () {
    //    //util.showMessage("active success", true);
    //    this.redirectTo('redirec/shopHome');
    //}
});