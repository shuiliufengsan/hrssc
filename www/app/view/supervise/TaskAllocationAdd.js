Ext.define('ChuangCai.view.supervise.TaskAllocationAdd', {
    alternateClassName: 'taskAllocationAdd',
    extend: 'Ext.form.Panel',
    xtype: 'taskAllocationAdd',
    requires: ['Ext.form.FieldSet',
           'Ext.field.Number',
           'Ext.field.Password',
           'ux.DateTimePicker',
           'Ext.TitleBar',
           'Ext.Button',
           'ux.Fileup'
    ],
    config: {
        cls: '',
        id: 'taskAllocationAddId',
        title: '填写任务分配',
        height: (document.body.clientHeight),
        items: [{
            xtype: 'panel',
            id: 'fieldset1',
            style: "background-color:#ffffff",
            //title: '个人信息',
            items: [
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: '站点' + '<span style="color:red;">*</span>',
                        width: (document.body.clientWidth) * 0.25,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "selectfield",
                        width: (document.body.clientWidth) * 0.75,
                        id: "stationName",
                        itemId: "stationName",
                        //component: {
                        //    xtype: "input",
                        //    type: "tel"
                        //},
                        inputCls: "i-form-input",
                        placeHolder: "请选择站点"
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "内容" + '<span style="color:red;">*</span>',
                        width: (document.body.clientWidth) * 0.25,
                        cls: "i-form-label"
                    },
                    {
                        xtype: 'textareafield',
                        id: 'stationContentId',
                        autoCapitalize: true,
                        required: true,
                        useClearIcon: true,
                        width: (document.body.clientWidth) * 0.75,
                        placeHolder: "请输入内容"
                    }]
                }
            ]
        },
        {
            xtype: "panel",
            layout: "hbox",
            items: [{
                itemId: 'takePhotoBtn',
                xtype: 'button',
                autoUpload: true,
                width: document.body.clientWidth * 0.5,
                height: '40px',
                cls: "i-button",
                text: '拍照'
            }, {
                itemId: 'selectPhotoBtn',
                id: 'selectPhotoBtn',
                xtype: 'button',
                autoUpload: true,
                width: document.body.clientWidth * 0.5,
                height: '40px',
                cls: "i-button",
                text: '照片'
            }],
        },
         {
             itemId: 'imageContainerId',
             xtype: 'panel',
             cls: 'cardPanel',
             layout: "hbox",
             items: [{
                 itemId: 'loadedImage0',
                 id: 'loadedImage0',
                 xtype: 'img',
                 width: document.body.clientWidth * 0.33,
                 height: document.body.clientWidth * 0.33,
                 style: 'margin-top:15px;'
             }, {
                 itemId: 'loadedImage1',
                 id: 'loadedImage1',
                 xtype: 'img',
                 width: document.body.clientWidth * 0.33,
                 height: document.body.clientWidth * 0.33,
                 style: 'margin-top:15px;'
             }, {
                 itemId: 'loadedImage2',
                 id: 'loadedImage2',
                 xtype: 'img',
                 width: document.body.clientWidth * 0.33,
                 height: document.body.clientWidth * 0.33,
                 style: 'margin-top:15px;'
             }]
         },
         //{
         //    xtype: "panel",
         //    height: "50px",
         //    layout: "hbox",
         //    cls: "i-footer-panel",
         //    style: "z-index: 1",
         //    padding: 10,
         //    items: [{
         //        xtype: "button",
         //        height: "30px",
         //        width: "100px",
         //        id: "SubmitOrder",
         //        margin: "0 auto",
         //        cls: "i-button",
         //        html: "提交订单"
         //    }]
         //}
        ]
    }
});