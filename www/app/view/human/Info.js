Ext.define('ChuangCai.view.human.Info', {
    alternateClassName: 'humanInfo',
    extend: 'Ext.form.Panel',
    xtype: 'humanInfo',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Password'],
    config: {
        cls: '',
        id: 'humanInfoId',
        title: '基本信息',
        items: [{
            xtype: 'panel',
            id: 'fieldset1',
            //title: '个人信息',
            style: "background-color:#ffffff",
            defaults: {
                labelWidth: '35%'
            },
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
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "姓名",
                        width: (document.body.clientWidth) * 0.25,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        width: (document.body.clientWidth) * 0.75,
                        id: "employeeCodeId",
                        inputCls: "i-form-input",
                        placeHolder: "请输入姓名"
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "到职日期",
                        width: (document.body.clientWidth) * 0.25,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        width: (document.body.clientWidth) * 0.75,
                        id: "indateId",
                        inputCls: "i-form-input",
                        placeHolder: "请输入日期"
                    }]
                },
                {
                    xtype: "panel",
                    id: "contactInfoId",
                    width: (document.body.clientWidth),
                    height: 50,
                    cls: "i-form-fieldset-title clear",
                    html: "联系方式"
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "手机号码",
                        width: (document.body.clientWidth) * 0.25,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        width: (document.body.clientWidth) * 0.75,
                        id: "employeeCodeId1",
                        component: {
                            xtype: "input",
                            type: "tel"
                        },
                        inputCls: "i-form-input",
                        placeHolder: "请输入手机号码"
                    }]
                },
            ]
        }],
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                //Ext.getCmp('fieldset1').disable();
                Ext.getCmp('employeeCodeId').setValue('Frank');
                //Ext.getCmp('video1').play();
                var bar = obj.getNavigationBar();
                if (Ext.getCmp('edit') == null) {
                    bar.add({
                        id: 'edit',
                        xtype: 'button',
                        text: '编辑',
                        align: 'right',
                        ui: 'decline',
                        handler: function () {
                            Ext.getCmp('fieldset1').enable();
                            var bar = obj.getNavigationBar();
                            Ext.getCmp('edit').hide();
                            if (Ext.getCmp('save') !== null) {
                                Ext.getCmp('save').show();
                                Ext.getCmp('cancel').show();
                            }
                        }
                    });
                }
                if (Ext.getCmp('save') == null) {
                    bar.add({
                        id: 'save',
                        xtype: 'button',
                        text: '保存',
                        align: 'right',
                        ui: 'decline',
                        handler: function () {
                            Ext.getCmp('fieldset1').disable();
                            Ext.getCmp('save').hide();
                            Ext.getCmp('cancel').hide();
                            if (Ext.getCmp('edit') !== null) {
                                Ext.getCmp('edit').show();
                            }
                            Ext.getCmp('employeeCodeId').setValue('费鹏');
                        }
                    });
                    bar.add({
                        id: 'cancel',
                        xtype: 'button',
                        text: '取消',
                        align: 'right',
                        ui: 'decline',
                        handler: function () {
                            Ext.getCmp('fieldset1').disable();
                            Ext.getCmp('save').hide();
                            Ext.getCmp('cancel').hide();
                            if (Ext.getCmp('edit') !== null) {
                                Ext.getCmp('edit').show();
                            }
                        }
                    });
                    Ext.getCmp('save').hide();
                    Ext.getCmp('cancel').hide();
                }
                
            },
            deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var bar = obj.getNavigationBar();
                bar.remove(Ext.getCmp('edit'));
                bar.remove(Ext.getCmp('save'));
                bar.remove(Ext.getCmp('cancel'));
            }
        }
    }
});