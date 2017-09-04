Ext.define('ChuangCai.view.salary.Home', {
    alternateClassName: 'salaryHome',
    extend: 'Ext.List',
    xtype: 'salaryHome',
    requires: ['ChuangCai.view.list.Xml',
        'ChuangCai.view.list.Tpl',
        'ChuangCai.view.list.Tab',
        'ChuangCai.view.human.Info',
        'ChuangCai.view.salary.BasicSalary',
        'ChuangCai.view.salary.BasicSalaryBrw',
        'ChuangCai.view.salary.SalaryDetails',
        'ChuangCai.view.salary.SalaryDetailsBrw',
        
    ],
    config: {
        title: '薪资信息',
        onItemDisclosure: true,
        cls: 'list',
        id: 'salaryHomeId',
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
            title: '基本工资',
            redirect: 'BasicSalaryBrw',
        },
        {
            title: '薪资明细',
            redirect: 'SalaryDetailsBrw',
        }]
    }
});