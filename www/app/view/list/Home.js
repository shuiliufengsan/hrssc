Ext.define('ChuangCai.view.list.Home', {
    alternateClassName: 'listHome',
    extend: 'Ext.List',
    xtype: 'listHome',
    requires: ['ChuangCai.view.list.Xml', 'ChuangCai.view.list.Tpl', 'ChuangCai.view.list.Tab'],
    config: {
        title: '列表',
        cls: 'list',
        scrollable: {
            disabled: true
        },
        navigationBar: {
            tmpItems: [{
                text: '点我',
                action: 'navBtn',
                align: 'right',
                ui: 'decline'
            }]
        },
        itemTpl: '{title}',
        data: [{
            title: 'Xml取值',
            redirect: 'listXml',
            store: 'blogList'
        },
        {
            title: '列表模版',
            redirect: 'listTpl',
            store: 'quizList'
        },
        {
            title: '滑动TabList',
            redirect: 'listTab',
            store: 'quizList'
        },
        {
            title: '二手物品',
            redirect: 'listUsed',
            store: 'usedList'
        }]
    }
});