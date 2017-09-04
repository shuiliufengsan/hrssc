Ext.define('ChuangCai.view.shop.TestChart', {
    extend: 'Ext.chart.Chart',
    alternateClassName: 'testchart',
    xtype: 'testchart',

    config: {
        animate: true,
        store: 'TestStore',
        axes: [{
            type: 'Category',
            position: 'bottom',
            fields: ['name'],
            title: 'Sample Metrics'
        },
        {
            type: 'Numeric',
            position: 'left',
            fields: ['data1'],
            title: 'Sample Values',
            grid: true,
            minimum: 0
        }],
        series: [{
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            xField: 'name',
            yField: 'data1',
            markerConfig: {
                type: 'cross',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        }, {
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            fill: false,
            xField: 'name',
            yField: 'data2',
            markerConfig: {
                type: 'circle',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        }]
    }
});