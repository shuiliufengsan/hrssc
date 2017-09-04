Ext.define('ChuangCai.view.salary.BasicSalaryBrw', {
    alternateClassName: 'basicsalaryBrw',
    extend: 'ux.SimpleList',
    xtype: 'basicsalaryBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList','ChuangCai.view.salary.BasicSalaryView'],
    config: {

        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'basicsalaryBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '基本工资',
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
                '<div class="listSummary">{sequence}</div>',
                '<div class="listPublishDate">{transfer_date}</div>',
            '</div>',

        '</div>'),
        store: 'basicsalary'
    }
});