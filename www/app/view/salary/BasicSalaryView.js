Ext.define('ChuangCai.view.salary.BasicSalaryView', {
    alternateClassName: 'basicsalaryView',
    extend: 'Ext.Container',
    xtype: 'basicsalaryView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', 'Ext.form.FieldSet'],
    config: {
        cls: 'info',
        id: 'basicsalaryView',
        title: '详细信息',
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
                id: 'sequence',
                name: 'sequence',
                label: '工资',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'transfer_date',
                name: 'transfer_date',
                label: '时间',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            }]
        }],
        listeners: {

            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.BasicSalaryView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.getCmp('employee_code').setValue(aRecord.data.employee_code);
                    Ext.getCmp('employee_name').setValue(aRecord.data.employee_name);
                    Ext.getCmp('sequence').setValue(aRecord.data.sequence);
                    Ext.getCmp('transfer_date').setValue(aRecord.data.transfer_date);
                 
                    Ext.getCmp('basicsalaryView').setScrollable(true);
                }
            }

        }
    }
});