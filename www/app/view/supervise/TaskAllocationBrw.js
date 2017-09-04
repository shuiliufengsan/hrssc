Ext.define('ChuangCai.view.supervise.TaskAllocationBrw', {
    alternateClassName: 'taskAllocationBrw',
    extend: 'ux.SimpleList',
    xtype: 'taskAllocationBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'taskAllocationBrwId',
        plugins: ['refreshFn', 'listpaging'],
        //title: '站点完好率',
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
                id: "taskAllocationBrwNewId",
                text: "新登记<span>(0)</span>",
                width: "33.3%",
                cls: "u-tab u-tab-first u-tab-active"
            },
            {
                xtype: "button",
                id: "taskAllocationBrwProcessId",
                text: "处理中<span>(0)</span>",
                width: "33.3%",
                cls: "u-tab"
            }, {
                xtype: "button",
                id: "taskAllocationBrwCompleteId",
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
                '<div class="listSummary">{report_man}:{problem_desc}</div>',
                 '<div class="listStatusText">{status_text}</div>',
                '<div class="listPublishDate">{find_time}</div>',
            '</div>',
        '</div>'),
        store: 'taskAllocation'
    }
});