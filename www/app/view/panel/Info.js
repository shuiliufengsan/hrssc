Ext.define('ChuangCai.view.panel.Info', {
    alternateClassName: 'panelInfo',
    extend: 'Ext.Container',
    xtype: 'panelInfo',
    requires: ['ux.plugin.PanelRefreshFn', 'ux.WeiboPicker'],
    config: {
        title: '下拉刷新',
        cls: 'info',
        plugins: [{
            xtype: 'panelRefreshFn',
            refreshFn: function (loaded, arguments) {
                console.log('正在刷新');
                this.refreshReady(); // 刷新完成后必须调用
            }
        }],
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        html: '这是一个下拉刷新面板'
    }
});