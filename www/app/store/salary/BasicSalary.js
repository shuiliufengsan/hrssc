Ext.define('ChuangCai.store.salary.BasicSalary', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.salary.BasicSalary',
        storeId: 'basicsalary',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',

            url: util.getMobileSite() + 'Salary/GetBasicSalaryBrw.ashx',
            pageParam: 'currentPage', //当前页码  
            limitParam: 'pageSize',//每页条数
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        },
        listeners: {
            load: function (obj, records, successful, operation, eOpts) {
            }
        }
    }
});