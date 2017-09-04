Ext.define('ChuangCai.view.supervise.LockBrw', {
    alternateClassName: 'lockBrw',
    extend: 'ux.SimpleList',
    xtype: 'lockBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'lockBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '锁车柱完好率',
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
                id: "lockBrwNewId",
                text: "新登记<span>(0)</span>",
                width: "33.3%",
                cls: "u-tab u-tab-first u-tab-active"
            },
            {
                xtype: "button",
                id: "lockBrwProcessId",
                text: "处理中<span>(0)</span>",
                width: "33.3%",
                cls: "u-tab"
            }, {
                xtype: "button",
                id: "lockBrwCompleteId",
                text: "处理完<span>(0)</span>",
                width: "33.3%",
                cls: "u-tab"
            }]
        }],
        itemTpl: new Ext.XTemplate(
        '<div class="bh">',
            //'<div class="img" style="background-image: url(resources/images/weather/n53.gif);"></div>',
            '<div class="bv">',
                '<div class="listTitle">{station_name}</div>',
                //'<div class="listTitle">{status_text}</div>',
                //'<div class="listSummary">{problem_desc}</div>',
                '<div class="listSummary">{report_man}:{problem_desc}</div>',
               '<div class="listStatusText">{status_text}</div>',
                '<div class="listPublishDate">{find_time}</div>',
            '</div>',
        '</div>'),
        store: 'lock'
    }
});