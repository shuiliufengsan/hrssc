Ext.define('ChuangCai.view.shop.ShopHomeNewsView', {
    alternateClassName: 'shopHomeNewsView',
    extend: "Ext.Panel",
    xtype: "shopHomeNewsView",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', "ux.plugin.RCarousel", 'ux.Countdown'],
    config: {
        cls: 'info',
        id: 'shopHomeNewsViewId',
        title: '消息内容',
        plugins: 'conHref',
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.EmptyView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Shop/GetShopHomeNewsView.ashx",
                        params: {
                            id: aRecord.data.id
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            //util.showMessage(aRecord.data.title, true);
                            Ext.getCmp('shopHomeNewsViewId').setHtml('<div class="newsTitle">' + aRecord.data.title + '</div><div class="newsTime">' + aRecord.data.publish_date + '</div><br/><div class="">' + result.responseText + '</div>');
                            Ext.getCmp('shopHomeNewsViewId').setScrollable(true);
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                }
            }
        }
    }
});