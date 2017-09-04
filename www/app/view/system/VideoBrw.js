Ext.define('ChuangCai.view.system.VideoBrw', {
    alternateClassName: 'videoBrw',
    extend: 'ux.SimpleList',
    xtype: 'videoBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.system.VideoView'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id:'videoBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '微学院',
        locales: {
            title: 'home.title'
        },
        items:[{  
            xtype: "panel",
            layout: "hbox",
            height: "35px",
            docked: 'top',
            ui: "uuchina",
            id: "DGOrCoupon",
            items: [{
                xtype: "button",
                id: "videoBrwVideoId",
                text: "视频<span>(0)</span>",
                width: "49.9%",
                cls: "u-tab u-tab-first u-tab-active"
            },
           {
               xtype: "button",
               id: "videoBrwAudioId",
               text: "音频<span>(0)</span>",
               width: "49.9%",
               cls: "u-tab"
            }]
        }],
        itemTpl: new Ext.XTemplate(
        '<div class="bh">',
            '<div class="bv">',
                '<div class="listTitle">{title}</div>',
                '<div class="listSummary">{summary}</div>',
                '<div class="listPublishDate">{publish_date}</div>',
            '</div>',

        '</div>'),
        store: 'video'
    }
});