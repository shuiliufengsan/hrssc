//欢迎页
Ext.define('ChuangCai.view.FirstStart', {
    alternateClassName: 'firstStart',
    extend: 'Ext.Carousel',
    xtype: 'firstStart',
    requires: ['ChuangCai.view.Guide'],
    config: {
        items: [{
            html: 'app首次启动第一页，请下翻',
            padding: '3em'
        },
        {
            html: 'app首次启动第二页，请下翻',
            padding: '3em'
        },
        {
            xtype: 'guide'
        }]
    },
    initialize: function () {
        var me = this;
        //监听幻灯片旋转事件
        me.on({
            scope: me,
            painted: 'onPainted'
        });
    },
    onPainted: function () {
        var me = this;
        me.element.on('dragend',
        function (e) {
            if (me.offset == 0) {
                //当幻灯片转到最后一页时
                if (me.getActiveIndex() == me.getMaxItemIndex()) {
                    //触发自定义事件
                    me.fireEvent('showMain');
                }
            }
        });
    }
});