Ext.define('ChuangCai.view.system.ContactBrw', {
    alternateClassName: 'contactBrw',
    extend: 'ux.SimpleList',
    xtype: 'contactBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.system.ContactView'],
    config: {
        
        cls: 'list',
        //onItemDisclosure: true,
        limit:5,
        id: 'contactBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '通讯中心',
        locales: {
            title: 'home.title'
        },
        indexBar: true,
        grouped: true,
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
                '<div class="listTitle">{employee_name}</div>',
                '<div class="listSummary">{mobile}</div>',
                //'<div class="listPublishDate">{created_date}</div>',
            '</div>',

        '</div>'),
        store: 'contact'
    }
});