Ext.define('ChuangCai.view.shop.ProgressDetail', {
    alternateClassName: 'progressDetail',
    extend: "Ext.Panel",
    xtype: 'progressDetail',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', "ux.plugin.RCarousel", 'ux.Countdown'],
    config: {
        cls: "bg-color-white",
        id: 'progressDetailId',
        title: '流程查看',
        plugins: 'conHref',
        items: [{
            xtype: "panel",
            style: "margin-top:20px;margin-left: 10px;",
            items: [{
                xtype: "panel",
                layout: "hbox",
                height: 57,
                id: "step7",
                items: [{
                    items: [{
                        xtype: "panel",
                        id: "stepIcon7",
                        height: 16,
                        //html: "<img src='resources/images/icon07.gif'/>"
                        html: "<img src='resources/images/icon7-grey.png'/>"
                    }, {
                        xtype: "panel",
                        html: "<p class='progress-border'>&nbsp;</p>"
                    }]
                }, {
                    xtype: "panel",
                    id: "stepTime7",
                    width: document.body.clientWidth - 20,
                    html: "<p class='progress-text'>出价完成</p>"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                height: 57,
                id: "step6",
                items: [{
                    items: [{
                        xtype: "panel",
                        height: 16,
                        id: "stepIcon6",
                        html: "<img src='resources/images/icon7-grey.png'/>"
                    }, {
                        xtype: "panel",
                        html: "<p class='progress-border'>&nbsp;</p>"
                    }]
                }, {
                    xtype: "panel",
                    id: "stepTime6",
                    width: document.body.clientWidth - 20,
                    html: "<p class='progress-text'>竞拍出价</p>"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                height: 57,
                id: "step5",
                items: [{
                    items: [{
                        xtype: "panel",
                        height: 16,
                        id: "stepIcon5",
                        html: "<img src='resources/images/icon7-grey.png'/>"
                    }, {
                        xtype: "panel",
                        html: "<p class='progress-border'>&nbsp;</p>"
                    }]
                }, {
                    xtype: "panel",
                    id: "stepTime5",
                    width: document.body.clientWidth - 20,
                    html: "<p class='progress-text'>审核通过</p>"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                height: 57,
                id: "step4",
                items: [{
                    items: [{
                        xtype: "panel",
                        height: 16,
                        id: "stepIcon4",
                        html: "<img src='resources/images/icon7-grey.png'/>"
                    }, {
                        xtype: "panel",
                        html: "<p class='progress-border'>&nbsp;</p>"
                    }]
                }, {
                    xtype: "panel",
                    id: "stepTime4",
                    width: document.body.clientWidth - 20,
                    html: "<p class='progress-text'>上传资料</p>"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                height: 57,
                id: "step3",
                items: [{
                    items: [{
                        xtype: "panel",
                        height: 16,
                        id: "stepIcon3",
                        html: "<img src='resources/images/icon7-grey.png'/>"
                    }, {
                        xtype: "panel",
                        html: "<p class='progress-border'>&nbsp;</p>"
                    }]
                }, {
                    xtype: "panel",
                    id: "stepTime3",
                    width: document.body.clientWidth - 20,
                    html: "<p class='progress-text'>付保证金</p>"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                id: "step2",
                height: 57,
                items: [{
                    items: [{
                        xtype: "panel",
                        height: 16,
                        id: "stepIcon2",
                        html: "<img src='resources/images/icon7-grey.png'/>"
                    }, {
                        xtype: "panel",
                        html: "<p class='progress-border'>&nbsp;</p>"
                    }]
                }, {
                    xtype: "panel",
                    id: "stepTime2",
                    width: document.body.clientWidth - 20,
                    html: "<p class='progress-text'>买家须知</p>"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                id: "step1",
                height: 57,
                items: [{
                    items: [{
                        xtype: "panel",
                        height: 16,
                        id: "stepIcon1",
                        html: "<img src='resources/images/icon7-grey.png'/>"
                    }]
                }, {
                    xtype: "panel",
                    id: "stepTime1",
                    width: document.body.clientWidth - 20,
                    html: "<p class='progress-text'>注册</p>"
                }]
            }]

        }]
    }
});