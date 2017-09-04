Ext.define('ChuangCai.view.supervise.PatrolTrackAdd', {
    alternateClassName: 'patrolTrackAdd',
    extend: 'Ext.form.Panel',
    xtype: 'patrolTrackAdd',
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
        id: 'patrolTrackAddId',
        title: '填写跟踪信息',
        height: (document.body.clientHeight),
        items: [{
            xtype: 'panel',
            id: 'fieldset1',
            style: "background-color:#ffffff",
            //title: '个人信息',
            items: [
                {
                    xtype: "panel",
                    id: "checkInfoId",
                    width: (document.body.clientWidth),
                    height: 50,
                    cls: "i-form-fieldset-title clear",
                    html: "处理描述"
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "内容：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textareafield",
                        width: (document.body.clientWidth) * 0.7,
                        id: "checkContent",
                        inputCls: "i-form-input",
                    }]
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
                    }],
                },
            ],
        }]
    }
});