Ext.define('ChuangCai.view.supervise.LockAdd', {
    alternateClassName: 'lockAdd',
    extend: 'Ext.form.Panel',
    xtype: 'lockAdd',
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
        id: 'lockAddId',
        title: '填写锁车柱完好率',
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
                        html: "站点",
                        width: (document.body.clientWidth) * 0.25,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        width: (document.body.clientWidth) * 0.75,
                        id: "stationName",
                        //component: {
                        //    xtype: "input",
                        //    type: "tel"
                        //},
                        inputCls: "i-form-input",
                        placeHolder: "请输入站点名称"
                    }]
                },
                //{
                //    xtype: "panel",
                //    layout: "hbox",
                //    cls: "i-panel-inner clear",
                //    items: [{
                //        xtype: "panel",
                //        html: "类型",
                //        width: (document.body.clientWidth) * 0.25,
                //        cls: "i-form-label"
                //    },
                //       {
                //           xtype: 'selectfield',
                //           id: 'stationType',
                //           options: [{
                //               text: '站点', value: 'Station'
                //           }, {
                //               text: '锁车柱', value: 'Lock'
                //           }, {
                //               text: '自行车', value: 'Bike'
                //           }],
                //           autoCapitalize: true,
                //           width: (document.body.clientWidth) * 0.75,
                //           usePicker: false,
                //           required: false,
                //           autoSelect: false,
                //           clearIcon: false,
                //           inputCls: "i-form-input",
                //       }
                //    ]
                //},
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "内容",
                        width: (document.body.clientWidth) * 0.25,
                        cls: "i-form-label"
                    },
                    {
                        xtype: 'textareafield',
                        id: 'stationContent',
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
            itemId: 'fileLoadBtn',
            xtype: 'fileupload',
            autoUpload: true,
            width: document.body.clientWidth,
            height: '40px',
            text: '拍照',
            loadAsDataUrl: true
        },
         {
             itemId: 'imageContainerId',
             xtype: 'panel',
             cls: 'cardPanel',
             layout: "hbox",
             items: [{
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
             }, {
                 itemId: 'loadedImage3',
                 id: 'loadedImage3',
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