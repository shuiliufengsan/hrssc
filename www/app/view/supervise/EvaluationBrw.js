Ext.define('ChuangCai.view.supervise.EvaluationBrw', {
    alternateClassName: 'evaluationBrw',
    extend: 'ux.SimpleList',
    xtype: 'evaluationBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.supervise.EvaluationView'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'evaluationBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '绩效考核',
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
        '<div class="beval">',
            //'<div class="img" style="background-image: url(resources/images/weather/n53.gif);"></div>',
            '<div class="be">',
                '<div class="listTitle">{station_name}</div>',
                '<div class="listSummary">考核项目:{deduct_rule_name}</div>',
                '<div class="listHappenDate">发生时间:{happen_time}</div>',
                '<div class="listDeductScore">扣分:{deduct_scroe}</div>',
                '<div class="listResolveDate">解决时间:{resolve_time}</div>',
            '</div>',
        '</div>'),
        store: 'evaluation'
    }
});