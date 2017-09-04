Ext.define("ChuangCai.view.park.PayFees", {
    alternateClassName: 'payFees',
    extend: 'Ext.form.Panel',
    xtype: 'payFees',
    requires: ['Ext.form.FieldSet'],
    config: {
        id: 'payFeesId',
        scrollable: null,
        title: '我要缴费',
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
                name: 'carNo',
                placeHolder: '请输入车牌号'
            },           
            ]
        },
        {
            xtype: 'button',
            id: 'getFee',
            //action: 'login',
            style:'float:left;margin-left:8px;',
            width: document.body.clientWidth * 0.95,
            height: '40px',
            cls: "i-login-check-btn",
            pressedCls: "i-login-pressing",
            text: '获取缴费信息'
            },
        ]
    }
});