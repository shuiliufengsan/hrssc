Ext.define("ChuangCai.view.park.AddCar", {
    alternateClassName: 'addCar',
    extend: 'Ext.form.Panel',
    xtype: 'addCar',
    requires: ['Ext.form.FieldSet'],
    config: {
        scrollable: null,
        title: '添加车辆',
        style: "background-color: #E5E5E5",
        items: [{
            xtype: 'fieldset',
            iconCls: 'home',
            style: 'margin-top:20px;background-color: #E5E5E5',
            defaults: {
                labelWidth: '40%'
            },
            items: [
            {
                xtype: 'textfield',
                id: 'carId',
                label: '车牌号',
                labelWidth: document.body.clientWidth * 0.25,
                placeHolder: '请输入车牌号'
            },
            {
                xtype: 'textfield',
                id: 'carRemark',
                label: '备注名',
                labelWidth: document.body.clientWidth * 0.25,
                placeHolder: '选填'
            },
            ]
        },
        {
            xtype: 'button',
            id: 'addCarBtn',
            //action: 'login',
            style: 'float:left;margin-left:8px;',
            width: document.body.clientWidth * 0.95,
            height: '40px',
            cls: "i-login-check-btn",
            pressedCls: "i-login-pressing",
            text: '确认提交'
        },
        ]
    }
});