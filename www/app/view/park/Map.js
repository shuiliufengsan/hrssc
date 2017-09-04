Ext.define('ChuangCai.view.park.Map', {
    alternateClassName: 'bmap',
    extend: 'Ext.Container',
    xtype: 'bmap',
    requires: ['Ext.util.Geolocation'],
    config: {
    },
    initialize: function () {
        //  console.log("ddddddg");
        this.callParent();
        this.on({
            //有些项目布局可能需要使用painted事件来监听
            painted: 'initMap',
            scope: this
        });
    },

    initMap: function () {
        var me = this,
      //  map = me.getMap();
     //   if (!map) {

        //    map = new BMap.Map(me.getId());//指向map的容器
        //map.centerAndZoom(new BMap.Point(121.491, 31.233), 15);
        //window.setTimeout(function () {
        //    map.panTo(new BMap.Point(116.409, 39.918));
        //}, 1000);

        // 百度地图API功能
        map = new BMap.Map(me.getId());
        //  map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);

        var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
        map.addControl(top_left_navigation);

        var mapType1 = new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP] }); //BMAP_MAPTYPE_CONTROL_MAP 、BMAP_MAPTYPE_CONTROL_DROPDOWN 、BMAP_MAPTYPE_CONTROL_HORIZONTAL 
        var mapType2 = new BMap.MapTypeControl({ anchor: BMAP_ANCHOR_TOP_LEFT });

        //var mapType2 = new BMap.MapTypeControl({type: BMAP_MAPTYPE_CONTROL_HORIZONTAL });

        map.addControl(mapType1);          //2D图，卫星图
        //	map.addControl(mapType2);          //左上角，默认地图控件
        map.setCurrentCity("江苏");        //由于有3D图，需要设置城市哦

        // 添加定位控件
        var myIcon = new BMap.Icon("resources/images/ico/marker4.ico", new BMap.Size(60, 45), { anchor: new BMap.Size(26, 30) });
        var geolocationControl = new BMap.GeolocationControl({ locationIcon: myIcon });
        geolocationControl.addEventListener("locationSuccess", function (e) {
            // 定位成功事件
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
            //alert("当前定位地址为：" + address);
            deletePoint();
        });
        geolocationControl.addEventListener("locationError", function (e) {
            // 定位失败事件
            alert(e.message);
        });
        map.addControl(geolocationControl);

        //定位后删除之前定位的点，更新当前的点
        function deletePoint() {
            var allOverlay = map.getOverlays();
            for (var i = 0; i < allOverlay.length - 1; i++) {
                if (allOverlay[i].getLabel().content == "0") {
                    map.removeOverlay(allOverlay[i]);
                    return false;
                }
            }
        }
        var start = null;
        //创建一个坐标
        //  var point =new BMap.Point(longitude,latitude);
        //地图初始化，设置中心点坐标和地图级别  
        //  map.centerAndZoom(point,15);
        //     map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
        function getLocation() {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 10000
            }
            if (navigator.geolocation) {
                //浏览器支持geolocation
                navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

            } else {
                alert("不支持");
            }
        }
        //成功时
        function onSuccess(position) {
            //返回用户位置
            //经度
            var longitude = position.coords.longitude;
            //纬度
            var latitude = position.coords.latitude;
            //创建一个坐标
            var point = new BMap.Point(longitude, latitude);

            //var marker = new BMap.Marker(point);  // 创建标注
            //map.addOverlay(marker);              // 将标注添加到地图中
            //地图初始化，设置中心点坐标和地图级别  
            map.centerAndZoom(point, 15);

            //坐标转换完之后的回调函数
            translateCallback = function (data) {
                if (data.status === 0) {
                    var marker = new BMap.Marker(data.points[0], { icon: myIcon });
                    var label = new BMap.Label("0");
                    label.setStyle({ display: "none" });
                    marker.setLabel(label);
                    map.addOverlay(marker);
                    //   var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
                    //   marker.setLabel(label); //添加百度label
                    start = data.points[0];
                    map.panTo(data.points[0]);
                    map.setCenter(data.points[0]);
                }

                setMarker();
            }

            setTimeout(function () {
                var convertor = new BMap.Convertor();
                var pointArr = [];
                pointArr.push(point);
                convertor.translate(pointArr, 1, 5, translateCallback)
            }, 1000);
        }
        //失败时
        function onError(error) {
            switch (error.code) {
                case 1:
                    alert("位置服务被拒绝");
                    break;

                case 2:
                    alert("暂时获取不到位置信息");
                    break;

                case 3:
                    alert("获取信息超时");
                    break;

                case 4:
                    alert("未知错误");
                    break;
            }

        }

        //  window.onload = getLocation;
        window.setTimeout(function () {
            getLocation();
        }, 1000);

        //
        function setMarker() {
            var bs = map.getBounds();   //获取可视区域
            var bssw = bs.getSouthWest();   //可视区域左下角
            var bsne = bs.getNorthEast();   //可视区域右上角
            //	alert("当前地图可视范围是：" + bssw.lng + "," + bssw.lat + "到" + bsne.lng + "," + bsne.lat);
            //120.745388,31.264501 120.751604,31.265917 120.746843,31.270393 120.751838,31.262892 

            var feeType = dict.get("feeType");
            var orderType = dict.get("orderType");
            var data_info ;// [["1", "停车场1", "200", "100", "苏州市园区大街88号乐天银泰百货八层", "31.276145", "120.751209"]];
            // data_info = [["120.751209", 31.276145, "停车场1", "苏州市园区大街88号乐天银泰百货八层", 200, "1"],
            //                 [120.751604, 31.265917, "停车场2", "苏州市园区正义路甲5号", 180, 2],
            //                 [120.746843, 31.270393, "停车场3", "苏州市园区东华门大街", 100, 3],
            //                 [120.637717, 31.255113, "停车场4", "苏州市园区东华门大街", 80, 4],
            //                 [120.747318, 31.282476, "停车场5", "苏州市园区东华门大街", 100, 5],
            //                 [120.721687, 31.323886, "停车场6", "苏州市园区东华门大街", 90, 6],
            //                 [120.719711, 31.324287, "停车场7", "苏州市园区东华门大街", 120, 7],
            //                 [120.724966, 31.323708, "停车场8", "苏州市园区东华门大街", 210, 8],
            //                 [120.725029, 31.324271, "停车场9", "苏州市园区东华门大街", 300, 9],
            //                 [120.721077, 31.322528, "停车场10", "苏州市园区东华门大街", 200, 10],
            //                 [114.334589, 30.578906, "停车场11", "武汉市园区东华门大街", 200, 11],
            //                 [114.334571, 30.578906, "停车场12", "武汉市园区东华门大街", 200, 12]
            //];

            var data_qq = [[31.2700484667419, 120.744744465328], [31.259825131504, 120.74512769418], [31.2642186951263, 120.740392844476],
                [31.2491333383308, 120.631200581808], [31.2763122958511, 120.740876098693], [31.3175358479484, 120.715280123961],
                [31.3179479501523, 120.713300814607], [31.3173476132901, 120.718561967385], [31.3179103719996, 120.718624425921], [31.3161812654437, 120.714670687078],
                [30.5729453687119, 114.32809893582], [30.5729456903302, 114.328080849814], [30.5729456903302, 114.328080849814], [30.5729456903302, 114.328080849814], [30.5729456903302, 114.328080849814], [30.5729456903302, 114.328080849814]

            ];
            Ext.Ajax.request({
                url: util.getMobileSite() + "Park/GetParkList.ashx",
                params: {
                    feeType: feeType, orderType: orderType
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    data_info = eval(result.responseText);
                    for (var i = 0; i < data_info.length; i++) {
                        if (data_info[i][6] > bssw.lng && data_info[i][6] < bsne.lng && data_info[i][5] > bssw.lat && data_info[i][5] < bsne.lat) {
                            var marker = new BMap.Marker(new BMap.Point(data_info[i][6], data_info[i][5]));  // 创建标注
                            var name = data_info[i][1];
                            var content = data_info[i][4];
                            var placeCount = data_info[i][2];
                            var parkId = data_info[i][0];
                            var lng = data_qq[i][1];//120.745272342972;  //120.745678882946; 31.2590500515755; 
                            var lat = data_qq[i][0];//31.2693231254021;
                            var sContent =
                            "<div>" +
                        "<h4 style='margin:0 0 0px 0;color:#0A8021'>" + name + "</h4>" +  //padding:0.2em 0;
                        //"<img style='float:right;margin:4px' id='imgDemo' src='http://app.baidu.com/map/images/tiananmen.jpg' width='139' height='104' title='天安门'/>" + 
                        "<p style='margin:0;line-height:1.5;font-size:13px;'><b>地址：</b>" + content + "</p>" +
                        "<p style='margin:0;line-height:1.5;font-size:13px;'>车位数:" + placeCount + "</p>" +
                        "<p style='margin-top:0px;margin-left:10px;text-align:right;'><label id='point1' hidden=true>" + data_info[i][6] + "</label><label id='point2' hidden=true>" + data_info[i][5] + "</label>" +
                        //"<a href='http://api.map.baidu.com/direction?origin=latlng:" + start.lat + "," + start.lng + "|name:我的位置" +
                        //"&destination=latlng:" + data_info[i][1] + "," + data_info[i][0] + "|name:终点&mode=driving&region=苏州&output=html&src=yourCompanyName|yourAppName'>BWeb</a>" +

                        //"<a href='http://apis.map.qq.com/uri/v1/routeplan?type=drive&to=终点&tocoord="+lng+"," + lat + "&policy=1&referer=myapp'>QQ</a>" +

                        //"<a href='bdapp://map/direction?origin=latlng:" + start.lat + "," + start.lng + "|name:我的位置" +
                        //"&destination=latlng:" + data_info[i][1] + "," + data_info[i][0] + "|name:终点&mode=driving&region=苏州&src=yourCompanyName|yourAppName'>Baidu</a>" +
                        "<input type='button' value='查看详情' onclick='placeDetailTap(" + parkId + "," + start.lat + "," + start.lng + "," + data_info[i][5] + "," + data_info[i][6] + "," + lat + "," + lng + ")' />" +
                        "&nbsp;<a href='#redirec/findCarPlace' onclick='goToHere(" + start.lat + "," + start.lng + "," + data_info[i][5] + "," + data_info[i][6] + "," + lat + "," + lng + ")' style='text-decoration: none;'>去这儿</a>" +
                        "</p>" +
                        "</div>";

                            map.addOverlay(marker);               // 将标注添加到地图中
                            addClickHandler(sContent, marker);
                        }
                    }
                },
                failure: function (result, context) {
                     util.showMessage("网络异常，请重试", true);
                },
                method: "POST"
            });
        }


        function addClickHandler(sContent, marker) {
            marker.addEventListener("click", function (e) {
                //    document.getElementById("open").hidden = true;
                //    document.getElementById("r-result").hidden = true;
                //     document.getElementById("r-result2").hidden = true;
                openInfo(sContent, e)
            }
            );
        }
        function openInfo(sContent, e) {
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);

            var opts = {
                width: 230,     // 信息窗口宽度
                height: 100,     // 信息窗口高度
                //title : name , // 信息窗口标题
                enableMessage: true//设置允许信息窗发送短息
            };
            var infoWindow = new BMap.InfoWindow(sContent, opts);  // 创建信息窗口对象 
            map.openInfoWindow(infoWindow, point); //开启信息窗口
        }

        var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true } });

        function searchRoute() {
            Ext.getCmp('result').setHtml("1111");
            driving.clearResults();
            var point1 = document.getElementById("point1").innerHTML;
            var point2 = document.getElementById("point2").innerHTML;
            var point = new BMap.Point(point1, point2);

            driving.search(start, point);    //显示一条驾车线路    
            //map.setZoom(18);  
            map.closeInfoWindow();
            map.zoomIn();

            // document.getElementById("open").hidden = false;

            var options = {
                onSearchComplete: function (results) {
                    if (driving.getStatus() == BMAP_STATUS_SUCCESS) {
                        // 获取第一条方案
                        var plan = results.getPlan(0);
                        // 获取方案的驾车线路
                        var route = plan.getRoute(0);
                        // 获取每个关键步骤,并输出到页面
                        var s = [];
                        for (var j = 0; j < plan.getNumRoutes() ; j++) {
                            var route = plan.getRoute(j);
                            for (var i = 0; i < route.getNumSteps() ; i++) {
                                var step = route.getStep(i);
                                s.push((i + 1) + ". " + step.getDescription());
                            }
                        }
                        //      document.getElementById("r-result2").innerHTML = s.join("<br/>");
                        Ext.getCmp('result').setHtml(s.join("<br/>"));
                    }
                }
            };
            showRoute(point, options);
        }
        function showRoute(point, options) {
            var driving = new BMap.DrivingRoute(map, options);
            driving.search(start, point);
        }

        function goToHere() {
            util.showWarning("请您先登录", true);
            //alert("选择百度or腾讯");
            //   document.getElementById("r-result").hidden = false;
            //   document.getElementById("r-result2").hidden = false;
        }
        //--------------------------------------------------------------------------

        //map.setCurrentCity("苏州");
        //初始化地图
        //var mapOptions = me.getMapOptions(),
        //map = new BMap.Map(me.getId()),

        //center = me.getCenter(),
        //point;
        //if (Ext.isString(center)) {
        //    point = center;
        //} else if (Ext.isObject(center)) {
        //    point = new BMap.Point(center.lng, center.lat);
        //}
        ////point1 = new BMap.Point('120.635765', '31.268128');
        //point1 = new BMap.Point(me.getLng(), me.getLat());

        ////point1 = new BMap.Point(data.result[0].x - 0.001, data.result[0].y - 0.001);
        //var myMarker1 = new BMap.Marker(point1);
        //map.addOverlay(myMarker1);
        ////设置中心点和地图显示级别
        //map.centerAndZoom(point1, 14);
        ////console.log("清除地图上的弹出窗口");
        ////map.closeInfoWindow();
        ////map.clearOverlays();
        ////window.setTimeout(function () {
        ////    map.panTo(point)
        ////},

        ////1000);
        //////添加地图缩放控件
        //map.addControl(new BMap.ZoomControl());
        //////判断是否加载定位控件
        //if (mapOptions.locate) {
        //    map.addControl(me.getLocateControl());
        //}
        //me.setMap(map);
        //if (mapOptions.markers) {
        //    me.setData(mapOptions.markers);
        //}
        ////触发事件
        ////me.fireEvent('painted', me);

        //   }
    }
});