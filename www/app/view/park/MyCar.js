Ext.define('ChuangCai.view.park.MyCar', {
    alternateClassName: 'myCar',
    extend: 'Ext.DataView',
    xtype: 'myCar',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'Ext.plugin.DataViewPaging', 'ux.SimpleList'],
    config: {
        style: "background-color:#ffffff;",
        id: 'myCarId',
        plugins: [{
            xclass: 'Ext.plugin.DataViewPaging',
            autoPaging: true
        }],
        title: '车辆管理',
        infinite: true,
        items: [{
        xtype: "panel",
        height: "5px",
        style: "background-color: #E5E5E5;"
        }],
        itemTpl: new Ext.XTemplate(
         "<div class='productHome-rest clear'>",
         "<div style='float:left;padding-left:10px;padding-top:5px;'><img src='resources/images/ico/car1.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color:black;'>{carid}</p></div>",
         "</div>"),
        store: 'myCar'
    }
});