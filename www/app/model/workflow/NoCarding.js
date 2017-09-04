//公司新闻
Ext.define('ChuangCai.model.workflow.NoCarding', {
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
            name: 'record_time',
            type: 'string'
        },
        {
            //发布日期
            name: 'shift_type',
            type: 'string'
        },
        {
            //发布日期
            name: 'nocarding_name',
            type: 'string'
        },
        {
            //发布日期
            name: 'remark',
            type: 'string'
        },
        {
            //发布日期
            name: 'audit_status',
            type: 'string'
        }]
    }
});