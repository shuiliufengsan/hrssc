Ext.define('ChuangCai.controller.WorkflowList', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['workflow.Vacation', 'workflow.ChangeShift', 'workflow.Overtime', 'workflow.NoCarding'],
        stores: ['workflow.Vacation', 'workflow.ChangeShift', 'workflow.Overtime', 'workflow.NoCarding'],
        views: ['workflow.Home', 'workflow.VacationBrw', 'workflow.ChangeShiftBrw', 'workflow.OvertimeBrw', 'workflow.NoCardingBrw'],
        //refs: {
        //    navBtn: 'button[action=navBtn]',
        //    workflowHome: 'workflowHome'
        //},
        control: {
            //导航栏按钮
            navBtn: {
                tap: function () {
                    util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                }
            },
            //工作流首页
            workflowHome: {
                itemtap: function (list, index, target, record, e) {
                    if (index == 0) {
                        this.redirectTo('redirec/vacationBrw');
                    }
                    if (index == 1) {
                        this.redirectTo('redirec/changeShiftBrw');
                    }
                    if (index == 2) {
                        this.redirectTo('redirec/overtimeBrw');
                    }
                    if (index == 3) {
                        this.redirectTo('redirec/noCardingBrw');
                    }
                    if (index == 4) {
                        this.redirectTo('redirec/');
                    }
                    if (index == 5) {
                        this.redirectTo('redirec/');
                    }
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var temp = this;
                    //CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('news_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('news_search_box'));
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
                                    var menuStore = Ext.create('Ext.data.Store', {
                                        id: 'newsStoreId',
                                        fields: ['name', 'icon', 'needsIcon'],
                                    });
                                    menuStore.add({ "id": "vacationApplyId", "name": "请假申请", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "changeShiftApplyId", "name": "调班申请", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "OvertimeApplyId", "name": "加班申请", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "NoCardingClockApplyId", "name": "忘刷申请", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "FeeExpenseApplyId", "name": "报销申请", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "trainApplyId", "name": "培训申请", "icon": 'question', "needsIcon": true });
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
                                                    case 'vacationApplyId':
                                                        temp.redirectTo('redirec/vacationApplyInfo');
                                                        break;
                                                    case 'changeShiftApplyId':
                                                        temp.redirectTo('redirec/changeShiftApplyInfo');
                                                        break;
                                                    case 'OvertimeApplyId':
                                                        temp.redirectTo('redirec/OvertimeApplyInfo');
                                                        break;
                                                    case 'NoCardingClockApplyId':
                                                        temp.redirectTo('redirec/NoCardingClockApplyInfo');
                                                        break;
                                                    case 'FeeExpenseApplyId':
                                                        temp.redirectTo('redirec/FeeExpenseApplyInfo');
                                                        break;
                                                    case 'trainApplyId':
                                                        temp.redirectTo('redirec/trainApplyInfo');
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
                    if (typeof (Ext.getCmp('list_search_box')) != "undefined") {
                        bar.remove(Ext.getCmp('list_search_box'));
                    }
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
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            vacationBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.VacationView == undefined) {
                        Ext.Viewport.VacationView = Ext.create('ChuangCai.view.workflow.VacationView');
                        //Ext.Viewport.add(Ext.Viewport.VacationView);
                    }
                    Ext.Viewport.VacationView.setRecord(record);
                    this.redirectTo('redirec/vacationView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('vacationBrwId').getStore().load();
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
                                        id: 'vacationStoreId',
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
                                                            Ext.getCmp('vacationBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('vacationBrwId').getStore().clearFilter();
                                                        Ext.getCmp('vacationBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('vacationBrwId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('vacationBrwId').beginSimple("", "", "edit");
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
                    Ext.getCmp('vacationBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'vacationBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            changeShiftBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.ChangeShiftView == undefined) {
                        Ext.Viewport.ChangeShiftView = Ext.create('ChuangCai.view.workflow.ChangeShiftView');
                        //Ext.Viewport.add(Ext.Viewport.ChangeShiftView);
                    }
                    Ext.Viewport.ChangeShiftView.setRecord(record);
                    this.redirectTo('redirec/changeShiftView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('changeShiftBrwId').getStore().load();
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
                                        id: 'changeShiftStoreId',
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
                                                            Ext.getCmp('changeShiftBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('changeShiftBrwId').getStore().clearFilter();
                                                        Ext.getCmp('changeShiftBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('changeShiftBrwId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('changeShiftBrwId').beginSimple("", "", "edit");
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
                    Ext.getCmp('changeShiftBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'changeShiftBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            overtimeBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.OvertimeView == undefined) {
                        Ext.Viewport.OvertimeView = Ext.create('ChuangCai.view.workflow.OvertimeView');
                        //Ext.Viewport.add(Ext.Viewport.OvertimeView);
                    }
                    Ext.Viewport.OvertimeView.setRecord(record);
                    this.redirectTo('redirec/overtimeView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('overtimeBrwId').getStore().load();
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
                                        id: 'overtimeStoreId',
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
                                                            Ext.getCmp('overtimeBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('overtimeBrwId').getStore().clearFilter();
                                                        Ext.getCmp('overtimeBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('overtimeBrwId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('overtimeBrwId').beginSimple("", "", "edit");
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
                    Ext.getCmp('overtimeBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'overtimeBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            noCardingBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.NoCardingView == undefined) {
                        Ext.Viewport.NoCardingView = Ext.create('ChuangCai.view.workflow.NoCardingView');
                        //Ext.Viewport.add(Ext.Viewport.NoCardingView);
                    }
                    Ext.Viewport.NoCardingView.setRecord(record);
                    this.redirectTo('redirec/noCardingView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('noCardingBrwId').getStore().load();
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
                                        id: 'noCardingStoreId',
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
                                                            Ext.getCmp('noCardingBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('noCardingBrwId').getStore().clearFilter();
                                                        Ext.getCmp('noCardingBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('noCardingBrwId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('noCardingBrwId').beginSimple("", "", "edit");
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
                    Ext.getCmp('noCardingBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'noCardingBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
        }
    }
});