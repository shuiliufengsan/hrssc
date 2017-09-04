Ext.define('ChuangCai.controller.Park', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['park.ParkAdvInfo', 'park.MyCar', 'park.MyCollect'],
        stores: ['park.ParkAdvInfo', 'park.MyCar', 'park.MyCollect', 'park.MyOrder'],
        views: ['Main', 'park.PersonCenter', 'park.PayFees', 'park.FindCarPlace', 'park.Login', 'park.QuickLogin', 'park.ParkHome', 'park.MyCar', 'park.AddCar', 'park.AboutPark', 'park.ParkAdvInfo', 'park.ParkAdvInfoView',
            'park.Register', 'park.PersonalInfo', 'park.PlaceDetail', 'park.PayOrder', 'park.PositionBook', 'park.MyCollect'
        ],
        control: {
            'parkHome button[itemId=findPlace]': {
                tap: 'onfindPlaceTap'
            },
            'parkHome button[itemId=positionBookBtn]': {
                tap: 'onPositionBookBtnTap'
            },
            'parkHome button[itemId=parkAdv]': {
                tap: 'onParkAdvTap'
            },
            'parkHome button[itemId=payFees]': {
                tap: 'onPayFeesTap'
            },
            'personCenter button[itemId=clearLocalStorage]': {
                tap: 'onClearLocalStorageTap'
            },
            'personCenter button[itemId=IntoPersonalInfo]': {
                tap: 'onIntoPersonalInfoTap'
            },
            'personCenter button[itemId=myCollect]': {
                tap: 'onMyCollectTap'
            },
            'personCenter button[itemId=myCar]': {
                tap: 'onMyCarTap'
            },
            'personCenter button[itemId=aboutPark]': {
                tap: 'onAboutParkTap'
            },
            'personCenter button[itemId=exitCenter]': {
                tap: 'onExitCenterTap'
            },

            'login button[itemId=userLoginBtn]': {
                tap: 'onUserLoginBtnTap'
            },
            'login button[itemId=quickLoginBtn]': {
                tap: 'onQuickLoginBtnTap'
            },

            'login button[itemId=qqLoginBtn]': {
                tap: 'onQqLoginBtnTap'
            },

            'quicklogin button[itemId=getSmsValidNo]': {
                tap: 'onGetSmsValidNoTap'
            },
            'quicklogin button[itemId=useRegisterBtn]': {
                tap: 'onUserRegisterTap'
            },
            'quicklogin button[itemId=qqLoginBtn]': {
                tap: 'onQqLoginBtnTap'
            },
            'register button[itemId=getSmsValidNo]': {
                tap: 'onGetSmsValidNoTap'
            },
            'register button[itemId=userRegisterBtn]': {
                tap: 'onRegisterTap'
            },
            'register button[itemId=regToLogin]': {
                tap: 'onregToLoginTap'
            },
            'placeDetail button[itemId=immediateNavi]': {
                tap: 'onImmediateNaviTap'
            },
            'placeDetail button[itemId=collectionPlace]': {
                tap: 'onCollectionPlaceTap'
            },
            'placeDetail button[itemId=sharePlace]': {
                tap: 'onSharePlaceTap'
            },
            'placeDetail button[itemId=orderPlace]': {
                tap: 'onOrderPlaceTap'
            },
            'payFees button[itemId=getFee]': {
                tap: 'onGetFeeTap'
            },
            'findCarPlace img[itemId=orderSelect]': {
                tap: 'onOrderSelectTap'
            },
            'findCarPlace img[itemId=feeSelect]': {
                tap: 'onFeeSelectTap'
            },
            'positionBook button[itemId=myBookId]': {
                tap: 'onMyBookIdTap'
            },
            'positionBook button[itemId=placeBookId]': {
                tap: 'onPlaceBookIdTap'
            },
            'addCar button[itemId=addCarBtn]': {
                tap: 'onAddCarBtnTap'
            },
            'payOrder button[itemId=getFeeBtn]': {
                tap: 'onGetFeeBtnTap'
            },
            

            parkHome: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (dict == null) {
                        dict = new Dictionary();
                    }
                 //   globalBar = obj.getNavigationBar();
                    //判断是否为iOS，同时要判断不同版本
                    //globalBar.addCls("setNavigationTop");
                    var me = this;
                    newActiveItem.element.on("swipe", function (e, target, options, eOpts) {
                        if (e.direction === 'left' && e.distance >= 20) {
                            //util.showWarning('move left');
                        } else if (e.direction === 'right' && e.distance >= 20) {
                            //util.showWarning('move right');
                        } else if (e.direction === 'up' && e.distance >= 20) {
                            //util.showWarning('move up');
                            //me.redirectTo('redirec/newsBrw');
                        } else if (e.direction === 'down' && e.distance >= 20) {
                            //util.showWarning('move down');
                        }
                    });
                    CSS.addStyleSheet('news');

                    var bar = obj.getNavigationBar();

                    var _this = this;
                    var newCard = new Ext.Panel({
                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                            + "px; background-image:url(" + config.webSite + "Upload/attached/image/Baopai/4.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    if (Ext.getCmp("RCarouselis1").items.length == 1) {
                        Ext.getCmp("RCarouselis1").add(newCard);
                        newCard = new Ext.Panel({
                            html: '<div id="adv" style="position:relative; width:100%; height:'
                                + parseInt(document.body.clientWidth * 1)
                                + "px; background-image:url(" + config.webSite + "Upload/attached/image/Baopai/2.jpg); background-size: 100% "
                                + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                        });
                        //newCard.setData(row);
                        Ext.getCmp("RCarouselis1").add(newCard);

                        newCard = new Ext.Panel({
                            html: '<div id="adv" style="position:relative; width:100%; height:'
                                + parseInt(document.body.clientWidth * 1)
                                + "px; background-image:url(" + config.webSite + "Upload/attached/image/Baopai/3.jpg); background-size: 100% "
                                + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                        });
                        //newCard.setData(row);
                        Ext.getCmp("RCarouselis1").add(newCard);
                        Ext.getCmp("RCarouselis1").setActiveItem(0, "slide");

                    }
                    CTimeend = setInterval(function () {
                        var carousel = Ext.getCmp("RCarouselis1");
                        carousel.next();
                        if (carousel.getActiveIndex() === carousel.getMaxItemIndex()) {
                            carousel.setActiveItem(0, "slide");
                        }
                    }, 8000);
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var bar = obj.getNavigationBar();
                    clearInterval(CTimeend);
                    //bar.remove(Ext.getCmp('edit'));
                    //   bar.remove(Ext.getCmp('homeSearchId'));
                    //  bar.remove(Ext.getCmp('provinceId'));
                    // bar.remove(Ext.getCmp('indexId'));
                }
            },

            placeDetail: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    var parkId;
                    if (dict.get("parkId")) {
                        parkId = dict.get("parkId");
                        setTempCookie("parkId", parkId);
                    } else {
                        parkId = getCookie("parkId");
                    }
                    var qqname = decodeURI(getCookie("username"));
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Park/GetParkLotDetail.ashx",
                        params: {
                            parkId: parkId, userId: util.getUserCode(), qqname: qqname
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            Ext.getCmp('placeName').setHtml("<p style='font-size: 14px;color: #999;margin-left: 10px;margin-top: 5px;'>" + json[0]['parkName'] + "</br>车位数：" + json[0]['freeSpaceNum'] + "/" + json[0]['totalSpaceNum'] + "</p>");
                            Ext.getCmp('placeAddress').setHtml("<p style='font-size: 14px;color: #999;margin-left: 10px;margin-top: 10px;'>地址：" + json[0]['addr'] + "</p>");
                            Ext.getCmp('priceStandard').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>收费标准：" + json[0]['payRule'] + "</p>");
                            Ext.getCmp('workTime').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>营业时间：" + json[0]['workTime'] + "</p>");
                            Ext.getCmp('tel').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>联系电话：" + json[0]['tel'] + "</p>");
                            Ext.getCmp('loadParkId').setValue(parkId);
                            Ext.getCmp('loadCollectionId').setValue(json[0]['collectionFlag']);

                            if (Ext.getCmp("PlaceImgView").items.length == 1) {
                                var newCard = new Ext.Panel({
                                    html: '<div id="adv" style="position:relative; width:100%; height:'
                                      + parseInt(document.body.clientWidth * 1)
                                      + "px; background-image:url(" + config.webSite + "Upload/attached/image/Baopai/5.jpg); background-size: 100% "
                                      + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                                });
                                Ext.getCmp("PlaceImgView").add(newCard);
                            }

                            if (json[0]['collectionFlag'] == "Y") {
                                Ext.getCmp('collectionPlace').setHtml("<img style='width:20px;height:20px;' src='resources/images/already_collected.png'/><p style='text-align:center;font-size: 12px;color: #999;'>已收藏</p>");
                            }
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (oldActiveItem.id == "findCarPlaceId") {
                        this.redirectTo('redirec/findCarPlace');
                    }
                }
            },

            personCenter: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var userName = util.getUserCode();
                    if (userName != "" && userName != null) {
                        Ext.getCmp('IntoPersonalInfo').setHtml("<div><div style=''><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='resources/images/human_info.png'/></div><div ><p>" + userName + "</p></div></div>");
                    } else {
                        var qqname = decodeURI(getCookie("username"));
                        var picurl = getCookie("picurl");
                        if (qqname && picurl) {
                            Ext.getCmp('IntoPersonalInfo').setHtml("<div><div style=''><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='" + picurl + "'/></div><div ><p>" + qqname + "</p></div></div>");
                        }
                    }

                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    ////清空查询条件
                    //bar.remove(Ext.getCmp('moreId'));
                }
            },
            positionBook: {
                itemtap: function (list, index, target, record, e) {
                    //if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                    //    Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.park.EmptyView');
                    //}
                    //Ext.Viewport.EmptyView.setRecord(record);
                    dict.add("parkId", record.data.park_id);
                    this.redirectTo('redirec/placeDetail');
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();

                    if (Ext.getCmp('orderFlag').getValue() != "flagY") {  //为了返回的时候不要再加载
                        store = Ext.getCmp('positionBookId').getStore();
                        var proxy = store.getProxy();
                        proxy.setExtraParam('userPhone', util.getUserCode());
                        proxy.setExtraParam('qqname', decodeURI(getCookie("username")));
                        if (oldActiveItem.id == "homeId") {
                            Ext.getCmp('positionBookId').getStore().loadPage(1);
                        }
                        store.load(function (records, operation, success) {
                            if (success) {
                                if (records.length == 0) {
                                    Ext.getCmp('positionBookId').getStore().setData(null);
                                }
                            }
                        }, this);
                    }

                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                }
            },
            payOrder: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');

                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                }
            },
            myCollect: {
                itemtap: function (list, index, target, record, e) {
                    //if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                    //    Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.park.EmptyView');
                    //}
                    //Ext.Viewport.EmptyView.setRecord(record);
                    dict.add("parkId", record.data.park_id);
                    this.redirectTo('redirec/placeDetail');
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('myCollectId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('userPhone',util.getUserCode());
                    proxy.setExtraParam('qqname', decodeURI(getCookie("username")));
                    if (oldActiveItem.id == "personCenterId") {
                        Ext.getCmp('myCollectId').getStore().loadPage(1);
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('myCollectId').getStore().setData(null);
                            }
                        }
                    }, this);

                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                }
            },
            myCar: {
                itemtap: function (list, index, target, record, e) {
                    //if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                    //    Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    //}
                    //if (util.getUserId() == null) {
                    //    productRecord = record;
                    //}
                    //Ext.Viewport.EmptyView.setRecord(record);
                    //this.redirectTo('redirec/productListView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    //util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var userId = util.getUserCode();
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('myCarId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('userPhone', userId);
                    proxy.setExtraParam('qqname', decodeURI(getCookie("username")));
                    if (oldActiveItem.id == "personCenterId") {
                        Ext.getCmp('myCarId').getStore().loadPage(1);
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('myCarId').getStore().setData(null);
                            }
                        }
                    }, this);

                    //切换视图
                    bar.add({
                        id: 'viewId',
                        xtype: 'img',
                        right: 5,
                        top: 12,
                        centered: true,
                        // src: 'resources/images/system/view_2.png',
                        style: 'color:white;font-size:16px;',
                        html: '添加',
                        width: 45,
                        height: 45,
                        align: 'right',
                        // ui: 'decline',
                        listeners: {
                            tap: function () {
                                me.redirectTo('redirec/addCar');
                            }
                        }
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('viewId'));
                }
            },
            parkAdvInfo: {
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.park.EmptyView');
                    }
                    //if (util.getUserId() == null) {
                    //    productRecord = record;
                    //}
                    Ext.Viewport.EmptyView.setRecord(record);
                    this.redirectTo('redirec/parkAdvInfoView');
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('parkAdvInfoId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "homeId") {
                        Ext.getCmp('parkAdvInfoId').getStore().loadPage(1);
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('parkAdvInfoId').getStore().setData(null);
                            }
                        }
                    }, this);
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                }
            },
            login: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //切换视图
                    bar.add({
                        id: 'viewId',
                        xtype: 'img',
                        right: 5,
                        top: 12,
                        centered: true,
                        // src: 'resources/images/system/view_2.png',
                        style: 'color:white;font-size:16px;',
                        html: '注册',
                        width: 45,
                        height: 45,
                        align: 'right',
                        // ui: 'decline',
                        listeners: {
                            tap: function () {
                                me.redirectTo('redirec/register');
                            }
                        }
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('viewId'));
                }
            },
            quicklogin: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) { },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    clearInterval(Vtimeout);
                    Ext.getCmp("getSmsValidNo").setHtml("获取验证码");
                }
            },
            register: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) { },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    clearInterval(Vtimeout);
                    Ext.getCmp("getSmsValidNo").setHtml("获取验证码");
                }
            },
            findCarPlace: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //var form = Ext.create('Ext.form.Panel', {
                    //    id: 'mapContentId',
                    //    styleHtmlContent: true,
                    //    scrollable: false,
                    //    layout: 'vbox',
                    //    height: document.body.clientHeight - 35,
                    //    width: document.body.clientWidth,
                    //    items: [                            
                    //        {
                    //            xtype: "bmap",
                    //            id: 'map',
                    //            margin: '-63 0 0 -18',
                    //            height: document.body.clientHeight,
                    //            width: document.body.clientWidth
                    //        }
                    //    ]
                    //});
                    //Ext.getCmp('findCarPlaceId').add(form);
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {

                }
            },

        }
    }, ///config

    onLoginOutTap: function () {
        Ext.Msg.show({
            title: "提示",
            message: "你真的要退出登陆吗?",
            width: "90%",
            cls: 'x-msgbox-uuchina',
            buttons: [{
                text: "确定",
                itemId: "ok",
                flex: 1,
                pressedCls: "i-msg-show",
                cls: "msg-button msg-button-left"
            },
            {
                text: "取消",
                itemId: "no",
                flex: 1,
                pressedCls: "i-msg-show",
                cls: "msg-button msg-button-right"
            }],
            fn: function test(btn) {
                if (btn == 'ok') {
                    Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
                        success: function (user) {
                            user.erase();
                        }
                    });
                    config.user = false;
                    localStorage.clear();
                    Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
                }
            },
        });
    },
    onfindPlaceTap: function () {

        this.redirectTo('redirec/findCarPlace');
    },
    onPayFeesTap: function () {
        var qqname = decodeURI(getCookie("username"));
        var picurl = getCookie("picurl");
        if (util.getUserCode() || (qqname && picurl)) {
            this.redirectTo('redirec/payFees');
        } else {
            util.showWarning("请您先登录", true);
        }
    },
    onClearLocalStorageTap: function () {

        localStorage.clear();
        util.showWarning("缓存清空完成!");

    },
    onIntoPersonalInfoTap: function () {
        var qqname = decodeURI(getCookie("username"));
        var picurl = getCookie("picurl");
        if (util.getUserCode() || (qqname && picurl)) {
            this.redirectTo('redirec/personalInfo');
        }
        else {
            this.redirectTo('redirec/login');
        }
    },
    onMyCollectTap: function () {
        var qqname = decodeURI(getCookie("username"));
        var picurl = getCookie("picurl");
        if (util.getUserCode() || (qqname && picurl)) {
            this.redirectTo('redirec/myCollect');
        } else {
            util.showWarning("请您先登录", true);
        }
    },
    onMyCarTap: function () {
        var qqname = decodeURI(getCookie("username"));
        var picurl = getCookie("picurl");
        if (util.getUserCode() || (qqname && picurl)) {
            this.redirectTo('redirec/myCar');
        } else {
            util.showWarning("请您先登录", true);
        }
    },
    onAboutParkTap: function () {
        this.redirectTo('redirec/aboutPark');
    },
    onParkAdvTap: function () {
        this.redirectTo('redirec/parkAdvInfo');
    },
    onPositionBookBtnTap: function () {       
        var qqname = decodeURI(getCookie("username"));
        var picurl = getCookie("picurl");
        if (util.getUserCode() || (qqname && picurl)) {
            this.redirectTo('redirec/positionBook');
        } else {
            util.showWarning("请您先登录", true);
        }
    },

    onExitCenterTap: function () {
        var me = this;
        Ext.Msg.show({
            title: "提示",
            message: "你真的要退出登陆吗?",
            width: "90%",
            cls: 'x-msgbox-uuchina',
            buttons: [{
                text: "确定",
                itemId: "ok",
                flex: 1,
                cls: "msg-button msg-button-left"
            },
            {
                text: "取消",
                itemId: "no",
                flex: 1,
                cls: "msg-button msg-button-right"
            }],
            fn: function test(btn) {
                if (btn == 'ok') {
                    Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
                        success: function (user) {
                            user.erase();
                        }
                    });
                    config.user = false;
                    delCookie("username");
                    delCookie("picurl");
                    // Ext.Viewport.setActiveItem('personCenter', { type: 'slide', direction: 'left' });
                    Ext.getCmp('IntoPersonalInfo').setHtml("<div><div style=''><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='resources/images/noface_60x60.jpg'/></div><div ><p>请登录</p></div></div>");
                    me.redirectTo('redirec/login');
                }
            },
        });
    },
    //获取验证码
    onGetSmsValidNoTap: function () {
        var rgPhoneNumber = Ext.getCmp('RgPhoneNumber').getValue();
        if (rgPhoneNumber == "") {
            util.showWarning("手机号码不能为空"); return;
        }
        var checkPhoneNumber = /^1\d{10}$/;
        if (!checkPhoneNumber.test(rgPhoneNumber)) {
            util.showWarning("请输入有效的手机号码"); return;
        }
        var me = this;
        Ext.getCmp("getSmsValidNo").setDisabled(true);
        Ext.Ajax.request({
            url: util.getMobileSite() + "SystemManage/GetSmsValidNo.ashx",
            params: {
                rgPhoneNumber: rgPhoneNumber
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            success: function (result, context) {
                var checkNo = result.responseText;
                //if (checkNo == "N") {
                //    util.showWarning('该手机号码已被注册，请登录');
                //} else {
                //util.setMasked(true, "正在发送验证码...");
                util.showMessage("获取成功,请检查短信", true);
                Ext.getCmp("loadValidNo").setValue(checkNo);
                Ext.getCmp("loadRgPhoneNumber").setValue(rgPhoneNumber);
                me.VerificationF();
                //   }

            },
            failure: function (result, context) {
                util.setMasked(false);
                util.showMessage("网络异常，请重试", true);
            },
            method: "POST"
        });
    },
    //账号密码登陆
    onUserLoginBtnTap: function () {
        var me = this;
        var phoneNum = Ext.getCmp('phonenumber').getValue();
        var password = Ext.getCmp("password").getValue();
        if (phoneNum == "" || password == "") {
            util.showWarning("账号或密码不能为空"); return;
        }
        Ext.Ajax.request({
            url: util.getMobileSite() + "Park/UserLogin.ashx",
            params: {
                phoneNum: phoneNum, password: password
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            success: function (result, context) {
                if (result.responseText == "success") {
                    var logUser = Ext.create('ChuangCai.model.User', {
                        id: 1,
                        userid:phoneNum,
                        usercode: phoneNum,
                    });
                    logUser.save();
                    util.showMessage("登陆成功!", true);
                    me.redirectTo('redirec/parkHome');
                } else {
                    util.showMessage("账号或密码错误!", true);
                }
            },
            failure: function (result, context) {
                util.showMessage("网络异常，请重试", true);
            },
            method: "POST"
        });
    },

    //一键登陆
    onUserRegisterTap: function () {
        var me = this;
        var rgPhoneNumber = Ext.getCmp('RgPhoneNumber').getValue();
        var verificationNumber = Ext.getCmp("VerificationNumber").getValue();
        var loadValidNo = Ext.getCmp("loadValidNo").getValue();
        var loadRgPhoneNumber = Ext.getCmp("loadRgPhoneNumber").getValue();
        if (rgPhoneNumber == "") {
            util.showWarning("手机号码不能为空"); return;
        }
        var checkPhoneNumber = /^1\d{10}$/;
        if (!checkPhoneNumber.test(rgPhoneNumber)) {
            util.showWarning("请输入有效的手机号码"); return;
        }
        if (loadValidNo == "") {
            util.showWarning("请您先获取验证码"); return;
        }
        if (verificationNumber == "") {
            util.showWarning("验证码不能为空"); return;
        }

        if (rgPhoneNumber != loadRgPhoneNumber) {
            util.showWarning("请重新获取验证码"); return;
        }
        if (verificationNumber != loadValidNo) {
            util.showWarning("验证码输入有误"); return;
        }
        //if (passwordText == passwordTextAgin) {
        Ext.Ajax.request({
            url: util.getMobileSite() + "Park/UserLogin.ashx",
            params: {
                phoneNum: rgPhoneNumber, quicklogin: "quicklogin"
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            success: function (result, context) {
                var logUser = Ext.create('ChuangCai.model.User', {
                    id: 1,
                    usercode: rgPhoneNumber,
                });
                logUser.save();
                clearInterval(Vtimeout);
                Ext.getCmp("getSmsValidNo").setHtml("获取验证码");
                //   this.redirectTo('redirec/personCenter');
                util.showMessage("登陆成功!", true);
                me.redirectTo('redirec/parkHome');
                // Ext.Viewport.setActiveItem('main', { type: 'slide', direction: 'left' });
            },
            failure: function (result, context) {
                util.showMessage("网络异常，请重试", true);
            },
            method: "POST"
        });
        //}
    },
    setMiao: function () {
        if (totalSecond > 0) {
            Ext.getCmp("getSmsValidNo").setHtml("剩余" + totalSecond + "秒");
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
    onQuickLoginBtnTap: function () {
        this.redirectTo('redirec/quicklogin');
    },
    onregToLoginTap: function () {
        this.redirectTo('redirec/login');
    },
    //注册
    onRegisterTap: function () {
        //   console.log("dsf");
        var me = this;
        var rgPhoneNumber = Ext.getCmp('RgPhoneNumber').getValue();
        var verificationNumber = Ext.getCmp("VerificationNumber").getValue();
        var loadValidNo = Ext.getCmp("loadValidNo").getValue();
        var loadRgPhoneNumber = Ext.getCmp("loadRgPhoneNumber").getValue();
        var passwordText = Ext.getCmp('passwordText').getValue();
        var passwordTextAgin = Ext.getCmp('passwordTextAgin').getValue();
        if (rgPhoneNumber == "") {
            util.showWarning("手机号码不能为空"); return;
        }
        var checkPhoneNumber = /^1\d{10}$/;
        if (!checkPhoneNumber.test(rgPhoneNumber)) {
            util.showWarning("请输入有效的手机号码"); return;
        }
        if (loadValidNo == "") {
            util.showWarning("请您先获取验证码"); return;
        }
        if (verificationNumber == "") {
            util.showWarning("验证码不能为空"); return;
        }

        if (rgPhoneNumber != loadRgPhoneNumber) {
            util.showWarning("请重新获取验证码"); return;
        }
        if (verificationNumber != loadValidNo) {
            util.showWarning("验证码输入有误"); return;
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
        if (passwordText == passwordTextAgin) {
            Ext.Ajax.request({
                url: util.getMobileSite() + "Park/RegisterUser.ashx",
                params: {
                    phoneNumber: rgPhoneNumber, password: passwordText
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    clearInterval(Vtimeout);
                    Ext.getCmp("getSmsValidNo").setHtml("获取验证码");
                    if (result.responseText == "exist") {
                        Ext.getCmp("VerificationNumber").setValue("");
                        Ext.getCmp("loadValidNo").setValue("");
                        Ext.getCmp("loadRgPhoneNumber").setValue("");
                        Ext.getCmp('passwordText').setValue("");
                        Ext.getCmp('passwordTextAgin').setValue("");
                        util.showMessage("该号码已经被注册!", true);
                    } else {
                        var logUser = Ext.create('ChuangCai.model.User', {
                            id: 1,
                            usercode: rgPhoneNumber,
                        });
                        logUser.save();
                        util.showMessage("注册成功!", true);
                        me.redirectTo('redirec/parkHome');
                        //   Ext.Viewport.setActiveItem('parkHome', { type: 'slide', direction: 'left' });
                    }
                },
                failure: function (result, context) {
                    util.showMessage("网络异常，请重试", true);
                },
                method: "POST"
            });
        }
    },
    //qq登陆
    onQqLoginBtnTap: function () {
        //  console.log("aaa");
        window.location.href = util.getMobileSite() + "Park/QQLoginOAuth.ashx";
        //Ext.Ajax.request({
        //    url: util.getMobileSite() + "Park/QQLoginOAuth.ashx",
        //    params: {

        //    },
        //    headers: { 'X-Requested-With': 'XMLHttpRequest' },
        //    success: function (result, context) {
        //        var result = result.responseText;
        //        console.log(result);

        //    },
        //    failure: function (result, context) {
        //        util.setMasked(false);
        //        util.showMessage("网络异常，请重试", true);
        //    },
        //    method: "POST"
        //});
    },

    onImmediateNaviTap: function () {
        var Slat = dict.get("Slat");
        var Slng = dict.get("Slng");
        var Elat = dict.get("Elat");
        var Elng = dict.get("Elng");
        var QElat = dict.get("QElat");
        var QElng = dict.get("QElng");
        goToHere(Slat, Slng, Elat, Elng, QElat, QElng);
    },

    onCollectionPlaceTap: function () {
        var parkId = Ext.getCmp('loadParkId').getValue();
        var collectionFlag = Ext.getCmp('loadCollectionId').getValue();
        var qqname = decodeURI(getCookie("username"));
        var picurl = getCookie("picurl");
        if (util.getUserCode() || (qqname && picurl)) {
            Ext.Ajax.request({
                url: util.getMobileSite() + "Park/ParkCollection.ashx",
                params: {
                    parkId: parkId, collectionFlag: collectionFlag, userId: util.getUserCode(), qqname: qqname
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    if (collectionFlag == "Y") {
                        Ext.getCmp('loadCollectionId').setValue("N");
                        Ext.getCmp('collectionPlace').setHtml("<img style='width:20px;height:20px;' src='resources/images/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>收藏</p>");
                        util.showMessage("已取消收藏", true, 0.5);
                    }
                    else {
                        Ext.getCmp('loadCollectionId').setValue("Y");
                        Ext.getCmp('collectionPlace').setHtml("<img style='width:20px;height:20px;' src='resources/images/already_collected.png'/><p style='text-align:center;font-size: 12px;color: #999;'>已收藏</p>");
                        util.showMessage("已收藏", true, 0.5);
                    }
                },
                failure: function (result, context) {
                    util.showMessage("网络异常，请重试", true);
                },
                method: "POST"
            });
        } else {
            util.showWarning("请您先登录", true);
        }
    },
    onOrderPlaceTap: function () {
        var me = this;
        var parkId = Ext.getCmp('loadParkId').getValue();
        var qqname = decodeURI(getCookie("username"));
        var picurl = getCookie("picurl");
        //有个判断：VIP才能预约
        if (util.getUserCode() || (qqname && picurl)) {
            Ext.Ajax.request({
                url: util.getMobileSite() + "Park/OrderPlace.ashx",
                params: {
                    parkId: parkId, userId: util.getUserCode(), qqname: qqname
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    util.showMessage("预约成功!", true);
                },
                failure: function (result, context) {
                    util.showMessage("网络异常，请重试", true);
                },
                method: "POST"
            });
        } else {
            util.showWarning("请您先登录", true);
        }
    },
    onAddCarBtnTap: function () {
        var me = this;
        var carId = Ext.getCmp('carId').getValue();
        var carRemark = Ext.getCmp('carRemark').getValue();
        var qqname = decodeURI(getCookie("username"));
        var picurl = getCookie("picurl");
        if (carId == "") {
            util.showWarning("车牌号不能为空"); return;
        }
        if (util.getUserCode() || (qqname && picurl)) {
            Ext.Ajax.request({
                url: util.getMobileSite() + "Park/AddCar.ashx",
                params: {
                    carId: carId, carRemark: carRemark, userId: util.getUserCode(), qqname: qqname
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    util.showMessage("添加成功!", true);
                    Ext.getCmp('carId').setValue("");
                    Ext.getCmp('carRemark').setValue("");
                    me.redirectTo('redirec/myCar');
                },
                failure: function (result, context) {
                    util.showMessage("网络异常，请重试", true);
                },
                method: "POST"
            });
        } else {
            util.showWarning("请您先登录", true);
        }
    },
    onGetFeeTap: function () {
        this.redirectTo('redirec/payOrder');
    },

    onMyBookIdTap: function () {
        Ext.getCmp("myBookId").setCls("massage-tab massage-tab-first massage-tab-active");
        Ext.getCmp("placeBookId").setCls("massage-tab");

        store = Ext.getCmp('positionBookId').getStore();
        var proxy = store.getProxy();
        proxy.setExtraParam('userPhone', util.getUserCode());
        proxy.setExtraParam('qqname', decodeURI(getCookie("username")));
        //if (oldActiveItem.id == "homeId") {
        Ext.getCmp('positionBookId').getStore().loadPage(1);
        //}
        store.load(function (records, operation, success) {
            if (success) {
                if (records.length == 0) {
                    Ext.getCmp('positionBookId').getStore().setData(null);
                }
            }
        }, this);
        //Ext.getCmp("serviceContentId").setHidden(false)
        //Ext.getCmp("noticeContentId").setHidden(true)
        //Ext.getCmp("orderContentId").setHidden(true)
    },
    onPlaceBookIdTap: function () {
        Ext.getCmp("placeBookId").setCls("massage-tab massage-tab-first massage-tab-active");
        Ext.getCmp("myBookId").setCls("massage-tab");
        Ext.getCmp('orderFlag').setValue("flagY");
        util.setMasked(true, "Loading...");
        function getLocation() {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 10000
            }
            if (navigator.geolocation) {
                //浏览器支持geolocation
                navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
            } else {
                alert("不支持");
            }
        }
        //成功时
        function onSuccess(position) {
            //返回用户位置
            //经度
            var longitude = position.coords.longitude;
            //纬度
            var latitude = position.coords.latitude;
            //创建一个坐标
            var point = new BMap.Point(longitude, latitude);
            //坐标转换完之后的回调函数
            translateCallback = function (data) {
                if (data.status === 0) {
                    //得到当前定位坐标,传到服务器端，然后返回周边可预约的停车场列表信息
                    start = data.points[0];
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Park/GetParkOrderList.ashx",
                        params: {
                            Slat: start.lat, Slng: start.lng
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            if (result.responseText.length < 6) {
                                Ext.getCmp("positionBookId").getStore().setData(null);
                            } else {
                                Ext.getCmp("positionBookId").getStore().setData(eval(result.responseText));
                            }
                            util.setMasked(false);
                        },
                        failure: function (result, context) {
                            util.showMessage("网络异常，请重试", true);
                        },
                        method: "POST"
                    });
                }
            }
            setTimeout(function () {
                var convertor = new BMap.Convertor();
                var pointArr = [];
                pointArr.push(point);
                convertor.translate(pointArr, 1, 5, translateCallback)
            }, 1000);
        }
        //失败时
        function onError(error) {
            switch (error.code) {
                case 1:
                    alert("位置服务被拒绝"); break;
                case 2:
                    alert("暂时获取不到位置信息"); break;
                case 3:
                    alert("获取信息超时"); break;
                case 4:
                    alert("未知错误"); break;
            }
        }

        window.setTimeout(function () {
            getLocation();
        }, 1000);
    },
    onFeeSelectTap: function () {
        Ext.getCmp("feeSelect").setCls("m-select-field m-select-field-active");
        if (!this.parkfee) {
            //类型
            Ext.define('fCategory', {
                extend: 'Ext.data.Model',
                config: {
                    fields: [{
                        //id
                        name: 'id',
                        type: 'string'
                    },
                    {
                        //类型名称
                        name: 'name',
                        type: 'string'
                    }]
                }
            });
            var parkfeeStore = Ext.create('Ext.data.Store', {
                model: 'fCategory',
                //sorters: 'id',
                data: [{
                    id: 'feeAll', name: '全部'
                }, {
                    id: 'feeNo', name: '免费'
                }, {
                    id: 'feeOk', name: '收费'
                }],
                //   autoLoad: true
            });
            this.parkfee = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.33,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("feeSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "feeWayId",
                    width: "80px",
                    store: parkfeeStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 3 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{name}</td>', "</table></div>"]
                }]
            });
            parkfeeStore.load();
            Ext.Viewport.add(this.parkfee);
            var _this = this;

            Ext.getCmp("feeWayId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.parkfee.hide();
                Ext.getCmp("feeSelect").setHtml(record.data.name + "<span></span>");
                Ext.getCmp("feeSelect").setCls("m-select-field");
                dict.add("feeType", record.data.id);

                Ext.getCmp('findCarPlaceId').remove(Ext.getCmp('mapContentId'));
                var form = Ext.create('Ext.form.Panel', {
                    id: 'mapContentId',
                    styleHtmlContent: true,
                    scrollable: false,
                    layout: 'vbox',
                    height: document.body.clientHeight - 35,
                    width: document.body.clientWidth,
                    items: [
                        {
                            xtype: "bmap",
                            id: 'map',
                            margin: '-63 0 0 -18',
                            height: document.body.clientHeight,
                            width: document.body.clientWidth
                        }
                    ]
                });
                Ext.getCmp('findCarPlaceId').add(form);
            })
        }
        else {
            if (this.parkfee.getHidden()) {
                this.parkfee.show();
                Ext.getCmp("feeSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("feeSelect").setCls("m-select-field");
            }
        }
    },
    onOrderSelectTap: function () {
        Ext.getCmp("orderSelect").setCls("m-select-field m-select-field-active");
        if (!this.parkorder) {
            //类型
            Ext.define('qCategory', {
                extend: 'Ext.data.Model',
                config: {
                    fields: [{
                        //id
                        name: 'id',
                        type: 'string'
                    },
                    {
                        //类型名称
                        name: 'name',
                        type: 'string'
                    }]
                }
            });
            var parkorderStore = Ext.create('Ext.data.Store', {
                model: 'qCategory',
                //sorters: 'id',
                data: [{
                    id: 'orderAll', name: '全部'
                }, {
                    id: 'orderOk', name: '可预约'
                }, {
                    id: 'orderNo', name: '不可预约'
                }],
                //   autoLoad: true
            });
            this.parkorder = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.285 * 2.3,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("orderSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "orderWayId",
                    width: "80px",
                    store: parkorderStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{name}</td>', "</table></div>"]
                }]
            });
            parkorderStore.load();
            Ext.Viewport.add(this.parkorder);
            var _this = this;

            Ext.getCmp("orderWayId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.parkorder.hide();
                Ext.getCmp("orderSelect").setHtml(record.data.name + "<span></span>");
                Ext.getCmp("orderSelect").setCls("m-select-field");
                dict.add("orderType", record.data.id);

                Ext.getCmp('findCarPlaceId').remove(Ext.getCmp('mapContentId'));
                var form = Ext.create('Ext.form.Panel', {
                    id: 'mapContentId',
                    styleHtmlContent: true,
                    scrollable: false,
                    layout: 'vbox',
                    height: document.body.clientHeight - 35,
                    width: document.body.clientWidth,
                    items: [
                        {
                            xtype: "bmap",
                            id: 'map',
                            margin: '-63 0 0 -18',
                            height: document.body.clientHeight,
                            width: document.body.clientWidth
                        }
                    ]
                });
                Ext.getCmp('findCarPlaceId').add(form);
            })
        }
        else {
            if (this.parkorder.getHidden()) {
                this.parkorder.show();
                Ext.getCmp("orderSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("orderSelect").setCls("m-select-field");
            }
        }
    },

    //支付下单
    onGetFeeBtnTap: function () {
        var out_trade_no = "147896589629865";//15位订单号
        var subject = "支付测试产品";
        var bodtxt = "支付测试产品";
        var total_fee = "0.01";
        window.plugins.Pgalipay.alipay(
           out_trade_no, subject, bodtxt, total_fee,
                    function (success) {
                        //var element = document.getElementById('alipaylog');
                        //element.innerHTML = "支付结果1:"+success;
                        alert(success);
                    }, function (fail) {
                        alert("encoding failed: " + fail);
                    }
        );
        navigator.notification.confirm(
            '正在支付请稍后',
            function (button) {
                //data = -2 支付失败
                //data = -1 支付参数错误
                //data = 0  支付成功

                if (button === 2) {
                    window.plugins.Pgwxpay.getcode(
                       function (success) {
                           //var element = document.getElementById('wxlog');
                           //element.innerHTML = "支付结果:" + success;
                           alert(success);
                       }, function (fail) {
                           alert("encoding failed: " + fail);
                       });

                } else {
                    window.plugins.Pgwxpay.getcode(
                        function (success) {
                            //var element = document.getElementById('wxlog');
                            //element.innerHTML = "支付结果:" + success;
                            alert(success);
                        }, function (fail) {
                            alert("encoding failed: " + fail);
                        });
                }
            },
            '小贴士',
            ['未完成支付', '已完成支付']
         );
    }
});