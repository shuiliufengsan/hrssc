Ext.define('ChuangCai.controller.Supervise', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['supervise.Patrol', 'supervise.Station', 'supervise.PatrolTrack', 'supervise.Lock', 'supervise.Facilities', 'supervise.BicycleMaintenance', 'supervise.Evaluation', 'supervise.StationHygiene', 'supervise.TaskAllocation', 'supervise.NearbyStation', 'supervise.BorrowRecord'],
        stores: ['supervise.Patrol', 'supervise.Station', 'supervise.PatrolTrack', 'supervise.Lock', 'supervise.Facilities', 'supervise.BicycleMaintenance', , 'supervise.Evaluation', 'supervise.StationHygiene', 'supervise.TaskAllocation', 'supervise.NearbyStation', 'supervise.BorrowRecord'],
        views: ['supervise.PatrolBrw', 'supervise.PatrolAdd', 'supervise.PatrolTrackAdd', 'supervise.EvaluationBrw', 'supervise.StationBrw', 'supervise.PatrolTrackBrw', 'supervise.LockBrw', 'supervise.LockAdd', 'supervise.FacilitiesBrw', 'supervise.FacilitiesAdd', 'supervise.BicycleMaintenanceBrw', 'supervise.BicycleMaintenanceAdd', 'supervise.StationHygieneBrw', 'supervise.StationHygieneAdd', 'supervise.StationSelect', 'supervise.TaskAllocationAdd', 'supervise.TaskAllocationBrw', 'supervise.NearbyStationBrw', 'supervise.BorrowRecordBrw', 'supervise.QrCodeBorrowBrw'],
        requires: ['ChuangCai.view.list.Xml',
       'ChuangCai.view.list.Tpl',
       'ChuangCai.view.list.Tab',
       'ChuangCai.view.supervise.PatrolAdd',
       'ChuangCai.view.supervise.PatrolTrackAdd',
       'ChuangCai.view.supervise.LockAdd',
       'ChuangCai.view.supervise.FacilitiesAdd',
       'ChuangCai.view.supervise.BicycleMaintenanceAdd',
       'ChuangCai.view.supervise.StationHygieneAdd',
       'ChuangCai.view.supervise.TaskAllocationAdd'
        ],
        control: {
            //'patrolAdd button[itemId=fileLoadBtn]': {
            //    loadsuccess: 'onFileLoadSuccess',
            //    loadfailure: 'onFileLoadFailure'
            //},
            'patrolAdd button[itemId=fileUpBtn]': {
                tap: 'onButtonTap'
            },
            'patrolAdd button[itemId=takePhotoBtn]': {
                tap: 'onTapCameraTake'
            },
            'patrolTrackAdd button[itemId=selectPhotoBtn]': {
                tap: 'onTapCameraSelect'
            },
            'patrolTrackAdd button[itemId=takePhotoBtn]': {
                tap: 'onTapCameraTake'
            },
            'patrolAdd button[itemId=selectPhotoBtn]': {
                tap: 'onTapCameraSelect'
            },
            'patrolAdd selectfield[itemId=stationName]': {
                focus: function (obj, e, eOpts) {
                    this.redirectTo('redirec/stationSelect');
                    e.stopEvent();
                }
            },
            'qrCodeBorrowBrw button[itemId=]': {
                tap: 'onTapQrCode'
            },
            navBtn: {
                tap: function () {
                    util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                }
            },
            stationSelect: {
                itemsingletap: function (list, index, target, record, e) {
                    config.tempParams = { 'stationId': record.data.id, 'stationName': record.data.station_name };
                    this.redirectTo('redirec/patrolAdd/1');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('stationSelectId').getStore().load();
                    var me = this;
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
                            //src: 'resources/images/system/add.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                    //me.redirectTo('redirec/stationAdd');
                                }
                            }
                        });
                    };
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
                                itemId: 'select_station_search_box',
                                id: 'select_station_search_box',
                                height: '44px',
                                margin: 0,
                                cls: "i-search-text",
                                clearIcon: false,
                                placeHolder: "请输入查询条件",
                                width: document.body.clientWidth - 80,
                            }, {
                                xtype: 'image',
                                itemId: 'cancel_select_station_search_box',
                                height: '45px',
                                width: '40px',
                                cls: "i-search-cancel-icon"
                            }]
                        });
                        Ext.getCmp('stationSelectId').add([queryToolbar]);
                    }
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    if (typeof (Ext.getCmp("stationSelectId").getStore().getProxy()._extraParams.value) != "undefined") {
                        if (Ext.getCmp("stationSelectId").getStore().getProxy()._extraParams.value != "") {
                            Ext.getCmp("stationSelectId").getStore().getProxy().setExtraParam("value", "");
                            Ext.getCmp("stationSelectId").getStore().loadPage(1);
                        }
                    }
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'stationSelect textfield[itemId=select_station_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'stationSelect image[itemId=cancel_select_station_search_box]': {
                tap: function (img, e, eOpts) {
                    Ext.getCmp("select_station_search_box").setValue("");
                    Ext.getCmp("stationSelectId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("stationSelectId").getStore().loadPage(1);
                }
            },
            'patrolBrw button[itemId=patrolBrwNewId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("patrolBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("patrolBrwProcessId").setCls("u-tab");
                    Ext.getCmp("patrolBrwCompleteId").setCls("u-tab");

                    var fromId = config.patrolParams.fromId;
                    var patrolItemId = "";
                    switch (fromId) {
                        case '1407281328455427514100426787331':
                            patrolItemId = "1407241530584616698118333653585";
                            break;
                        case '1408051149175670169212167705972':
                            patrolItemId = "1407241558585689543528606905560";
                            break;
                        case '1408051310435105403045225671709':
                            patrolItemId = "1407291144355441020970198313587";
                            break;
                        case '1408051130154659031813520766616':
                            patrolItemId = "1407291144465201491624843639352";
                            break;
                        case '1408051252155401635678855011935':
                            patrolItemId = "1407291145054634466201742309519";
                            break;
                        case '1408250953485350523572888187148':
                            patrolItemId = "1407291145244961116272303217859";
                            break;
                        default:
                            null;
                    }

                    store = Ext.getCmp('patrolBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A01");
                    proxy.setExtraParam('patrolItemId', patrolItemId);
                    store.currentPage = 1;
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('patrolBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'patrolBrw button[itemId=patrolBrwProcessId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("patrolBrwNewId").setCls("u-tab");
                    Ext.getCmp("patrolBrwProcessId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("patrolBrwCompleteId").setCls("u-tab");
                    var fromId = config.patrolParams.fromId;
                    var patrolItemId = "";
                    switch (fromId) {
                        case '1407281328455427514100426787331':
                            patrolItemId = "1407241530584616698118333653585";
                            break;
                        case '1408051149175670169212167705972':
                            patrolItemId = "1407241558585689543528606905560";
                            break;
                        case '1408051310435105403045225671709':
                            patrolItemId = "1407291144355441020970198313587";
                            break;
                        case '1408051130154659031813520766616':
                            patrolItemId = "1407291144465201491624843639352";
                            break;
                        case '1408051252155401635678855011935':
                            patrolItemId = "1407291145054634466201742309519";
                            break;
                        case '1408250953485350523572888187148':
                            patrolItemId = "1407291145244961116272303217859";
                            break;
                        default:
                            null;
                    }
                    store = Ext.getCmp('patrolBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A02");
                    proxy.setExtraParam('patrolItemId', patrolItemId);
                    store.currentPage = 1;
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('patrolBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'patrolBrw button[itemId=patrolBrwCompleteId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("patrolBrwNewId").setCls("u-tab");
                    Ext.getCmp("patrolBrwProcessId").setCls("u-tab");
                    Ext.getCmp("patrolBrwCompleteId").setCls("u-tab u-tab-first u-tab-active");
                    var fromId = config.patrolParams.fromId;
                    var patrolItemId = "";
                    switch (fromId) {
                        case '1407281328455427514100426787331':
                            patrolItemId = "1407241530584616698118333653585";
                            break;
                        case '1408051149175670169212167705972':
                            patrolItemId = "1407241558585689543528606905560";
                            break;
                        case '1408051310435105403045225671709':
                            patrolItemId = "1407291144355441020970198313587";
                            break;
                        case '1408051130154659031813520766616':
                            patrolItemId = "1407291144465201491624843639352";
                            break;
                        case '1408051252155401635678855011935':
                            patrolItemId = "1407291145054634466201742309519";
                            break;
                        case '1408250953485350523572888187148':
                            patrolItemId = "1407291145244961116272303217859";
                            break;
                        default:
                            null;
                    }
                    store = Ext.getCmp('patrolBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A03");
                    proxy.setExtraParam('patrolItemId', patrolItemId);
                    store.currentPage = 1;
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('patrolBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            patrolBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.PatrolView == undefined) {
                        Ext.Viewport.PatrolView = Ext.create('ChuangCai.view.supervise.PatrolView');
                    }
                    Ext.Viewport.PatrolView.setRecord(record);
                    this.redirectTo('redirec/patrolView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                show: function (element, eOpts) {
                    var fromId = config.patrolParams.fromId;
                    var patrolItemId = "";
                    switch (fromId) {
                        case '1407281328455427514100426787331':
                            globalBar.setTitle("站点完好率");
                            break;
                        case '1408051149175670169212167705972':
                            globalBar.setTitle("锁车柱完好率");
                            break;
                        case '1408051310435105403045225671709':
                            globalBar.setTitle("站点设施");
                            break;
                        case '1408051130154659031813520766616':
                            globalBar.setTitle("自行车维护");
                            break;
                        case '1408051252155401635678855011935':
                            globalBar.setTitle("站点卫生");
                            break;
                        case '1408250953485350523572888187148':
                            globalBar.setTitle("任务分配");
                            break;
                        default:
                            null;
                    }
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();

                    var fromId = config.patrolParams.fromId;
                    var patrolItemId = "";
                    switch (fromId) {
                        case '1407281328455427514100426787331':
                            patrolItemId = "1407241530584616698118333653585";
                            break;
                        case '1408051149175670169212167705972':
                            patrolItemId = "1407241558585689543528606905560";
                            break;
                        case '1408051310435105403045225671709':
                            patrolItemId = "1407291144355441020970198313587";
                            break;
                        case '1408051130154659031813520766616':
                            patrolItemId = "1407291144465201491624843639352";
                            break;
                        case '1408051252155401635678855011935':
                            patrolItemId = "1407291145054634466201742309519";
                            break;
                        case '1408250953485350523572888187148':
                            patrolItemId = "1407291145244961116272303217859";
                            break;
                        default:
                            null;
                    }
                    if (oldActiveItem.id == "homeId") {
                        store = Ext.getCmp('patrolBrwId').getStore();
                        var proxy = store.getProxy();
                        proxy.setExtraParam('status', "A01");
                        proxy.setExtraParam('patrolItemId', patrolItemId);
                        store.load(function (records, operation, success) {
                            if (success) {
                                if (records[0].data.id == "-1") {
                                    Ext.getCmp('patrolBrwId').getStore().setData(null);
                                }
                            }
                        }, this);
                    } else if (oldActiveItem.id == "patrolAddId") {
                        Ext.getCmp("patrolBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                        Ext.getCmp("patrolBrwProcessId").setCls("u-tab");
                        Ext.getCmp("patrolBrwCompleteId").setCls("u-tab");
                        store = Ext.getCmp('patrolBrwId').getStore();
                        var proxy = store.getProxy();
                        proxy.setExtraParam('status', "A01");
                        proxy.setExtraParam('patrolItemId', patrolItemId);
                        store.loadPage(1);
                    }

                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }
                    //求当前状态汇总
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Supervise/GetPatrolStatusStat.ashx",
                        params: {
                            type: fromId, patrolItemId: patrolItemId
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            Ext.getCmp("patrolBrwNewId").setText("新登记<span>(" + json[0] + ")</span>");
                            Ext.getCmp("patrolBrwProcessId").setText("处理中<span>(" + json[1] + ")</span>");
                            Ext.getCmp("patrolBrwCompleteId").setText("处理完<span>(" + json[2] + ")</span>");
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
                            src: 'resources/images/system/add.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                    me.redirectTo('redirec/patrolAdd');
                                }
                            }
                        });
                        bar.add({
                            id: 'categoryId',
                            xtype: 'img',
                            right: 40,
                            src: 'resources/images/system/search.png',
                            width: 35,
                            height: 45,
                            centered: true,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage("qqqq");
                                    var PatrolqueryToolbar = Ext.create('Ext.Panel', {
                                        docked: 'top',
                                        id: 'queryPatrolToolbarId',
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
                                            itemId: 'patrol_search_box',
                                            id: 'patrol_search_box',
                                            height: '44px',
                                            margin: 0,
                                            cls: "i-search-text",
                                            clearIcon: false,
                                            placeHolder: "请输入查询条件",
                                            width: document.body.clientWidth - 80,
                                        }, {
                                            xtype: 'image',
                                            itemId: 'cancel_patrol_news_search_box',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-cancel-icon"
                                        }]
                                    });
                                    Ext.getCmp('patrolBrwId').add([PatrolqueryToolbar]);
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    //Ext.getCmp('patrolBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                    bar.remove(Ext.getCmp('categoryId'));
                }
            },

            'patrolBrw textfield[itemId=patrol_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'patrolBrw image[itemId=cancel_patrol_news_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("patrolBrwId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("patrolBrwId").getStore().loadPage(1);
                    Ext.getCmp('patrolBrwId').remove(Ext.getCmp('queryPatrolToolbarId'));
                }
            },
            patrolAdd: {
                show: function (element, eOpts) {
                    var fromId = config.patrolParams.fromId;
                    var patrolItemId = "";
                    switch (fromId) {
                        case '1407281328455427514100426787331':
                            globalBar.setTitle("站点完好率");
                            break;
                        case '1408051149175670169212167705972':
                            globalBar.setTitle("锁车柱完好率");
                            break;
                        case '1408051310435105403045225671709':
                            globalBar.setTitle("站点设施");
                            break;
                        case '1408051130154659031813520766616':
                            globalBar.setTitle("自行车维护");
                            break;
                        case '1408051252155401635678855011935':
                            globalBar.setTitle("站点卫生");
                            break;
                        case '1408250953485350523572888187148':
                            globalBar.setTitle("任务分配");
                            break;
                        default:
                            null;
                    }
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (config.tempParams !== undefined) {
                        Ext.regModel('PatrolAdd', {
                            fields: [
                                { name: 'value', type: 'string' },
                                { name: 'text', type: 'string' }
                            ]
                        });
                        patrolAddStore = new Ext.data.Store({
                            model: 'PatrolAdd',
                            data: [{ value: config.tempParams.stationId, text: config.tempParams.stationName }],
                            autoLoad: true
                        });
                        Ext.getCmp('stationName').setStore(patrolAddStore);
                        Ext.getCmp('stationName').setValue(config.tempParams.stationId);
                    }
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
                            src: 'resources/images/system/ok.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var stationId = Ext.getCmp('stationName').getValue();
                                    if (!stationId) {
                                        util.showWarning("请选择站点！");
                                        return;
                                    }
                                    var stationContent = Ext.getCmp('stationContentId').getValue();
                                    var fromId = config.patrolParams.fromId;
                                    var patrolItemId = "";
                                    switch (fromId) {
                                        case '1407281328455427514100426787331':
                                            patrolItemId = "1407241530584616698118333653585";
                                            break;
                                        case '1408051149175670169212167705972':
                                            patrolItemId = "1407241558585689543528606905560";
                                            break;
                                        case '1408051310435105403045225671709':
                                            patrolItemId = "1407291144355441020970198313587";
                                            break;
                                        case '1408051130154659031813520766616':
                                            patrolItemId = "1407291144465201491624843639352";
                                            break;
                                        case '1408051252155401635678855011935':
                                            patrolItemId = "1407291145054634466201742309519";
                                            break;
                                        case '1408250953485350523572888187148':
                                            patrolItemId = "1407291145244961116272303217859";
                                            break;
                                        default:
                                            null;
                                    }
                                    if (fileArray.length > 0) {
                                        util.setMasked(true, "正在提交...");
                                        var count = 0;
                                        var uploadImages = [];
                                        for (var i = 0; i <= fileArray.length - 1; i++) {
                                            imageURI = fileArray[i];
                                            var form = Ext.getCmp("fileUpBtn");
                                            var options = new FileUploadOptions();
                                            options.fileKey = "file";        //必填与服务器对于,服务器上要求为nane= "file" 
                                            options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);    //图片名字
                                            options.mimeType = "multipart/form-data";       //文件上传必须使用该编码（enctype="multipart/form-data"） {也可以定义上传格式（"image/jpeg";）}
                                            //options.params = { 'stationId': stationId, 'stationContent': stationContent, 'type': 'StationCompleteRatio' }   //其他数据
                                            var params = new Object();
                                            params.dir = "Photos/Station/";
                                            //params.stationId = stationId;
                                            //params.stationContent = stationContent;
                                            //params.type = "StationCompleteRatio";
                                            options.params = params;

                                            options.chunkedMode = false;

                                            var ft = new FileTransfer();
                                            ft.upload(imageURI, util.getMobileSite() + "SystemManage/UploadImage.ashx",
                                                function (result) {
                                                    uploadImages.push(result.response);
                                                    count += 1;
                                                    if (count == fileArray.length) {
                                                        Ext.Ajax.request({
                                                            url: util.getMobileSite() + "Supervise/AddPatrol.ashx",
                                                            params: {
                                                                stationId: stationId, stationContent: stationContent, patrolItemId: patrolItemId, reportUserCode: util.getUserName(), images: Ext.encode(uploadImages)
                                                            },
                                                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                                            success: function (result, context) {
                                                                fileCount = 0;
                                                                fileArray = new Array();
                                                                Ext.getCmp("loadedImage0").setSrc("resources/images/s.gif");
                                                                Ext.getCmp("loadedImage1").setSrc("resources/images/s.gif");
                                                                Ext.getCmp("loadedImage2").setSrc("resources/images/s.gif");
                                                                Ext.getCmp('stationContentId').setValue("");
                                                                util.setMasked(false);
                                                                Ext.getCmp('selectPhotoBtn').setBadgeText("");
                                                                util.showWarning("提交成功！");
                                                            },
                                                            failure: function (result) {
                                                                util.setMasked(false);
                                                                Ext.getCmp('selectPhotoBtn').setBadgeText("");
                                                                util.showWarning("提交失败！");
                                                            },
                                                            method: "POST"
                                                        });

                                                    }
                                                },
                                                function (error) {
                                                    util.setMasked(false);
                                                    util.showWarning('提交失败,未获取图片或格式错误');
                                                },
                                                options
                                            );
                                            ft.onprogress = function (progressEvent) {
                                                if (progressEvent.lengthComputable) {
                                                    //已经上传  
                                                    var loaded = progressEvent.loaded;
                                                    //文件总长度  
                                                    var total = progressEvent.total;
                                                    //计算百分比，用于显示进度条  
                                                    var percent = parseInt((loaded / total) * 100) + "%";
                                                    //换算成MB  
                                                    loaded = (loaded / 1024).toFixed(2);
                                                    total = (total / 1024).toFixed(2);
                                                    //util.showWarning(loaded + 'KB/' + total + 'KB', true);
                                                    Ext.getCmp('selectPhotoBtn').setBadgeText(percent);
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        alert("NO");
                                        Ext.Ajax.request({
                                            url: util.getMobileSite() + "Supervise/AddPatrol.ashx",
                                            params: {
                                                stationId: stationId, stationContent: stationContent, type: 'StationCompleteRatio', reportUserCode: util.getUserName()
                                            },
                                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                            success: function (result, context) {
                                                var json = result.responseText;
                                                Ext.getCmp("loadedImage0").setSrc("resources/images/s.gif");
                                                Ext.getCmp("loadedImage1").setSrc("resources/images/s.gif");
                                                Ext.getCmp("loadedImage2").setSrc("resources/images/s.gif");
                                                Ext.getCmp('stationContentId').setValue("");
                                                util.showWarning(json);
                                            },
                                            failure: function (result) {
                                                var msg = result.responseText;
                                                util.showMessage(msg, true);
                                            },
                                            method: "POST"
                                        });
                                    }
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
            'patrolTrackBrw button[itemId=patrolTrackBrwNewId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("patrolTrackBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("patrolTrackBrwProcessId").setCls("u-tab");
                    Ext.getCmp("patrolTrackBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('patrolBrwTrackId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A01");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('patrolBrwTrackId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'patrolTrackBrw button[itemId=patrolTrackBrwProcessId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("patrolTrackBrwNewId").setCls("u-tab");
                    Ext.getCmp("patrolTrackBrwProcessId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("patrolTrackBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('patrolBrwTrackId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A02");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('patrolBrwTrackId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'patrolTrackBrw button[itemId=patrolTrackBrwCompleteId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("patrolTrackBrwNewId").setCls("u-tab");
                    Ext.getCmp("patrolTrackBrwProcessId").setCls("u-tab");
                    Ext.getCmp("patrolTrackBrwCompleteId").setCls("u-tab u-tab-first u-tab-active");

                    store = Ext.getCmp('patrolBrwTrackId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A03");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('patrolBrwTrackId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            patrolTrackBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.PatrolTrackView == undefined) {
                        Ext.Viewport.PatrolTrackView = Ext.create('ChuangCai.view.supervise.PatrolTrackView');
                    }
                    Ext.Viewport.PatrolTrackView.setRecord(record);
                    this.redirectTo('redirec/patrolTrackView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //Ext.getCmp("patrolBrwTrackId").getStore().load();
                    //if (config.tempParams) {
                    //    var fromId = config.tempParams.fromId;
                    //}
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('patrolBrwTrackId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "homeId") {
                        proxy.setExtraParam('status', "A01");

                    } else if (oldActiveItem.id == "patrolAddId") {
                        proxy.setExtraParam('status', "A01");
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('patrolBrwTrackId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }

                    //求当前状态汇总
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Supervise/GetPatrolTrackStatusStat.ashx",
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            Ext.getCmp("patrolTrackBrwNewId").setText("新登记<span>(" + json[0] + ")</span>");
                            Ext.getCmp("patrolTrackBrwProcessId").setText("处理中<span>(" + json[1] + ")</span>");
                            Ext.getCmp("patrolTrackBrwCompleteId").setText("处理完<span>(" + json[2] + ")</span>");
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
                                            itemId: 'patrolTrack_search_box',
                                            id: 'patrolTrack_search_box',
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
                                    Ext.getCmp('patrolBrwTrackId').add([queryToolbar]);
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
            'patrolTrackBrw textfield[itemId=patrolTrack_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'patrolTrackBrw image[itemId=cancel_news_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("patrolBrwTrackId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("patrolBrwTrackId").getStore().loadPage(1);
                    Ext.getCmp('patrolBrwTrackId').remove(Ext.getCmp('queryToolbarId'));
                }
            },
            patrolTrackView: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    fileCount = 0;
                    fileArray = new Array();
                    var me = this;
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
                            src: 'resources/images/system/add.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                    me.redirectTo('redirec/patrolTrackAdd');
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            patrolTrackAdd: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //if (config.tempParams !== undefined) {
                    //    Ext.regModel('PatrolAdd', {
                    //        fields: [
                    //            { name: 'value', type: 'string' },
                    //            { name: 'text', type: 'string' }
                    //        ]
                    //    });
                    //    patrolAddStore = new Ext.data.Store({
                    //        model: 'PatrolAdd',
                    //        data: [{ value: config.tempParams.stationId, text: config.tempParams.stationName }],
                    //        autoLoad: true
                    //    });
                    //    Ext.getCmp('stationName').setStore(patrolAddStore);
                    //    Ext.getCmp('stationName').setValue(config.tempParams.stationId);
                    //}
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
                            src: 'resources/images/system/ok.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var rowId = Ext.getCmp('rowId').getValue();
                                    var stationContent = Ext.getCmp('checkContent').getValue();
                                    if (fileArray.length > 0) {
                                        var count = 0;
                                        var uploadImages = [];
                                        for (var i = 0; i <= fileArray.length - 1; i++) {
                                            imageURI = fileArray[i];
                                            //var form = Ext.getCmp("fileUpBtn");
                                            var options = new FileUploadOptions();
                                            options.fileKey = "file";        //必填与服务器对于,服务器上要求为nane= "file" 
                                            options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);    //图片名字
                                            options.mimeType = "multipart/form-data";       //文件上传必须使用该编码（enctype="multipart/form-data"） {也可以定义上传格式（"image/jpeg";）}
                                            //options.params = { 'stationId': stationId, 'stationContent': stationContent, 'type': 'StationCompleteRatio' }   //其他数据
                                            var params = new Object();
                                            params.dir = "Photos/Track/";
                                            options.params = params;
                                            options.chunkedMode = false;

                                            var ft = new FileTransfer();
                                            ft.upload(imageURI, util.getMobileSite() + "SystemManage/UploadImage.ashx",
                                                function (result) {
                                                    uploadImages.push(result.response);
                                                    count += 1;
                                                    if (count == fileArray.length) {
                                                        Ext.Ajax.request({
                                                            url: util.getMobileSite() + "Supervise/AddPatrolTrack.ashx",
                                                            params: {
                                                                rowId: rowId, stationContent: stationContent, reportUserCode: util.getUserName(), images: Ext.encode(uploadImages)
                                                            },
                                                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                                            success: function (result, context) {
                                                                fileCount = 0;
                                                                fileArray = new Array();
                                                                Ext.getCmp("loadedImage0").setSrc("resources/images/s.gif");
                                                                Ext.getCmp("loadedImage1").setSrc("resources/images/s.gif");
                                                                Ext.getCmp("loadedImage2").setSrc("resources/images/s.gif");
                                                                Ext.getCmp('checkContent').setValue("");
                                                                util.setMasked(false);
                                                                Ext.getCmp('selectPhotoBtn').setBadgeText("");
                                                                util.showWarning("提交成功！");
                                                            },
                                                            failure: function (result) {
                                                                util.setMasked(false);
                                                                Ext.getCmp('selectPhotoBtn').setBadgeText("");
                                                                util.showWarning("提交失败！");
                                                            },
                                                            method: "POST"
                                                        });

                                                    }
                                                },
                                                function (error) {
                                                    util.setMasked(false);
                                                    util.showWarning('提交失败,未获取图片或格式错误');
                                                },
                                                options
                                            );
                                            ft.onprogress = function (progressEvent) {
                                                if (progressEvent.lengthComputable) {
                                                    //已经上传  
                                                    var loaded = progressEvent.loaded;
                                                    //文件总长度  
                                                    var total = progressEvent.total;
                                                    //计算百分比，用于显示进度条  
                                                    var percent = parseInt((loaded / total) * 100) + "%";
                                                    //换算成MB  
                                                    loaded = (loaded / 1024).toFixed(2);
                                                    total = (total / 1024).toFixed(2);
                                                    //util.showWarning(loaded + 'KB/' + total + 'KB', true);
                                                    Ext.getCmp('selectPhotoBtn').setBadgeText(percent);
                                                }
                                            };
                                        }
                                    }
                                    else {
                                        Ext.Ajax.request({
                                            url: util.getMobileSite() + "Supervise/AddPatrolTrack.ashx",
                                            params: {
                                                rowId: rowId, stationContent: stationContent, reportUserCode: util.getUserName()
                                            },
                                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                            success: function (result, context) {
                                                var json = result.responseText;
                                                Ext.getCmp("loadedImage0").setSrc("resources/images/s.gif");
                                                Ext.getCmp("loadedImage1").setSrc("resources/images/s.gif");
                                                Ext.getCmp("loadedImage2").setSrc("resources/images/s.gif");
                                                Ext.getCmp('checkContent').setValue("");
                                                util.showWarning(json);
                                            },
                                            failure: function (result) {
                                                var msg = result.responseText;
                                                util.showMessage(msg, true);
                                            },
                                            method: "POST"
                                        });
                                    }
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
            evaluationBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.EvaluationView == undefined) {
                        Ext.Viewport.EvaluationView = Ext.create('ChuangCai.view.supervise.EvaluationView');
                    }
                    Ext.Viewport.EvaluationView.setRecord(record);
                    this.redirectTo('redirec/evaluationView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (oldActiveItem.id == "homeId") {
                        Ext.getCmp("evaluationBrwId").getStore().loadPage(1);
                    }
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
                                        id: 'evaluationStoreId',
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
                                                            Ext.getCmp('evaluationBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('evaluationBrwId').getStore().clearFilter();
                                                        Ext.getCmp('evaluationBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('evaluationBrwId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('evaluationBrwId').beginSimple("", "", "edit");
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
                    Ext.getCmp('evaluationBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'evaluationBrw searchfield[itemId=contact_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            stationBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.StationView == undefined) {
                        Ext.Viewport.StationView = Ext.create('ChuangCai.view.supervise.StationView');
                    }
                    Ext.Viewport.StationView.setRecord(record);
                    this.redirectTo('redirec/stationView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('stationBrwId').getStore().load();
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('station_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('station_search_box'));
                    }
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'contactId',
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
                                            itemId: 'station_search_box',
                                            id: 'station_search_box',
                                            height: '44px',
                                            margin: 0,
                                            cls: "i-search-text",
                                            clearIcon: false,
                                            placeHolder: "请输入查询条件",
                                            width: document.body.clientWidth - 80,
                                        }, {
                                            xtype: 'image',
                                            itemId: 'cancel_station_search_box',
                                            height: '45px',
                                            width: '40px',
                                            cls: "i-search-cancel-icon"
                                        }]
                                    });
                                    Ext.getCmp('stationBrwId').add([queryToolbar]);
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    //Ext.getCmp('stationBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('contactId'));
                }
            },
            'stationBrw textfield[itemId=station_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'stationBrw image[itemId=cancel_station_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("stationBrwId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("stationBrwId").getStore().loadPage(1);
                    Ext.getCmp('stationBrwId').remove(Ext.getCmp('queryToolbarId'));
                }
            },
            nearbyStationBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.NearbyStationView == undefined) {
                        Ext.Viewport.NearbyStationView = Ext.create('ChuangCai.view.supervise.NearbyStationView');
                    }
                    Ext.Viewport.NearbyStationView.setRecord(record);
                    this.redirectTo('redirec/nearbyStationView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('nearbyStationBrwId').getStore().load();
                    var me = this;
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
                            //src: 'resources/images/system/add.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                    //me.redirectTo('redirec/stationAdd');
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    //Ext.getCmp('stationBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'nearbyStationBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },


            'bicycleMaintenanceBrw button[itemId=bicycleMaintenanceBrwNewId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("bicycleMaintenanceBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("bicycleMaintenanceBrwProcessId").setCls("u-tab");
                    Ext.getCmp("bicycleMaintenanceBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('bicycleMaintenanceBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A01");
                    store.load();
                }
            },
            'bicycleMaintenanceBrw button[itemId=bicycleMaintenanceBrwProcessId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("bicycleMaintenanceBrwNewId").setCls("u-tab");
                    Ext.getCmp("bicycleMaintenanceBrwProcessId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("bicycleMaintenanceBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('bicycleMaintenanceBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A02");
                    store.load();
                }
            },
            'bicycleMaintenanceBrw button[itemId=bicycleMaintenanceBrwCompleteId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("bicycleMaintenanceBrwNewId").setCls("u-tab");
                    Ext.getCmp("bicycleMaintenanceBrwProcessId").setCls("u-tab");
                    Ext.getCmp("bicycleMaintenanceBrwCompleteId").setCls("u-tab u-tab-first u-tab-active");

                    store = Ext.getCmp('bicycleMaintenanceBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A03");
                    store.load();
                }
            },


            bicycleMaintenanceBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.BicycleMaintenanceView == undefined) {
                        Ext.Viewport.BicycleMaintenanceView = Ext.create('ChuangCai.view.supervise.BicycleMaintenanceView');
                        //Ext.Viewport.add(Ext.Viewport.PatrolView);
                    }
                    Ext.Viewport.BicycleMaintenanceView.setRecord(record);
                    this.redirectTo('redirec/bicycleMaintenanceView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //Ext.getCmp('patrolBrwId').getStore().load();
                    var me = this;
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
                            src: 'resources/images/system/add.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                    me.redirectTo('redirec/bicycleMaintenanceAdd');
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    //Ext.getCmp('patrolBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'bicycleMaintenanceBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },


            bicycleMaintenanceAdd: {
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
                            src: 'resources/images/system/ok.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    util.setMasked(true, "正在提交...");
                                    var upButton = Ext.getCmp("fileUpBtn");
                                    var http = new XMLHttpRequest();
                                    http.upload.addEventListener("progress", function (e) {
                                        if (e.lengthComputable) {
                                            //util.showMessage("onFileLoadSuccess6", true);
                                            //var percentComplete = (e.loaded / e.total) * 100;
                                            //util.showMessage1(percentComplete.toFixed(0) + '%', true);
                                            //upButton.setBadgeText(percentComplete.toFixed(0) + '%');

                                        }
                                    }, false);
                                    http.addEventListener("load", function (e) {
                                        util.setMasked(false);
                                        util.showWarning("提交成功！");
                                        fileCount = 0;
                                        fileArray = new Array();
                                        Ext.getCmp("loadedImage1").setSrc("");
                                        Ext.getCmp("loadedImage2").setSrc("");
                                        Ext.getCmp("loadedImage3").setSrc("");
                                    }, false);
                                    http.addEventListener("error", function (e) {
                                        util.showWarning("提交失败！");
                                    }, false);
                                    var form = new FormData();
                                    form.append('fileCount', fileCount);
                                    for (var i = 0; i <= fileCount - 1; i++) {
                                        form.append('fileArray' + i, fileArray[i]);
                                    }
                                    http.open('POST', util.getMobileSite() + "SystemManage/UploadImage.ashx", true);
                                    http.send(form);
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

            'stationHygieneBrw button[itemId=stationHygieneBrwNewId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("stationHygieneBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("stationHygieneBrwProcessId").setCls("u-tab");
                    Ext.getCmp("stationHygieneBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('stationHygieneBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A01");
                    store.load();
                }
            },
            'stationHygieneBrw button[itemId=stationHygieneBrwProcessId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("stationHygieneBrwNewId").setCls("u-tab");
                    Ext.getCmp("stationHygieneBrwProcessId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("stationHygieneBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('stationHygieneBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A02");
                    store.load();
                }
            },
            'stationHygieneBrw button[itemId=stationHygieneBrwCompleteId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("stationHygieneBrwNewId").setCls("u-tab");
                    Ext.getCmp("stationHygieneBrwProcessId").setCls("u-tab");
                    Ext.getCmp("stationHygieneBrwCompleteId").setCls("u-tab u-tab-first u-tab-active");

                    store = Ext.getCmp('stationHygieneBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A03");
                    store.load();
                }
            },

            stationHygieneBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.StationHygieneView == undefined) {
                        Ext.Viewport.StationHygieneView = Ext.create('ChuangCai.view.supervise.StationHygieneView');
                        //Ext.Viewport.add(Ext.Viewport.PatrolView);
                    }
                    Ext.Viewport.StationHygieneView.setRecord(record);
                    this.redirectTo('redirec/stationHygieneView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //Ext.getCmp('patrolBrwId').getStore().load();
                    var me = this;
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
                            src: 'resources/images/system/add.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                    me.redirectTo('redirec/stationHygieneAdd');
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    //Ext.getCmp('patrolBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'stationHygieneBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },


            stationHygieneAdd: {
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
                            src: 'resources/images/system/ok.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    util.setMasked(true, "正在提交...");
                                    var upButton = Ext.getCmp("fileUpBtn");
                                    var http = new XMLHttpRequest();
                                    http.upload.addEventListener("progress", function (e) {
                                        if (e.lengthComputable) {
                                            //util.showMessage("onFileLoadSuccess6", true);
                                            //var percentComplete = (e.loaded / e.total) * 100;
                                            //util.showMessage1(percentComplete.toFixed(0) + '%', true);
                                            //upButton.setBadgeText(percentComplete.toFixed(0) + '%');

                                        }
                                    }, false);
                                    http.addEventListener("load", function (e) {
                                        util.setMasked(false);
                                        util.showWarning("提交成功！");
                                        fileCount = 0;
                                        fileArray = new Array();
                                        Ext.getCmp("loadedImage1").setSrc("");
                                        Ext.getCmp("loadedImage2").setSrc("");
                                        Ext.getCmp("loadedImage3").setSrc("");
                                    }, false);
                                    http.addEventListener("error", function (e) {
                                        util.showWarning("提交失败！");
                                    }, false);
                                    var form = new FormData();
                                    form.append('fileCount', fileCount);
                                    for (var i = 0; i <= fileCount - 1; i++) {
                                        form.append('fileArray' + i, fileArray[i]);
                                    }
                                    http.open('POST', util.getMobileSite() + "SystemManage/UploadImage.ashx", true);
                                    http.send(form);
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


            'lockBrw button[itemId=lockBrwNewId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("lockBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("lockBrwProcessId").setCls("u-tab");
                    Ext.getCmp("lockBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('lockBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A01");
                    store.load();
                }
            },
            'lockBrw button[itemId=lockBrwProcessId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("lockBrwNewId").setCls("u-tab");
                    Ext.getCmp("lockBrwProcessId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("lockBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('lockBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A02");
                    store.load();
                }
            },
            'lockBrw button[itemId=lockBrwCompleteId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("lockBrwNewId").setCls("u-tab");
                    Ext.getCmp("lockBrwProcessId").setCls("u-tab");
                    Ext.getCmp("lockBrwCompleteId").setCls("u-tab u-tab-first u-tab-active");

                    store = Ext.getCmp('lockBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A03");
                    store.load();
                }
            },

            lockBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.LockView == undefined) {
                        Ext.Viewport.LockView = Ext.create('ChuangCai.view.supervise.LockView');
                        //Ext.Viewport.add(Ext.Viewport.PatrolView);
                    }
                    Ext.Viewport.LockView.setRecord(record);
                    this.redirectTo('redirec/lockView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('lockBrwId').getStore().load();
                    var me = this;
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
                            src: 'resources/images/system/add.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                    me.redirectTo('redirec/lockAdd');
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    //Ext.getCmp('patrolBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'lockBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },

            lockAdd: {
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
                            src: 'resources/images/system/ok.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    util.setMasked(true, "正在提交...");
                                    var upButton = Ext.getCmp("fileUpBtn");
                                    var http = new XMLHttpRequest();
                                    http.upload.addEventListener("progress", function (e) {
                                        if (e.lengthComputable) {
                                            //util.showMessage("onFileLoadSuccess6", true);
                                            //var percentComplete = (e.loaded / e.total) * 100;
                                            //util.showMessage1(percentComplete.toFixed(0) + '%', true);
                                            //upButton.setBadgeText(percentComplete.toFixed(0) + '%');

                                        }
                                    }, false);
                                    http.addEventListener("load", function (e) {
                                        util.setMasked(false);
                                        util.showWarning("提交成功！");
                                        fileCount = 0;
                                        fileArray = new Array();
                                        Ext.getCmp("loadedImage1").setSrc("");
                                        Ext.getCmp("loadedImage2").setSrc("");
                                        Ext.getCmp("loadedImage3").setSrc("");
                                    }, false);
                                    http.addEventListener("error", function (e) {
                                        util.showWarning("提交失败！");
                                    }, false);
                                    var form = new FormData();
                                    form.append('fileCount', fileCount);
                                    for (var i = 0; i <= fileCount - 1; i++) {
                                        form.append('fileArray' + i, fileArray[i]);
                                    }
                                    http.open('POST', util.getMobileSite() + "SystemManage/UploadImage.ashx", true);
                                    http.send(form);
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


            'facilitiesBrw button[itemId=facilitiesBrwNewId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("facilitiesBrwNewId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("facilitiesBrwProcessId").setCls("u-tab");
                    Ext.getCmp("facilitiesBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('facilitiesBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A01");
                    store.load();
                }
            },
            'facilitiesBrw button[itemId=facilitiesBrwProcessId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("facilitiesBrwNewId").setCls("u-tab");
                    Ext.getCmp("facilitiesBrwProcessId").setCls("u-tab u-tab-first u-tab-active");
                    Ext.getCmp("facilitiesBrwCompleteId").setCls("u-tab");

                    store = Ext.getCmp('facilitiesBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A02");
                    store.load();
                }
            },
            'facilitiesBrw button[itemId=facilitiesBrwCompleteId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("facilitiesBrwNewId").setCls("u-tab");
                    Ext.getCmp("facilitiesBrwProcessId").setCls("u-tab");
                    Ext.getCmp("facilitiesBrwCompleteId").setCls("u-tab u-tab-first u-tab-active");

                    store = Ext.getCmp('facilitiesBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('status', "A03");
                    store.load();
                }
            },


            facilitiesBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.FacilitiesView == undefined) {
                        Ext.Viewport.FacilitiesView = Ext.create('ChuangCai.view.supervise.FacilitiesView');
                        //Ext.Viewport.add(Ext.Viewport.PatrolView);
                    }
                    Ext.Viewport.FacilitiesView.setRecord(record);
                    this.redirectTo('redirec/facilitiesView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('facilitiesBrwId').getStore().load();
                    var me = this;
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
                            src: 'resources/images/system/add.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                    me.redirectTo('redirec/facilitiesAdd');
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    //Ext.getCmp('patrolBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'facilitiesBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            facilitiesAdd: {
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
                            src: 'resources/images/system/ok.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    util.setMasked(true, "正在提交...");
                                    var upButton = Ext.getCmp("fileUpBtn");
                                    var http = new XMLHttpRequest();
                                    http.upload.addEventListener("progress", function (e) {
                                        if (e.lengthComputable) {
                                            //util.showMessage("onFileLoadSuccess6", true);
                                            //var percentComplete = (e.loaded / e.total) * 100;
                                            //util.showMessage1(percentComplete.toFixed(0) + '%', true);
                                            //upButton.setBadgeText(percentComplete.toFixed(0) + '%');

                                        }
                                    }, false);
                                    http.addEventListener("load", function (e) {
                                        util.setMasked(false);
                                        util.showWarning("提交成功！");
                                        fileCount = 0;
                                        fileArray = new Array();
                                        Ext.getCmp("loadedImage1").setSrc("");
                                        Ext.getCmp("loadedImage2").setSrc("");
                                        Ext.getCmp("loadedImage3").setSrc("");
                                    }, false);
                                    http.addEventListener("error", function (e) {
                                        util.showWarning("提交失败！");
                                    }, false);
                                    var form = new FormData();
                                    form.append('fileCount', fileCount);
                                    for (var i = 0; i <= fileCount - 1; i++) {
                                        form.append('fileArray' + i, fileArray[i]);
                                    }
                                    http.open('POST', util.getMobileSite() + "SystemManage/UploadImage.ashx", true);
                                    http.send(form);
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

            borrowRecordBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.BorrowRecordView == undefined) {
                        Ext.Viewport.BorrowRecordView = Ext.create('ChuangCai.view.supervise.BorrowRecordView');
                        //Ext.Viewport.add(Ext.Viewport.TaskView);
                    }
                    Ext.Viewport.BorrowRecordView.setRecord(record);
                    this.redirectTo('redirec/borrowRecordView');
                },
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
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    util.showMessage("end", true);
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.get('borrowRecordBrwId').on('swipe', 'onViewSwipe', this);
                    Ext.getCmp('borrowRecordBrwId').getStore().load();
                    var me = this;

                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    bar.titleComponent.setZIndex(-1);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }

                    bar.add({
                        id: 'newsTitleId',
                        xtype: 'img',
                        right: 105,
                        centered: true,
                        zIndex: 10,
                        src: 'resources/images/system/news_title.png',
                        width: document.body.clientWidth - 210,
                        height: 45,
                        align: 'right',
                        //ui: 'decline',
                        listeners: {
                            tap: function () {
                                var menuStore = Ext.create('Ext.data.Store', {
                                    id: 'borrowRecordStoreId',
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
                                    height: '300px',
                                    //数据源
                                    itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                    store: menuStore,
                                    //listeners: {
                                    //    itemsingletap: function (list, index, target, record, e) {
                                    //        var id = record.data.id;
                                    //        switch (id) {
                                    //            case 'queryId':
                                    //                if (record.data.name == "查询") {
                                    //                    record.data.name = "取消查询";
                                    //                }
                                    //                if (Ext.get('queryToolbarId') == null) {
                                    //                    var queryToolbar = Ext.create('Ext.Toolbar', {
                                    //                        docked: 'top',
                                    //                        id: 'queryToolbarId',
                                    //                        cls: 'navToolbar',
                                    //                        height: '46px',
                                    //                        items: [{
                                    //                            xtype: 'searchfield',
                                    //                            itemId: 'list_search_box',
                                    //                            id: 'list_search_box',
                                    //                            height: '44px',
                                    //                            padding: '0 0 0 0',
                                    //                            width: '100%'
                                    //                        }]
                                    //                    });
                                    //                    Ext.getCmp('borrowRecordBrwId').add([queryToolbar]);
                                    //                }
                                    //                break;
                                    //            case 'cancelQueryId':
                                    //                Ext.getCmp('borrowRecordBrwId').getStore().clearFilter();
                                    //                Ext.getCmp('borrowRecordBrwId').remove(Ext.getCmp('queryToolbarId'));
                                    //                break;
                                    //            case 'refreshId':
                                    //                Ext.getCmp('borrowRecordBrwId').getStore().load();
                                    //                break;
                                    //            case 'multiselectId':
                                    //                Ext.getCmp('borrowRecordBrwId').beginSimple("", "", "edit");
                                    //                break;
                                    //            default:
                                    //                null;
                                    //        }
                                    //        list.hide();
                                    //    }
                                    //}
                                }).showBy(Ext.getCmp('newsTitleId'));
                            }
                        }
                    });




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
                                        id: 'borrowRecordStoreId',
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
                                                            Ext.getCmp('borrowRecordBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('borrowRecordBrwId').getStore().clearFilter();
                                                        Ext.getCmp('borrowRecordBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp("borrowRecordBrwId").getStore().loadPage(1);
                                                        //me.redirectTo('redirec/newsView');
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('borrowRecordBrwId').beginSimple("", "", "edit");
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
                        bar.add({
                            id: 'categoryId',
                            xtype: 'img',
                            right: 35,
                            src: 'resources/images/system/list.png',
                            width: 45,
                            height: 45,
                            centered: true,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    if (!this.RMenusCategoryP) {
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
                                                    store: Ext.create("ChuangCai.store.system.NewsCategory"),
                                                    height: (document.body.clientHeight - 45),
                                                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{title}</td>', "</table></div>"]
                                                },
                                                {
                                                    xtype: "checkboxfield",
                                                    id: "RMenusCRId",
                                                    hidden: true,
                                                    value: "0"
                                                }]
                                            }]
                                        });
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
                                            bar.setTitle(record.data.title);
                                            //util.showMessage(record.data.value);
                                            Ext.getCmp("borrowRecordBrwId").getStore().getProxy().setExtraParam('period', record.data.value);
                                            Ext.getCmp("borrowRecordBrwId").getStore().removeAll();
                                            Ext.getCmp("borrowRecordBrwId").getStore().loadPage(1);
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
                    // Ext.getCmp('borrowRecordBrwId').getStore().clearFilter();

                    if (typeof (Ext.getCmp("borrowRecordBrwId").getStore().getProxy()._extraParams.period) != "undefined") {
                        if (Ext.getCmp("borrowRecordBrwId").getStore().getProxy()._extraParams.period != "") {
                            Ext.getCmp("borrowRecordBrwId").getStore().getProxy().setExtraParam("period", "");
                            Ext.getCmp("borrowRecordBrwId").getStore().loadPage(1);
                        }
                    }
                    if (typeof (Ext.getCmp("borrowRecordBrwId").getStore().getProxy()._extraParams.value) != "undefined") {
                        if (Ext.getCmp("borrowRecordBrwId").getStore().getProxy()._extraParams.value != "") {
                            Ext.getCmp("borrowRecordBrwId").getStore().getProxy().setExtraParam("value", "");
                            Ext.getCmp("borrowRecordBrwId").getStore().loadPage(1);
                        }
                    }

                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('newsTitleId'));
                    bar.remove(Ext.getCmp('categoryId'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'borrowRecordBrw textfield[itemId=news_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            'borrowRecordBrw image[itemId=cancel_news_search_box]': {
                tap: function (img, e, eOpts) {
                    //util.setMasked(true);
                    Ext.getCmp("borrowRecordBrwId").getStore().getProxy().setExtraParam("value", "");
                    Ext.getCmp("borrowRecordBrwId").getStore().loadPage(1);
                    Ext.getCmp('borrowRecordBrwId').remove(Ext.getCmp('queryToolbarId'));
                }
            },
            swipe: function (e, target, options, eOpts) {
                util.showWarning("测试Swipe");
                if (e.direction === 'left' && e.distance >= 20) {
                    util.showWarning('move left');
                } else if (e.direction === 'right' && e.distance >= 20) {
                    util.showWarning('move right');
                }
            },

            borrowRecordView: {
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
                            src: 'resources/images/system/add.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                                    me.redirectTo('redirec/newscommentBrw');
                                }
                            }
                        });
                    };

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
                                        id: 'borrowRecordStoreId',
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
                                                            Ext.getCmp('borrowRecordViewId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('borrowRecordViewId').getStore().clearFilter();
                                                        Ext.getCmp('borrowRecordViewId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('borrowRecordViewId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('borrowRecordViewId').beginSimple("", "", "edit");
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
                    Ext.getCmp('borrowRecordBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'borrowRecordView searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },

        },
    },
    //onFileUploadSuccess: function () {
    //    console.log('Success');

    //    Ext.device.Notification.show({
    //        title: 'All right',
    //        message: 'File uploaded successfully',
    //        buttons: Ext.MessageBox.OK,
    //        callback: Ext.emptyFn
    //    });
    //},

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

    onButtonTap: function (e, node) {
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
    onTapCameraTake: function (e, node) {
        //util.showWarning("onTapCamera");
        var me = this;        navigator.camera.getPicture(function (imageURI) {
            //util.showWarning(imageURI);
            if (fileCount == 3) {
                util.showWarning("一次最多只能上传三张图片！")
            }
            else {
                var me = this;
                var image = Ext.getCmp("loadedImage" + fileCount);
                image.setSrc(imageURI);
                //pickUrl = imageURI;
                fileArray[fileCount] = imageURI;
                fileCount = fileCount + 1;
            }
        }, function (message) {
            util.showWarning(message);
        },
        {
            sourceType: Camera.PictureSourceType.CAMERA,        //相机获取（默认的）
            destinationType: Camera.DestinationType.FILE_URI,    //返回图像文件的URI
            quality: 50,  //图像质量[0,100],必须低于50，否则可能会引起iPhone上内存不足
            //allowEdit: false,//只有iPhone下true才有效
            saveToPhotoAlbum: true,
            encodingType: Camera.EncodingType.JPEG,
            //targetWidth:500,  
            //targetHeight:730,

        });
    },
    onTapCameraSelect: function (e, node) {
        //util.showWarning("onTapCamera");
        var me = this;        navigator.camera.getPicture(function (imageURI) {
            //util.showWarning(imageURI);
            if (fileCount == 3) {
                util.showWarning("一次最多只能上传三张图片！")
            }
            else {
                var me = this;
                var image = Ext.getCmp("loadedImage" + fileCount);
                image.setSrc(imageURI);
                fileArray[fileCount] = imageURI;
                fileCount = fileCount + 1;
            }
        }, function (message) {
            util.showWarning(message);
        },
        {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,        //相册读取
            destinationType: Camera.DestinationType.FILE_URI,    //返回图像文件的URI
            quality: 50,  //图像质量[0,100],必须低于50，否则可能会引起iPhone上内存不足
            allowEdit: true,
            saveToPhotoAlbum: true,
            mediaType: Camera.MediaType.PICTURE  //设置选择图片的类型PICTURE(图片)、VIDEO（video类型）、ALLMEDIA （全部）
            //targetWidth:500,  
            //targetHeight:730,

        });
    },
    onActionSelect: function (obj, e, eOpts) {
        this.redirectTo('redirec/stationBrw');
    },
    onSearchKeyUp: function (field) {
        var value = field.getValue();
        var id = field.id;
        var store = null;
        switch (id) {
            case 'patrol_search_box':
                store = Ext.getCmp('patrolBrwId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('patrolBrwId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'patrolTrack_search_box':
                store = Ext.getCmp('patrolBrwTrackId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('patrolBrwTrackId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'select_station_search_box':
                store = Ext.getCmp('stationSelectId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('stationSelectId').getStore().setData(null);
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
            case 'station_search_box':
                store = Ext.getCmp('stationBrwId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "-1") {
                            Ext.getCmp('stationBrwId').getStore().setData(null);
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
    },
    //二维码调用
    onTapQrCode: function () {
        //util.showWarning("事件实现调用");
        Ext.data.JsonP.request({
            url: "http://58.211.65.178:11111/IOSWebServiceZhouZhuang.asmx/CloseLock",
            params: {
                message: '31,1',
            },
            callbackKey: 'callback',
            callback: function (result) {
                util.showWarning(result);
            },
            success: function (OpenLock) {
                //OpenLock("31", "1");
                //if (OpenLock.success == true) {
                //    util.showWarning("事件实现调用！");
                //} else {
                //    Ext.Msg.alert('登录失败', OpenLock.msg);
                //}
            },
            failure: function (CloseLock) {
                Ext.Msg.alert('请求失败', 'AJAX请求发送失败！');
            }
        });
    }
    //cordova.plugins.barcodeScanner.scan(
    //	function (result) {

    //	    //		 alert("Scanned Code: " + result.text + ". Format: " + result.format+ ". Cancelled: " + result.cancelled);
    //	    },
    //	    function (error) {
    //	        alert("Scan failed: " + error);
    //	    });


    //	    //http.open('POST', "http://58.211.65.178:11111/IOSWebServiceZhouZhuang.asmx", true);
    //	}
    //});
});