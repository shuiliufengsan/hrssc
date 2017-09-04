//公司新闻
Ext.define('ChuangCai.model.salary.BasicSalary', {
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
            name: 'sequence',
            type: 'string'
        },
        {
            //发布日期
            name: 'transfer_date',
            type: 'string'
        }]
    }
});