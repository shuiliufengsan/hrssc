Ext.define('ChuangCai.view.system.MessageBrw', {
    alternateClassName: 'messageBrw',
    extend: 'ux.SimpleList',
    xtype: 'messageBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.system.MessageView'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'messageBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '个人消息',
        locales: {
            title: 'home.title'
        },
        items: [{
            xtype: "panel",
            layout: "hbox",
            height: "35px",
            docked: 'top',
            ui: "uuchina",
            id: "DGOrCoupon",
            items: [{
                xtype: "button",
                id: "messageBrwNewId",
                text: "未读消息<span>(0)</span>",
                width: "49.9%",
                cls: "u-tab u-tab-first u-tab-active"
            },
           {
                xtype: "button",
                id: "messageBrwCompleteId",
                text: "已读消息<span>(0)</span>",
                width: "49.9%",
                cls: "u-tab"
            }]
        }],
        itemTpl: new Ext.XTemplate(
        '<div class="bh">',
            //'<div class="img" style="background-image: url(resources/images/weather/n53.gif);"></div>',
            '<div class="bv">',
                '<div class="listTitle">{message_title}</div>',
                '<div class="listSummary">{message_text}</div>',
                '<div class="listPublishDate">{send_time}</div>',
            '</div>',

        '</div>'),
        store: 'message'
    }
});