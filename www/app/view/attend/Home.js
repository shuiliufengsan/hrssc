Ext.define('ChuangCai.view.attend.Home', {
    alternateClassName: 'attendHome',
    extend: 'Ext.List',
    xtype: 'attendHome',
    requires: ['ChuangCai.view.list.Xml',
        'ChuangCai.view.list.Tpl',
        'ChuangCai.view.list.Tab',
    ],
    config: {
        title: '考勤中心',
        onItemDisclosure: true,
        cls: 'list',
        id: 'attendHomeId',
        scrollable: {
            disabled: false
        },
        //itemTpl:'{title}',
        itemTpl: new Ext.XTemplate(
        '<div class="navigation_box">',
            '<div class="navigation_image" style="background-image: url(resources/images/weather/n30.gif);"></div>',
            '<div class="navigation_text">{title}</div>',
        '</div>'),
        data: [{
            title: '移动考勤',
            redirect: '',
        },
        {
            title: '考勤明细',
            redirect: '',
        //},
        //{
        //    title: '加班申请单',
        //    redirect: 'OvertimeApplyInfo',
        //},
        //{
        //    title: '忘刷申请单',
        //    redirect: 'NoCardingClockApplyInfo',
        //},
        //{
        //    title: '报销申请单',
        //    redirect: 'FeeExpenseApplyInfo',
        //},
        //{
        //    title: '培训申请单',
        //    redirect: '',
        }]
    }
});