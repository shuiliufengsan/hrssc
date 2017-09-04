Ext.define('ChuangCai.view.system.ApproveCenterBrw', {
    alternateClassName: 'approvecenterBrw',
    extend: 'ux.SimpleList',
    xtype: 'approvecenterBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'approvecenterBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '审批中心',
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
                '<div class="listTitle">{log_user_name}</div>',
               //'<div class="listSummary">{subject}</div>',
                '<div class="listSummary">{module_name}</div>',
                '<div class="listPublishDate">{send_time}</div>',
            '</div>',

        '</div>'),
        store: 'approvecenter'
    }
});