Ext.define('ChuangCai.view.workflow.NoCardingBrw', {
    alternateClassName: 'noCardingBrw',
    extend: 'ux.SimpleList',
    xtype: 'noCardingBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.workflow.NoCardingView'],
    config: {

        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'noCardingBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '忘刷中心',
        locales: {
            title: 'home.title'
        },
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
                '<div class="listSummary">{shift_type}</div>',
                '<div class="listPublishDate">{audit_status}</div>',
            '</div>',

        '</div>'),
        store: 'noCarding'
    }
});