Ext.define('ChuangCai.view.supervise.BorrowRecordView', {
    alternateClassName: 'borrowRecordView',
    extend: 'Ext.Panel',
    xtype: 'borrowRecordView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        cls: 'info',
        id: 'borrowRecordView',
        title: '借还车记录',
        plugins: 'conHref',
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.BorrowRecordView.getRecord();
                var me = this;
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Supervise/GetBorrowRecordView.ashx",
                        params: {
                            id: aRecord.data.id
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            //util.showMessage(aRecord.data.title, true);
                            Ext.getCmp('borrowRecordView').setHtml('<div class="newsTitle">' + aRecord.data.person_name + '</div><div class="newsTime">' + aRecord.data.borrow_return_datetime + '</div><br/><div class="">' + result.responseText + '</div>');
                            Ext.getCmp('borrowRecordView').setScrollable(true);

                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                }

            },





        }
    }
});