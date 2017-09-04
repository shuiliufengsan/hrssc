Ext.define('ChuangCai.view.system.NewsBrw', {
    alternateClassName: 'newsBrw',
    extend: 'ux.SimpleList',
    xtype: 'newsBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.system.NewsView'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'newsBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '新闻中心',
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
                id: "newsBrwNewId",
                text: "未读新闻<span>(0)</span>",
                width: "49.9%",
                cls: "u-tab u-tab-first u-tab-active"
            },
           {
               xtype: "button",
               id: "newsBrwCompleteId",
               text: "已读新闻<span>(0)</span>",
               width: "49.9%",
               cls: "u-tab"
           }]
        }],
        itemTpl: new Ext.XTemplate(
        '<div class="bh">',
            //'<div class="img" style="background-image: url(resources/images/weather/n53.gif);"></div>',
            '<div class="bv">',
                '<div class="listTitle">{title}</div>',
                '<div class="listSummary">{summary}</div>',
                '<div class="listCommentDate">{publish_date}</div>',
                '<div class="listCommentIcon"><img src="resources/images/commentIcon.png" width="15" height="15"></div>',
                 '<div class="listComment">{count}</div>',
            '</div>',
        '</div>'),
        store: 'news'
    }
});