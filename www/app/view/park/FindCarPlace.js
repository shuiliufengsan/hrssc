Ext.define('ChuangCai.view.park.FindCarPlace', {
    extend: 'Ext.Panel',
    alternateClassName: 'findCarPlace',
    xtype: 'findCarPlace',
    requires: [
        'Ext.TitleBar',
    //    'ux.BMap'
       'ChuangCai.view.park.Map'
    ],
    config: {
        id: 'findCarPlaceId',
        layout: 'fit',
        title: '找车位',
        items: [
            {
                xtype: "panel",
                id: "SFpanel",
                docked: 'top',
                height: "35px",
                width: document.body.clientWidth,
                cls: "x-border-bottom",
                style: "background-image: -webkit-linear-gradient(top,#ffffff,#f4f4f4);",
                layout: "hbox",
                items: [{
                    xtype: "img",
                    id: "regionSelect",
                    html: "附近<span></span>",
                    cls: "m-select-field",
                    width: (document.body.clientWidth) / 3,
                }, {
                    id: "regionSelectId",
                    html: "0",
                    hidden: true
                }, {
                    xtype: "img",
                    html: "计费方式<span></span>",
                    id: "feeSelect",
                    cls: "m-select-field",
                    width: (document.body.clientWidth) / 3,
                }, {
                    id: "feeSelectId",
                    html: "0",
                    hidden: true
                }, {
                    xtype: "img",
                    id: "orderSelect",
                    html: "预约方式<span></span>",
                    cls: "m-select-field",
                    width: (document.body.clientWidth) / 3,
                }, {
                    id: "orderSelectId",
                    html: "0",
                    hidden: true
                }]
            },
            {
                // iconCls: 'maps',
                id:'mapContentId',
                styleHtmlContent: true,
                scrollable: false,
                layout: 'vbox',
                height: document.body.clientHeight - 35,
                width: document.body.clientWidth,
                items: [
                    //{
                    //    xtype: 'toolbar',                                       //  bottom toolbar  
                    //    docked: 'top',
                    //    cls: 'navToolbar',
                    //    height: '20px',
                    //    items: [{
                    //        xtype: 'selectfield',
                    //        id: 'nearCompanyId',
                    //        usePicker: false,
                    //        width: document.body.clientWidth,
                    //    }
                    //    //, {
                    //    //    xtype: 'image',
                    //    //    itemId: 'cancel_news_search_box',
                    //    //    height: '35px',
                    //    //    width: '40px',
                    //    //    cls: "i-search-cancel-icon"
                    //    //}
                    //    ]
                    //},
                    //-----------------------
                    {
                        xtype: "bmap",
                        id: 'map',
                        margin: '-63 0 0 -18',
                        height: document.body.clientHeight,
                        width: document.body.clientWidth
                    },
                ]
            }
        ],
        //listeners: {
        //    activate: function () {
        //        console.log("1qq");
        //        Ext.getCmp('findCarPlaceId').setHtml("<div id='map'>111</div>");
        //        var textarea = Ext.create('Ext.field.TextArea', {
        //            //   id: 'txtarea',
        //            cls: 'txtarea',
        //            maxLength: 1000,
        //            maxRows: 4
        //        });
        //        Ext.getCmp('findCarPlaceId').add(textarea);

        //        var panel = Ext.create('Ext.Panel', {
        //            id: 'map',
        //            html:'11',
        //            margin: '-63 0 0 -18',
        //            height: document.body.clientHeight,
        //            width: document.body.clientWidth
        //        });
        //        Ext.getCmp('findCarPlaceId').add(panel);

        //        //var map = new BMap.Map('map');//指向map的容器
        //        //map.centerAndZoom(new BMap.Point(121.491, 31.233), 15);
        //        //window.setTimeout(function () {
        //        //    map.panTo(new BMap.Point(116.409, 39.918));
        //        //}, 1000);

        //        //// 百度地图API功能
        //        //var map = new BMap.Map("map");
        //        ////  map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);

        //        //var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
        //        //map.addControl(top_left_navigation);

        //        //var mapType1 = new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP] }); //BMAP_MAPTYPE_CONTROL_MAP 、BMAP_MAPTYPE_CONTROL_DROPDOWN 、BMAP_MAPTYPE_CONTROL_HORIZONTAL 
        //        //var mapType2 = new BMap.MapTypeControl({ anchor: BMAP_ANCHOR_TOP_LEFT });

        //        ////var mapType2 = new BMap.MapTypeControl({type: BMAP_MAPTYPE_CONTROL_HORIZONTAL });

        //        //map.addControl(mapType1);          //2D图，卫星图
        //        ////	map.addControl(mapType2);          //左上角，默认地图控件
        //        //map.setCurrentCity("江苏");        //由于有3D图，需要设置城市哦

        //        //// 添加定位控件
        //        //var myIcon = new BMap.Icon("marker4.ico", new BMap.Size(60, 45), { anchor: new BMap.Size(26, 30) });
        //        //var geolocationControl = new BMap.GeolocationControl({ locationIcon: myIcon });
        //        //geolocationControl.addEventListener("locationSuccess", function (e) {
        //        //    // 定位成功事件
        //        //    var address = '';
        //        //    address += e.addressComponent.province;
        //        //    address += e.addressComponent.city;
        //        //    address += e.addressComponent.district;
        //        //    address += e.addressComponent.street;
        //        //    address += e.addressComponent.streetNumber;
        //        //    //alert("当前定位地址为：" + address);
        //        //    deletePoint();
        //        //});
        //        //geolocationControl.addEventListener("locationError", function (e) {
        //        //    // 定位失败事件
        //        //    alert(e.message);
        //        //});
        //        //map.addControl(geolocationControl);

        //        ////定位后删除之前定位的点，更新当前的点
        //        //function deletePoint() {
        //        //    var allOverlay = map.getOverlays();
        //        //    for (var i = 0; i < allOverlay.length - 1; i++) {
        //        //        if (allOverlay[i].getLabel().content == "0") {
        //        //            map.removeOverlay(allOverlay[i]);
        //        //            return false;
        //        //        }
        //        //    }
        //        //}
        //        //var start = null;
        //        ////创建一个坐标
        //        ////  var point =new BMap.Point(longitude,latitude);
        //        ////地图初始化，设置中心点坐标和地图级别  
        //        ////  map.centerAndZoom(point,15);
        //        ////     map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
        //        //function getLocation() {
        //        //    var options = {
        //        //        enableHighAccuracy: true,
        //        //        maximumAge: 10000
        //        //    }
        //        //    if (navigator.geolocation) {
        //        //        //浏览器支持geolocation
        //        //        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

        //        //    } else {
        //        //        alert("不支持");
        //        //    }
        //        //}
        //        ////成功时
        //        //function onSuccess(position) {
        //        //    //返回用户位置
        //        //    //经度
        //        //    var longitude = position.coords.longitude;
        //        //    //纬度
        //        //    var latitude = position.coords.latitude;
        //        //    //创建一个坐标
        //        //    var point = new BMap.Point(longitude, latitude);

        //        //    //var marker = new BMap.Marker(point);  // 创建标注
        //        //    //map.addOverlay(marker);              // 将标注添加到地图中
        //        //    //地图初始化，设置中心点坐标和地图级别  
        //        //    map.centerAndZoom(point, 15);

        //        //    //坐标转换完之后的回调函数
        //        //    translateCallback = function (data) {
        //        //        if (data.status === 0) {
        //        //            var marker = new BMap.Marker(data.points[0], { icon: myIcon });
        //        //            var label = new BMap.Label("0");
        //        //            label.setStyle({ display: "none" });
        //        //            marker.setLabel(label);
        //        //            map.addOverlay(marker);
        //        //            //   var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
        //        //            //   marker.setLabel(label); //添加百度label
        //        //            start = data.points[0];
        //        //            map.panTo(data.points[0]);
        //        //            map.setCenter(data.points[0]);
        //        //        }

        //        //        setMarker();
        //        //    }

        //        //    setTimeout(function () {
        //        //        var convertor = new BMap.Convertor();
        //        //        var pointArr = [];
        //        //        pointArr.push(point);
        //        //        convertor.translate(pointArr, 1, 5, translateCallback)
        //        //    }, 1000);
        //        //}
        //        ////失败时
        //        //function onError(error) {
        //        //    switch (error.code) {
        //        //        case 1:
        //        //            alert("位置服务被拒绝");
        //        //            break;

        //        //        case 2:
        //        //            alert("暂时获取不到位置信息");
        //        //            break;

        //        //        case 3:
        //        //            alert("获取信息超时");
        //        //            break;

        //        //        case 4:
        //        //            alert("未知错误");
        //        //            break;
        //        //    }

        //        //}

        //        ////  window.onload = getLocation;
        //        //window.setTimeout(function () {
        //        //    getLocation();
        //        //}, 1000);

        //        ////
        //        //function setMarker() {
        //        //    var bs = map.getBounds();   //获取可视区域
        //        //    var bssw = bs.getSouthWest();   //可视区域左下角
        //        //    var bsne = bs.getNorthEast();   //可视区域右上角
        //        //    //	alert("当前地图可视范围是：" + bssw.lng + "," + bssw.lat + "到" + bsne.lng + "," + bsne.lat);
        //        //    //120.745388,31.264501 120.751604,31.265917 120.746843,31.270393 120.751838,31.262892 

        //        //    var data_info = [[120.751209, 31.276145, "停车场1", "苏州市园区大街88号乐天银泰百货八层"],
        //        //                     [120.751604, 31.265917, "停车场2", "苏州市园区正义路甲5号"],
        //        //                     [120.746843, 31.270393, "停车场3", "苏州市园区东华门大街"],
        //        //                     [120.637717, 31.255113, "停车场4", "苏州市园区东华门大街"],
        //        //                     [120.747318, 31.282476, "停车场5", "苏州市园区东华门大街"]
        //        //    ];

        //        //    for (var i = 0; i < data_info.length; i++) {
        //        //        if (data_info[i][0] > bssw.lng && data_info[i][0] < bsne.lng && data_info[i][1] > bssw.lat && data_info[i][1] < bsne.lat) {
        //        //            var marker = new BMap.Marker(new BMap.Point(data_info[i][0], data_info[i][1]));  // 创建标注
        //        //            var name = data_info[i][2];
        //        //            var content = data_info[i][3];

        //        //            var sContent =
        //        //            "<div>" +
        //        //        "<h4 style='margin:0 0 5px 0;padding:0.2em 0;color:#0A8021'>" + name + "</h4>" +
        //        //        //"<img style='float:right;margin:4px' id='imgDemo' src='http://app.baidu.com/map/images/tiananmen.jpg' width='139' height='104' title='天安门'/>" + 
        //        //        "<p style='margin:0;line-height:1.5;font-size:13px;'><b>地址：</b>" + content + "</p>" +
        //        //        "<p style='padding-top:0px;'><label id='point1' hidden=true>" + data_info[i][0] + "</label><label id='point2' hidden=true>" + data_info[i][1] + "</label>" +
        //        //        "<input type='button' value='查找路线'  onclick='searchRoute()'/>&nbsp;&nbsp;" +
        //        //        //<input id='detail' type='button' value='路线详情' onclick='showRoute(marker)'/>
        //        //        "</p>" +
        //        //        "</div>";

        //        //            map.addOverlay(marker);               // 将标注添加到地图中
        //        //            addClickHandler(sContent, marker);
        //        //        }
        //        //    }
        //        //}


        //        //function addClickHandler(sContent, marker) {
        //        //    marker.addEventListener("click", function (e) {
        //        //        document.getElementById("open").hidden = true;
        //        //        document.getElementById("r-result").hidden = true;
        //        //        document.getElementById("r-result2").hidden = true;
        //        //        openInfo(sContent, e)
        //        //    }
        //        //    );
        //        //}
        //        //function openInfo(sContent, e) {
        //        //    var p = e.target;
        //        //    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);

        //        //    var opts = {
        //        //        width: 280,     // 信息窗口宽度
        //        //        height: 110,     // 信息窗口高度
        //        //        //title : name , // 信息窗口标题
        //        //        enableMessage: true//设置允许信息窗发送短息
        //        //    };
        //        //    var infoWindow = new BMap.InfoWindow(sContent, opts);  // 创建信息窗口对象 
        //        //    map.openInfoWindow(infoWindow, point); //开启信息窗口
        //        //}

        //        //var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, panel: "r-result", autoViewport: true } });

        //        //function searchRoute() {
        //        //    driving.clearResults();
        //        //    var point1 = document.getElementById("point1").innerHTML;
        //        //    var point2 = document.getElementById("point2").innerHTML;
        //        //    var point = new BMap.Point(point1, point2);

        //        //    driving.search(start, point);    //显示一条驾车线路    
        //        //    //map.setZoom(18);  
        //        //    map.closeInfoWindow();
        //        //    map.zoomIn();

        //        //    document.getElementById("open").hidden = false;

        //        //    var options = {
        //        //        onSearchComplete: function (results) {
        //        //            if (driving.getStatus() == BMAP_STATUS_SUCCESS) {
        //        //                // 获取第一条方案
        //        //                var plan = results.getPlan(0);
        //        //                // 获取方案的驾车线路
        //        //                var route = plan.getRoute(0);
        //        //                // 获取每个关键步骤,并输出到页面
        //        //                var s = [];
        //        //                for (var j = 0; j < plan.getNumRoutes() ; j++) {
        //        //                    var route = plan.getRoute(j);
        //        //                    for (var i = 0; i < route.getNumSteps() ; i++) {
        //        //                        var step = route.getStep(i);
        //        //                        s.push((i + 1) + ". " + step.getDescription());
        //        //                    }
        //        //                }
        //        //                document.getElementById("r-result2").innerHTML = s.join("<br/>");
        //        //            }
        //        //        }
        //        //    };
        //        //    showRoute(point, options);
        //        //}
        //        //function showRoute(point, options) {
        //        //    var driving = new BMap.DrivingRoute(map, options);
        //        //    driving.search(start, point);
        //        //}

        //        //function addClick() {
        //        //    document.getElementById("r-result").hidden = false;
        //        //    document.getElementById("r-result2").hidden = false;
        //        //}

        //    },
        //    deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {

        //    }
        //}
    }
});
