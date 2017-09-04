Ext.define('ChuangCai.view.workflow.ChangeShiftApply', {
    alternateClassName: 'changeShiftApplyInfo',
    extend: 'Ext.form.Panel',
    xtype: 'changeShiftApplyInfo',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Password', 'ux.DateTimePicker'],
    config: {
        cls: '',
        id: 'changeShiftApplyId',
        title: '填写调班信息',
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
                // id:'from_employee_id',
               // name: 'from_employee_id',
                label: '员工编号',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'employeename',
                //id: 'log_user_name',
                //name: 'log_user_name',
                
                label: '员工姓名',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'datetimepickerfield',
                id: 'beginTime',
                label: '开始时间',
                value: new Date(),
                dateFormat: 'Y/m/d',
                picker: { yearFrom: 1900, yearTo: new Date().getFullYear() },
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
                xtype: 'textfield',
                id: 'shiftGroupCode',
                label: '班别规则代码',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'shiftGroupName',
                label: '班别规则名称',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            }]
        }],
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                //var aRecord = Ext.Viewport.ChangeShiftApply.getRecord();
                //if (aRecord == null) {
                //    util.showMessage1('空', true);
                //}
                //else {
                //    Ext.Ajax.request({
                //        url: util.getMobileSite() + "workflow/GetChangeShiftBrw.ashx",
                //        //params: {
                //        //    id: aRecord.data.id
                //        //},
                //        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                //        success: function (result, context) {
                //            var dd = result.responseText;
                //            var ee = Ext.decode(dd);
                //            Ext.getCmp('employeeCodeId').setValue(ee[0].EMPLOYEE_CODE);
                //            Ext.getCmp('employeename').setValue(ee[0].EMPLOYEE_NAME);
                //        },
                //        failure: function (result, context) {
                //            var msg = result.responseText;
                //            util.showMessage(msg, true);
                //        },
                //        method: "POST"
                //    });
                    
                   
                    //Ext.getCmp('changeShiftApplyInfo').setScrollable(true);
                //}
                //Ext.getCmp('fieldset1').disable();
                //Ext.getCmp('employeeCodeId').setPlaceHolder('');
                //Ext.getCmp('video1').play();
                var bar = obj.getNavigationBar();
                if (Ext.getCmp('edit') == null) {
                    bar.add({
                        id: 'edit',
                        xtype: 'img',
                        right: 5,
                        centered:true,
                        src: 'resources/images/system/submit.gif',
                        width: 45,
                        height:45,
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