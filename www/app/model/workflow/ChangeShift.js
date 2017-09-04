//公司新闻
Ext.define('ChuangCai.model.workflow.ChangeShift', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //标题
            name: 'employee_code',
            type: 'string'
        },
        {
            //概述
            name: 'employee_name',
            type: 'string'
        },
        {
            //发布日期
            name: 'new_shift_group',
            type: 'string'
        },
        {
            //发布日期
            name: 'begin_date',
            type: 'string'
        },
        {
            //发布日期
            name: 'end_date',
            type: 'string'
        },
        {
            //发布日期
            name: 'audit_status',
            type: 'string'
        }]
    }
});