Ext.define('ChuangCai.view.supervise.BorrowRecordBrw', {
    alternateClassName: 'borrowRecordBrw',
    extend: 'ux.SimpleList',
    xtype: 'borrowRecordBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'borrowRecordBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '借还车记录',
        locales: {
            title: 'home.title'
        },
        //indexBar: true,
        //grouped: true,
        //items:[{  
        //    xtype:'toolbar',                                       //  bottom toolbar  
        //    docked: 'top',
        //    cls: 'navToolbar',
        //    height: '46px',
        //    items:[{  
        //        xtype: 'searchfield',  
        //        itemId:'contact_search',  
        //        id: 'contact_search',
        //        height: '44px',
        //        padding: '0 0 0 0',
        //        //ui:'searchfield',
        //        //inputCls: 'searchfield',
        //        //placeHolder: 'Search Contacts',
        //        width: '100%'
        //    }]
        //}],
        itemTpl: new Ext.XTemplate(
        '<div class="bh">',
            //'<div class="img" style="background-image: url(resources/images/weather/n53.gif);"></div>',
            '<div class="bv">',
                '<div class="listTitle">{person_name}</div>',
                '<div class="listSummary">{person_cardno}</div>',
                '<div class="listPublishDate">{borrow_return_datetime}</div>',
            '</div>',
        '</div>'),
        store: 'borrowRecord'
    }
});