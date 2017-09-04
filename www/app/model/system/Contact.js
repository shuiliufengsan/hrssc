//公司新闻
Ext.define('ChuangCai.model.system.Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //标题
            name: 'employee_name',
            type: 'string'
        },
        {
            name: 'department_name',
            type:'string'
        
        },
        {
            //概述
            name: 'mobile',
            type: 'string'
        },
        {
            name: 'email',
            type:'string'
        },
        {
            name: 'work_tel',
            type:'string'
        },
        {
            name: 'work_address',
            type:'string'

        },
        {
            name: 'home_tel',
            type:'string'
        },
        {
            name: 'home_address',
            type:'string'
        },
     
        {
            name: 'remark',
            type:'string'
        }]
    }
});