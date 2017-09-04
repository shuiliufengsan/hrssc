Ext.define('ChuangCai.controller.SystemList', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['system.News', 'system.Notice', 'system.Message', 'system.Contact', 'system.Video', 'system.Task', 'system.ApproveCenter', 'system.NewsCategory', 'system.NewsComment'],
        stores: ['system.News', 'system.Notice', 'system.Message', 'system.Contact', 'system.Video', 'system.Task', 'system.ApproveCenter', 'system.NewsCategory', 'system.NewsComment'],
        views: ['system.NewsBrw', 'system.NoticeBrw', 'system.MessageBrw', 'system.ContactBrw', 'system.VideoBrw', 'system.TaskBrw', 'system.ApproveCenterBrw', 'system.NewsCommentBrw', 'system.About', 'system.ServiceTerms', 'system.AboutDetail', 'system.UserFeedback'],
        //refs: {
        //    'newsBrw': 'newsBrw #news_search_box',
        //    'loadedImage': 'UserFeedbackInfo #loadedImage',
        //    'fileUpBtn': 'UserFeedbackInfo #fileUpBtn'
        //},
        control: {
            UserFeedbackInfo: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    fileCount = 0;
                    fileArray = new Array();
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 5,
                            centered: true,
                            src: 'resources/images/system/check.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var suggestType = Ext.getCmp("suggestTypeId").getValue();
                                    if (!suggestType) {
                                        util.showWarning("请选择建议类型！");
                                        return;
                                    }
                                    var suggestContent = Ext.getCmp("suggestContentId").getValue();
                                    if (!suggestContent) {
                                        util.showWarning("请输入建议内容！");
                                        return;
                                    }
                                    var contactTel = Ext.getCmp("contactTelId").getValue();
                                    util.setMasked(true, "正在提交...");
                                    Ext.Ajax.request({
                                        url: util.getMobileSite() + "SystemManage/Feedback.ashx",
                                        params: {
                                            suggestType: suggestType, suggestContent: suggestContent, contactTel: contactTel, companyId: util.getCompanyId(), userId: util.getUserId()
                                        },
                                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                        success: function (result, context) {
                                            util.setMasked(false);
                                            util.showWarning("提交成功！");
                                        },
                                        failure: function (result) {
                                            util.setMasked(false);
                                            var msg = result.responseText;
                                            util.showWarning(msg);
                                        },
                                        method: "POST"
                                    });

                                    //扫描二维码
                                    //cordova.plugins.barcodeScanner.scan(
                                    //	function (result) {
                                    //		alert("Scanned Code: " + result.text
                                    //                + ". Format: " + result.format
                                    //                + ". Cancelled: " + result.cancelled);
                                    //	}, function (error) {
                                    //		alert("Scan failed: " + error);
                                    //	}
                                    //);

                                    //判断网络
                                    //var networkState = navigator.connection.type;

                                    //var states = {};
                                    //states[Connection.UNKNOWN] = 'Unknown connection';
                                    //states[Connection.ETHERNET] = 'Ethernet connection';
                                    //states[Connection.WIFI] = 'WiFi connection';
                                    //states[Connection.CELL_2G] = 'Cell 2G connection';
                                    //states[Connection.CELL_3G] = 'Cell 3G connection';
                                    //states[Connection.CELL_4G] = 'Cell 4G connection';
                                    //states[Connection.CELL] = 'Cell generic connection';
                                    //states[Connection.NONE] = 'No network connection';

                                    //alert('Connection type: ' + states[networkState]);

                                    // Audio player
                                    //
                                    //var my_media = new Media(src, onSuccess, onError);

                                    //// Update media position every second
                                    //var mediaTimer = setInterval(function () {
                                    //    // get media position
                                    //    my_media.getCurrentPosition(
                                    //        // success callback
                                    //        function (position) {
                                    //            if (position > -1) {
                                    //                console.log((position) + " sec");
                                    //            }
                                    //        },
                                    //        // error callback
                                    //        function (e) {
                                    //            console.log("Error getting pos=" + e);
                                    //        }
                                    //    );
                                    //}, 1000);

                                    var myContact = navigator.contacts.create({ "displayName": "Test User" });

                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('moreId'));
                }

            },
            'UserFeedbackInfo button[itemId=fileLoadBtn]': {
                tap: 'onTapCamera'
            },
            //'UserFeedbackInfo button[itemId=fileLoadBtn]': {
            //    loadsuccess: 'onFileLoadSuccess',
            //    loadfailure: 'onFileLoadFailure'
            //},
            'UserFeedbackInfo button[itemId=fileUpBtn]': {
                tap: 'onButtonTap'
            },
            'newsView image[itemId=comment_send_box]': {
                tap: 'onCommentSendTap'
            },
            'newscommentBrw image[itemId=comment_send_box]': {
                tap: 'onCommentSendTap'
            },
            //newsView: {
            //    activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
            //        var aRecord = Ext.Viewport.NewsView.getRecord();

            //        if (aRecord == null) {
            //            util.showMessage1('空', true);
            //        }
            //        else {
            //            if (Ext.getCmp('newsView').getHtml() == null) {
            //                Ext.getCmp('newsView').setHtml("dd");
            //            }
            //        }
            //    }
            //},
            'newsBrw button[itemId=newsBrwNewId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("newsBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("newsBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('newsBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('readFlag', "N");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('newsBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'newsBrw button[itemId=newsBrwCompleteId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("newsBrwNewId").setCls("u-tab");
                    Ext.getCmp("newsBrwCompleteId").setCls("u-tab u-tab-first u-tab-active");

                    store = Ext.getCmp('newsBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('readFlag', "Y");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('newsBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            newsBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.NewsView) == "undefined") {
                        Ext.Viewport.NewsView = Ext.create('ChuangCai.view.system.NewsView');
                    }
                    Ext.Viewport.NewsView.setRecord(record);
                    this.redirectTo('redirec/newsView');
                },
                //itemswipe: function (list, idx, target, record, evt) {
                //    if (evt.direction == "left") {
                //        evt.stopEvent();
                //        //util.showWarning("Left");

                //    }
                //    else if (evt.direction == "right") {
                //        evt.stopEvent();
                //        util.showWarning("right");
                //    }
                //},
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    //util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //Ext.get('newsBrwId').on('swipe', 'onViewSwipe', this);
                    //Ext.getCmp('newsBrwId').getStore().load();
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    bar.titleComponent.setZIndex(-1);
                    store = Ext.getCmp('newsBrwId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "homeId") {
                        proxy.setExtraParam('readFlag', "N");

                    } else if (oldActiveItem.id == "newsView") {
                        proxy.setExtraParam('status', "Y");
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('newsBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //bar.setZIndex(-1);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('news_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('news_search_box'));
                    }
                    //求当前状态汇总
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetNewsReadFlag.ashx",
                        params: {
                            userId: util.getUserId()
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            Ext.getCmp("newsBrwNewId").setText("未读新闻<span>(" + json[0] + ")</span>");
                            Ext.getCmp("newsBrwCompleteId").setText("已读新闻<span>(" + json[1] + ")</span>");
                        },
                        failure: function (result) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                    bar.add({
                        id: 'newsTitleId',
                        xtype: 'img',
                        right: 105,
                        centered: true,
                        zIndex: 10,
                        src: 'resources/images/system/ic_arrow_down.png',
                        //html: '新闻中心<img width="10" height="10" align="absmiddle" scr="http://127.0.0.1:8008/Mobile/resources/images/larr.png"/>',
                        width: document.body.clientWidth - 210,
                        height: 45,
                        align: 'right',
                        listeners: {
                            tap: function () {
                                //Ext.getCmp('newsTitleId').setSrc('resources/images/system/ic_arrow_up.png');
                                var menuStore = Ext.create('Ext.data.Store', {
                                    id: 'newsStoreId',
                                    fields: ['name', 'icon', 'needsIcon'],
                                });
                                if (Ext.get('queryToolbarId') == null) {
                                    menuStore.add({ "id": "queryId", "name": "查询", "icon": 'password', "needsIcon": true });
                                }
                                else {
                                    menuStore.add({ "id": "cancelQueryId", "name": "取消查询", "icon": 'password', "needsIcon": true });
                                }
                                menuStore.add({ "id": "refreshId", "name": "刷新", "icon": 'question', "needsIcon": true });
                                menuStore.add({ "id": "multiselectId", "name": "多选", "icon": 'question', "needsIcon": true });
                                menuStore.add({ "id": "sortId", "name": "排序", "icon": 'sound', "needsIcon": true });
                                menuStore.add({ "id": "favoriteId", "name": "收藏", "icon": 'question', "needsIcon": true });
                                menuStore.add({ "id": "mainId", "name": "主页", "icon": 'question', "needsIcon": true });
                                Ext.create('Ext.dataview.List', {
                                    centered: true,
                                    modal: {
                                        style: 'opacity: 0'
                                    },
                                    hideOnMaskTap: true,
                                    width: '60%',
                                    height: '300px',
                                    //数据源
                                    itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                    store: menuStore,
                                }).showBy(Ext.getCmp('newsTitleId'));
                            }
                        }
                    });
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 0,
                            centered: true,
                            src: 'resources/images/system/more.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var menuStore = Ext.create('Ext.data.Store', {
                                        id: 'newsStoreId',
                                        fields: ['name', 'icon', 'needsIcon'],
                                    });
                                    //if (Ext.get('queryToolbarId') == null) {
                                    //    menuStore.add({ "id": "queryId", "name": "查询", "icon": 'password', "needsIcon": true });
                                    //}
                                    //else {
                                    //    menuStore.add({ "id": "cancelQueryId", "name": "取消查询", "icon": 'password', "needsIcon": true });
                                    //}
                                    //menuStore.add({ "id": "refreshId", "name": "刷新", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "multiselectId", "name": "多选", "icon": 'discuss', "needsIcon": true });
                                    //menuStore.add({ "id": "sortId", "name": "排序", "icon": 'sound', "needsIcon": true });
                                    menuStore.add({ "id": "favoriteId", "name": "收藏", "icon": 'collects', "needsIcon": true });
                                    menuStore.add({ "id": "mainId", "name": "主页", "icon": 'login', "needsIcon": true });
                                    Ext.create('Ext.dataview.List', {
                                        centered: true,
                                        modal: {
                                            style: 'opacity: 0'
                                        },
                                        hideOnMaskTap: true,
                                        width: '60%',
                                        height: '150px',
                                        //数据源
                                        itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                        store: menuStore,
                                        listeners: {
                                            itemsingletap: function (list, index, target, record, e) {
                                                var id = record.data.id;
                                                switch (id) {
                                                    case 'queryId':
                                                        if (record.data.name == "查询") {
                                                            record.data.name = "取消查询";
                                                        }
                                                        if (Ext.get('queryToolbarId') == null) {
                                                            var queryToolbar = Ext.create('Ext.Panel', {
                                                                docked: 'top',
                                                                id: 'queryToolbarId',
                                                                //cls: 'navToolbar',
                                                                height: '45px',
                                                                layout: "hbox",
                                                                width: document.body.clientWidth,
                                                                items: [{
                                                                    xtype: 'image',
                                                                    height: '45px',
                                                                    width: '40px',
                                                                    cls: "i-search-icon"
                                                                }, {
                                                                    xtype: 'textfield',
                                                                    itemId: 'news_search_box',
                                                                    id: 'news_search_box',
                                                                    height: '44px',
                                                                    margin: 0,
                                                                    cls: "i-search-text",
                                                                    clearIcon: false,
                                                                    placeHolder: "请输入查询条件",
                                                                    width: document.body.clientWidth - 80,
                                                                }, {
                                                                    xtype: 'image',
                                                                    itemId: 'cancel_news_search_box',
                                                                    height: '45px',
                                                                    width: '40px',
                                                                    cls: "i-search-cancel-icon"
                                                                }]
                                                            });
                                                            Ext.getCmp('newsBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('newsBrwId').getStore().clearFilter();
                                                        Ext.getCmp('newsBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp("newsBrwId").getStore().loadPage(1);
                                                        //me.redirectTo('redirec/newsView');
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('newsBrwId').beginSimple("", "", "edit");
                                                        break;
                                                    case 'mainId':
                                                        me.redirectTo('redirec/home')
                                                        break;
                                                    default:
                                                        null;
                                                }
                                                list.hide();
                                            }
                                        }
                                    }).showBy(Ext.getCmp('moreId'));
                                }
                            }
                        });
                    };
                    bar.add({
                        id: 'newsSearchId',
                        xtype: 'img',
                        right: 35,
                        centered: true,
                        src: 'resources/images/system/search.png',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        listeners: {
                            tap: function () {
                                //util.showMessage("qqqq");
                                var queryToolbar = Ext.create('Ext.Panel', {
                                    docked: 'top',
                                    id: 'queryToolbarId',
                                    //cls: 'navToolbar',
                                    height: '45px',
                                    layout: "hbox",
                                    width: document.body.clientWidth,
                                    items: [{
                                        xtype: 'image',
                                        height: '45px',
                                        width: '40px',
                                        cls: "i-search-icon"
                                    }, {
                                        xtype: 'textfield',
                                        itemId: 'news_search_box',
                                        id: 'news_search_box',
                                        height: '44px',
                                        margin: 0,
                                        cls: "i-search-text",
                                        clearIcon: false,
                                        placeHolder: "请输入查询条件",
                                        width: document.body.clientWidth - 80,
                                    }, {
                                        xtype: 'image',
                                        itemId: 'cancel_news_search_box',
                                        height: '45px',
                                        width: '40px',
                                        cls: "i-search-cancel-icon"
                                    }]
                                });
                                Ext.getCmp('newsBrwId').add([queryToolbar]);
                            }
                        }
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    //Ext.getCmp('newsBrwId').getStore().clearFilter();
                    if (typeof (Ext.getCmp("newsBrwId").getStore().getProxy()._extraParams.period) != "undefined") {
                        if (Ext.getCmp("newsBrwId").getStore().getProxy()._extraParams.period != "") {
                            Ext.getCmp("newsBrwId").getStore().getProxy().setExtraParam("period", "");
                            Ext.getCmp("newsBrwId").getStore().loadPage(1);
                        }
                    }
                    if (typeof (Ext.getCmp("newsBrwId").getStore().getProxy()._extraParams.value) != "undefined") {
                        if (Ext.getCmp("newsBrwId").getStore().getProxy()._extraParams.value != "") {
                            Ext.getCmp("newsBrwId").getStore().getProxy().setExtraParam("value", "");
                            Ext.getCmp("newsBrwId").getStore().loadPage(1);
                        }
                    }
                    //Ext.getCmp("newsBrwId").getStore().getProxy().setExtraParam("value", "");

                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('newsTitleId'));
                    bar.remove(Ext.getCmp('moreId'));
                    bar.remove(Ext.getCmp('newsSearchId'));
                }
            },
            'newsBrw textfield[itemId=news_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'newsBrw image[itemId=cancel_news_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("newsBrwId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("newsBrwId").getStore().loadPage(1);
                    Ext.getCmp('newsBrwId').remove(Ext.getCmp('queryToolbarId'));
                }
            },
            //swipe: function (e, target, options, eOpts) {
            //    util.showWarning("测试Swipe");
            //    if (e.direction === 'left' && e.distance >= 20) {
            //        util.showWarning('move left');
            //    } else if (e.direction === 'right' && e.distance >= 20) {
            //        util.showWarning('move right');
            //    }
            //},
            
            newsView: {
                //itemsingletap: function (list, index, target, record, e) {
                //    if (Ext.Viewport.NewsCommentView == undefined) {
                //        Ext.Viewport.NewsCommentView = Ext.create('ChuangCai.view.system.NewsCommentView');
                //        Ext.Viewport.add(Ext.Viewport.NewsCommentView);
                //    }
                //    Ext.Viewport.NewsCommentView.setRecord(record);
                //    this.redirectTo('redirec/newscommentBrw');
                //},
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    // Ext.getCmp('newsViewId').getStore().load();
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    var aRecord = Ext.Viewport.NewsView.getRecord();
                    if (aRecord == null) {
                        util.showMessage1('空', true);
                    }
                    else {
                        Ext.Ajax.request({
                            url: util.getMobileSite() + "SystemManage/GetNewsView.ashx?userId=" + util.getUserId(),
                            params: {
                                newsId: aRecord.data.id
                            },
                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                            success: function (result, context) {
                                //util.showMessage(aRecord.data.title, true);
                                Ext.getCmp('appearCommentContent').setHtml('<div class="newsTitle">' + aRecord.data.title + '</div><div class="newsTime">' + aRecord.data.publish_date + '</div><br/><div class="top-panel">' + result.responseText + '</div>');
                                Ext.getCmp('appearCommentContent').setScrollable(true);
                                Ext.getCmp('loadNewsId').setValue(aRecord.data.id);
                            },
                            failure: function (result, context) {
                                var msg = result.responseText;
                                util.showMessage(msg, true);
                            },
                            method: "POST"
                        });
                    }

                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }
                    //if (Ext.getCmp('moreId') == null) {
                    bar.add({
                        id: 'moreId',
                        xtype: 'button',
                        right: 0,
                        centered: true,
                        // style:"background-image: -webkit-gradient(linear,50% 0%,50% 100%,color-stop(0%,#DEDEDE),color-stop(100%,#F6F6F6));background-image: linear-gradient(#DEDEDE,#F6F6F6);background-image: -webkit-linear-gradient(#DEDEDE,#F6F6F6);color: #11598c;",
                        style: "background-color:transparent;background-image:none;",
                        //hidden:true,
                        //src: 'resources/images/system/add.png',
                        width: 72,
                        height: 20,
                        align: 'right',
                        //ui: 'decline',
                        listeners: {
                            tap: function () {
                                //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                me.redirectTo('redirec/newscommentBrw');
                            }
                        }
                    });
                    //};
                    //评论数
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetNewsCommentNum.ashx",
                        params: {
                            newsId: aRecord.data.id
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            //Ext.getCmp("newsBrwNewId").setText("未读新闻<span>(" + json[0] + ")</span>");
                            //Ext.getCmp("newsBrwCompleteId").setText("已读新闻<span>(" + json[1] + ")</span>");
                            Ext.getCmp("moreId").setText("<span>" + json[0] + "</span>跟帖");
                        },
                        failure: function (result) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 5,
                            centered: true,
                            src: 'resources/images/system/more.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var menuStore = Ext.create('Ext.data.Store', {
                                        id: 'newsStoreId',
                                        fields: ['name', 'icon', 'needsIcon'],
                                    });
                                    if (Ext.get('queryToolbarId') == null) {
                                        menuStore.add({ "id": "queryId", "name": "查询", "icon": 'password', "needsIcon": true });
                                    }
                                    else {
                                        menuStore.add({ "id": "cancelQueryId", "name": "取消查询", "icon": 'password', "needsIcon": true });
                                    }
                                    menuStore.add({ "id": "refreshId", "name": "刷新", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "multiselectId", "name": "多选", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "sortId", "name": "排序", "icon": 'sound', "needsIcon": true });
                                    menuStore.add({ "id": "favoriteId", "name": "收藏", "icon": 'question', "needsIcon": true });
                                    Ext.create('Ext.dataview.List', {
                                        centered: true,
                                        modal: {
                                            style: 'opacity: 0'
                                        },
                                        hideOnMaskTap: true,
                                        width: '60%',
                                        height: '250px',
                                        //数据源
                                        itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                        store: menuStore,
                                        listeners: {
                                            itemsingletap: function (list, index, target, record, e) {
                                                var id = record.data.id;
                                                switch (id) {
                                                    case 'queryId':
                                                        if (record.data.name == "查询") {
                                                            record.data.name = "取消查询";
                                                        }
                                                        if (Ext.get('queryToolbarId') == null) {
                                                            var queryToolbar = Ext.create('Ext.Toolbar', {
                                                                docked: 'top',
                                                                id: 'queryToolbarId',
                                                                cls: 'navToolbar',
                                                                height: '46px',
                                                                items: [{
                                                                    xtype: 'searchfield',
                                                                    itemId: 'list_search_box',
                                                                    id: 'list_search_box',
                                                                    height: '44px',
                                                                    padding: '0 0 0 0',
                                                                    width: '100%'
                                                                }]
                                                            });
                                                            Ext.getCmp('newsViewId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('newsViewId').getStore().clearFilter();
                                                        Ext.getCmp('newsViewId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('newsViewId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('newsViewId').beginSimple("", "", "edit");
                                                        break;
                                                    default:
                                                        null;
                                                }
                                                list.hide();
                                            }
                                        }
                                    }).showBy(Ext.getCmp('moreId'));
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    Ext.getCmp('newsBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'newsView searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            newscommentBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    //if (typeof (Ext.Viewport.NewsView) == "undefined") {
                    //    Ext.Viewport.NewsView = Ext.create('ChuangCai.view.system.NewsView');
                    //}
                    //Ext.Viewport.NewsView.setRecord(record);
                    //this.redirectTo('redirec/newsView');
                },
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    //util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    bar.titleComponent.setZIndex(-1);
                    var aRecord = Ext.Viewport.NewsView.getRecord();
                    var newsId = aRecord.data.id;
                    store = Ext.getCmp('newscommentBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('newsId', newsId);
                    store.currentPage = 1;
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('newscommentBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                    Ext.getCmp('loadNewsId').setValue(aRecord.data.id);
                },
            },
            'noticeBrw button[itemId=noticeBrwNewId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("noticeBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("noticeBrwCompleteId").setCls("u-tab");
                    store = Ext.getCmp('noticeBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('useFlag', "N");
                    store.currentPage = 1;
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('noticeBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'noticeBrw button[itemId=noticeBrwCompleteId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("noticeBrwNewId").setCls("u-tab");
                    Ext.getCmp("noticeBrwCompleteId").setCls("u-tab u-tab-first u-tab-active");
                    store = Ext.getCmp('noticeBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('useFlag', "Y");
                    store.currentPage = 1;
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('noticeBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            noticeBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.NoticeView == undefined) {
                        Ext.Viewport.NoticeView = Ext.create('ChuangCai.view.system.NoticeView');
                        //Ext.Viewport.add(Ext.Viewport.NoticeView);
                    }
                    Ext.Viewport.NoticeView.setRecord(record);
                    this.redirectTo('redirec/noticeView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('noticeBrwId').getStore();
                    var proxy = store.getProxy();

                    if (oldActiveItem.id == "homeId") {
                        proxy.setExtraParam('useFlag', "N");
                    }
                    else if (oldActiveItem.id == "noticeView") {
                        proxy.setExtraParam('useFlag', "Y");
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('noticeBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('notice_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('notice_search_box'));
                    }

                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetNoticeUseFlag.ashx",
                        //params: {
                        //    type: 444, userId: userId
                        //},
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            Ext.getCmp("noticeBrwNewId").setText("未读<span>(" + json[0] + ")</span>");
                            Ext.getCmp("noticeBrwCompleteId").setText("已读<span>(" + json[1] + ")</span>");
                        },
                        failure: function (result) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });

                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 5,
                            centered: true,
                            src: 'resources/images/system/search.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage("qqqq");
                                    var queryToolbar = Ext.create('Ext.Panel', {
                                        docked: 'top',
                                        id: 'queryToolbarId',
                                        //cls: 'navToolbar',
                                        height: '45px',
                                        layout: "hbox",
                                        width: document.body.clientWidth,
                                        items: [{
                                            xtype: 'image',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-icon"
                                        }, {
                                            xtype: 'textfield',
                                            itemId: 'notice_search_box',
                                            id: 'notice_search_box',
                                            height: '44px',
                                            margin: 0,
                                            cls: "i-search-text",
                                            clearIcon: false,
                                            placeHolder: "请输入查询条件",
                                            width: document.body.clientWidth - 80,
                                        }, {
                                            xtype: 'image',
                                            itemId: 'cancel_notice_search_box',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-cancel-icon"
                                        }]
                                    });
                                    Ext.getCmp('noticeBrwId').add([queryToolbar]);
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    Ext.getCmp('noticeBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'noticeBrw textfield[itemId=notice_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'noticeBrw image[itemId=cancel_notice_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("noticeBrwId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("noticeBrwId").getStore().loadPage(1);
                    Ext.getCmp('noticeBrwId').remove(Ext.getCmp('queryToolbarId'));
                }
            },
            taskBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.TaskView == undefined) {
                        Ext.Viewport.TaskView = Ext.create('ChuangCai.view.system.TaskView');
                        //Ext.Viewport.add(Ext.Viewport.TaskView);
                    }
                    Ext.Viewport.TaskView.setRecord(record);
                    this.redirectTo('redirec/taskView');
                },
                //结束多选事件触发
                itemswipe: function (list, idx, target, record, evt) {
                    if (evt.direction == "left") {
                        evt.stopEvent();
                        //util.showWarning("Left");

                    }
                    else if (evt.direction == "right") {
                        evt.stopEvent();
                        util.showWarning("right");
                    }
                },
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    bar.titleComponent.setZIndex(-1);
                    store = Ext.getCmp('taskBrwId').getStore();
                    var proxy = store.getProxy();
                    //proxy.setExtraParam('type', "A01");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('taskBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 0,
                            centered: true,
                            src: 'resources/images/system/search.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage("qqqq");
                                    var queryToolbar = Ext.create('Ext.Panel', {
                                        docked: 'top',
                                        id: 'queryToolbarId',
                                        //cls: 'navToolbar',
                                        height: '45px',
                                        layout: "hbox",
                                        width: document.body.clientWidth,
                                        items: [{
                                            xtype: 'image',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-icon"
                                        }, {
                                            xtype: 'textfield',
                                            itemId: 'task_search_box',
                                            id: 'task_search_box',
                                            height: '44px',
                                            margin: 0,
                                            cls: "i-search-text",
                                            clearIcon: false,
                                            placeHolder: "请输入查询条件",
                                            width: document.body.clientWidth - 80,
                                        }, {
                                            xtype: 'image',
                                            itemId: 'cancel_task_search_box',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-cancel-icon"
                                        }]
                                    });
                                    Ext.getCmp('taskBrwId').add([queryToolbar]);
                                }
                            }
                        });
                        bar.add({
                            id: 'categoryId',
                            xtype: 'img',
                            right: 30,
                            src: 'resources/images/system/list.png',
                            width: 45,
                            height: 45,
                            centered: true,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //alert(util.getCompanyId());
                                    if (!this.RMenusCategoryP) {
                                        var newsCategoryStore = Ext.create("ChuangCai.store.system.NewsCategory");
                                        this.RMenusCategoryP = new Ext.Panel({
                                            width: "150px",
                                            modal: true,
                                            hideOnMaskTap: true,
                                            style: "padding:0px;",
                                            left: 0,
                                            top: "45px",
                                            showAnimation: {
                                                type: "slide",
                                                direction: "right"
                                            },
                                            hideAnimation: {
                                                type: "slideOut",
                                                direction: "left"
                                            },
                                            height: (document.body.clientHeight - 45),
                                            items: [{
                                                xtype: "panel",
                                                layout: "hbox",
                                                width: "100%",
                                                items: [{
                                                    xtype: "list",
                                                    id: "RMenusCategoryP",
                                                    style: "background: white",
                                                    width: "150px",
                                                    store: newsCategoryStore,
                                                    height: (document.body.clientHeight - 45),
                                                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{text}</td>', "</table></div>"]
                                                },
                                                {
                                                    xtype: "checkboxfield",
                                                    id: "RMenusCRId",
                                                    hidden: true,
                                                    value: "0"
                                                }]
                                            }]
                                        });
                                        newsCategoryStore.load();
                                        // Ext.getCmp("RMenusCRId").setValue(RestaurantId);
                                        Ext.Viewport.add(this.RMenusCategoryP);
                                        //Ext.getCmp("RMenusCategoryP").getStore().setProxy({
                                        //    extraParams: {
                                        //        rid: RestaurantId,
                                        //        type: 0,
                                        //        category: 0
                                        //    }
                                        //});
                                        //Ext.getCmp("RMenusCategoryP").getStore().loadPage(1);
                                        var _this = this;
                                        Ext.getCmp("RMenusCategoryP").addListener("itemtap",
                                        function (dataView, index, target, record) {
                                            _this.RMenusCategoryP.hide();
                                            //console.log(record,true);
                                            //Ext.getCmp("newsBrwId").title = "test";
                                            bar.setTitle(record.data.text);
                                            //util.showMessage(record.data.value);
                                            var getStatusType = record.data.value;//右tap页状态筛选
                                            store = Ext.getCmp('taskBrwId').getStore();
                                            var proxy = store.getProxy();
                                            proxy.setExtraParam('type', getStatusType);
                                            store.currentPage = 1;
                                            store.load(function (records, operation, success) {
                                                if (success) {
                                                    if (records[0].data.id == "-1") {
                                                        Ext.getCmp('taskBrwId').getStore().setData(null);
                                                    }
                                                }
                                            }, this);

                                            //Ext.getCmp("taskBrwId").getStore().getProxy().setExtraParam('period', record.data.value);
                                            //Ext.getCmp("taskBrwId").getStore().removeAll();
                                            //Ext.getCmp("taskBrwId").getStore().loadPage(1);
                                            //url: util.getMobileSite() + 'GetNewsBrw.ashx',
                                            //extraParams: {
                                            //    rid: RestaurantId,
                                            //    category: record.internalId,
                                            //    type: record.data.type
                                            //}
                                            //});
                                            //Ext.getCmp("RMenusList").getStore().removeAll();
                                            //Ext.getCmp("RMenusList").getStore().loadPage(1, {
                                            //    callback: function (records, operation, success) {
                                            //        console.log(records);
                                            //        console.log(records.length);
                                            //        if (records.length <= 0) {
                                            //            Ext.getCmp("RMenusList").setHidden(true);
                                            //            Ext.getCmp("RMenusListHidden").setHidden(false)
                                            //        } else {
                                            //            Ext.getCmp("RMenusList").setHidden(false);
                                            //            Ext.getCmp("RMenusListHidden").setHidden(true)
                                            //        }
                                            //    },
                                            //    scope: this
                                            //})
                                        })
                                    } else {
                                        if (this.RMenusCategoryP.getHidden()) {
                                            //if (Ext.getCmp("RMenusCRId").getValue() != RestaurantId) {
                                            //    var _this = this;
                                            //    //Ext.getCmp("RMenusCategoryP").getStore().setProxy({
                                            //    //    extraParams: {
                                            //    //        rid: RestaurantId,
                                            //    //        type: 0,
                                            //    //        category: 0
                                            //    //    }
                                            //    //});
                                            //    //Ext.getCmp("RMenusCategoryP").getStore().loadPage(1);
                                            //    this.RMenusCategoryP.show()
                                            //} else {
                                            //    this.RMenusCategoryP.show()
                                            //}
                                            this.RMenusCategoryP.show()
                                        } else {
                                            this.RMenusCategoryP.hide()
                                        }
                                    }
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    if (typeof (Ext.getCmp("taskBrwId").getStore().getProxy()._extraParams.period) != "undefined") {
                        if (Ext.getCmp("taskBrwId").getStore().getProxy()._extraParams.period != "") {
                            Ext.getCmp("taskBrwId").getStore().getProxy().setExtraParam("period", "");
                            Ext.getCmp("taskBrwId").getStore().loadPage(1);
                        }
                    }
                    if (typeof (Ext.getCmp("taskBrwId").getStore().getProxy()._extraParams.value) != "undefined") {
                        if (Ext.getCmp("taskBrwId").getStore().getProxy()._extraParams.value != "") {
                            Ext.getCmp("taskBrwId").getStore().getProxy().setExtraParam("value", "");
                            Ext.getCmp("taskBrwId").getStore().loadPage(1);
                        }
                    }
                    Ext.getCmp('taskBrwId').getStore().clearFilter();

                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                    bar.remove(Ext.getCmp('categoryId'));
                    bar.remove(Ext.getCmp('taskBrwId').getStore());
                }
            },
            'taskBrw textfield[itemId=task_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'taskBrw image[itemId=cancel_task_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("taskBrwId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("taskBrwId").getStore().loadPage(1);
                    Ext.getCmp('taskBrwId').remove(Ext.getCmp('queryToolbarId'));
                }
            },
            approvecenterBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    //调班申请
                    if (record.data.module_code == "CHANGESHIFT_APPLY_MNG") {
                        if (Ext.Viewport.ChangeShiftApply == undefined) {
                            Ext.Viewport.ChangeShiftApply = Ext.create('ChuangCai.view.workflow.ChangeShiftApply');
                            //Ext.Viewport.add(Ext.Viewport.ChangeShiftApply);
                        }
                        Ext.Viewport.ChangeShiftApply.setRecord(record);
                        this.redirectTo('redirec/changeShiftBrw');
                    }
                    //忘刷申请
                    if (record.data.module_code == "NOCARDING_CLOCK_APPLY_MNG") {
                        if (Ext.Viewport.NoCardingClockApply == undefined) {
                            Ext.Viewport.NoCardingClockApply = Ext.create('ChuangCai.view.workflow.NoCardingClockApply');
                            //Ext.Viewport.add(Ext.Viewport.NoCardingClockApply);
                        }
                        Ext.Viewport.NoCardingClockApply.setRecord(record);
                        this.redirectTo('redirec/noCardingBrw');
                    }
                    //请假申请
                    if (record.data.module_code == "VACATION_APPLY_MNG") {
                        if (Ext.Viewport.VacationApply == undefined) {
                            Ext.Viewport.VacationApply = Ext.create('ChuangCai.view.workflow.VacationApply');
                            //Ext.Viewport.add(Ext.Viewport.VacationApply);
                        }
                        Ext.Viewport.VacationApply.setRecord(record);
                        this.redirectTo('redirec/vacationBrw');
                    }
                    //加班申请
                    if (record.data.module_code == "OVERTIME_APPLY_MNG") {
                        if (Ext.Viewport.OvertimeApply == undefined) {
                            Ext.Viewport.OvertimeApply = Ext.create('ChuangCai.view.workflow.OvertimeApply');
                            //Ext.Viewport.add(Ext.Viewport.OvertimeApply);
                        }
                        Ext.Viewport.OvertimeApply.setRecord(record);
                        this.redirectTo('redirec/overtimeBrw');
                    }
                    //else {
                    //    Ext.Viewport.ApproveCenterView.setRecord(record);
                    //    this.redirectTo('redirec/approvecenterView');
                    //}

                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('approvecenterBrwId').getStore().load();
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 5,
                            centered: true,
                            src: 'resources/images/system/more.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var menuStore = Ext.create('Ext.data.Store', {
                                        id: 'approvecenterStoreId',
                                        fields: ['name', 'icon', 'needsIcon'],
                                    });
                                    if (Ext.get('queryToolbarId') == null) {
                                        menuStore.add({ "id": "queryId", "name": "查询", "icon": 'password', "needsIcon": true });
                                    }
                                    else {
                                        menuStore.add({ "id": "cancelQueryId", "name": "取消查询", "icon": 'password', "needsIcon": true });
                                    }
                                    menuStore.add({ "id": "refreshId", "name": "刷新", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "multiselectId", "name": "多选", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "sortId", "name": "排序", "icon": 'sound', "needsIcon": true });
                                    menuStore.add({ "id": "favoriteId", "name": "收藏", "icon": 'question', "needsIcon": true });
                                    Ext.create('Ext.dataview.List', {
                                        centered: true,
                                        modal: {
                                            style: 'opacity: 0'
                                        },
                                        hideOnMaskTap: true,
                                        width: '60%',
                                        height: '250px',
                                        //数据源
                                        itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                        store: menuStore,
                                        listeners: {
                                            itemsingletap: function (list, index, target, record, e) {
                                                var id = record.data.id;
                                                switch (id) {
                                                    case 'queryId':
                                                        if (record.data.name == "查询") {
                                                            record.data.name = "取消查询";
                                                        }
                                                        if (Ext.get('queryToolbarId') == null) {
                                                            var queryToolbar = Ext.create('Ext.Toolbar', {
                                                                docked: 'top',
                                                                id: 'queryToolbarId',
                                                                cls: 'navToolbar',
                                                                height: '46px',
                                                                items: [{
                                                                    xtype: 'searchfield',
                                                                    itemId: 'list_search_box',
                                                                    id: 'list_search_box',
                                                                    height: '44px',
                                                                    padding: '0 0 0 0',
                                                                    width: '100%'
                                                                }]
                                                            });
                                                            Ext.getCmp('approvecenterBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('approvecenterBrwId').getStore().clearFilter();
                                                        Ext.getCmp('approvecenterBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('approvecenterBrwId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('approvecenterBrwId').beginSimple("", "", "edit");
                                                        break;
                                                    default:
                                                        null;
                                                }
                                                list.hide();
                                            }
                                        }
                                    }).showBy(Ext.getCmp('moreId'));
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var bar = obj.getNavigationBar();
                    //if (typeof (Ext.getCmp('list_search_box')) != "undefined") {
                    //    bar.remove(Ext.getCmp('list_search_box'));
                    //}
                    if (typeof (Ext.getCmp('edit')) != "undefined") {
                        bar.remove(Ext.getCmp('edit'));
                    }
                    if (typeof (Ext.getCmp('save')) != "undefined") {
                        bar.remove(Ext.getCmp('save'));
                    }
                    if (typeof (Ext.getCmp('cancel')) != "undefined") {
                        bar.remove(Ext.getCmp('cancel'));
                    }
                    //清空查询条件
                    Ext.getCmp('approvecenterBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'approvecenterBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'messageBrw button[itemId=messageBrwNewId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("messageBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("messageBrwCompleteId").setCls("u-tab");
                    store = Ext.getCmp('messageBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('readFlag', "N");
                    store.currentPage = 1;
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('messageBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'messageBrw button[itemId=messageBrwCompleteId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("messageBrwNewId").setCls("u-tab");
                    Ext.getCmp("messageBrwCompleteId").setCls("u-tab u-tab-first u-tab-active");
                    store = Ext.getCmp('messageBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('readFlag', "Y");
                    store.currentPage = 1;
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('messageBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            messageBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.MessageView == undefined) {
                        Ext.Viewport.MessageView = Ext.create('ChuangCai.view.system.MessageView');
                    }
                    Ext.Viewport.MessageView.setRecord(record);
                    this.redirectTo('redirec/messageView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('messageBrwId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "homeId") {
                        proxy.setExtraParam('readFlag', "N");
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('messageBrwId').getStore().setData(null);
                            }
                        }
                    }, this);

                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }
                    //求当前状态汇总
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetMessageReadFlag.ashx",
                        params: {
                            userId: util.getUserId()
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            Ext.getCmp("messageBrwNewId").setText("未读消息<span>(" + json[0] + ")</span>");
                            Ext.getCmp("messageBrwCompleteId").setText("已读消息<span>(" + json[1] + ")</span>");
                        },
                        failure: function (result) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 5,
                            centered: true,
                            src: 'resources/images/system/search.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage("qqqq");
                                    var queryToolbar = Ext.create('Ext.Panel', {
                                        docked: 'top',
                                        id: 'queryToolbarId',
                                        //cls: 'navToolbar',
                                        height: '45px',
                                        layout: "hbox",
                                        width: document.body.clientWidth,
                                        items: [{
                                            xtype: 'image',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-icon"
                                        }, {
                                            xtype: 'textfield',
                                            itemId: 'message_search_box',
                                            id: 'message_search_box',
                                            height: '44px',
                                            margin: 0,
                                            cls: "i-search-text",
                                            clearIcon: false,
                                            placeHolder: "请输入查询条件",
                                            width: document.body.clientWidth - 80,
                                        }, {
                                            xtype: 'image',
                                            itemId: 'cancel_news_search_box',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-cancel-icon"
                                        }]
                                    });
                                    Ext.getCmp('messageBrwId').add([queryToolbar]);
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    //Ext.getCmp('patrolTrackBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'messageBrw textfield[itemId=message_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'messageBrw image[itemId=cancel_news_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("messageBrwId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("messageBrwId").getStore().loadPage(1);
                    Ext.getCmp('messageBrwId').remove(Ext.getCmp('queryToolbarId'));
                }
            },
            contactBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.ContactView == undefined) {
                        Ext.Viewport.ContactView = Ext.create('ChuangCai.view.system.ContactView');
                        //Ext.Viewport.add(Ext.Viewport.ContactView);
                    }
                    Ext.Viewport.ContactView.setRecord(record);
                    this.redirectTo('redirec/contactView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('contactBrwId').getStore().load();
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('contact_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('contact_search_box'));
                    }
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 5,
                            centered: true,
                            src: 'resources/images/system/more.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var menuStore = Ext.create('Ext.data.Store', {
                                        id: 'contactStoreId',
                                        fields: ['name', 'icon', 'needsIcon'],
                                    });
                                    if (Ext.get('queryToolbarId') == null) {
                                        menuStore.add({ "id": "queryId", "name": "查询", "icon": 'password', "needsIcon": true });
                                    }
                                    else {
                                        menuStore.add({ "id": "cancelQueryId", "name": "取消查询", "icon": 'password', "needsIcon": true });
                                    }
                                    menuStore.add({ "id": "refreshId", "name": "刷新", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "multiselectId", "name": "多选", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "sortId", "name": "排序", "icon": 'sound', "needsIcon": true });
                                    menuStore.add({ "id": "favoriteId", "name": "收藏", "icon": 'question', "needsIcon": true });
                                    Ext.create('Ext.dataview.List', {
                                        centered: true,
                                        modal: {
                                            style: 'opacity: 0'
                                        },
                                        hideOnMaskTap: true,
                                        width: '60%',
                                        height: '250px',
                                        //数据源
                                        itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                        store: menuStore,
                                        listeners: {
                                            itemsingletap: function (list, index, target, record, e) {
                                                var id = record.data.id;
                                                switch (id) {
                                                    case 'queryId':
                                                        if (record.data.name == "查询") {
                                                            record.data.name = "取消查询";
                                                        }
                                                        if (Ext.get('queryToolbarId') == null) {
                                                            var queryToolbar = Ext.create('Ext.Toolbar', {
                                                                docked: 'top',
                                                                id: 'queryToolbarId',
                                                                cls: 'navToolbar',
                                                                height: '46px',
                                                                items: [{
                                                                    xtype: 'searchfield',
                                                                    itemId: 'contact_search_box',
                                                                    id: 'contact_search_box',
                                                                    height: '44px',
                                                                    padding: '0 0 0 0',
                                                                    width: '100%'
                                                                }]
                                                            });
                                                            Ext.getCmp('contactBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('contactBrwId').getStore().clearFilter();
                                                        Ext.getCmp('contactBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('contactBrwId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('contactBrwId').beginSimple("", "", "edit");
                                                        break;
                                                    default:
                                                        null;
                                                }
                                                list.hide();
                                            }
                                        }
                                    }).showBy(Ext.getCmp('moreId'));
                                }
                            }
                        });
                        bar.add({
                            id: 'contactId',
                            xtype: 'img',
                            right: 35,
                            centered: true,
                            src: 'resources/images/system/search.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage("qqqq");
                                    var queryToolbar = Ext.create('Ext.Panel', {
                                        docked: 'top',
                                        id: 'queryToolbarId',
                                        //cls: 'navToolbar',
                                        height: '45px',
                                        layout: "hbox",
                                        width: document.body.clientWidth,
                                        items: [{
                                            xtype: 'image',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-icon"
                                        }, {
                                            xtype: 'textfield',
                                            itemId: 'contact_search_box',
                                            id: 'contact_search_box',
                                            height: '44px',
                                            margin: 0,
                                            cls: "i-search-text",
                                            clearIcon: false,
                                            placeHolder: "请输入查询条件",
                                            width: document.body.clientWidth - 80,
                                        }, {
                                            xtype: 'image',
                                            itemId: 'cancel_contact_search_box',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-cancel-icon"
                                        }]
                                    });
                                    Ext.getCmp('contactBrwId').add([queryToolbar]);
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    Ext.getCmp('contactBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                    bar.remove(Ext.getCmp('contactId'));
                }
            },
            'contactBrw textfield[itemId=contact_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'contactBrw image[itemId=cancel_contact_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("contactBrwId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("contactBrwId").getStore().loadPage(1);
                    Ext.getCmp('contactBrwId').remove(Ext.getCmp('queryToolbarId'));
                }
            },
            'videoBrw button[itemId=videoBrwVideoId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("videoBrwVideoId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("videoBrwAudioId").setCls("u-tab");

                    store = Ext.getCmp('videoBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('type', "VIDEO");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('videoBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'videoBrw button[itemId=videoBrwAudioId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("videoBrwVideoId").setCls("u-tab");
                    Ext.getCmp("videoBrwAudioId").setCls("u-tab u-tab-first u-tab-active");

                    store = Ext.getCmp('videoBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('type', "AUDIO");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('videoBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'videoBrw': {
                itemsingletap: function (list, index, target, record, e) {
                    //util.showMessage(index);
                    //this.redirectTo('newsView');
                    //if()
                    if (Ext.Viewport.VideoView == undefined) {
                        Ext.Viewport.VideoView = Ext.create('ChuangCai.view.system.VideoView');
                        //Ext.Viewport.add(Ext.Viewport.VideoView);
                    }
                    Ext.Viewport.VideoView.setRecord(record);
                    //Ext.Viewport.setActiveItem('newsView', { type: 'slide', direction: 'left' });
                    this.redirectTo('redirec/videoView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('videoBrwId').getStore().load(1);
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    bar.titleComponent.setZIndex(-1);
                    store = Ext.getCmp('videoBrwId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "homeId") {
                        proxy.setExtraParam('type', "VIDEO");

                    } else if (oldActiveItem.id == "videoView") {
                        proxy.setExtraParam('type', "VIDEO");
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('videoBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //求当前状态汇总
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetVideoReadFlag.ashx",
                        params: {
                            userId: util.getUserId()
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            Ext.getCmp("videoBrwVideoId").setText("视频<span>(" + json[0] + ")</span>");
                            Ext.getCmp("videoBrwAudioId").setText("音频<span>(" + json[1] + ")</span>");
                        },
                        failure: function (result) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                    bar.add({
                        id: 'videoMoreId',
                        xtype: 'img',
                        right: 105,
                        centered: true,
                        zIndex: 10,
                        src: 'resources/images/system/ic_arrow_down.png',
                        width: document.body.clientWidth - 210,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        listeners: {
                            tap: function () {
                                //Ext.getCmp('videoMoreId').setSrc('resources/images/system/ic_arrow_up.png');
                                var menuStore = Ext.create('Ext.data.Store', {
                                    id: 'newsStoreId',
                                    fields: ['name', 'icon', 'needsIcon'],
                                });
                                menuStore.add({ "id": "allId", "name": "全部", "icon": 'discuss', "needsIcon": true });
                                menuStore.add({ "id": "readId", "name": "已读", "icon": 'collects', "needsIcon": true });
                                menuStore.add({ "id": "noReadId", "name": "未读", "icon": 'login', "needsIcon": true });
                                Ext.create('Ext.dataview.List', {
                                    centered: true,
                                    modal: {
                                        style: 'opacity: 0'
                                    },
                                    hideOnMaskTap: true,
                                    width: '60%',
                                    height: '150px',
                                    //数据源
                                    itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                    store: menuStore,
                                    listeners: {
                                        itemsingletap: function (list, index, target, record, e) {
                                            var id = record.data.id;
                                            switch (id) {
                                                case 'allId':
                                                    Ext.getCmp("videoBrwId").getStore().loadPage(1);
                                                    store = Ext.getCmp('videoBrwId').getStore();
                                                    var proxy = store.getProxy();
                                                    proxy.setExtraParam('readFlag', id);
                                                    store.load(function (records, operation, success) {
                                                        if (success) {
                                                            if (records[0].data.id == "-1") {
                                                                Ext.getCmp('videoBrwId').getStore().setData(null);
                                                            }
                                                        }
                                                    }, this);
                                                    bar.setTitle("全部");
                                                    break;
                                                case 'readId':
                                                    //alert("2");
                                                    {
                                                        Ext.getCmp("videoBrwId").getStore().loadPage(1);
                                                        store = Ext.getCmp('videoBrwId').getStore();
                                                        var proxy = store.getProxy();
                                                        proxy.setExtraParam('readFlag', id);
                                                        store.load(function (records, operation, success) {
                                                            if (success) {
                                                                if (records[0].data.id == "-1") {
                                                                    Ext.getCmp('videoBrwId').getStore().setData(null);
                                                                }
                                                            }
                                                        }, this);
                                                        bar.setTitle("已读");
                                                    }
                                                    //Ext.getCmp("videoBrwVideoId").setText("视频<span>(" + temp1 + ")</span>");
                                                    //Ext.getCmp("videoBrwAudioId").setText("音频<span>(" + temp2 + ")</span>");
                                                    break;
                                                case 'noReadId':
                                                    {
                                                        Ext.getCmp("videoBrwId").getStore().loadPage(1);
                                                        store = Ext.getCmp('videoBrwId').getStore();
                                                        var proxy = store.getProxy();
                                                        proxy.setExtraParam('readFlag', id);
                                                        store.load(function (records, operation, success) {
                                                            if (success) {
                                                                if (records[0].data.id == "-1") {
                                                                    Ext.getCmp('videoBrwId').getStore().setData(null);
                                                                }
                                                            }
                                                        }, this);
                                                        bar.setTitle("未读");
                                                    }
                                                    break;
                                                default:
                                                    null;
                                            }
                                            list.hide();
                                        }
                                    }
                                }).showBy(Ext.getCmp('videoMoreId'));

                            }
                            //,
                            //hide: function (){
                            //    Ext.getCmp('videoMoreId').setSrc('resources/images/system/ic_arrow_down.png');
                            //}
                        }
                    });
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'videoSearchId',
                            xtype: 'img',
                            right: 35,
                            centered: true,
                            src: 'resources/images/system/search.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage("qqqq");
                                    var queryToolbar = Ext.create('Ext.Panel', {
                                        docked: 'top',
                                        id: 'queryToolbarId',
                                        //cls: 'navToolbar',
                                        height: '45px',
                                        layout: "hbox",
                                        width: document.body.clientWidth,
                                        items: [{
                                            xtype: 'image',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-icon"
                                        }, {
                                            xtype: 'textfield',
                                            itemId: 'video_search_box',
                                            id: 'video_search_box',
                                            height: '44px',
                                            margin: 0,
                                            cls: "i-search-text",
                                            clearIcon: false,
                                            placeHolder: "请输入查询条件",
                                            width: document.body.clientWidth - 80,
                                        }, {
                                            xtype: 'image',
                                            itemId: 'cancel_video_search_box',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-cancel-icon"
                                        }]
                                    });
                                    Ext.getCmp('videoBrwId').add([queryToolbar]);
                                }
                            }
                        });
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 0,
                            centered: true,
                            src: 'resources/images/system/more.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var menuStore = Ext.create('Ext.data.Store', {
                                        id: 'newsStoreId',
                                        fields: ['name', 'icon', 'needsIcon'],
                                    });
                                    menuStore.add({ "id": "multiselectId", "name": "多选", "icon": 'discuss', "needsIcon": true });
                                    menuStore.add({ "id": "favoriteId", "name": "收藏", "icon": 'collects', "needsIcon": true });
                                    menuStore.add({ "id": "mainId", "name": "主页", "icon": 'login', "needsIcon": true });
                                    Ext.create('Ext.dataview.List', {
                                        centered: true,
                                        modal: {
                                            style: 'opacity: 0'
                                        },
                                        hideOnMaskTap: true,
                                        width: '60%',
                                        height: '150px',
                                        //数据源
                                        itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                        store: menuStore,
                                        listeners: {
                                            itemsingletap: function (list, index, target, record, e) {
                                                var id = record.data.id;
                                                switch (id) {
                                                    case 'queryId':
                                                        if (record.data.name == "查询") {
                                                            record.data.name = "取消查询";
                                                        }
                                                        if (Ext.get('queryToolbarId') == null) {
                                                            var queryToolbar = Ext.create('Ext.Panel', {
                                                                docked: 'top',
                                                                id: 'queryToolbarId',
                                                                //cls: 'navToolbar',
                                                                height: '45px',
                                                                layout: "hbox",
                                                                width: document.body.clientWidth,
                                                                items: [{
                                                                    xtype: 'image',
                                                                    height: '45px',
                                                                    width: '40px',
                                                                    cls: "i-search-icon"
                                                                }, {
                                                                    xtype: 'textfield',
                                                                    itemId: 'news_search_box',
                                                                    id: 'news_search_box',
                                                                    height: '44px',
                                                                    margin: 0,
                                                                    cls: "i-search-text",
                                                                    clearIcon: false,
                                                                    placeHolder: "请输入查询条件",
                                                                    width: document.body.clientWidth - 80,
                                                                }, {
                                                                    xtype: 'image',
                                                                    itemId: 'cancel_news_search_box',
                                                                    height: '45px',
                                                                    width: '40px',
                                                                    cls: "i-search-cancel-icon"
                                                                }]
                                                            });
                                                            Ext.getCmp('newsBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('newsBrwId').getStore().clearFilter();
                                                        Ext.getCmp('newsBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp("newsBrwId").getStore().loadPage(1);
                                                        //me.redirectTo('redirec/newsView');
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('newsBrwId').beginSimple("", "", "edit");
                                                        break;
                                                    case 'mainId':
                                                        me.redirectTo('redirec/home')
                                                        break;
                                                    default:
                                                        null;
                                                }
                                                list.hide();
                                            }
                                        }
                                    }).showBy(Ext.getCmp('moreId'));
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    Ext.getCmp('videoBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('moreId'));
                    bar.remove(Ext.getCmp('videoMoreId'));
                    bar.remove(Ext.getCmp('videoSearchId'));
                }
            },
            'videoBrw textfield[itemId=video_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'videoBrw image[itemId=cancel_video_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("videoBrwId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("videoBrwId").getStore().loadPage(1);
                    Ext.getCmp('videoBrwId').remove(Ext.getCmp('queryToolbarId'));
                }
            },

            listHome: {
                itemtap: function (list, index, target, record, e) {
                    this.redirectTo('redirec/' + record.get('redirect'));
                    util.storeLoad(record.get('store'));
                }
            },
            listUsed: {
                itemsingletap: function (list, index, target, record, e) {
                    //util.showMessage(record.data.content);
                    //                    this.redirectTo('newInfo');
                    //                    MyUtil.showInfo(record, 'newInfo', 'NewInfo.ashx', 'body', {
                    //                        id: record.data.id
                    //                    });
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    console.log(ids);
                }
                //                itemtap: function(list, index, target, record, e) {
                //                    record.data.name = '修改',
                //                    record.save({ success: function(a, b) {
                //                        console.log('成功');
                //                    }, failure: function(a, b) {
                //                        console.log('失败');
                //                    }
                //                    }, this);
                //                }
            },
        }
    },
    onSearchKeyUp: function (field) {
        var value = field.getValue();
        var id = field.id;
        var store = null;
        switch (id) {
            case 'news_search_box':
                store = Ext.getCmp('newsBrwId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('newsBrwId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'notice_search_box':
                store = Ext.getCmp('noticeBrwId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('noticeBrwId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'contact_search_box':
                store = Ext.getCmp('contactBrwId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('contactBrwId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'message_search_box':
                store = Ext.getCmp('messageBrwId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('messageBrwId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'task_search_box':
                store = Ext.getCmp('taskBrwId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('taskBrwId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'video_search_box':
                store = Ext.getCmp('videoBrwId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('videoBrwId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            default:
                null;
        }

    },
    onSearchClearIconTap: function () {
        Ext.getCmp('newsBrwId').getStore().clearFilter();
        Ext.getCmp('messageBrwId').getStore().clearFilter();
    },

    onFileUploadFailure: function (message) {
        console.log('Failure');

        Ext.device.Notification.show({
            title: 'Uploading error',
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    },

    onFileLoadSuccess: function (dataurl, e) {
        if (fileCount == 3) {
            util.showWarning("一次最多只能上传三张图片！")
        }
        else {
            fileCount = fileCount + 1;
            var me = this;
            var image = Ext.getCmp("loadedImage" + fileCount);

            image.setSrc(dataurl);
        }

    },

    onFileLoadFailure: function (message) {
        Ext.device.Notification.show({
            title: 'Loading error',
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    },
    onTapCamera: function (e, node) {
        var me = this;        navigator.camera.getPicture(function (imageURI) {
            util.showWarning(imageURI);
            //if (fileCount == 3) {
            //    util.showWarning("一次最多只能上传三张图片！")
            //}
            //else {
            //    fileCount = fileCount + 1;
            //    var me = this;
            //    var image = Ext.getCmp("loadedImage" + fileCount);

            //    image.setSrc(imageURI);
            //}
        }, function (message) {
            util.showWarning(message);
        },
        {
            sourceType: Camera.PictureSourceType.CAMERA,        //相机获取（默认的）
            destinationType: Camera.DestinationType.FILE_URI,    //返回图像文件的URI
            quality: 50,  //图像质量[0,100],必须低于50，否则可能会引起iPhone上内存不足
            allowEdit: true,
            saveToPhotoAlbum: true,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            //                                targetWidth:500,  
            //                        targetHeight:730,

        });
    },
    onButtonTap_web: function (e, node) {
        var me = this;        var upButton = Ext.getCmp("fileUpBtn");// me.getFileUpBtn();
        var http = new XMLHttpRequest();
        http.upload.addEventListener("progress", this.uploadProgress, true);
        var form = new FormData();
        form.append('fileCount', fileCount);
        for (var i = 0; i <= fileCount - 1; i++) {
            form.append('fileArray' + i, fileArray[i]);
        }
        http.open('POST', util.getMobileSite() + "SystemManage/UploadImage.ashx", true);
        http.send(form);
    },
    uploadProgress: function (e) {
        util.showWarning("onFileLoadSuccess6");
        if (e.lengthComputable) {
            //util.showMessage("onFileLoadSuccess6", true);
            var percentComplete = (e.loaded / e.total) * 100;
            util.showMessage1(percentComplete.toFixed(0) + '%', true);
            //upButton.setBadgeText(percentComplete.toFixed(0) + '%');

        }
    },
    getScanNativePage: function () {
        console.log("_getScanNativePage");
        var enviroment = WL.Client.getEnvironment();
        console.log("getEnvironment");
        var me = this;
        if (enviroment == WL.Environment.ANDROID) {
            nativePage = me.SCAN_ACTIVITY;
            console.log("this is android");
        } else if (enviroment == WL.Environment.IPHONE
        || enviroment == WL.Environment.IPAD) {
            // set the iPhone native page path here.
            nativePage = me.SCAN_VIEWCONTROLLER;
        }
        return nativePage;
    },
    onCommentSendTap: function () {
        var newsId;
        var newsContent;
        newsId = Ext.getCmp('loadNewsId').getValue();
        newsContent = Ext.getCmp('comment_content_box').getValue();
        if (!newsContent == '') {
            Ext.Ajax.request({
                url: util.getMobileSite() + "SystemManage/SendNewsComment.ashx?userId=" + util.getUserId(),
                params: {
                    newsId: newsId, newsContent: newsContent
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    Ext.getCmp('comment_content_box').setValue();
                    util.showMessage("发布成功", true);
                },
                failure: function (result, context) {
                    util.showMessage("网络异常，未能发布成功", true);
                },
                method: "POST"
            });
        }
        else {
            util.showMessage("内容不能为空", true);
        }
    },
    onChangeTitleTap: function () {
        util.showMessage("active success", true);
    }
});