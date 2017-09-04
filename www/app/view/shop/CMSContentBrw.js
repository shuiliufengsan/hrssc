Ext.define('ChuangCai.view.shop.CMSContentBrw', {
    alternateClassName: 'cMSContentBrw',
    extend: 'Ext.List',
    xtype: 'cMSContentBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.shop.CMSContentView'],
    config: {
        cls: 'list',
        id: 'cMSContentBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '平台介绍',
        itemTpl: new Ext.XTemplate(
        '<div class="bh" style="height: 50px;">',
            '<div class="img" style="background-image: url(resources/images/system/education.png);height: 48px;"></div>',
            '<div class="bv">',
                '<div class="listTitle" style="margin-top: 16px;">{title}</div>',
                //'<div class="listSummary">{description}</div>',
            '</div>',
        '</div>'),
        store: 'CMSStore'
    }
});