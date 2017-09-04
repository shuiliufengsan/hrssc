Ext.define('ChuangCai.view.system.TaskBrw', {
    alternateClassName: 'taskBrw',
    extend: 'ux.SimpleList',
    xtype: 'taskBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.system.TaskView'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'taskBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '我的任务',
        locales: {
            title: 'home.title'
        },
        
        itemTpl: new Ext.XTemplate(
        '<div class="btask">',
            //'<div class="img" style="background-image: url(resources/images/weather/n53.gif);"></div>',
            '<div class="bt">',
                '<div class="listTitle">{calendar_title}</div>',
                '<div class="listSummary">{content}</div>',
                '<div class="listStatusText">{status_text}</div>',
                '<div class="listStatusType">优先级:{importance_text}&nbsp&nbsp&nbsp&nbsp完成率:{complete_ratio}%</div>',
                '<div class="listTaskHappenDate">开始时间:{start_date}</div>',
                '<div class="listTaskResolveDate">结束时间:{end_date}</div>',
            '</div>',

        '</div>'),
        store: 'task'
    }
});