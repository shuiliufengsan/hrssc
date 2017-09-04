Ext.define('ChuangCai.view.supervise.EvaluationView', {
    alternateClassName: 'evaluationView',
    extend: 'Ext.Container',
    xtype: 'evaluationView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        cls: '',
        id: 'evaluationView',
        title: '考核内容',
        plugins: 'conHref',
        style: "background-color:#ffffff",
        //内容列表呈现
        items: [{
            xtype: 'panel',
            style: "background-color:#ffffff",
            disabled: true,
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
                        html: "考核项目：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "deductRuleName",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "扣分：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "deductScore",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "发生时间：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "happenTime",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "解决时间：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "resolveTime",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "发生时长：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "minuteTime",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "考核人：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "evaluationMan",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "考核时间：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "evaluationDate",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "说明：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "evaluationSourceText",
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
                //    xtype: "fieldset",
                //    layout: "hbox",
                //    cls: "i-panel-inner clear",
                //    items: [
                //    //    {
                //    //    xtype: "panel",
                //    //    html: "手机号码",
                //    //    width: (document.body.clientWidth) * 0.25,
                //    //    cls: "i-form-label"
                //    //},
                //    {
                //        xtype: "textareafield",
                //        width: (document.body.clientWidth) * 0.75,
                //        id: "problemDesc",
                //        component: {
                //            xtype: "input",
                //            type: "tel"
                //        },
                //        inputCls: "i-form-input",
                //    }]
                //},
            ]
        }],
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.EvaluationView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Supervise/GetEvaluationView.ashx",
                        params: {
                            id: aRecord.data.id, dynamicUrl: config.webSite
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            //util.showMessage(aRecord.data.title, true);
                            Ext.getCmp('stationName').setValue(aRecord.data.station_name);
                            Ext.getCmp('deductRuleName').setValue(aRecord.data.deduct_rule_name);
                            Ext.getCmp('deductScore').setValue(aRecord.data.deduct_scroe);
                            Ext.getCmp('happenTime').setValue(aRecord.data.happen_time);
                            Ext.getCmp('resolveTime').setValue(aRecord.data.resolve_time );
                            Ext.getCmp('minuteTime').setValue(aRecord.data.minute + '(分钟)');
                            Ext.getCmp('evaluationMan').setValue(aRecord.data.evaluation_man);
                            Ext.getCmp('evaluationDate').setValue(aRecord.data.evaluation_date);
                            Ext.getCmp('evaluationSourceText').setValue(aRecord.data.evaluation_source_text);
                            Ext.getCmp('evaluationView').setHtml('<div class="i-panel-content">' + result.responseText + '</div>');
                            Ext.getCmp('evaluationView').setScrollable(true);

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