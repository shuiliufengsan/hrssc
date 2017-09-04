Ext.define('ChuangCai.view.workflow.VacationApply', {
    alternateClassName: 'vacationApplyInfo',
    extend: 'Ext.form.Panel',
    xtype: 'vacationApplyInfo',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Password','ux.DateTimePicker'],
    config: {
        cls: '',
        id: 'vacationApplyId',
        title: '填写请假单',
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
                id: 'employeeCodeId',
                label: '员工编号',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'selectfield',
                id: 'vacationTypeName',
                label: '请假类别',
                //options: [{
                //    text: '病假', value: ''
                //},{
                //    text: '事假', value: ''
                //}, {
                //    text: '预产假', value: ''
                //}, {
                //    text: '旷工', value: ''
                //}, {
                //    text: '婚假', value: ''
                //}, {
                //    text: '年休假', value: ''
                //}, {
                //    text: '保胎假', value: ''
                //}],
                autoCapitalize: true,
                usePicker: false,
                required: false,
                autoSelect:false,
                clearIcon: true
            },
            {
                xtype: 'datetimepickerfield',
                id: 'beginTime',
                label: '开始时间',
                value: new Date(),
                dateFormat : 'Y/m/d',
                //picker: { yearFrom: 1900, yearTo: new Date().getFullYear() },
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'datetimepickerfield',
                id: 'endTime',
                label: '结束时间',
                value: new Date(),
                dateFormat: 'Y/m/d',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'textareafield',
                id: 'vacationReason',
                label: '请假原因',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            }]
        }],
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                //Ext.getCmp('vacationReason').setValue('333');
                //Ext.getCmp('fieldset1').disable();
                //Ext.getCmp('employeeCodeId').setPlaceHolder('');
                //Ext.getCmp('video1').play();
                Ext.regModel('VacationType', {
                    fields: [
                        { name: 'value', type: 'string' },
                        { name: 'text', type: 'string' }
                    ]
                });
                vacationTypeStore = new Ext.data.Store({
                    model: 'VacationType',
                    //data: [{ value: '1', text: '2' }, { value: '3', text: '4' }, { value: '5', text: '6' }]
                    proxy: {
                        type: "ajax",
                        url: util.getMobileSite() + 'HR/GetDropDownList.ashx',
                        reader: {
                            type: "json",
                            rootProperty: "result",
                            totalProperty: 'totalCounts'
                        }
                    },
                    autoLoad: true
                });
                Ext.getCmp('vacationTypeName').setStore(vacationTypeStore);

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