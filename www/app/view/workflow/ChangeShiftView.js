Ext.define('ChuangCai.view.workflow.ChangeShiftView', {
    alternateClassName: 'changeShiftView',
    extend: 'Ext.Container',
    xtype: 'changeShiftView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', 'Ext.form.FieldSet'],
    config: {
        cls: 'info',
        id: 'changeShiftView',
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
                id: 'new_shift_group',
                name: 'new_shift_group',
                label: '新班别名称',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'begin_date',
                name: 'begin_date',
                label: '开始时间',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'end_date',
                name: 'end_date',
                label: '结束时间',
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
                var aRecord = Ext.Viewport.ChangeShiftView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.getCmp('employee_code').setValue(aRecord.data.employee_code);
                    Ext.getCmp('employee_name').setValue(aRecord.data.employee_name);
                    Ext.getCmp('new_shift_group').setValue(aRecord.data.new_shift_group);
                    Ext.getCmp('begin_date').setValue(aRecord.data.begin_date);
                    Ext.getCmp('end_date').setValue(aRecord.data.end_date);
                    Ext.getCmp('audit_status').setValue(aRecord.data.audit_status);
                    Ext.getCmp('changeShiftView').setScrollable(true);
                }
            }

        }
    }
});