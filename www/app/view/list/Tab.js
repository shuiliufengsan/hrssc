Ext.define('ChuangCai.view.list.Tab', {
    alternateClassName: 'listTab',
    extend: 'ux.PageTab',
    xtype: 'listTab',
    requires: ['ux.plugin.SwipeTabs'],
    config: {
        cls: 'pageTab',
        title: '滑动TabList',
        //每次移动的距离
        moveNum: 0,
        plugins: 'swipetabs',
        items: [{
            xtype: 'listTpl',
            title: '列表1'
        },
        {
            xtype: 'listTpl',
            title: '列表2'
        },
        {
            xtype: 'listTpl',
            title: '列表3'
        },
        {
            xtype: 'listTpl',
            title: '列表4'
        }]
    }
});