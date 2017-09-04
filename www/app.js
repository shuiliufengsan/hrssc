/*
 * @author 创采软件
 */
Ext.Loader.setConfig({ 
    enabled: true,
    paths: {
        'ChuangCai': 'app',
        'ux': 'app/ux'
    }
});

//指定ux起调目录
//Ext.Loader.setPath({
//    'ChuangCai': 'app',
//    'ux': 'app/ux'
//});
Ext.Ajax.setDisableCaching(false);
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    navigator.splashscreen.hide();
}
Ext.application({
    name: 'ChuangCai',
    //views: ['Home'],
    //views: ['Home', 'Main', 'About', 'Guide', 'FirstStart'],
 //   controllers: ['Main'],
    controllers: ['Layout', 'User', 'Main',  'Panel', 'Park'],
    requires: [
        'ChuangCai.config',
        'ChuangCai.util',
        'ux.CSS',
        //'ux.navigationBar',
        //'ux.NavigationView',
        'ux.locale.Manager',
        'ux.locale.override.st.Component',
        'ux.locale.override.st.Container',
        'ux.locale.override.st.Button',
        'ux.locale.override.st.TitleBar',
        'ux.locale.override.st.field.Field',
        'ux.locale.override.st.field.DatePicker',
        'ux.locale.override.st.form.FieldSet',
        'ux.locale.override.st.picker.Picker',
        'ux.locale.override.st.picker.Date'
    ],
    phoneStartupScreen: 'resources/images/welcome.png',
    tabletStartupScreen: 'images/tablet_startup.png',
    launch: function () {
        util.init();
      //  console.log("ds");
        Ext.Viewport.add({
            xtype: 'main'
        });
    }
});
