Ext.define('ChuangCai.view.Setup', {
    alternateClassName: 'setup',
    extend: 'Ext.Container',
    xtype: 'setup',
    controllers: ['Setup'],
    
    requires: [
        'Ext.dataview.List',
        'ux.plugin.ConTpl'
    ],
    config: {  
        layout: 'fit',
        title: '设置',
        id: 'setupId',
        otherMenu: 'bottomBar',
        clear: 0,
        items: [  
            {  
                xtype: 'list',
                id:'setupId1',
                cls: 'listSetup',
                ui: 'round',  
                scroll: false,  
                //margin: '2 5 2 5',  
                itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src='+  
                    '"resources/images/setup/{icon}.png" align="absmiddle" /></tpl>{name}',  
                store: Ext.create('Ext.data.Store', {  
                    fields: ['name', 'icon', 'needsIcon'],  
                    data: [  
                        { "id": "1", "name": "直接登录", "icon": 'login', "needsIcon": true },
                        { "id": "2", "name": "用户设置", "icon": 'password', "needsIcon": true },
                        { "id": "3", "name": "声音提示", "icon": 'sound', "needsIcon": true },
                        { "id": "4", "name": "清空缓存", "icon": 'question', "needsIcon": true },
                        { "id": "5", "name": "<a href=tel:051288601218>客服电话</a>", "icon": 'phone', "needsIcon": true },
                        { "id": "6", "name": "退出当前账号", "icon": 'version', "needsIcon": false,"action":"logout" }
                    ]  
                }),
                listeners: {
                    //itemsingletap: function (list, index, target, record, e) {
                       
                    //    var id = record.data.id;
                    //    switch(id)
                    //    {
                    //        case '1':
                    //            document.write("http://www.dreamdu.com"); break;
                    //        case '4'://清空缓存
                    //            {
                    //                localStorage.clear();
                    //                util.showMessage("缓存清空完成!",true);
                    //                break;
                    //            }

                    //        case '6'://退出
                    //            Ext.Msg.show({
                    //                title: '提示',
                    //                message: '你真的要退出登陆吗?',
                    //                buttons: Ext.MessageBox.OKCANCEL,
                    //                fn: function test(btn) {
                    //                    if (btn == 'ok') {
                    //                        Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
                    //                            success: function (user) {
                    //                                user.erase();
                    //                            }
                    //                        });
                    //                        config.user = false;
                    //                        Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
                    //                    }
                    //                },
                    //                icon: Ext.MessageBox.QUESTION
                    //            });
                    //            break;
                    //        default:
                    //            null;
                    //    }
                    //}
                }
            }  
        ]
    }
});