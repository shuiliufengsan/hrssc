Ext.define('ChuangCai.view.shop.SearchBrw', {
    alternateClassName: 'searchBrw',
    extend: 'ux.SimpleList',
    xtype: 'searchBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        id: 'searchBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '搜索宝贝',
        items: [{
            xtype: "panel",
            height: "40px",
            iconAlign: 'bottom',
            docked: 'top',
            layout: "hbox",
            id: "bottomAddPanel",
            style: "border-top:1px solid #E5E5E5;",
            items: [{
                xtype: 'image',
                height: '40px',
                width: '40px',
                style: "float:left;",
                cls: "i-search-home-icon"
            }, {
                xtype: 'textfield',
                id: 'search_content_box',
                height: '40px',
                style: "float:left;",
                cls: "i-search-text",
                clearIcon: false,
                placeHolder: "输入搜索内容",
                width: document.body.clientWidth - 98,
            }, {
                xtype: 'textfield',
                hidden:true,
                id: 'loadSearchResult',
            }, {
                xtype: 'button',
                itemId: 'searchProBtn',
                style: "float:right;",
                height: '35px',
                cls: "i-exit-personal-centre",
                text: '搜索',
            }]
        }, {
            xtype: "panel",
            height: "1px",
            style: "background-color: #E5E5E5;"
        }, {
            xtype: "panel",
            height: "45px",
            iconAlign: 'bottom',
            docked: 'bottom',
            layout: "hbox",
            id: "topAddPanel",
            centered: true,
            style: "border-top:1px solid #EDEDED;padding-top:8px;",
            items: [{
                xtype: "panel",
                width: document.body.clientWidth * 0.25,
                style: "float:left;background-color: #FFFFFF;",
            }, {
                itemId: 'clearSearchBtn',
                xtype: 'button',
                width: document.body.clientWidth * 0.5,
                height: '30px',
                cls: "i-clear-search-home",
                text: '清空搜索历史'
            }]
        }],
        itemTpl: new Ext.XTemplate(
            '<div class="e-box clear">',
            '<tpl>',
                '<tpl if="search_keyword">', "<p style='padding-left:15px'>{search_keyword}</p>",
                "<tpl else>", "<p>这家伙很懒,什么都没有留下~~~~</p>", "</tpl>",
                "</div>",
            "</div>"),
        store: 'SearchRecord'
    }
});