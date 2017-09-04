Ext.define('ChuangCai.view.workflow.OvertimeView', {
    alternateClassName: 'overtimeView',
    extend: 'Ext.Container',
    xtype: 'overtimeView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', 'Ext.form.FieldSet'],
    config: {
        cls: 'info',
        id: 'overtimeView',
        title: '详细内容',
        plugins: 'conHref',
        //内容列表呈现
        items: [{
            xtype: 'fieldset',
            defaults: {
                labelWidth: '35%'
            },
            disabled: true,
            items: [
            {
                xtype: 'textfield',
                id: 'employee_code',
                name: 'employee_code',
                label: '员工编号',
                autoCapitalize: true,
                required: false,

                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'employee_name',
                name: 'employee_name',
                label: '员工姓名',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'overtime_type',
                name: 'overtime_type',
                label: '加班类型',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'begin_overtime',
                name: 'begin_overtime',
                label: '开始时间',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'end_overtime',
                name: 'end_overtime',
                label: '结束时间',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'overtime_hour',
                name: 'overtime_hour',
                label: '加班时数',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'fee_or_mend',
                name: 'fee_or_mend',
                label: '计费/调休/其他',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'audit_status',
                name: 'audit_status',
                label: '审核状态',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            }]
        }],
        listeners: {

            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.OvertimeView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.getCmp('employee_code').setValue(aRecord.data.employee_code);
                    Ext.getCmp('employee_name').setValue(aRecord.data.employee_name);
                    Ext.getCmp('begin_overtime').setValue(aRecord.data.begin_overtime);
                    Ext.getCmp('end_overtime').setValue(aRecord.data.end_overtime);
                    Ext.getCmp('overtime_hour').setValue(aRecord.data.overtime_hour);
                    Ext.getCmp('fee_or_mend').setValue(aRecord.data.fee_or_mend);
                    Ext.getCmp('overtime_type').setValue(aRecord.data.overtime_type);
                    Ext.getCmp('audit_status').setValue(aRecord.data.audit_status);
                    Ext.getCmp('overtimeView').setScrollable(true);
                }
            }

        }
    }
});