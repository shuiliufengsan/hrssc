//公司新闻
Ext.define('ChuangCai.model.workflow.Vacation', {
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
            name: 'vacation_type_name',
            type: 'string'
        },
        {
            //发布日期
            name: 'begintime',
            type: 'string'
        },
        {
            //发布日期
            name: 'endtime',
            type: 'string'
        },
        {
            //发布日期
            name: 'audit_status',
            type: 'string'
        }]
    }
});