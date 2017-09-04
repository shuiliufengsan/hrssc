Ext.define('ChuangCai.view.human.Home', {
    alternateClassName: 'humanHome',
    extend: 'Ext.List',
    xtype: 'humanHome',
    requires: ['ChuangCai.view.list.Xml',
        'ChuangCai.view.list.Tpl',
        'ChuangCai.view.list.Tab',
        'ChuangCai.view.human.Info',
        //'ChuangCai.view.human.EducationBrw'
    ],
    config: {
        title: '档案信息',
        onItemDisclosure: true,
        cls: 'list',
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
            title: '基本信息',
            redirect: 'humanInfo',
            backgroundimage:'resources/images/system/human_info.png',
            //store: 'blogList'
        },
        {
            title: '教育背景',
            redirect: 'humanEducationBrw',
            backgroundimage: 'resources/images/system/education.png',
        },
        {
            title: '工作经历',
            redirect: 'listTab',
            backgroundimage: 'resources/images/system/work_experience.png',
        },
        {
            title: '员工专长',
            redirect: 'listUsed',
            backgroundimage: 'resources/images/system/setup.png',
        },
        {
            title: '员工职能',
            redirect: 'listUsed',
            backgroundimage: 'resources/images/system/competence.png',
        },
        {
            title: '员工证照',
            redirect: 'listUsed',
            backgroundimage: 'resources/images/system/license.png',
        }]
    }
});