Ext.define("ChuangCai.view.park.AboutPark", {
    alternateClassName: 'aboutPark',
    extend: 'Ext.form.Panel',
    xtype: 'addCar',
    config: {
        scrollable: null,
        title: '关于',
        style: "background-color: #ffffff;font-size:14px;text-align:center",
        items: [
            {
                xtype: "panel",
                height: "0px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: 'panel',
                iconCls: 'home',
                style: 'margin-top:50px;background-color: #ffffff',
                items: [
                  {
                      xtype: "panel",
                      style: "margin-bottom:360px;font-size:18px;text-align:center",
                      html: '您的智慧停车好助手'

                  }
                ]
            }],
        html: '版权所有©2016<br/>苏州莫克信息科技有限公司 保留所有权利'

    }
});