Ext.define('ChuangCai.view.workflow.Home', {
    alternateClassName: 'workflowHome',
    extend: 'Ext.List',
    xtype: 'workflowHome',
    requires: ['ChuangCai.view.list.Xml',
        'ChuangCai.view.list.Tpl',
        'ChuangCai.view.list.Tab',
        'ChuangCai.view.workflow.VacationApply',
        'ChuangCai.view.workflow.ChangeShiftApply',
        'ChuangCai.view.workflow.OvertimeApply',
        'ChuangCai.view.workflow.NoCardingClockApply',
        'ChuangCai.view.workflow.FeeExpenseApply',
        'ChuangCai.view.workflow.TrainApply',
        'ChuangCai.view.workflow.VacationBrw',
    ],
    config: {
        title: '流程中心',
        onItemDisclosure: true,
        cls: 'list',
        id: 'workflowHomeId',
        scrollable: {
            disabled: false
        },
        //itemTpl:'{title}',
        itemTpl: new Ext.XTemplate(
        '<div class="navigation_box">',
            '<div class="navigation_image" style="background-image: url({backgroundimage});"></div>',
            '<div class="navigation_text">{title}</div>',
        '</div>'),
        data: [{
            title: '请假申请单',
            redirect: 'vacationBrw',
            backgroundimage: 'resources/images/system/workflow_vacation.png',
        },
        {
            title: '调班申请单',
            redirect: 'changeShiftApplyInfo',
            backgroundimage: 'resources/images/system/workflow_changeshift.png',
        },
        {
            title: '加班申请单',
            redirect: 'OvertimeApplyInfo',
            backgroundimage: 'resources/images/system/workflow_overtime.png',
        },
        {
            title: '忘刷申请单',
            redirect: 'NoCardingClockApplyInfo',
            backgroundimage: 'resources/images/system/workflow_nocarding.png',
        },
        {
            title: '报销申请单',
            redirect: 'FeeExpenseApplyInfo',
            backgroundimage: 'resources/images/system/workflow_freeexpense.png',
        },
        {
            title: '培训申请单',
            redirect: '',
            backgroundimage: 'resources/images/system/workflow_train.png',
        }]
    }
});