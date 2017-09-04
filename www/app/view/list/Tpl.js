Ext.define('ChuangCai.view.list.Tpl', {
    alternateClassName: 'listTpl',
    extend: 'Ext.List',
    xtype: 'listTpl',
    config: {
        cls: 'list',
        title: '列表模版',
        itemTpl: new Ext.XTemplate(
        '<div class="bh">',
            '<div class="img" style="background-image: url({log});"></div>',
            '<div class="bv">',
                '<div class="content">{title} {integral}积分 {winning}个幸运号</div>',
                '<div class="content"><tpl if="post">{post}组织,</tpl>共{qCount}个选择题 <tpl if="post">已有{count}人参与</tpl></div>',
            '</div>',
           
        '</div>'),
        store: 'quizList'
    }
});