Ext.define('ChuangCai.view.workflow.FeeExpenseApply', {
    alternateClassName: 'FeeExpenseApplyInfo',
    extend: 'Ext.form.Panel',
    xtype: 'FeeExpenseApplyInfo',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Password', 'ux.DateTimePicker'],
    config: {
        cls: '',
        id: 'FeeExpenseApplyId',
        title: '填写报销单',
        items: [{
            xtype: 'fieldset',
            id: 'fieldset1',
            //title: '个人信息',
            defaults: {
                labelWidth: '35%'
            },
            items: [
            {
                xtype: 'textfield',
                id: 'departmentName',
                label: '部门名称',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'employeeCodeId',
                label: '员工编号',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'employeeName',
                label: '员工姓名',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'freeExpenseName',
                label: '费用项目',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'selectfield',
                id: 'freeTypeName',
                label: '类别',
                options: [{
                    text: '差旅费', value: ''
                }, {
                    text: '办公费', value: ''
                }, {
                    text: '交通费', value: ''
                }, {
                    text: '招待费', value: ''
                }, {
                    text: '会务费', value: ''
                }, {
                    text: '电话费', value: ''
                }, {
                    text: '其他', value: ''
                }],
                autoCapitalize: true,
                autoSelect: false,
                usePicker: false,
                required: true,
                clearIcon: true
            //},
            //{
            //    xtype: 'datetimepickerfield',
            //    id: 'beginTime',
            //    label: '开始时间',
            //    value: new Date(),
            //    dateFormat: 'Y/m/d',
            //    //picker: { yearFrom: 1900, yearTo: new Date().getFullYear() },
            //    autoCapitalize: true,
            //    required: true,
                //    useClearIcon: true
            },
            {
                xtype: 'numberfield',
                id: 'freeMoney',
                label: ' 金额 ',
                minValue : 0,
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'textareafield',
                id: 'FreeExpenseInstructions',
                label: '报销说明',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            }]
        }],
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {

                //Ext.getCmp('fieldset1').disable();
                //Ext.getCmp('employeeCodeId').setPlaceHolder('');
                //Ext.getCmp('video1').play();
                var bar = obj.getNavigationBar();
                if (Ext.getCmp('edit') == null) {
                    bar.add({
                        id: 'edit',
                        xtype: 'img',
                        right: 5,
                        centered: true,
                        src: 'resources/images/system/submit.gif',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        handler: function () {
                        }
                    });
                }
            },
            deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var bar = obj.getNavigationBar();
                bar.remove(Ext.getCmp('edit'));
            }
        }
    }
});