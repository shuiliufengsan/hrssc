Ext.define('ux.BMap', {
    alternateClassName: 'bMap',
    extend: 'Ext.Container',
    xtype: 'bMap',
    requires: ['Ext.util.Geolocation'],
    config: {
        map: null,
        /// <summary>
        /// 地图初始化配置
        /// </summary>
        /// <param name="locate">是否加载定位控件</param>
        /// <param name="markers">标点集合[{lng:'',lat:''}]</param>
        mapOptions: {},
        center: '苏州',
        //是否监听标点的点击事件
        markerTap: false,
        //私有变量，定位按钮
        locate: null,
        //定位控件
        geo: null,
        lng: '111',
        lat:null,
        //注意，填充数据需要在showMap事件触发之后才可以
        //store数据源lng,lat这两个字段必须有
        store: null,
        //data数据源
        data: null,
        //百度服务密钥,没有的话不会进行坐标转换，定位会有一定的误差参考http://developer.baidu.com/map/changeposition.htm
        ak: null,
        nearData: null
    },
    initialize: function () {
        console.log("ddddddg");
        this.callParent();
        this.on({
            //有些项目布局可能需要使用painted事件来监听
            painted: 'initMap',
            scope: this
        });
    },
    //数据源事件
    storeEventHooks: {
        load: 'onLoad'
    },
    //填充数据f
    updateData: function (data) {
        var me = this,
        store = me.getStore();
        if (!store) {
            this.setStore(Ext.create('Ext.data.Store', {
                data: data,
                autoDestroy: true
            }));
        } else {
            store.add(data);
        }
    },
    //创建store
    applyStore: function (store) {
        var me = this,
        bindEvents = Ext.apply({},
        me.storeEventHooks, {
            scope: me
        });
        //获取store,绑定事件
        if (store) {
            store = Ext.data.StoreManager.lookup(store);
            store.onAfter(bindEvents);
        }
        return store;
    },
    //更新store
    updateStore: function (newStore, oldStore) {
        var me = this,
        bindEvents = Ext.apply({},
        me.storeEventHooks, {
            scope: me
        });
        //移除绑定事件，销毁
        if (oldStore && Ext.isObject(oldStore) && oldStore.isStore) {
            oldStore.un(bindEvents);
            if (oldStore.getAutoDestroy()) {
                oldStore.destroy();
            }
        }
        if (newStore.getCount()) {
            me.on({
                showMap: function () {
                    me.onLoad(newStore);
                }
            });
        }
    },
    //数据加载成功,加载坐标点
    onLoad: function (store) {
        var me = this,
        map = me.getMap(),
        marker,
        item;
        map.clearOverlays();

        store.each(function (record, index, length) {
            item = record.getData();
            if (item.lng && item.lat) {
                // 创建标注
                marker = new BMap.Marker(new BMap.Point(item.lng, item.lat));
                marker.options = {};
                for (var name in item) {
                    if (name != 'lng' && name != 'lat') {
                        marker.options[name] = item[name];
                    }
                }
                if (me.getMarkerTap()) {
                    //添加点击监听
                    marker.addEventListener("click",
                    function (type, target) {
                        me.fireAction('tapMarker', [me, this], 'onTapMarker');
                    });
                }
                // 将标注添加到地图中
                map.addOverlay(marker);

            }
        });
    },
    initMap: function () {
        var me = this,
        map = me.getMap();
        if (!map) {
            //map.setCurrentCity("苏州");
            //初始化地图
            var mapOptions = me.getMapOptions(),
            map = new BMap.Map(me.getId()),
            
            center = me.getCenter(),
            point;
            if (Ext.isString(center)) {
                point = center;
            } else if (Ext.isObject(center)) {
                point = new BMap.Point(center.lng, center.lat);
            }
            //point1 = new BMap.Point('120.635765', '31.268128');
            point1 = new BMap.Point(me.getLng(),me.getLat());

            //point1 = new BMap.Point(data.result[0].x - 0.001, data.result[0].y - 0.001);
            var myMarker1 = new BMap.Marker(point1);
            map.addOverlay(myMarker1);
            //设置中心点和地图显示级别
            map.centerAndZoom(point1, 14);
            //console.log("清除地图上的弹出窗口");
            //map.closeInfoWindow();
            //map.clearOverlays();
            //window.setTimeout(function () {
            //    map.panTo(point)
            //},

            //1000);
            ////添加地图缩放控件
            map.addControl(new BMap.ZoomControl());
            ////判断是否加载定位控件
            if (mapOptions.locate) {
                map.addControl(me.getLocateControl());
            }
            me.setMap(map);
            if (mapOptions.markers) {
                me.setData(mapOptions.markers);
            }
            //触发事件
            //me.fireEvent('painted', me);

        }
    },
    getLocateControl: function () {
        //创建控件
        var locateControl = new BMap.Control();
        //设置方位
        locateControl.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        //设置坐标
        locateControl.defaultOffset = new BMap.Size(10, 70);
        //设置dom
        locateControl.initialize = function (map) {
            var zoom = document.createElement("div");
            zoom.className = 'BMap_ZoomCtrl zoom_btn locateControl';
            var location = document.createElement("div");
            location.className = 'location';
            zoom.appendChild(location);
            map.getContainer().appendChild(zoom);
            return zoom;
        }

        //监听点击事件
        this.element.on({
            tap: 'onLocate',
            delegate: 'div.locateControl',
            scope: this
        });
        return locateControl;
    },
    onLocate: function (e) {
        var el = e.getTarget('div.location', null, true);
        // el.addCls('guideIco');
        this.setLocate(el);
        //触发定位事件
        this.setGeo(true);
    },
    //创建定位插件
    applyGeo: function (config) {
        return Ext.factory(config, Ext.util.Geolocation, this.getGeo());
    },
    updateGeo: function (newGeo, oldGeo) {
        //console.log(2);
        var events = {
            locationupdate: 'onGeoUpdate',
            locationerror: 'onGeoError',
            scope: this
        };

        if (oldGeo) {
            oldGeo.un(events);
        }

        if (newGeo) {
            newGeo.on(events);
            newGeo.updateLocation();
        }
    },
    // 定位成功，设置中心点
    onGeoUpdate: function (geo) {
        var me = this,
        ak = me.getAk();
        if (ak) {
            Ext.data.JsonP.request({
                url: 'http://api.map.baidu.com/geoconv/v1/',
                params: {
                    coords: geo.getLongitude() + ',' + geo.getLatitude(),
                    from: 1,
                    to: 5,
                    ak: ak
                },
                scope: this,
                callbackKey: 'callback',
                success: function (data) {
                    if (data) {
                        var mapOptions = me.getMapOptions(),
                            map = new BMap.Map(me.getId()),
                            center = me.getCenter(),
                            point;
                        point = new BMap.Point(data.result[0].x, data.result[0].y);
                        point1 = new BMap.Point(data.result[0].x - 0.001, data.result[0].y - 0.001);

                        //设置中心点和地图显示级别
                        map.centerAndZoom(point, 18);
                        map.addControl(new BMap.ZoomControl());
                        var mapTypeControl = new BMap.MapTypeControl({
                            anchor: BMAP_ANCHOR_TOP_RIGHT,
                            mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP],
                            offset: new BMap.Size(10, 50)
                        });
                        map.addControl(mapTypeControl);
                        ////判断是否加载定位控件
                        if (mapOptions.locate) {
                            map.addControl(me.getLocateControl());
                        }
                        //第一个标注
                        var myIcon = new BMap.Icon(config.webSite + "/Upload/Mobile/bullet-blue.png", new BMap.Size(18, 18));
                        var myMarker = new BMap.Marker(point, {
                            icon: myIcon
                        });
                        map.addOverlay(myMarker);

                        //function showInfo(e) {
                        //    alert(e.point.lng + ", " + e.point.lat);
                        //}
                        //map.addEventListener("click", showInfo);

                        //第二个标注
                        var myIcon1 = new BMap.Icon("http://api.map.baidu.com/mapCard/img/location.gif", new BMap.Size(20, 25));
                        //var myMarker1 = new BMap.Marker(point1, {
                        //    icon: myIcon1
                        //});
                        var myMarker1 = new BMap.Marker(point1);
                        map.addOverlay(myMarker1);

                        me.setMap(map);
                        //if (mapOptions.markers) {
                        //    me.setData(mapOptions.markers);
                        //}
                        //me.fireEvent('showMap', me);
                        //不需要标志
                        var local = new BMap.LocalSearch(map);
                        //var local = new BMap.LocalSearch(map, {
                        //                renderOptions: { map: map, autoViewport: false, selectFirstResult: false }
                        //            });
                        //var local = new BMap.LocalSearch(map, {
                        //    renderOptions: { map: map }
                        //});
                        local.searchInBounds("公司", map.getBounds());
                        //local.getResults();
                        local.setSearchCompleteCallback(function (searchResult) {

                            var count = searchResult.getCurrentNumPois();
                            Ext.regModel('NearCompany', {
                                fields: [
                                    { name: 'value', type: 'string' },
                                    { name: 'text', type: 'string' }
                                ]
                            });
                            nearCompanyStore = new Ext.data.Store();
                            for (var i = 0; i < count; i++) {
                                var poi = searchResult.getPoi(i);
                                nearCompanyStore.add(new NearCompany({
                                    value: poi.title,
                                    text: poi.title
                                }));
                                //nearCompanyStore.add();
                            }
                            //Ext.getCmp('nearCompanyId').setStore(nearCompanyStore);
                            //util.showMessage(poi.address, true);

                            //tr.insertCell(1).innerText = poi.title;
                            //tr.insertCell(2).innerText = poi.point.lng;
                            //tr.insertCell(3).innerText = poi.point.lat;
                            //tr.insertCell(4).innerText = poi.phoneNumber;
                            //tr.insertCell(5).innerText = poi.address;
                            //tr.insertCell(6).innerText = poi.tags;
                            //alert(poi.point.lng+" "+poi.point.lat);
                            //document.getElementById("info").innerHTML = "<b>" + keyword + "</b>" + poi.point.lng + "," + poi.point.lat;
                        });

                        me.setGeo(false);
                    }
                },
                failure: function (resp, opts) {
                    //var respText = Ext.util.JSON.decode(resp.responseText);
                    //Ext.Msg.alert('错误', respText.error);
                    util.showMessage(resp.responseText);
                }
            });
        } else {
            me.addMyPoint(geo.getLongitude(), geo.getLatitude());
        }
    },
    //添加我的坐标
    addMyPoint: function (x, y) {
        var me = this,
            map = me.getMap(),
           icon = new BMap.Icon("resources/icons/markers1.png", new BMap.Size(20, 25), {
               imageOffset: new BMap.Size(0, 0)
           }),
           point = new BMap.Point(x, y),
           marker = new BMap.Marker(point, {
               icon: icon
           });
        // 将标注添加到地图中
        map.addOverlay(marker);
        map.setCenter(point);
        me.unLocate();
    },
    // 定位失败
    onGeoError: function () {
        //util.showMessage(1, true);
        this.unLocate();
        //触发事件
        this.fireEvent('geoError', this);
    },
    unLocate: function () {
        //console.log(4);
        var locate = this.getLocate();
        if (locate) {
            locate.removeCls('locationGif');
        }
    },
    /// <summary>
    /// 搜索
    /// </summary>
    /// <param name="key">关键词：String|Array<String></param>
    /// <param name="unClear">是否不清除覆盖物</param>
    search: function (key, unClear) {
        var map = this.getMap(); !unClear && map.clearOverlays();
        var local = new BMap.LocalSearch(map, {
            renderOptions: {
                map: map,
                autoViewport: true
            }
        });
        local.search(key);
    },
    /// <summary>
    /// 根据中心点与检索词发起周边检索
    /// </summary>
    /// <param name="key">关键词：String|Array<String></param>
    /// <param name="by">中心点：LocalResultPoi|String|Point</param>
    /// <param name="unClear">是否不清除覆盖物</param>
    searchNearby: function (key, by, unClear) {
        var map = this.getMap(); !unClear && map.clearOverlays();
        var local = new BMap.LocalSearch(map, {
            renderOptions: {
                map: map,
                autoViewport: true
            }
        });
        local.searchNearby(key, by);
    },
    /// <summary>
    /// 设置地图中心
    /// </summary>
    /// <param name="point"></param>
    setMapCenter: function (lng, lat) {
        var map = this.getMap();
        if (map) {
            map.setCenter(new BMap.Point(lng, lat));
        }
    }
});