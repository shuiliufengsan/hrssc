/*
*系统设置
*/
Ext.define('ChuangCai.controller.Setup', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['Setup', 'system.UserSetup', , 'system.Test'],
        refs: {
            setup: 'setup #setupId1'
        },
        control: {

            //setup10: {
            //    activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
            //    },
            //    itemsingletap: function (list, index, target, record, e) {
            //        var id = record.data.id;
            //        alert(id);
            //    }
            //},
            setup: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //util.showWarning("缓存清空完成!");
                },
                itemsingletap: function (list, index, target, record, e) {
                    var id = record.data.id;
                    switch (id) {
                        case '1':
                            this.redirectTo('redirec/testView');
                            break;
                        case '2':
                            {
                                //this.redirectTo('homePage');
                                //this.redirectTo('redirec/userSetup'); 
                                this.redirectTo('redirec/myPersonalCenter', { type: 'slide', direction: 'bottom' });
                                //alert(id);
                                //Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
                                //    success: function (user) {
                                //        user.erase();
                                //    }
                                //});
                                //config.user = false;
                                //Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
                                break;
                            }
                        case '3':
                            this.redirectTo('redirec/productType');
                            break;
                        case '4'://清空缓存
                            {
                                localStorage.clear();
                                util.showWarning("缓存清空完成!");
                                break;
                            }
                        case '5'://客服电话
                            {

                                break;
                            }
                        case '6'://退出
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
                                        localStorage.clear();
                                        Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
                                    }
                                },
                            });
                            break;
                        default:
                            null;
                    }
                }
            },
            'testView button[itemId=GDNotice]': {
                tap: function () {
                    if (Ext.getCmp("GDNoticeDetail").getHidden()) {
                        Ext.getCmp("GDNotice").setCls("g-info-hd x-button-no x-button-no-padding");
                        Ext.getCmp("GDNoticeDetail").setHidden(false)
                    } else {
                        Ext.getCmp("GDNotice").setCls("g-info-hd g-info-hd-nobd x-button-no x-button-no-padding");
                        Ext.getCmp("GDNoticeDetail").setHidden(true)
                    }
                }
            },
            //'testView button[itemId=pOnline]': {
            //    tap: function () {
            //        this.redirectTo('redirec/userSetup');
            //    }
            //},
            testView: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var _this = this;

                    var newCard = new Ext.Panel({

                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                            + "px; background-image:url(" + config.webSite + "Upload/Mobile/1.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    Ext.getCmp("RCarouselis1").add(newCard);
                    newCard = new Ext.Panel({

                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                             + "px; background-image:url(" + config.webSite + "Upload/Mobile/2.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    Ext.getCmp("RCarouselis1").add(newCard);

                    newCard = new Ext.Panel({

                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                             + "px; background-image:url(" + config.webSite + "Upload/Mobile/3.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    Ext.getCmp("RCarouselis1").add(newCard);

                    Ext.getCmp("RCarouselis1").setActiveItem(0, "slide");
                }
            }
        }
    },
    //退出登录
    logOut: function (user) {
        //alert("dd");
        Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
            success: function (user) {
                user.erase();
            }
        });

        config.user = false;
        Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
    }
});