Ext.define('ChuangCai.view.list.Xml', {
    alternateClassName: 'listXml',
    extend: 'Ext.List',
    requires: ['ux.plugin.RefreshFn'],
    xtype: 'listXml',
    config: {
        title: 'Xml取值',
        cls: 'list',
        itemTpl: '{title}',
        plugins: [{
            xtype: 'refreshFn',
            refreshFn: function (loaded, arguments) {
                //开始刷新触发的时间，默认效果是只刷新第一页数据。不管后面显示了多少数据
                //这里进行了处理，触发时清空所有数据，重新加载第一页数据。
                loaded.getList().getStore().loadPage(1);
            }
        }],
        store: 'blogList'
    }
});