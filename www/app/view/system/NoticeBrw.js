Ext.define('ChuangCai.view.system.NoticeBrw', {
    alternateClassName: 'noticeBrw',
    extend: 'ux.SimpleList',
    xtype: 'noticeBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.system.NoticeView'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'noticeBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '公告中心',
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
                id: "noticeBrwNewId",
                text: "未读<span>(0)</span>",
                width: "49.9%",
                cls: "u-tab u-tab-first u-tab-active"
            },
           
         {
                xtype: "button",
                id: "noticeBrwCompleteId",
                text: "已读<span>(0)</span>",
                width: "49.9%",
                cls: "u-tab"
            }]
        }],
        itemTpl: new Ext.XTemplate(
        '<div class="bh">',
            //'<div class="img" style="background-image: url(resources/images/weather/n53.gif);"></div>',
            '<div class="bv">',
                '<div class="listTitle">{title}</div>',
                '<div class="listSummary">{content}</div>',
                '<div class="listPublishDate">{begin_date}</div>',
            '</div>',

        '</div>'),
        store: 'notice'
    }
});