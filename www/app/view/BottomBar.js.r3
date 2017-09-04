Ext.define('ChuangCai.view.BottomBar', {
    alternateClassName: 'bottomBar',
    extend: 'ux.TabBar',
    xtype: 'bottomBar',
    requires: ['ChuangCai.view.park.PersonCenter'],
    config: {
        height: '45px',
        items: [
        {
            xtype: 'button',
            id: "homeSelectBtn",
            //locales: {
            //    text: 'home.btnBottomFirst'//首页
            //},
            text: "首页",
            //只有第一个设置的属性有效
            selected: true,
            iconAlign: 'top',
            iconCls: 'icon-shop-main-1',
            cls: 'i-main-bottom-item',
            action: 'redirect',
            redirect: 'parkHome',
            listeners: {
                tap: function () {
                    Ext.getCmp("personalCenterId").removeCls("x-tabBar-pressing");
                    Ext.getCmp("homeSelectBtn").addCls('x-tabBar-pressing');
                }
            }
        },
        //{
        //    xtype: 'button',
        //    //locales: {
        //    //    text: 'home.btnBottomFavorite'//分类 
        //    //},
        //    text: "百宝箱",
        //    iconAlign: 'top',
        //    iconCls: 'icon-shop-main-2',
        //    cls: 'i-main-bottom-item',
        //    action: 'redirect',
        //    redirect: 'productType',
        //    listeners: {
        //        tap: function () {
        //            Ext.getCmp("personalCenterId").removeCls("x-tabBar-pressing");
        //        }
        //    }
        //},
        //{
        //    xtype: 'button',
        //    //locales: {
        //    //    text: 'home.btnBottomPersonCenter'//购物车
        //    //},
        //    text: "购物车",
        //    iconAlign: 'top',
        //    iconCls: 'icon-shop-main-3',
        //    //没有选中效果
        //    //noSelect: true,
        //    action: 'redirect',
        //    cls: 'i-main-bottom-item',
        //    redirect: 'shoppingCarts',
        //    listeners: {
        //        tap: function () {
        //            Ext.getCmp("personalCenterId").removeCls("x-tabBar-pressing");
        //        }
        //    }
       // },
        {
            xtype: 'button',
            //locales: {
            //    text: 'home.btnBottomSetup'//我的保拍
            //},
            text: "我的",
            id: "personalCenterId",
            //没有选中效果
            //noSelect: true,
            iconAlign: 'top',
            //iconCls: 'settings',
            iconCls: 'icon-shop-main-4',
            action: 'redirect',
            cls: 'i-main-bottom-item',
            redirect: 'personCenter',
        }]
    }
});