Ext.define('ChuangCai.view.supervise.PatrolTrackView', {
    alternateClassName: 'patrolTrackView',
    extend: 'Ext.Container',
    xtype: 'patrolTrackView',
    requires: ['ux.plugin.ConHref',
               'ChuangCai.view.panel.Img',
               'Ext.form.FieldSet',
               'Ext.Button',
               'ux.Fileup'
    ],
    config: {
        cls: '',
        id: 'patrolTrackView',
        title: '详细内容',
        plugins: 'conHref',
        style: "background-color:#ffffff",
        //内容列表呈现
        items: [{
            xtype: 'panel',
            style: "background-color:#ffffff",
            //disabled: true,
            items: [
                {
                    xtype: "panel",
                    id: "commonInfoId",
                    width: (document.body.clientWidth),
                    height: 50,
                    cls: "i-form-fieldset-title clear",
                    html: "基本信息"
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    //height:30,
                    cls: "hidden",
                    items: [{
                        xtype: "panel",
                        html: "ID：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        style: "background-color:#ffffff",
                        width: (document.body.clientWidth) * 0.7,
                        id: "rowId",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    //height:30,
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "站点名称：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        style: "background-color:#ffffff",
                        width: (document.body.clientWidth) * 0.7,
                        id: "stationName",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "发现时间：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "indateId",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "登记人：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "ReportMan",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "状态：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "StatusText",
                        inputCls: "i-form-input",
                    }]
                },

                {
                    xtype: "panel",
                    id: "contactInfoId",
                    width: (document.body.clientWidth),
                    height: 50,
                    cls: "i-form-fieldset-title clear",
                    html: "问题描述"
                },
                //{
                //    xtype: "panel",
                //    //layout: "hbox",
                //    //height:30,
                //    cls: "i-panel-inner clear",
                //    items: [
                //    //    {
                //    //    xtype: "panel",
                //    //    //html: "站点名称：",
                //    //    width: (document.body.clientWidth) * 0.3,
                //    //    cls: "i-form-label"
                //    //},
                //    {
                //        xtype: "textareafield",
                //        disabled: true,
                //        style: "background-color:#ffffff",
                //        width: (document.body.clientWidth) * 1,
                //        id: "problemDesc",
                //        inputCls: "i-form-input",
                //    }]
                //},
                //{
                //    xtype: "panel",
                //    id: "problemDesc",
                //    width: (document.body.clientWidth),
                //    //height: 50,
                //    cls: "i-form-fieldset-title clear",
                //    html: "问题描述"
                //},
                //{
                //    xtype: "textareafield",
                //    disabled: true,
                //    style: "background-color:#ffffff",
                //    width: (document.body.clientWidth) * 1,
                //    id: "problemDesc",
                //    inputCls: "i-form-input",
                //}

            ]
        }],
        listeners: {

            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                //var aRecord = Ext.Viewport.PatrolView.getRecord();
                //if (aRecord == null) {
                //    util.showMessage1('空', true);
                //}
                //else {
                //    Ext.Ajax.request({
                //        url: util.getMobileSite() + "Supervise/GetPatrolTrackView.ashx",
                //        params: {
                //            id: aRecord.data.id
                //        },
                //        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                //        success: function (result, context) {
                //            //util.showMessage(aRecord.data.title, true);
                //            Ext.getCmp('stationName').setValue(aRecord.data.station_name);
                //            Ext.getCmp('ReportMan').setValue(aRecord.data.report_man);
                //            Ext.getCmp('StatusText').setValue(aRecord.data.status_text);
                //            Ext.getCmp('indateId').setValue(aRecord.data.find_time);
                //            //Ext.getCmp('patrolView').setHtml(11);
                //            //Ext.getCmp('problemDesc').setValue(result.responseText);
                //            Ext.getCmp('patrolView').setHtml('<div class="i-panel-content">' + result.responseText + '</div>');
                //            Ext.getCmp('patrolTrackView').setScrollable(true);

                //        },
                //        failure: function (result, context) {
                //            var msg = result.responseText;
                //            util.showMessage(msg, true);
                //        },
                //        method: "POST"
                //    });
                //}
                var aRecord = Ext.Viewport.PatrolTrackView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    
                    Ext.getCmp('rowId').setValue(aRecord.data.id);
                    Ext.getCmp('stationName').setValue(aRecord.data.station_name);
                    Ext.getCmp('ReportMan').setValue(aRecord.data.report_man);
                    Ext.getCmp('StatusText').setValue(aRecord.data.status_text);
                    Ext.getCmp('indateId').setValue(aRecord.data.find_time);
                    //Ext.getCmp('problemDesc').setValue(aRecord.data.problem_desc);

                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Supervise/GetPatrolTrackView.ashx",
                        params: {
                            id: aRecord.data.id, dynamicUrl: config.webSite
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            //Ext.getCmp('problemDesc').setHtml('<div class="i-panel-content">' + result.responseText + '</div>');
                            Ext.getCmp('patrolTrackView').setHtml('<div class="i-panel-content">' + result.responseText + '</div>');
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                    Ext.getCmp('patrolTrackView').setScrollable(true);
                }
            }

        }
    }
});