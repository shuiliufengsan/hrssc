Ext.define('ChuangCai.controller.Shop', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['shop.ProductList', 'shop.FootPrint', 'shop.CollectionProduct', 'shop.ProductCategory', 'shop.ProductHomeList', 'shop.Category', 'shop.Province', 'shop.PublishedPro', 'shop.OnlineAuctionPro', 'shop.ProductsDisplay', 'shop.OfferRecord', 'shop.CMSContent', 'shop.SearchRecord', 'shop.BiddingRecord', 'shop.ShopHomeNews', 'shop.GoodsType', 'shop.tradeTest'],
        stores: ['shop.ProductList', 'shop.FootPrint', 'shop.CollectionProduct', 'shop.ProductCategory', 'shop.ProductHomeList', 'shop.TestStore', 'shop.ProductCommodities', 'shop.ProductDamage', 'shop.ProductDisplay', 'shop.Category', 'shop.Province', 'shop.PublishedPro', 'shop.OnlineAuctionPro', 'shop.ProductsHomeDisplay', 'shop.OfferRecord', 'shop.CMSContent', 'shop.SearchRecord', 'shop.ProductType', 'shop.BiddingRecord', 'shop.ShopHomeNews', 'shop.GoodsType', 'shop.TradeTest'],
        views: ['system.EmptyView', 'shop.ProductType', 'shop.ProductTypeDetail', 'park.PersonCenter', 'shop.ShopHome', 'shop.ShoppingCarts',
            'shop.SearchBrw', 'shop.MyPersonalInfo', 'shop.ProductListBrw', 'park.PayFees', 'park.FindCarPlace', 'park.Login', 'park.ParkHome', 'park.MyCar', 'park.AddCar', 'park.AboutPark', 'park.ParkAdvInfo', 'park.ParkAdvInfoView',//'shop.Overlay',
            'shop.ProductListDetail', 'shop.MyFootPrint', 'shop.MyCollectionProduct', 'shop.TestChart', 'shop.AddProducts', 'shop.CategorySelect', 'shop.ProvinceSelect',
            'shop.MyPublishedPro', 'shop.OnlineAuctionPro', 'shop.ProductsDisplay', 'shop.ImageViewDetail', 'shop.OfferRecord', 'shop.CMSContentBrw', 'shop.CMSContentView', 'shop.SearchResultBrw', 'shop.MyBiddingBrw', 'shop.MyPersonalPhotoSet', 'shop.MyPersonalInfoEdit', 'shop.ProductMap', 'shop.ProductVideo', 'shop.VoucherImage', 'shop.ProgressDetail', 'shop.ShopHomeNews', 'shop.ShopHomeNewsView', 'shop.GoodsType', 'shop.TradeTest'
        ],
        control: {
            'parkHome button[itemId=findPlace]': {
                tap: 'onfindPlaceTap'
            },
            'parkHome button[itemId=goodsType]': {
                tap: 'onGoodsTypeTap'
            },
            'parkHome button[itemId=parkAdv]': {
                tap: 'onParkAdvTap'
            },
            'parkHome button[itemId=payFees]': {
                tap: 'onPayFeesTap'
            },
            'personCenter button[itemId=clearLocalStorage]': {
                tap: 'onClearLocalStorageTap'
            },
            'personCenter button[itemId=IntoPersonalInfo]': {
                tap: 'onIntoPersonalInfoTap'
            },
            'personCenter button[itemId=myCar]': {
                tap: 'onMyCarTap'
            },
            'personCenter button[itemId=aboutPark]': {
                tap: 'onAboutParkTap'
            },


            'productListView button[itemId=collectionProduct]': {
                tap: 'onCollectionProductTap'
            },
            'productListView button[itemId=productIntroduce]': {
                tap: 'onProductIntroduceTap'
            },
            'productListView button[itemId=offerRecord]': {
                tap: 'onProductOfferRecordTap'
            },
            'productListView button[itemId=submitEnsureMon]': {
                tap: 'onSubmitEnsureMonTap'
            },
            'productListView button[itemId=submitOfferRecord]': {
                tap: 'onSubmitOfferRecordTap'
            },
            'productListView button[itemId=subjectMatterAddress]': {
                tap: 'onProductMapTap'
            },
            'productListView button[itemId=productImage]': {
                tap: 'onProductImageTap'
            },
            'productListView button[itemId=productVideo]': {
                tap: 'onProductVideoTap'
            },
            'addProducts button[itemId=selectPhotoBtn]': {
                tap: 'onTapCameraSelect'
            },
            'addProducts button[itemId=takePhotoBtn]': {
                tap: 'onTapCameraTake'
            },
            'productListView button[itemId=productTest]': {
                tap: 'onTapProductTest'
            },
            'addProducts selectfield[itemId=language]': {
                focus: function (obj, e, eOpts) {
                    var selectOptionData = [{
                        text: '中文', value: 'zh'
                    }, {
                        text: '英文', value: 'en'
                    }];
                    Ext.regModel('SetClear', {
                        fields: [
                            { name: 'value', type: 'string' },
                            { name: 'text', type: 'string' }
                        ]
                    });
                    setClear = new Ext.data.Store({
                        model: 'SetClear',
                        data: [{ value: "", text: "" }],
                        autoLoad: true
                    });
                    Ext.getCmp("language").setOptions(selectOptionData);
                    Ext.getCmp("productType_one").setStore(setClear);
                    Ext.getCmp("productType_two").setStore(setClear);
                    Ext.getCmp("productType_three").setStore(setClear);
                }
            },
            'addProducts selectfield[itemId=productType_one]': {
                focus: function (obj, e, eOpts) {
                    //传参
                    tempParams = { 'type': '1', 'categoryId': '' };
                    this.redirectTo('redirec/categorySelect');
                    e.stopEvent();
                }
            },
            'addProducts selectfield[itemId=productType_two]': {
                focus: function (obj, e, eOpts) {
                    //传参
                    var getParentCategoryId = Ext.getCmp('productType_one').getValue();
                    if (getParentCategoryId == null) {
                        util.showMessage("请先选择分类1", true, 1);

                    }
                    else {
                        tempParams = { 'type': '2', 'categoryId': getParentCategoryId };
                        this.redirectTo('redirec/categorySelect');
                        e.stopEvent();
                    }
                }
            },
            'addProducts selectfield[itemId=productType_three]': {
                focus: function (obj, e, eOpts) {
                    //传参
                    var getParentCategoryId = Ext.getCmp('productType_two').getValue();
                    if (getParentCategoryId == null) {
                        util.showMessage("请先选择分类1、2", true, 1);
                    }
                    else {
                        tempParams = { 'type': '3', 'categoryId': getParentCategoryId };
                        this.redirectTo('redirec/categorySelect');
                        e.stopEvent();
                    }
                }
            },
            'addProducts selectfield[itemId=province]': {
                focus: function (obj, e, eOpts) {
                    //传参
                    tempParams = { 'type': '4', 'provinceTypeId': 'province', 'addressName': '选择省份' };
                    this.redirectTo('redirec/provinceSelect');
                    //e.stopEvent();
                }
            },
            'addProducts selectfield[itemId=city]': {
                focus: function (obj, e, eOpts) {
                    //传参
                    var getParentProvinceId = Ext.getCmp('province').getValue();
                    if (getParentProvinceId == null) {
                        util.showMessage("请先填写省份", true, 1);
                    }
                    else {
                        tempParams = { 'type': '5', 'provinceTypeId': getParentProvinceId, 'addressName': '选择城市' };
                        this.redirectTo('redirec/provinceSelect');
                        //e.stopEvent();
                    }
                }
            },
            'addProducts selectfield[itemId=county]': {
                focus: function (obj, e, eOpts) {
                    //传参
                    var getParentProvinceId = Ext.getCmp('city').getValue();
                    if (getParentProvinceId == null) {
                        util.showMessage("请先填写省份、城市", true, 1);
                    }
                    else {
                        tempParams = { 'type': '6', 'provinceTypeId': getParentProvinceId, 'addressName': '选择区县' };
                        this.redirectTo('redirec/provinceSelect');
                        //e.stopEvent();
                    }
                }
            },
            'searchBrw button[itemId=searchProBtn]': {
                tap: 'onSearchProBtnTap'
            },
            'searchBrw button[itemId=clearSearchBtn]': {
                tap: 'onClearSearchBtnTap'
            },

            'myPersonalCenter button[itemId=collectionProductView]': {
                tap: 'onCollectionProductViewTap'
            },
            'myPersonalCenter button[itemId=myFootPrint]': {
                tap: 'onMyFootPrintTap'
            },
            'myPersonalCenter button[itemId=myBinddingPro]': {
                tap: 'onMyBinddingProTap'
            },
            'myPersonalCenter button[itemId=publishedProduct]': {
                tap: 'onPublishedProductTap'
            },
            'myPersonalCenter button[itemId=addProduct]': {
                tap: 'onAddProductTap'
            },
            'myPersonalCenter button[itemId=commentsSubmitted]': {
                tap: 'onIntoCommentsSubmittedTap'
            },
            'myPersonalCenter button[itemId=aboutBaoPai]': {
                tap: 'onAboutBaoPaiTap'
            },
            'myPersonalInfo button[itemId=userPhoto]': {
                tap: 'onUserPhotoTap'
            },
            'myPersonalInfo button[itemId=userNick]': {
                tap: 'onUserNickEditTap'
            },
            'myPersonalInfo button[itemId=userEmail]': {
                tap: 'onUserEmailEditTap'
            },
            'myPersonalInfo button[itemId=userTelephone]': {
                tap: 'onUserTelephoneEditTap'
            },
            'myPersonalInfo button[itemId=loginOut1]': {
                tap: 'onLoginOutTap'
            },
            'myPersonalPhotoSet button[itemId=cameraTake]': {
                tap: 'onUserCameraTake'
            },
            'myPersonalPhotoSet button[itemId=cameraSelect]': {
                tap: 'onUserCameraSelect'
            },
            'aboutBrw button[itemId=serviceTermsDetail]': {
                tap: 'onServiceTermsDetailTap'
            },
            'aboutBrw button[itemId=aboutBaoPaiDetail]': {
                tap: 'onAboutBaoPaiDetailTap'
            },
            parkHome: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (dict == null) {
                        dict = new Dictionary();
                    }
                    globalBar = obj.getNavigationBar();
                    //判断是否为iOS，同时要判断不同版本
                    //globalBar.addCls("setNavigationTop");
                    var me = this;
                    newActiveItem.element.on("swipe", function (e, target, options, eOpts) {
                        if (e.direction === 'left' && e.distance >= 20) {
                            //util.showWarning('move left');
                        } else if (e.direction === 'right' && e.distance >= 20) {
                            //util.showWarning('move right');
                        } else if (e.direction === 'up' && e.distance >= 20) {
                            //util.showWarning('move up');
                            //me.redirectTo('redirec/newsBrw');
                        } else if (e.direction === 'down' && e.distance >= 20) {
                            //util.showWarning('move down');
                        }
                    });
                    CSS.addStyleSheet('news');

                    // 首页浮动小图标
                    //var floatingPanel = Ext.create('Ext.Img', {
                    //    id: 'mainTouchId',
                    //    height: 50,
                    //    width: 50,
                    //    draggable: true,
                    //    floating: true,
                    //    src: 'resources/images/global2.png',
                    //    left: 100,                                 // #4
                    //    top: 290,
                    //    listeners: {
                    //        tap: function () {
                    //            util.showWarning("tap");
                    //        },
                    //        painted: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //            var me = this;
                    //            var draggable = Ext.getCmp("mainTouchId").draggableBehavior.getDraggable();
                    //            draggable.setConstraint({
                    //                min: { x: -Infinity, y: -Infinity },
                    //                max: { x: Infinity, y: Infinity }
                    //            });
                    //            draggable.on({
                    //                scope: me,
                    //                dragstart: function (obj, e, offsetX, offsetY, eOpts) {
                    //                    e.stopEvent();
                    //                },
                    //                drag: function (obj, e, offsetX, offsetY, eOpts) {
                    //                },
                    //                dragend: function (obj, e, offsetX, offsetY, eOpts) {
                    //                    //util.showWarning(Ext.getCmp("mainTouchId").getLeft() + offsetX);
                    //                    //util.showWarning(Ext.getCmp("mainTouchId").getTop() + offsetY);
                    //                }
                    //            });

                    //        },
                    //        //painted: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //        //    Ext.getCmp("mainTouchId").setLeft(140);
                    //        //    Ext.getCmp("mainTouchId").setTop(340);
                    //        //}
                    //    }
                    //});
                    //Ext.getCmp("homeId").remove(Ext.get('mainTouchId'));
                    //Ext.getCmp("homeId").add(floatingPanel);



                    //加载最下方ProductCommodities
                    //var ProductCommoditiesStore;
                    //if (dict.get("ProductCommoditiesStore") == undefined) {
                    //    ProductCommoditiesStore = Ext.create("ChuangCai.store.shop.ProductCommodities");
                    //    dict.add("ProductCommoditiesStore", ProductCommoditiesStore);
                    //}
                    //Ext.getCmp("ProductCommoditiesId").setStore(dict.get("ProductCommoditiesStore"));
                    //ProductCommoditiesStore = dict.get("ProductCommoditiesStore");
                    //if (dict.get("loadHomeProductNum") == undefined) {
                    //    var loadHomeProductNum;
                    //    var countsProType = "AAAA";
                    //    Ext.Ajax.request({
                    //        url: util.getMobileSite() + "Shop/GetProductsHomeCounts.ashx",
                    //        params: {
                    //            countsProType: countsProType
                    //        },
                    //        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                    //        success: function (result, context) {
                    //            var json = result.responseText;
                    //            json = Ext.decode(json);
                    //            loadHomeProductNum = json[0];
                    //            dict.add("loadHomeProductNum", loadHomeProductNum);
                    //            Ext.getCmp("ProductCommoditiesId").setHeight(92 * dict.get("loadHomeProductNum"));
                    //        },
                    //        failure: function (result) {
                    //            var msg = result.responseText;
                    //            util.showMessage(msg, true);
                    //        },
                    //        method: "POST"
                    //    });
                    //}
                    //Ext.getCmp("ProductCommoditiesId").setHeight(92 * dict.get("loadHomeProductNum"));

                    //ProductCommoditiesStore.load();
                    //Ext.getCmp("ProductCommoditiesId").addListener({
                    //    itemtap: this.onHomeProductTap,
                    //    scope: this
                    //});

                    //加载最下方ProductDamageId
                    //var ProductDamageStore = Ext.create("ChuangCai.store.shop.ProductDamage");
                    //Ext.getCmp("ProductDamageId").setStore(ProductDamageStore);
                    //var loadHomeProductNum;
                    //var countsProType = "BBBB";
                    //Ext.Ajax.request({
                    //    url: util.getMobileSite() + "Shop/GetProductsHomeCounts.ashx",
                    //    params: {
                    //        countsProType: countsProType
                    //    },
                    //    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                    //    success: function (result, context) {
                    //        var json = result.responseText;
                    //        json = Ext.decode(json);
                    //        loadHomeProductNum = json[0];
                    //        Ext.getCmp("ProductDamageId").setHeight(90 * 5);
                    //    },
                    //    failure: function (result) {
                    //        var msg = result.responseText;
                    //        util.showMessage(msg, true);
                    //    },
                    //    method: "POST"
                    //});
                    //ProductDamageStore.load();
                    //Ext.getCmp("ProductDamageId").addListener({
                    //    itemtap: this.onHomeProductTap,
                    //    scope: this
                    //});

                    //加载最下方ProductDisplayId
                    //var ProductDisplayStore = Ext.create("ChuangCai.store.shop.ProductDisplay");
                    //Ext.getCmp("ProductDisplayId").setStore(ProductDisplayStore);
                    //var loadHomeProductNum;
                    //var countsProType = "CCCC";
                    //Ext.Ajax.request({
                    //    url: util.getMobileSite() + "Shop/GetProductsHomeCounts.ashx",
                    //    params: {
                    //        countsProType: countsProType
                    //    },
                    //    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                    //    success: function (result, context) {
                    //        var json = result.responseText;
                    //        json = Ext.decode(json);
                    //        loadHomeProductNum = json[0];
                    //        Ext.getCmp("ProductDisplayId").setHeight(90 * 5);
                    //    },
                    //    failure: function (result) {
                    //        var msg = result.responseText;
                    //        util.showMessage(msg, true);
                    //    },
                    //    method: "POST"
                    //});
                    //ProductDisplayStore.load();
                    //Ext.getCmp("ProductDisplayId").addListener({
                    //    itemtap: this.onHomeProductTap,
                    //    scope: this
                    //});

                    var bar = obj.getNavigationBar();
                    //bar.titleComponent.setZIndex(-1);
                    //store = Ext.getCmp('favoirteId').getStore();
                    //var proxy = store.getProxy();
                    //store.load(function (records, operation, success) {
                    //    if (success) {
                    //        if (records[0].data.id == "-1") {
                    //            Ext.getCmp('favoirteId').getStore().setData(null);
                    //        }
                    //    }
                    //}, this);
                    var _this = this;
                    var newCard = new Ext.Panel({
                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                            + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/4.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    if (Ext.getCmp("RCarouselis1").items.length == 1) {
                        Ext.getCmp("RCarouselis1").add(newCard);
                        newCard = new Ext.Panel({
                            html: '<div id="adv" style="position:relative; width:100%; height:'
                                + parseInt(document.body.clientWidth * 1)
                                + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/2.jpg); background-size: 100% "
                                + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                        });
                        //newCard.setData(row);
                        Ext.getCmp("RCarouselis1").add(newCard);

                        newCard = new Ext.Panel({
                            html: '<div id="adv" style="position:relative; width:100%; height:'
                                + parseInt(document.body.clientWidth * 1)
                                + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/3.jpg); background-size: 100% "
                                + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                        });
                        //newCard.setData(row);
                        Ext.getCmp("RCarouselis1").add(newCard);

                        //newCard = new Ext.Panel({
                        //    html: '<div id="adv" style="position:relative; width:100%; height:'
                        //        + parseInt(document.body.clientWidth * 1)
                        //         + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/4.jpg); background-size: 100% "
                        //        + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                        //});
                        ////newCard.setData(row);
                        //Ext.getCmp("RCarouselis1").add(newCard);

                        //newCard = new Ext.Panel({

                        //    html: '<div id="adv" style="position:relative; width:100%; height:'
                        //        + parseInt(document.body.clientWidth * 1)
                        //         + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/5.jpg); background-size: 100% "
                        //        + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                        //});
                        ////newCard.setData(row);
                        //Ext.getCmp("RCarouselis1").add(newCard);
                        Ext.getCmp("RCarouselis1").setActiveItem(0, "slide");
                    }
                    //bar.add(
                    //   {
                    //    id: 'homeSearchId',
                    //    xtype: 'img',
                    //    right: 0,
                    //    top: 9,
                    //    centered: true,
                    //    src: 'resources/images/system/search_home.png',
                    //    width: document.body.clientWidth - 10,
                    //    height: 30,
                    //    style: "background-size: auto 100%;",
                    //    align: 'right',
                    //    listeners: {
                    //        tap: function () {
                    //            _this.redirectTo('redirec/searchBrw');
                    //        }
                    //    }
                    //});
                    //if (dict.get("province") == undefined) {
                    //    dict.add("province", "上海");
                    //}

                    //globalBar.add(
                    //    {
                    //    id: 'provinceId',
                    //    xtype: 'img',
                    //    right: document.body.clientWidth - 100,
                    //    top: 4,
                    //    centered: true,
                    //    html: "<div style='margin-left:28px'><span style='float:left;color:#ffffff;font-size: 14px;margin-top: 10px;'>" + dict.get("province") + "</span></div><div style='float:left;'><img src='resources/images/system/province-select.png' style='width: 40px !important;height: 40px !important;'/></div>",
                    //    width: 90,
                    //    height: 45,
                    //    align: 'right',
                    //    ui: 'decline',
                    //    listeners: {
                    //        tap: function () {
                    //            tempParams = { 'type': '4', 'provinceTypeId': 'province' };
                    //            _this.redirectTo('redirec/provinceSelect');
                    //        }
                    //    }
                    //});
                    //--------------------------------------------------------------add by wind
                    //var bar1 = obj.getNavigationBar();
                    //globalBar.add({
                    //    id: 'indexId',
                    //    xtype: 'img',
                    //    right: document.body.clientWidth-40,
                    //    top: 6,
                    //    centered: true,
                    //    src: 'resources/images/system/education.png',
                    //    width: 35,
                    //    height: 35,
                    //    align: 'right',
                    //    ui: 'decline',
                    //    listeners: {
                    //        tap: function () {
                    //            //    _this.redirectTo('redirec/searchBrw');
                    //        }
                    //    }             
                    //});
                    //globalBar.on('click',{
                    //    element: 'overlay',
                    //    tap: function () {
                    //        alert('Button tapped!');
                    //    }
                    //});
                    //--------------------------------------------------------------add by wind

                    //求当前手机的位置
                    //Ext.create('Ext.util.Geolocation', {
                    //    autoUpdate: true,
                    //    allowHighAccuracy: true,
                    //    listeners: {
                    //        locationupdate: function (geo) {
                    //            latitude = geo.position.coords.latitude;
                    //            longitude = geo.position.coords.longitude;
                    //            //alert(latitude);
                    //            //if(Global.currentUserPositionMarker)  
                    //            //{  
                    //            //    latlng1=new google.maps.LatLng(latitude, longitude);  
                    //            //    currentPosMarker.setPosition(latlng1);  
                    //            //}  
                    //        }
                    //    }
                    //});
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    //   bar.remove(Ext.getCmp('homeSearchId'));
                    //  bar.remove(Ext.getCmp('provinceId'));
                    // bar.remove(Ext.getCmp('indexId'));
                }
            },

            personCenter: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var userName = util.getUserCode();

                    if (userName != ""&&userName!=null) {                        
                        Ext.getCmp('IntoMyPersonalInfo').setHtml("<div><div style=''><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='resources/images/human_info.png'/></div><div ><p>" + userName + "</p></div></div>");
                    }

                    //Ext.Ajax.request({
                    //    url: util.getMobileSite() + "SystemManage/RegisterUser.ashx",
                    //    params: {
                    //        rgPhoneNumber: rgPhoneNumber, passwordText: passwordText
                    //    },
                    //    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                    //    success: function (result, context) {
                    //        util.setMasked(false);
                    //        util.showWarning('注册成功');
                    //        clearInterval(Vtimeout);
                    //    },
                    //    failure: function (result, context) {
                    //        util.setMasked(false);
                    //        util.showMessage("网络异常，请重试", true);
                    //    },
                    //    method: "POST"
                    //});
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    ////清空查询条件
                    //bar.remove(Ext.getCmp('moreId'));
                }
            },

            myCar: {
                itemtap: function (list, index, target, record, e) {
                    //if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                    //    Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    //}
                    //if (util.getUserId() == null) {
                    //    productRecord = record;
                    //}
                    //Ext.Viewport.EmptyView.setRecord(record);
                    //this.redirectTo('redirec/productListView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    //util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('myCarId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "personCenterId") {
                        Ext.getCmp('myCarId').getStore().loadPage(1);
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('myCarId').getStore().setData(null);
                            }
                        }
                    }, this);

                    //切换视图
                    bar.add({
                        id: 'viewId',
                        xtype: 'img',
                        right: 5,
                        top: 12,
                        centered: true,
                        // src: 'resources/images/system/view_2.png',
                        style:'color:white;font-size:16px;',
                        html: '添加',
                        width: 45,
                        height: 45,
                        align: 'right',
                       // ui: 'decline',
                        listeners: {
                            tap: function () {
                                me.redirectTo('redirec/addCar');
                            }
                        }
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('viewId'));
                }
            },
            parkAdvInfo:{            
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    }
                    if (util.getUserId() == null) {
                        productRecord = record;
                    }
                    Ext.Viewport.EmptyView.setRecord(record);
                    this.redirectTo('redirec/parkAdvInfoView');
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('parkAdvInfoId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "homeId") {
                        Ext.getCmp('parkAdvInfoId').getStore().loadPage(1);
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('parkAdvInfoId').getStore().setData(null);
                            }
                        }
                    }, this);
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                }
            },

            productType: {
                itemsingletap: function (list, index, target, record, e) {
                    tempParams = { 'categoryId': record.data.id, 'categoryName': record.data.name };
                    leftCategoryId = record.data.id;
                    categoryName = record.data.name;
                    rightCategoryId = "";
                    if (record.data.name == "全部") {
                        dict.add("categoryId", "");
                        searchBrwName = "全部商品";
                        this.redirectTo('redirec/searchResultBrw');
                    }
                    else {
                        this.redirectTo('redirec/productTypeDetail');
                    }
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('productTypeId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('productType', "productTypeAll");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('productTypeId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            productTypeDetail: {
                show: function (newActiveItem, obj, eOpts) {
                    if (categoryName) {
                        globalBar.setTitle(categoryName);
                    }
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (oldActiveItem.id !== "productTypeId") {
                        return;
                    }
                    var leftCategoryStore = Ext.create("Ext.data.Store", {
                        model: "ChuangCai.model.shop.Category",
                        pageSize: 100,
                        proxy: {
                            type: "ajax",
                            url: util.getMobileSite() + 'Shop/GetProductTypeTwo.ashx?categoryId=' + leftCategoryId,
                            pageParam: 'currentPage', //当前页码  
                            limitParam: 'pageSize',//每页条数
                            reader: {
                                type: "json",
                                rootProperty: 'result',
                                totalProperty: 'totalCounts'
                            }
                        },
                        autoLoad: true
                    });

                    //一级分类
                    this.productCategory_one = new Ext.Panel({
                        layout: "hbox",
                        width: (document.body.clientWidth) * 2 / 5,
                        style: "padding:0px;",
                        left: 0,
                        height: (document.body.clientHeight - 200),
                        items: [{
                            xtype: "panel",
                            layout: "hbox",
                            width: "100%",
                            items: [{
                                xtype: "list",
                                id: "productCategoryOne",
                                width: (document.body.clientWidth) * 2 / 5,
                                //style: "background-color:#eeeeee",
                                store: leftCategoryStore,
                                height: (document.body.clientHeight - 45),
                                pressedCls: "personalCeter-pressing",
                                itemTpl: ['<div id="Category_{id}" style="color: black; font-size: 14px; ">',
                                            '<table style="width: 70%;margin-left:10px">',
                                            '<tr><td  style="width: 100%">{name}</td>',
                                            "</table></div>"]
                            }]
                        }]
                    });
                    //二级分类
                    var rightCategoryStore = Ext.create("Ext.data.Store", {
                        model: "ChuangCai.model.shop.Category",
                        pageSize: 100,
                        proxy: {
                            type: "ajax",
                            url: util.getMobileSite() + 'Shop/GetProductTypeThree.ashx',
                            pageParam: 'currentPage', //当前页码  
                            limitParam: 'pageSize',//每页条数
                            reader: {
                                type: "json",
                                rootProperty: 'result',
                                totalProperty: 'totalCounts'
                            }
                        },
                        autoLoad: false
                    });
                    this.productCategory_two = new Ext.Panel({
                        width: (document.body.clientWidth) * 3 / 5 - 20,
                        style: "box-shadow: #ffffff 0 0.2em 0.6em;padding:0px;background-color: #ffffff;",
                        //hidden: true,tempParams = { 'searchKeyWord': searchKeyWord };
                        masked: false,
                        left: (document.body.clientWidth) * 2 / 5 + 20,
                        height: (document.body.clientHeight - 200),
                        items: [{
                            xtype: "panel",
                            layout: "hbox",
                            width: "100%",
                            items: [{
                                xtype: "list",
                                id: "productCategoryTwo",
                                width: (document.body.clientWidth) * 3 / 5 - 20,
                                style: "background-color:#fff",
                                store: rightCategoryStore,
                                height: (document.body.clientHeight - 45),
                                pressedCls: "personalCeter-pressing",
                                itemTpl: ['<div id="Category_{id}" style="color: black; font-size: 14px; ">',
                                        '<table style="width: 90%;margin-left:10px">',
                                        '<tr><td  style="width: 100%">{name}</td>',
                                        "</table></div>"]
                            }]
                        }]
                    });


                    Ext.getCmp("productTypeDetailId").add(this.productCategory_one);
                    Ext.getCmp("productTypeDetailId").add(this.productCategory_two);
                    if (rightCategoryId) {
                        rightCategoryStore._proxy._url = util.getMobileSite() + 'Shop/GetProductTypeThree.ashx?categoryId=' + rightCategoryId;
                        rightCategoryStore.load();
                    }
                    loadItemEl = null;
                    var _this = this;
                    Ext.getCmp("productCategoryOne").addListener("itemtap",
                        function (dataView, index, target, record) {
                            if (loadItemEl) {
                                loadItemEl.removeCls('setProductCategoryOne');
                            }
                            rightCategoryId = record.data.id;

                            if (record.data.id == "0") {
                                dict.add("categoryId", leftCategoryId);
                            }
                            else {
                                dict.add("categoryId", record.data.id);
                            }
                            searchBrwName = record.data.name;
                            var el = Ext.get(Ext.get("Category_" + rightCategoryId).dom.parentNode.parentNode.id);
                            var hasClass = el.hasCls('setProductCategoryOne');
                            if (hasClass) {
                                el.removeCls('setProductCategoryOne');
                                loadItemEl = null;
                            } else {
                                el.addCls('setProductCategoryOne');
                                loadItemEl = el;
                            }
                            if (rightCategoryId) {
                                if (rightCategoryId == "0") {
                                    _this.redirectTo('redirec/searchResultBrw');
                                    return;
                                }
                                else {
                                    rightCategoryStore._proxy._url = util.getMobileSite() + 'Shop/GetProductTypeThree.ashx?categoryId=' + rightCategoryId;
                                }
                            }
                            rightCategoryStore.load(function (records, operation, success) {
                                if (success) {
                                    if (records.length == 0) {
                                        _this.redirectTo('redirec/searchResultBrw');
                                    }
                                    else {

                                    }
                                }
                            }, this);

                            //bar.setTitle(record.data.typename);//更改标题
                            ////util.showMessage(record.data.id,true);
                            //var getProductType = record.data.id;//右tap页状态筛选
                            //store = Ext.getCmp('productListBrwId').getStore();
                            //var proxy = store.getProxy();
                            //proxy.setExtraParam('type', getProductType);
                            ////store.currentPage = 1;
                            //store.load(function (records, operation, success) {
                            //    if (success) {
                            //        if (records[0].data.id == "-1") {
                            //            Ext.getCmp('productListBrwId').getStore().setData(null);
                            //        }
                            //    }
                            //}, this);
                        });
                    Ext.getCmp("productCategoryTwo").addListener("itemtap",
                        function (dataView, index, target, record) {
                            searchBrwName = record.data.name;
                            if (record.data.id != "0") {
                                dict.add("categoryId", record.data.id);
                            }
                            _this.redirectTo('redirec/searchResultBrw');
                        })

                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var bar = obj.getNavigationBar();
                    var el = "";
                    //bar.remove(Ext.getCmp('homeSearchId'));

                }
            },
            searchBrw: {
                itemtap: function (list, index, target, record, e) {
                    var searchKeyWord = record.data.search_keyword;
                    tempParams = { 'searchKeyWord': searchKeyWord };
                    this.redirectTo('redirec/searchResultBrw');
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();

                    store = Ext.getCmp('searchBrwId').getStore();
                    var proxy = store.getProxy();
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('searchBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            searchResultBrw: {
                show: function (newActiveItem, obj, eOpts) {
                    if (searchBrwName) {
                        globalBar.setTitle(searchBrwName);
                    }
                },
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    }
                    Ext.Viewport.EmptyView.setRecord(record);
                    this.redirectTo('redirec/productListView');
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    var categoryId = dict.get("categoryId");
                    if (tempParams.searchKeyWord) {
                        Ext.getCmp('searchResultBrwId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetSearchReasultBrw.ashx?keySearchWord=' + tempParams.searchKeyWord;
                    }
                    else {
                        Ext.getCmp('searchResultBrwId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetSearchReasultBrw.ashx?proCategoryId=' + categoryId;
                    }
                    store = Ext.getCmp('searchResultBrwId').getStore();

                    var proxy = store.getProxy();
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('searchResultBrwId').getStore().setData(null);
                                util.showWarning("无此关键字商品");
                            }
                        }
                    }, this);
                }
            },
            'productListBrw img[itemId=regionSelect]': {
                tap: 'onRegionSelectTap'
            },
            'productListBrw img[itemId=categorySelect]': {
                tap: 'onCategorySelect'
            },
            'productListBrw img[itemId=sortingSelect]': {
                tap: 'onSortingSelect'
            },

            'productListBrw img[itemId=productSearch]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("productSearchPanel").setHidden(false);
                }
            },
            'productListBrw img[itemId=cancel_SearchByName_box]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("productSearchPanel").setHidden(true);
                    store = Ext.getCmp('productListBrwId').getStore();
                    store.clearFilter();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('value', "");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "-1") {
                                Ext.getCmp('productListBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'productListBrw textfield[itemId=SearchByName]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },



            //新添加内容
            goodsType: {
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    }
                    if (util.getUserId() == null) {
                        productRecord = record;
                    }
                    Ext.Viewport.EmptyView.setRecord(record);
                    //   this.redirectTo('redirec/shopHomeNewsView');
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('goodsTypeId').getStore();
                    var proxy = store.getProxy();
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('goodsTypeId').getStore().setData(null);
                            }
                        } else {
                            //Ext.Msg.alert("shibaiq");
                            console.log("shibai");
                        }
                    }, this);
                },
            },


            //findCarPlace: {
            //    itemtap: function (list, index, target, record, e) {
            //    },
            //    activate: function (newActiveItem, obj, oldActiveItem, eOpts) {

            //        console.log("122");
            //        //var panel = Ext.create('Ext.Panel', {
            //        //    id: 'map',
            //        //    margin: '-63 0 0 -18',
            //        //    height: document.body.clientHeight,
            //        //    width: document.body.clientWidth
            //        //});
            //        //Ext.getCmp('findCarPlaceId').add(panel);

            //        var map = new BMap.Map('map');//指向map的容器
            //        map.centerAndZoom(new BMap.Point(121.491, 31.233), 15);
            //        window.setTimeout(function () {
            //            map.panTo(new BMap.Point(116.409, 39.918));
            //        }, 1000);


            //        //  var map = new BMap.Map("map");
            //        //  map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
            //    },
            //    deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
            //     //   Ext.getCmp('findCarPlaceId').remove(Ext.getCmp('map'));
            //        this.redirectTo('redirec/shopHome');
            //        console.log("222");
            //    }
            //},
            shopHomeNews: {
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    }
                    if (util.getUserId() == null) {
                        productRecord = record;
                    }
                    Ext.Viewport.EmptyView.setRecord(record);
                    this.redirectTo('redirec/shopHomeNewsView');
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('shopHomeNewsId').getStore();
                    var proxy = store.getProxy();
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('shopHomeNewsId').getStore().setData(null);
                            }
                        }
                    }, this);
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                }
            },
            //------------------------------------------------------add by wind
            'tradeTest img[itemId=regionSelect]': {
                tap: 'onRegionSelectTradeTap'
            },
            'tradeTest img[itemId=categorySelect]': {
                tap: 'onCategorySelectTradeTap'
            },
            'tradeTest img[itemId=sortingSelect]': {
                tap: 'onSortingSelectTradeTap'
            },
            'tradeTest img[itemId=productSearch]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("productSearchPanel").setHidden(false);
                }
            },
            'tradeTest img[itemId=cancel_SearchByName_box]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("productSearchPanel").setHidden(true);
                    store = Ext.getCmp('tradeTestId').getStore();
                    store.clearFilter();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('value', "");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "0") {
                                Ext.getCmp('tradeTestId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'tradeTest textfield[itemId=SearchByNameTrade]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            tradeTest: {
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    }
                    if (util.getUserId() == null) {
                        productRecord = record;
                    }
                    Ext.Viewport.EmptyView.setRecord(record);
                    //util.showMessage("正在加载...", true);
                    this.redirectTo('redirec/productListView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    //util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('tradeTestId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "homeId") {
                        Ext.getCmp('tradeTestId').getStore().loadPage(1);
                    }

                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('tradeTestId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('news_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('news_search_box'));
                    }

                    //切换视图
                    bar.add({
                        id: 'viewId',
                        xtype: 'img',
                        right: 0,
                        top: 2,
                        centered: true,
                        src: 'resources/images/system/view_2.png',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        listeners: {
                            tap: function () {
                                var imgSrc = Ext.getCmp('viewId').getSrc();
                                //util.showMessage("active success", true);
                                var templateView_1;
                                var templateView_2;
                                templateView_1 = new Ext.XTemplate(
                                  '<div class="productHome-box clear" fire="">',
                                  '<div class="productHome-rest clear">',
                                  '<div class="productHome-rest-thumb"><img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="80" height="80" alt=""></div>',
                                  '<div class="productHome-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px"><h2>{productname}</h2><span class="productHome-price">￥{current_price}&nbsp;&nbsp;&nbsp;&nbsp;<u class="marketprice">￥{startprice}</u></span></br><p><b>{visticounts}</b>人关注&nbsp;&nbsp;运费:<b class="homeProList-jp">￥5</b></br>{regionid}</p></div>',
                                  "</div>",
                                  "</div>");
                                templateView_2 = new Ext.XTemplate(
                                    '<div class="grid">',
                                    '<div class="grid-all">',
                                        '<div class="imgholder">', '<img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="' + (document.body.clientWidth) / 2 + '" height="180" alt="">', '</div>',
                                        '<strong>&nbsp&nbsp{productname}</strong>',
                                        '<div class="grid-line"></div>',
                                        '<div class="grid-price"><p><span>&nbsp&nbsp￥{current_price}</span>&nbsp&nbsp&nbsp&nbsp<u>￥{startprice}</u></p></div>',
                                        //'<div class="meta">by Andrea Andrade&nbsp</div>',
                                    '</div>',
                                    '</div>');
                                if (imgSrc == "resources/images/system/view_1.png") {
                                    Ext.getCmp('viewId').setSrc('resources/images/system/view_2.png');
                                    Ext.getCmp('tradeTestId').setItemTpl(templateView_1);
                                }
                                else {
                                    Ext.getCmp('viewId').setSrc('resources/images/system/view_1.png');
                                    Ext.getCmp('tradeTestId').setItemTpl(templateView_2);
                                }
                                //Ext.getCmp('productListBrwId').setItemTpl(templateView_1);
                                Ext.getCmp('tradeTestId').refresh();
                            }
                        }
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('viewId'));
                }
            },

            //mapLocation: {
            //    itemtap: function (list, index, target, record, e) {
            //    },
            //    activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
            //        var me = this;
            //        CSS.addStyleSheet('news');
            //        var bar = obj.getNavigationBar();
            //        store = Ext.getCmp('mapLocationId').getStore();
            //        var proxy = store.getProxy();
            //        store.load(function (records, operation, success) {
            //            if (success) {
            //                if (records.length == 0) {
            //                    Ext.getCmp('mapLocationId').getStore().setData(null);
            //                }
            //            }
            //        }, this);
            //    },
            //    deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
            //    }
            //},
            //------------------------------------------------------add by wind

            productListBrw: {
                show: function (newActiveItem, obj, eOpts) {
                    if (dict.get("proCategoryType") == "All") {
                        globalBar.setTitle("更多拍品");
                    }
                    //dict.add("proCategoryType", 'Goods');
                    if (dict.get("proCategoryType") == "Goods") {
                        globalBar.setTitle("大宗货物");
                    }
                    if (dict.get("proCategoryType") == "Car") {
                        globalBar.setTitle("受损车辆");
                    }
                },
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    }
                    if (util.getUserId() == null) {
                        productRecord = record;
                    }
                    Ext.Viewport.EmptyView.setRecord(record);
                    //util.showMessage("正在加载...", true);
                    this.redirectTo('redirec/productListView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    //util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (dict.get("proCategoryType") == "Goods") {
                        Ext.getCmp('productListBrwId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetProductsBrw.ashx?proCategoryType=Goods';
                    }
                    if (dict.get("proCategoryType") == "Car") {
                        Ext.getCmp('productListBrwId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetProductsBrw.ashx?proCategoryType=Car';
                    }
                    if (dict.get("proCategoryType") == "All") {
                        Ext.getCmp('productListBrwId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetProductsBrw.ashx?proCategoryType=All';
                    }
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('productListBrwId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "homeId") {
                        Ext.getCmp('productListBrwId').getStore().loadPage(1);
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('productListBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('news_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('news_search_box'));
                    }
                    //弹出商品分类
                    bar.add({
                        id: 'categoryId',
                        xtype: 'img',
                        right: 30,
                        src: 'resources/images/system/list.png',
                        width: 45,
                        height: 45,
                        centered: true,
                        hidden: true,
                        align: 'right',
                        ui: 'decline',
                        listeners: {
                            tap: function () {
                                if (!this.RMenusCategoryP) {
                                    var productCategoryStore = Ext.create("ChuangCai.store.shop.ProductCategory");
                                    this.RMenusCategoryP = new Ext.Panel({
                                        width: "150px",
                                        modal: true,
                                        hideOnMaskTap: true,
                                        style: "padding:0px;",
                                        left: 0,
                                        top: "45px",
                                        showAnimation: {
                                            type: "slide",
                                            direction: "right"
                                        },
                                        hideAnimation: {
                                            type: "slideOut",
                                            direction: "left"
                                        },
                                        height: (document.body.clientHeight - 45),
                                        items: [{
                                            xtype: "panel",
                                            layout: "hbox",
                                            width: "100%",
                                            items: [{
                                                xtype: "list",
                                                id: "RMenusCategoryP",
                                                style: "background: white",
                                                width: "150px",
                                                store: productCategoryStore,
                                                height: (document.body.clientHeight - 45),
                                                itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{typename}</td>', "</table></div>"]
                                            },
                                            {
                                                xtype: "checkboxfield",
                                                id: "RMenusCRId",
                                                hidden: true,
                                                value: "0"
                                            }]
                                        }]
                                    });
                                    productCategoryStore.load();
                                    // Ext.getCmp("RMenusCRId").setValue(RestaurantId);
                                    Ext.Viewport.add(this.RMenusCategoryP);
                                    //Ext.getCmp("RMenusCategoryP").getStore().setProxy({
                                    //    extraParams: {
                                    //        rid: RestaurantId,
                                    //        type: 0,
                                    //        category: 0
                                    //    }
                                    //});
                                    //Ext.getCmp("RMenusCategoryP").getStore().loadPage(1);
                                    var _this = this;
                                    Ext.getCmp("RMenusCategoryP").addListener("itemtap",
                                        function (dataView, index, target, record) {
                                            _this.RMenusCategoryP.hide();
                                            bar.setTitle(record.data.typename);//更改标题
                                            //util.showMessage(record.data.id,true);
                                            var getProductType = record.data.id;//右tap页状态筛选
                                            store = Ext.getCmp('productListBrwId').getStore();
                                            var proxy = store.getProxy();
                                            proxy.setExtraParam('type', getProductType, 'proCategoryId', tempParams.proCategoryId);
                                            //store.currentPage = 1;
                                            store.load(function (records, operation, success) {
                                                if (success) {
                                                    if (records[0].data.id == "-1") {
                                                        Ext.getCmp('productListBrwId').getStore().setData(null);
                                                    }
                                                }
                                            }, this);
                                            //Ext.getCmp("taskBrwId").getStore().getProxy().setExtraParam('period', record.data.value);
                                            //Ext.getCmp("taskBrwId").getStore().removeAll();
                                            //Ext.getCmp("taskBrwId").getStore().loadPage(1);
                                            //url: util.getMobileSite() + 'GetNewsBrw.ashx',
                                            //extraParams: {
                                            //    rid: RestaurantId,
                                            //    category: record.internalId,
                                            //    type: record.data.type
                                            //}
                                            //});
                                            //Ext.getCmp("RMenusList").getStore().removeAll();
                                            //Ext.getCmp("RMenusList").getStore().loadPage(1, {
                                            //    callback: function (records, operation, success) {
                                            //        console.log(records);
                                            //        console.log(records.length);
                                            //        if (records.length <= 0) {
                                            //            Ext.getCmp("RMenusList").setHidden(true);
                                            //            Ext.getCmp("RMenusListHidden").setHidden(false)
                                            //        } else {
                                            //            Ext.getCmp("RMenusList").setHidden(false);
                                            //            Ext.getCmp("RMenusListHidden").setHidden(true)
                                            //        }
                                            //    },
                                            //    scope: this
                                            //})
                                        })
                                } else {
                                    if (this.RMenusCategoryP.getHidden()) {
                                        //if (Ext.getCmp("RMenusCRId").getValue() != RestaurantId) {
                                        //    var _this = this;
                                        //    //Ext.getCmp("RMenusCategoryP").getStore().setProxy({
                                        //    //    extraParams: {
                                        //    //        rid: RestaurantId,
                                        //    //        type: 0,
                                        //    //        category: 0
                                        //    //    }
                                        //    //});
                                        //    //Ext.getCmp("RMenusCategoryP").getStore().loadPage(1);
                                        //    this.RMenusCategoryP.show()
                                        //} else {
                                        //    this.RMenusCategoryP.show()
                                        //}
                                        this.RMenusCategoryP.show()
                                    } else {
                                        this.RMenusCategoryP.hide()
                                    }
                                }
                            }
                        }
                    });
                    //切换视图
                    bar.add({
                        id: 'viewId',
                        xtype: 'img',
                        right: 0,
                        top: 2,
                        centered: true,
                        src: 'resources/images/system/view_2.png',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        listeners: {
                            tap: function () {
                                var imgSrc = Ext.getCmp('viewId').getSrc();
                                //util.showMessage("active success", true);
                                var templateView_1;
                                var templateView_2;
                                templateView_1 = new Ext.XTemplate(
                                     '<div class="productHome-box clear" fire="">',
                                      '<div class="productHome-rest clear">',
                                      '<div class="productHome-rest-thumb"><img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="80" height="80" alt=""></div>',
                                      '<div class="productHome-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px"><h2>{productname}</h2><span class="productHome-price">￥{current_price}&nbsp;&nbsp;&nbsp;&nbsp;<u class="marketprice">￥{startprice}</u></span></br><p><b>{visticounts}</b>人关注&nbsp;&nbsp;运费:<b class="homeProList-jp">￥5</b></br>{regionid}</p></div>',
                                      "</div>",
                                      "</div>");
                                templateView_2 = new Ext.XTemplate(
                                    '<div class="grid">',
                                    '<div class="grid-all">',
                                        '<div class="imgholder">', '<img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="' + (document.body.clientWidth) / 2 + '" height="180" alt="">', '</div>',
                                        '<strong>&nbsp&nbsp{productname}</strong>',
                                        '<div class="grid-line"></div>',
                                        '<div class="grid-price"><p><span>&nbsp&nbsp￥{current_price}</span>&nbsp&nbsp&nbsp&nbsp<u>￥{startprice}</u></p></div>',
                                        //'<div class="meta">by Andrea Andrade&nbsp</div>',
                                    '</div>',
                                    '</div>');
                                if (imgSrc == "resources/images/system/view_1.png") {
                                    Ext.getCmp('viewId').setSrc('resources/images/system/view_2.png');
                                    Ext.getCmp('productListBrwId').setItemTpl(templateView_1);
                                }
                                else {
                                    Ext.getCmp('viewId').setSrc('resources/images/system/view_1.png');
                                    Ext.getCmp('productListBrwId').setItemTpl(templateView_2);
                                }
                                //Ext.getCmp('productListBrwId').setItemTpl(templateView_1);
                                Ext.getCmp('productListBrwId').refresh();
                            }
                        }
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('categoryId'));
                    bar.remove(Ext.getCmp('viewId'));
                    tempParams = { 'loadTypeId': "" }
                    tempParams = { 'loadProvinceId': "" };
                }
            },
            'onlineAuctionPro img[itemId=regionSelect]': {
                tap: 'onRegionSelectOnlineTap'
            },
            'onlineAuctionPro img[itemId=categorySelect]': {
                tap: 'onCategoryOnlineSelect'
            },
            'onlineAuctionPro img[itemId=sortingSelect]': {
                tap: 'onSortingOnlineSelect'
            },
            'onlineAuctionPro img[itemId=productSearch]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("productSearchPanel").setHidden(false);
                }
            },
            'onlineAuctionPro img[itemId=cancel_SearchByName_box]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("productSearchPanel").setHidden(true);
                    store = Ext.getCmp('onlineAuctionProId').getStore();
                    store.clearFilter();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('value', "");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "0") {
                                Ext.getCmp('onlineAuctionProId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'onlineAuctionPro textfield[itemId=SearchByNameOnline]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            onlineAuctionPro: {
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    }
                    if (util.getUserId() == null) {
                        productRecord = record;
                    }
                    Ext.Viewport.EmptyView.setRecord(record);
                    //util.showMessage("正在加载...", true);
                    this.redirectTo('redirec/productListView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    //util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('onlineAuctionProId').getStore();
                    var proxy = store.getProxy();
                    if (oldActiveItem.id == "homeId") {
                        Ext.getCmp('onlineAuctionProId').getStore().loadPage(1);
                    }

                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('onlineAuctionProId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('news_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('news_search_box'));
                    }

                    //切换视图
                    bar.add({
                        id: 'viewId',
                        xtype: 'img',
                        right: 0,
                        top: 2,
                        centered: true,
                        src: 'resources/images/system/view_2.png',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        listeners: {
                            tap: function () {
                                var imgSrc = Ext.getCmp('viewId').getSrc();
                                //util.showMessage("active success", true);
                                var templateView_1;
                                var templateView_2;
                                templateView_1 = new Ext.XTemplate(
                                  '<div class="productHome-box clear" fire="">',
                                  '<div class="productHome-rest clear">',
                                  '<div class="productHome-rest-thumb"><img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="80" height="80" alt=""></div>',
                                  '<div class="productHome-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px"><h2>{productname}</h2><span class="productHome-price">￥{current_price}&nbsp;&nbsp;&nbsp;&nbsp;<u class="marketprice">￥{startprice}</u></span></br><p><b>{visticounts}</b>人关注&nbsp;&nbsp;运费:<b class="homeProList-jp">￥5</b></br>{regionid}</p></div>',
                                  "</div>",
                                  "</div>");
                                templateView_2 = new Ext.XTemplate(
                                    '<div class="grid">',
                                    '<div class="grid-all">',
                                        '<div class="imgholder">', '<img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="' + (document.body.clientWidth) / 2 + '" height="180" alt="">', '</div>',
                                        '<strong>&nbsp&nbsp{productname}</strong>',
                                        '<div class="grid-line"></div>',
                                        '<div class="grid-price"><p><span>&nbsp&nbsp￥{current_price}</span>&nbsp&nbsp&nbsp&nbsp<u>￥{startprice}</u></p></div>',
                                        //'<div class="meta">by Andrea Andrade&nbsp</div>',
                                    '</div>',
                                    '</div>');
                                if (imgSrc == "resources/images/system/view_1.png") {
                                    Ext.getCmp('viewId').setSrc('resources/images/system/view_2.png');
                                    Ext.getCmp('onlineAuctionProId').setItemTpl(templateView_1);
                                }
                                else {
                                    Ext.getCmp('viewId').setSrc('resources/images/system/view_1.png');
                                    Ext.getCmp('onlineAuctionProId').setItemTpl(templateView_2);
                                }
                                //Ext.getCmp('productListBrwId').setItemTpl(templateView_1);
                                Ext.getCmp('onlineAuctionProId').refresh();
                            }
                        }
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('viewId'));
                }
            },
            'productsDisplay img[itemId=regionSelect]': {
                tap: 'onRegionSelectDisplayTap'
            },
            'productsDisplay img[itemId=categorySelect]': {
                tap: 'onCategoryDisplaySelect'
            },
            'productsDisplay img[itemId=sortingSelect]': {
                tap: 'onSortingDisplaySelect'
            },
            'productsDisplay img[itemId=productSearch]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("productSearchPanel").setHidden(false);
                }
            },
            'productsDisplay img[itemId=cancel_SearchByName_box]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("productSearchPanel").setHidden(true);
                    store = Ext.getCmp('productsDisplayId').getStore();
                    store.clearFilter();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('value', "");
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "0") {
                                Ext.getCmp('productsDisplayId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            'productsDisplay textfield[itemId=SearchByNameDisplay]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            productsDisplay: {
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    }
                    if (util.getUserId() == null) {
                        productRecord = record;
                    }
                    Ext.Viewport.EmptyView.setRecord(record);
                    //util.showMessage("正在加载...", true);
                    this.redirectTo('redirec/productListView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    //util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();

                    store = Ext.getCmp('productsDisplayId').getStore();
                    var proxy = store.getProxy();

                    if (oldActiveItem.id == "homeId") {
                        Ext.getCmp('productsDisplayId').getStore().loadPage(1);
                    }

                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('productsDisplayId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('news_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('news_search_box'));
                    }

                    //切换视图
                    bar.add({
                        id: 'viewId',
                        xtype: 'img',
                        right: 0,
                        top: 2,
                        centered: true,
                        src: 'resources/images/system/view_2.png',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        listeners: {
                            tap: function () {
                                var imgSrc = Ext.getCmp('viewId').getSrc();
                                //util.showMessage("active success", true);
                                var templateView_1;
                                var templateView_2;
                                templateView_1 = new Ext.XTemplate(
                                     '<div class="productHome-box clear" fire="">',
                                      '<div class="productHome-rest clear">',
                                      '<div class="productHome-rest-thumb"><img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="80" height="80" alt=""></div>',
                                      '<div class="productHome-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px"><h2>{productname}</h2><span class="productHome-price">￥{current_price}&nbsp;&nbsp;&nbsp;&nbsp;<u class="marketprice">￥{startprice}</u></span></br><p><b>{visticounts}</b>人关注&nbsp;&nbsp;运费:<b class="homeProList-jp">￥5</b></br>{regionid}</p></div>',
                                      "</div>",
                                      "</div>");
                                templateView_2 = new Ext.XTemplate(
                                    '<div class="grid">',
                                    '<div class="grid-all">',
                                        '<div class="imgholder">', '<img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="' + (document.body.clientWidth) / 2 + '" height="180" alt="">', '</div>',
                                        '<strong>&nbsp&nbsp{productname}</strong>',
                                        '<div class="grid-line"></div>',
                                        '<div class="grid-price"><p><span>&nbsp&nbsp￥{current_price}</span>&nbsp&nbsp&nbsp&nbsp<u>￥{startprice}</u></p></div>',
                                    '</div>',
                                    '</div>');
                                if (imgSrc == "resources/images/system/view_1.png") {
                                    Ext.getCmp('viewId').setSrc('resources/images/system/view_2.png');
                                    Ext.getCmp('productsDisplayId').setItemTpl(templateView_1);
                                }
                                else {
                                    Ext.getCmp('viewId').setSrc('resources/images/system/view_1.png');
                                    Ext.getCmp('productsDisplayId').setItemTpl(templateView_2);
                                }
                                //Ext.getCmp('productListBrwId').setItemTpl(templateView_1);
                                Ext.getCmp('productsDisplayId').refresh();
                            }
                        }
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('viewId'));
                }
            },
            cMSContentBrw: {
                show: function (newActiveItem, obj, eOpts) {
                    if (tempParams.contentClassID == 52) {
                        globalBar.setTitle("竞价规则");
                    }
                },
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.CMSContentView) == "undefined") {
                        Ext.Viewport.CMSContentView = Ext.create('ChuangCai.view.shop.CMSContentView');
                    }
                    Ext.Viewport.CMSContentView.setRecord(record);
                    this.redirectTo('redirec/cMSContentView');
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('cMSContentBrwId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetCMSContent.ashx?contentClassID=' + tempParams.contentClassID;
                    //if (tempParams.contentClassID == "23") {
                    //    Ext.getCmp('cMSContentBrwId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetCMSContent.ashx?contentClassID=23';
                    //}
                    //if (tempParams.contentClassID == "52") {
                    //    Ext.getCmp('cMSContentBrwId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetCMSContent.ashx?contentClassID=52';
                    //}

                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();

                    store = Ext.getCmp('cMSContentBrwId').getStore();
                    var proxy = store.getProxy();
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('cMSContentBrwId').getStore().setData(null);
                            }
                        }
                    }, this);
                },
            },
            cMSContentView: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    var aRecord = Ext.Viewport.CMSContentView.getRecord();

                    if (aRecord == null) {
                        util.showMessage1('空', true);
                    }
                    else {
                        Ext.Ajax.request({
                            url: util.getMobileSite() + "Shop/GetCMSContentView.ashx",
                            params: {
                                contentId: aRecord.data.id
                            },
                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                            success: function (result, context) {
                                Ext.getCmp('cMSContentViewId').setHtml('<div class="newsTitle">' + aRecord.data.title + '</div><div class="top-panel">' + result.responseText + '</div>');
                                Ext.getCmp('cMSContentViewId').setScrollable(true);
                            },
                            failure: function (result, context) {
                                var msg = result.responseText;
                                util.showMessage(msg, true);
                            },
                            method: "POST"
                        });
                    }
                }
            },
            productListView: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    var aRecord = Ext.Viewport.EmptyView.getRecord();
                    if (dict.get("productId")) {
                        var productId = dict.get("productId");
                    }
                    else {
                        var productId = aRecord.data.id;
                    }
                    if (aRecord == null) {
                        util.showMessage1('空', true);
                    }
                    else {
                        if (Ext.getCmp("ProductImgView").items.length == 1) {
                            Ext.Ajax.request({
                                url: util.getMobileSite() + "Shop/GetProductImageDetail.ashx",
                                params: {
                                    productId: productId, displayCount: 5
                                },
                                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                success: function (result, context) {
                                    var _this = this;
                                    var newCard;
                                    var temp = Ext.decode(result.responseText);
                                    for (var i = 0; i < temp.length; i++) {
                                        newCard = new Ext.Panel({
                                            html: '<div id="adv" style="position:relative; width:100%; height:'
                                              + parseInt(document.body.clientWidth * 1)
                                              + "px; background-image:url(" + config.webSite + "Photos/Product/" + temp[i].ThumbnailUrl4 + "); background-size: 100% "
                                              + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                                        });
                                        Ext.getCmp("ProductImgView").add(newCard);
                                    }
                                    Ext.getCmp("ProductImgView").setActiveItem(0, "slide");
                                },
                                failure: function (result, context) {
                                    var msg = result.responseText;
                                    util.showMessage(msg, true);
                                },
                                method: "POST"
                            });
                        }
                        //添加进入大图事件
                        Ext.getCmp("ProductImgView").addListener({
                            tap: {
                                fn: function () {
                                    me.redirectTo('redirec/imageViewDetail');
                                },
                                element: 'element'
                            },
                        });
                        Ext.Ajax.request({
                            url: util.getMobileSite() + "Shop/GetProductsView.ashx",
                            params: {
                                productId: productId, userId: util.getUserId()
                            },
                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                            success: function (result, context) {
                                var json = result.responseText;
                                json = Ext.decode(json);
                                Ext.getCmp('productName').setHtml("<p style='padding-left:10px;padding-top:12px;font-size: 14px;color: #999;'><img style='width:15px;height:15px;padding-top:2px;' src='" + config.webSite + "Upload/Mobile/shop/main/collection.png'/>&nbsp&nbsp&nbsp&nbsp" + aRecord.data.productname + "</p>");
                                Ext.getCmp('productPrice').setHtml("￥" + aRecord.data.current_price + "<div style='float:left;font-size:14px;color:#4169E1;padding-left:5px;padding-right:20px;'>当前价:</div></br>");
                                Ext.getCmp('focusOnNum').setHtml("<p style='padding-left:10px;font-size: 12px;color: #999;'>" + aRecord.data.visticounts + "次关注</p>");
                                Ext.getCmp('startPrice').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>保留价:&nbsp&nbsp￥" + aRecord.data.startprice + "</p>");
                                Ext.getCmp('evaluatePrice').setHtml("<p style='font-size: 14px;color: #999;'>评估价:&nbsp&nbsp￥" + aRecord.data.evaluateprice + "</p>");
                                Ext.getCmp('depositPrice').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>保证金:&nbsp&nbsp￥" + aRecord.data.deposit + "</p>");
                                Ext.getCmp('increasePrice').setHtml("<p style='font-size: 14px;color: #999;'>加价幅度:&nbsp&nbsp￥" + aRecord.data.increaseprice + "</p>");
                                Ext.getCmp('subjectMatterAddress').setHtml("<p style='padding-top:3px;font-size: 14px;color: #999;'>标的物所在地:&nbsp&nbsp" + json[0]['provinceName'] + "&nbsp;" + json[0]['cityName'] + "&nbsp;" + json[0]['countyName'] + "</p>");
                                Ext.getCmp('amount').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>货物数量:&nbsp&nbsp" + json[0]['quantity'] + "</p>");
                                Ext.getCmp('weight').setHtml("<p style='font-size: 14px;color: #999;'>货物重量:&nbsp&nbsp" + json[0]['weight'] + "</p>");
                                Ext.getCmp('address').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>产地:&nbsp&nbsp" + json[0]['address'] + "</p>");
                                Ext.getCmp('factory').setHtml("<p style='font-size: 14px;color: #999;'>货物生产商:&nbsp&nbsp" + json[0]['factory'] + "</p>");
                                Ext.getCmp('marketPrice').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>货物的原始价值（单价）:&nbsp&nbsp" + json[0]['marketPrice'] + "</p>");
                                Ext.getCmp('street').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>目前货物存放地:&nbsp&nbsp" + json[0]['street'] + "</p>");
                                Ext.getCmp('loadProductId').setValue(productId);
                                Ext.getCmp('loadCollectionId').setValue(json[0]['collectionFlag']);
                                Ext.getCmp('startDateTime').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>开始时间:&nbsp&nbsp" + json[0]['beginTime'] + "</p>");
                                Ext.getCmp('endDateTime').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>结束时间:&nbsp&nbsp" + json[0]['endTime'] + "</p>");
                                dict.add("auctionClass", json[0]['auctionClass']);
                                if (json[0]['auctionClass'] == "Flash") {
                                    Ext.getCmp('auctionClass').setHtml("<p style='padding-left:10px;font-size: 14px;color: #999;'>竞价类型：闪拍</p>");
                                }
                                if (json[0]['collectionFlag'] == "Y") {
                                    Ext.getCmp('collectionProduct').setHtml("<img style='width:20px;height:20px;' src='resources/images/already_collected.png'/><p style='text-align:center;font-size: 12px;color: #999;'>已收藏</p>");
                                }
                                if (!json[0]['beginTime'] == "") {
                                    Ext.getCmp('beginTimeHtml').setHidden(false);
                                    dict.add("viewDisableFlag", "N");
                                    Ext.getCmp('countdownTime').stop();
                                    Ext.getCmp('countdownTime').updateValue(json[0]['beginTime']);
                                }
                                var viewDisableFlag = Ext.getCmp('countdownTime')._html;
                                if (viewDisableFlag == "已结束") {
                                    dict.add("viewDisableFlag", "NNNN");
                                    Ext.getCmp('beginTimeHtml').setHidden(true);
                                    Ext.getCmp('countdownTime').stop();
                                    Ext.getCmp('countdownTime').updateValue(json[0]['endTime']);
                                    //Ext.getCmp('submitEnsureMon').setDisabled(true);
                                    //Ext.getCmp('submitOfferRecord').setDisabled(true);
                                }
                                var viewDisableFlag = Ext.getCmp('countdownTime')._html;
                                if (viewDisableFlag == "已结束") {
                                    dict.add("viewDisableFlag", "Y");
                                }

                                dict.add("lat", json[0]["lat"]);
                                dict.add("lon", json[0]["lon"]);
                                dict.add("videoUrl", json[0]["videoUrl"]);
                                temParams = { "current_price": aRecord.data.current_price, "increaseprice": aRecord.data.increaseprice, "productId": aRecord.data.id }

                                var offerRecordCount = json[0]['offerRecordCount'];
                                var offerDepositFlag = json[0]['offerDepositFlag'];
                                if (offerRecordCount > 0) {
                                    Ext.getCmp('offerRecord').setHtml("<p style='font-size: 14px;color: #999;'>出价记录<span>(" + offerRecordCount + ")</span></p>");
                                }
                                if (offerDepositFlag == "Y") {
                                    Ext.getCmp('submitEnsureMon').setHidden(true);
                                    Ext.getCmp('submitOfferRecord').setHidden(false);
                                }
                                //util.modifyMessage('加载完成！', true, 0.2);
                            },
                            failure: function (result, context) {
                                var msg = result.responseText;
                                util.showMessage(msg, true);
                                //util.modifyMessage('加载完成！', true, 0.2);
                            },
                            method: "POST"
                        });
                        if (dict.get("productEditFlag") == "Y") {
                            bar.add({
                                id: 'viewId',
                                xtype: 'img',
                                right: 0,
                                top: 2,
                                centered: true,
                                //src: 'resources/images/system/editor.png',
                                html: "<p style='color: #ffffff;font-size: 14px; margin-top: 14px;'>编辑</p>",
                                width: 45,
                                height: 45,
                                align: 'right',
                                ui: 'decline',
                                listeners: {
                                    tap: function () {
                                        //var bar = obj.getNavigationBar();
                                        //bar.remove(Ext.getCmp('viewId'));
                                        var getproductPassId = productId;
                                        dict.add("productId", getproductPassId);
                                        tempParams = { 'productPassId': getproductPassId };
                                        me.redirectTo('redirec/addProducts/Y');
                                    }
                                }
                            });
                        }

                        //if (oldActiveItem.id == "addProductsId") {
                        //    bar.add({
                        //        id: 'viewId',
                        //        xtype: 'img',
                        //        right: 0,
                        //        top: 2,
                        //        centered: true,
                        //        src: 'resources/images/system/editor.png',
                        //        width: 45,
                        //        height: 45,
                        //        align: 'right',
                        //        ui: 'decline',
                        //        listeners: {
                        //            tap: function () {
                        //                var bar = obj.getNavigationBar();
                        //                bar.remove(Ext.getCmp('viewId'));
                        //                var getproductPassId = aRecord.data.id;
                        //                tempParams = { 'productPassId': getproductPassId };
                        //                me.redirectTo('redirec/addProducts/Y');
                        //            }
                        //        }
                        //    });
                        //}
                    }

                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    if (Ext.getCmp('viewId')) {
                        bar.remove(Ext.getCmp('viewId'));
                    }
                    if (Ext.getCmp('viewEditId')) {
                        bar.remove(Ext.getCmp('viewEditId'));
                    }
                    productRecord = null;
                }
            },
            imageViewDetail: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var productId;
                    productId = Ext.getCmp('loadProductId').getValue();
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Shop/GetProductImageDetail.ashx",
                        params: {
                            productId: productId, displayCount: 20
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var _this = this;
                            var newCard;
                            var temp = Ext.decode(result.responseText);
                            for (var i = 0; i < temp.length; i++) {
                                newCard = new Ext.Img({
                                    src: config.webSite + "Photos/Product/" + temp[i].ImageUrl
                                });
                                Ext.getCmp("loadImage").add(newCard);
                            }
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                }
            },
            voucherImage: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Shop/GetVoucherImage.ashx",
                        params: {
                            productId: dict.get("voucherImageId"), displayCount: 20, userId: util.getUserId()
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var _this = this;
                            var newCard;
                            var temp = Ext.decode(result.responseText);
                            for (var i = 0; i < temp.length; i++) {
                                newCard = new Ext.Img({
                                    src: config.webSite + "Photos/Proof/" + temp[i].image_url
                                });
                                Ext.getCmp("loadImage").add(newCard);
                            }
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                }
            },
            'productListDetail button[itemId=subjectMatterIntroduceId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("subjectMatterIntroduceId").setCls("detail-tab detail-tab-first detail-tab-active");
                    Ext.getCmp("biddingInstructionsId").setCls("detail-tab");
                    Ext.getCmp("biddingAnnouncementId").setCls("detail-tab");

                    Ext.getCmp("subjectMatterIntroduceContentId").setHidden(false)
                    Ext.getCmp("biddingInstructionsContentId").setHidden(true)
                    Ext.getCmp("biddingAnnouncementContentId").setHidden(true)
                }
            },
            'productListDetail button[itemId=biddingInstructionsId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("subjectMatterIntroduceId").setCls("detail-tab");
                    Ext.getCmp("biddingInstructionsId").setCls("detail-tab detail-tab-first detail-tab-active");
                    Ext.getCmp("biddingAnnouncementId").setCls("detail-tab");
                    var productId;
                    productId = Ext.getCmp('loadProductId').getValue();
                    var html = Ext.getCmp('biddingInstructionsContentId').getHtml();
                    if (html == null) {
                        Ext.Ajax.request({
                            url: util.getMobileSite() + "Shop/GetProductsDetail.ashx?userId=" + util.getUserId(),
                            params: {
                                productId: productId, type: "two"
                            },
                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                            success: function (result, context) {
                                var result = result.responseText;
                                Ext.getCmp('biddingInstructionsContentId').setHtml(result);
                                //Ext.getCmp('biddingInstructionsContentId').setHtml(bidNeedKnow);
                                //Ext.getCmp('biddingAnnouncementContentId').setHtml(bidNotice);
                            },
                            failure: function (result, context) {
                                util.showMessage("网络异常，请重试", true);
                            },
                            method: "POST"
                        });
                    }
                    Ext.getCmp("subjectMatterIntroduceContentId").setHidden(true)
                    Ext.getCmp("biddingInstructionsContentId").setHidden(false)
                    Ext.getCmp("biddingAnnouncementContentId").setHidden(true)
                }
            },
            'productListDetail button[itemId=biddingAnnouncementId]': {
                tap: function (obj, e, eOpts) {
                    Ext.getCmp("subjectMatterIntroduceId").setCls("detail-tab");
                    Ext.getCmp("biddingInstructionsId").setCls("detail-tab");
                    Ext.getCmp("biddingAnnouncementId").setCls("detail-tab detail-tab-first detail-tab-active");

                    var productId;
                    productId = Ext.getCmp('loadProductId').getValue();
                    var html = Ext.getCmp('biddingAnnouncementContentId').getHtml();
                    if (html == null) {
                        Ext.Ajax.request({
                            url: util.getMobileSite() + "Shop/GetProductsDetail.ashx?userId=" + util.getUserId(),
                            params: {
                                productId: productId, type: "three"
                            },
                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                            success: function (result, context) {
                                var result = result.responseText;
                                Ext.getCmp('biddingAnnouncementContentId').setHtml(result);
                                //Ext.getCmp('biddingInstructionsContentId').setHtml(bidNeedKnow);
                                //Ext.getCmp('biddingAnnouncementContentId').setHtml(bidNotice);
                            },
                            failure: function (result, context) {
                                util.showMessage("网络异常，请重试", true);
                            },
                            method: "POST"
                        });
                    }

                    Ext.getCmp("subjectMatterIntroduceContentId").setHidden(true)
                    Ext.getCmp("biddingInstructionsContentId").setHidden(true)
                    Ext.getCmp("biddingAnnouncementContentId").setHidden(false)
                }
            },
            productListDetail: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var productId;
                    productId = Ext.getCmp('loadProductId').getValue();

                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Shop/GetProductsDetail.ashx?userId=" + util.getUserId(),
                        params: {
                            productId: productId, type: "one"
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var result = result.responseText;
                            Ext.getCmp('subjectMatterIntroduceContentId').setHtml(result);
                            //Ext.getCmp('biddingInstructionsContentId').setHtml(bidNeedKnow);
                            //Ext.getCmp('biddingAnnouncementContentId').setHtml(bidNotice);
                        },
                        failure: function (result, context) {
                            util.showMessage("网络异常，请重试", true);
                        },
                        method: "POST"
                    });
                }
            },
            offerRecord: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var productId;
                    productId = Ext.getCmp('loadProductId').getValue();
                    Ext.getCmp('offerRecordId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetOfferRecord.ashx?productId=' + productId;

                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('offerRecordId').getStore();
                    var proxy = store.getProxy();
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('offerRecordId').getStore().setData(null);
                            }
                        }
                    }, this);
                }
            },
            productMap: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var lat = dict.get("lat");
                    var lon = dict.get("lon");
                    //Ext.getCmp("MobileAttendMap").config.lng = 120.635765;
                    //Ext.getCmp("MobileAttendMap").config.lat = 31.268128;
                    Ext.getCmp("ProductMapArea").setLng(lon);
                    Ext.getCmp("ProductMapArea").setLat(lat);
                    //Ext.getCmp("ProductMapArea").setLng(120.635765);
                    //Ext.getCmp("ProductMapArea").setLat(31.268128);
                    //Ext.getCmp("ProductMapArea").initMap();
                    //Ext.getCmp("ProductMapArea").addMyPoint(lat, lon);
                    Ext.getCmp("ProductMapArea").getLocateControl();
                    //Ext.getCmp("MobileAttendMap").setGeo(true);
                    //var poi = Ext.getCmp("MobileAttendMap").nearData;
                    //util.showMessage(poi.address, true);
                    //if (util.isAndroid() == true) {
                    //    globalBar.add({
                    //        id: 'viewId',
                    //        xtype: 'img',
                    //        right: 0,
                    //        top: 2,
                    //        centered: true,
                    //        //src: 'resources/images/location.png',
                    //        html: "<p style='color:#ffffff;font-size: 14px;margin-top: 15px;'>导航</p>",
                    //        width: 45,
                    //        height: 45,
                    //        align: 'right',
                    //        ui: 'decline',
                    //        listeners: {
                    //            tap: function () {
                    //                var aRecord = Ext.Viewport.EmptyView.getRecord();
                    //                var name = aRecord.data.productname;
                    //                if (util.getClientType() == "iPhone" || util.getClientType() == "iPad") {
                    //                    navigator.BaiduNav.navigate(lat, lon);

                    //                }
                    //                else if (util.getClientType() == "Android") {
                    //                    navigator.BaiduNav.showNav(lon, lat, name, function (success) {
                    //                        alert(success);
                    //                    }, function (fail) {
                    //                        alert("encoding failed: " + fail);
                    //                    });
                    //                }
                    //            }
                    //        }
                    //    });
                    //}
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    if (Ext.getCmp('viewId')) {
                        globalBar.remove(Ext.getCmp('viewId'));
                    }
                }
            },
            myPublishedPro: {
                itemtap: function (list, index, target, record, e) {
                    if (e.target.tagName == 'DIV' && e.target.className == 'action delete x-button hidden-off0 hidden-off1') {
                        var productId = record._data.id;
                        Ext.Ajax.request({
                            url: util.getMobileSite() + "Shop/TakeProductOff.ashx?userId=" + util.getUserId(),
                            params: {
                                productId: productId
                            },
                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                            success: function (result, context) {
                                util.showMessage("下架成功", true);
                            },
                            failure: function (result, context) {
                                util.showMessage("网络异常，请重试", true);
                            },
                            method: "POST"
                        });
                        var el = Ext.get(e.target);
                        el.removeCls('hidden-off1');
                    } else {
                        if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                            Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                        }
                        Ext.Viewport.EmptyView.setRecord(record);
                        this.redirectTo('redirec/productListView');
                    }

                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //Ext.get('newsBrwId').on('swipe', 'onViewSwipe', this);
                    //Ext.getCmp('newsBrwId').getStore().load();
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();

                    store = Ext.getCmp('myPublishedProId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('userId', util.getUserId());
                    if (oldActiveItem.id == "myPersonalCenterId") {
                        Ext.getCmp('myPublishedProId').getStore().loadPage(1);
                    }
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('myPublishedProId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('news_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('news_search_box'));
                    }
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                }
            },
            addProducts: {
                show: function (newActiveItem, obj, eOpts) {
                    if (dict.get("addProductFlag") == "Y") {
                        globalBar.setTitle("拍品发布");
                    }
                    tempParams = { 'productPassId': 'undefined' };
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var currentDate = new Date();
                    Ext.getCmp("beginTime").setValue(util.getDateTimePicker(currentDate));
                    currentDate = new Date(currentDate.valueOf() + 1 * 24 * 60 * 60 * 1000);
                    Ext.getCmp("endTime").setValue(util.getDateTimePicker(currentDate));
                    //Ext.getCmp("endTime").setValue(endTime);
                    if (oldActiveItem.id == "productListViewId") {
                        var productPassId = dict.get("productId");;
                        Ext.getCmp("loadProductId").setValue(productPassId);
                        Ext.Ajax.request({
                            url: util.getMobileSite() + "Shop/GetPublishedProEdit.ashx?userId=" + util.getUserId(),
                            params: {
                                productPassId: productPassId,
                            },
                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                            success: function (result, context) {
                                var temp = Ext.decode(result.responseText);
                                //创建分类store
                                Ext.regModel('SetCategory1', {
                                    fields: [
                                        { name: 'value', type: 'string' },
                                        { name: 'text', type: 'string' }
                                    ]
                                });
                                setCategoryStore1 = new Ext.data.Store({
                                    model: 'SetCategory1',
                                    data: [{ value: temp[0]["CATEGORY_ID1"], text: temp[0]["CategoryName1"] }],
                                    autoLoad: true
                                });
                                Ext.regModel('SetCategory2', {
                                    fields: [
                                        { name: 'value', type: 'string' },
                                        { name: 'text', type: 'string' }
                                    ]
                                });
                                setCategoryStore2 = new Ext.data.Store({
                                    model: 'SetCategory2',
                                    data: [{ value: temp[0]["CATEGORY_ID2"], text: temp[0]["CategoryName2"] }],
                                    autoLoad: true
                                });
                                Ext.regModel('SetCategory3', {
                                    fields: [
                                        { name: 'value', type: 'string' },
                                        { name: 'text', type: 'string' }
                                    ]
                                });
                                setCategoryStore3 = new Ext.data.Store({
                                    model: 'SetCategory3',
                                    data: [{ value: temp[0]["CATEGORY_ID3"], text: temp[0]["CategoryName3"] }],
                                    autoLoad: true
                                });
                                //创建省份store
                                Ext.regModel('SetProvince', {
                                    fields: [
                                        { name: 'value', type: 'string' },
                                        { name: 'text', type: 'string' }
                                    ]
                                });
                                setProvince = new Ext.data.Store({
                                    model: 'SetProvince',
                                    data: [{ value: temp[0]["PROVINCE_ID"], text: temp[0]["PROVINCE_NAME_C"] }],
                                    autoLoad: true
                                });
                                //创建城市store
                                Ext.regModel('SetCity', {
                                    fields: [
                                        { name: 'value', type: 'string' },
                                        { name: 'text', type: 'string' }
                                    ]
                                });
                                setCity = new Ext.data.Store({
                                    model: 'SetCity',
                                    data: [{ value: temp[0]["CITY_ID"], text: temp[0]["CITY_NAME_C"] }],
                                    autoLoad: true
                                });
                                //创建区县store
                                Ext.regModel('SetCounty', {
                                    fields: [
                                        { name: 'value', type: 'string' },
                                        { name: 'text', type: 'string' }
                                    ]
                                });
                                setCounty = new Ext.data.Store({
                                    model: 'SetCounty',
                                    data: [{ value: temp[0]["COUNTY_ID"], text: temp[0]["COUNTY_NAME_C"] }],
                                    autoLoad: true
                                });

                                Ext.getCmp("productName").setValue(temp[0]["ProductName"]);
                                Ext.getCmp("language").setValue(temp[0]["Language"]);
                                Ext.getCmp("productType_one").setStore(setCategoryStore1);
                                Ext.getCmp("productType_one").setValue(temp[0]["CATEGORY_ID1"]);
                                Ext.getCmp("productType_two").setStore(setCategoryStore2);
                                Ext.getCmp("productType_two").setValue(temp[0]["CATEGORY_ID2"]);
                                Ext.getCmp("productType_three").setStore(setCategoryStore3);
                                Ext.getCmp("productType_three").setValue(temp[0]["CATEGORY_ID3"]);
                                Ext.getCmp("evaluateprice").setValue(temp[0]["EvaluatePrice"]);
                                Ext.getCmp("startprice").setValue(temp[0]["StartPrice"]);
                                Ext.getCmp("deposit").setValue(temp[0]["Deposit"]);
                                Ext.getCmp("increaseprice").setValue(temp[0]["IncreasePrice"]);
                                Ext.getCmp("stockNum").setValue(temp[0]["Stock"]);
                                Ext.getCmp("proDescription").setValue(temp[0]["Description"]);
                                Ext.getCmp("province").setStore(setProvince);
                                Ext.getCmp("province").setValue(temp[0]["PROVINCE_ID"]);
                                Ext.getCmp("city").setStore(setCity);
                                Ext.getCmp("city").setValue(temp[0]["CITY_ID"]);
                                Ext.getCmp("county").setStore(setCounty);
                                Ext.getCmp("county").setValue(temp[0]["COUNTY_ID"]);
                                Ext.getCmp("goodcontacter").setValue(temp[0]["GoodContacter"]);
                                Ext.getCmp("address").setValue(temp[0]["Address"]);
                                Ext.getCmp("contacterEmail").setValue(temp[0]["ContacterEmail"]);
                                Ext.getCmp("mobileNumber").setValue(temp[0]["Mobilenumber"]);
                                Ext.getCmp("liveMan").setValue(temp[0]["LiveMan"]);
                                if (temp[0]["BEGIN_TIME"] == "") {
                                    Ext.getCmp("beginTime").setValue(null);
                                } else {
                                    Ext.getCmp("beginTime").setValue(util.getDateTimePicker(temp[0]["BEGIN_TIME"]));
                                }
                                if (temp[0]["END_TIME"] == "") {
                                    Ext.getCmp("endTime").setValue(null);
                                } else {
                                    Ext.getCmp("endTime").setValue(util.getDateTimePicker(temp[0]["END_TIME"]));
                                }
                            },
                            failure: function (result, context) {
                                util.showMessage("网络异常，请重试", true);
                            },
                            method: "POST"
                        });
                    }
                    if (config.tempParams !== undefined) {
                        Ext.regModel('CategoryAdd', {
                            fields: [
                                { name: 'value', type: 'string' },
                                { name: 'text', type: 'string' }
                            ]
                        });
                        categoryAddStore = new Ext.data.Store({
                            model: 'CategoryAdd',
                            data: [{ value: config.tempParams.categoryId, text: config.tempParams.categoryName }],
                            autoLoad: true
                        });
                        if (tempParams.type == 1) {
                            Ext.getCmp('productType_one').setStore(categoryAddStore);
                            Ext.getCmp('productType_one').setValue(config.tempParams.categoryId);
                            Ext.getCmp("productType_two").setStore("");
                            Ext.getCmp("productType_two").setValue("");
                            Ext.getCmp("productType_three").setStore("");
                            Ext.getCmp("productType_three").setValue("");
                        }
                        else if (tempParams.type == 2) {
                            Ext.getCmp('productType_two').setStore(categoryAddStore);
                            Ext.getCmp('productType_two').setValue(config.tempParams.categoryId);
                            Ext.getCmp("productType_three").setStore("");
                            Ext.getCmp("productType_three").setValue("");
                        }
                        else if (tempParams.type == 3) {
                            Ext.getCmp('productType_three').setStore(categoryAddStore);
                            Ext.getCmp('productType_three').setValue(config.tempParams.categoryId);
                        }
                    }

                    if (config.tempParams !== undefined) {
                        Ext.regModel('ProvinceAdd', {
                            fields: [
                                { name: 'value', type: 'string' },
                                { name: 'text', type: 'string' }
                            ]
                        });
                        provinceAddStore = new Ext.data.Store({
                            model: 'ProvinceAdd',
                            data: [{ value: config.tempParams.provinceId, text: config.tempParams.provinceName }],
                            autoLoad: true
                        });
                        if (tempParams.type == 4) {
                            Ext.getCmp('province').setStore(provinceAddStore);
                            Ext.getCmp('province').setValue(config.tempParams.provinceId);
                            Ext.getCmp("city").setStore("");
                            Ext.getCmp("city").setValue("");
                            Ext.getCmp("county").setStore("");
                            Ext.getCmp("county").setValue("");
                        }
                        else if (tempParams.type == 5) {
                            Ext.getCmp('city').setStore(provinceAddStore);
                            Ext.getCmp('city').setValue(config.tempParams.provinceId);
                            Ext.getCmp("county").setStore("");
                            Ext.getCmp("county").setValue("");
                        }
                        else if (tempParams.type == 6) {
                            Ext.getCmp('county').setStore(provinceAddStore);
                            Ext.getCmp('county').setValue(config.tempParams.provinceId);
                        }
                    }

                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();

                    fileCount = 0;
                    fileArray = new Array();
                    bar.add({
                        id: 'infoSubmitId',
                        xtype: 'img',
                        right: 5,
                        centered: true,
                        src: 'resources/images/system/check.png',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        listeners: {
                            tap: function () {
                                //alert(dict.get("imgRemarkId"));
                                var productName = Ext.getCmp("productName").getValue();
                                var language = Ext.getCmp("language").getValue();
                                var productType_one = Ext.getCmp("productType_one").getValue();
                                var productType_two = Ext.getCmp("productType_two").getValue();
                                var productType_three = Ext.getCmp("productType_three").getValue();
                                var evaluateprice = Ext.getCmp("evaluateprice").getValue();
                                var startprice = Ext.getCmp("startprice").getValue();
                                var deposit = Ext.getCmp("deposit").getValue();
                                var increaseprice = Ext.getCmp("increaseprice").getValue();
                                var stockNum = Ext.getCmp("stockNum").getValue();
                                var proDescription = Ext.getCmp("proDescription").getValue();
                                var province = Ext.getCmp("province").getValue();
                                var city = Ext.getCmp("city").getValue();
                                var county = Ext.getCmp("county").getValue();
                                var goodcontacter = Ext.getCmp("goodcontacter").getValue();
                                var address = Ext.getCmp("address").getValue();
                                var contacterEmail = Ext.getCmp("contacterEmail").getValue();
                                var mobileNumber = Ext.getCmp("mobileNumber").getValue();
                                var liveMan = Ext.getCmp("liveMan").getValue();
                                var beginTime = Ext.getCmp("beginTime").getFormattedValue();
                                var endTime = Ext.getCmp("endTime").getFormattedValue();
                                if (beginTime != null) {
                                    var d1 = new Date(beginTime.replace(/\-/g, "\/"));
                                } else {
                                    util.showMessage("开始时间不能为空", true, 1); return;
                                }
                                if (endTime != null) {
                                    var d2 = new Date(endTime.replace(/\-/g, "\/"));
                                } else {
                                    util.showMessage("结束时间不能为空", true, 1); return;
                                }
                                if (beginTime == "" && endTime != "" && d1 >= d2) {
                                    util.showMessage("开始时间不能大于结束时间", true, 1);
                                    return false;
                                }

                                if (productName == "") {
                                    util.showMessage("拍品名称不能为空", true, 1); return;
                                }
                                    //if (language == null) {
                                    //    util.showWarning("语言不能为空"); return;
                                    //}
                                    //if (productType_one == null) {
                                    //    util.showWarning("分类1不能为空"); return;
                                    //}
                                    //if (productType_two == null) {
                                    //    util.showWarning("分类2不能为空"); return;
                                    //}
                                    //if (evaluateprice == "") {
                                    //    util.showWarning("评估价不能为空"); return;
                                    //}else {
                                    //    if (isNaN(evaluateprice)) {
                                    //        util.showWarning("评估价填写有误"); return;
                                    //    }
                                    //}
                                    //if (startprice == "") {
                                    //    util.showWarning("起拍价不能为空"); return;
                                    //} else {
                                    //    if (isNaN(startprice)) {
                                    //        util.showWarning("起拍价填写有误"); return;
                                    //    }
                                    //}
                                    //if (deposit == "") {
                                    //    util.showWarning("保证金不能为空"); return;
                                    //} else {
                                    //    if (isNaN(deposit)) {
                                    //        util.showWarning("保证金填写有误"); return;
                                    //    }
                                    //}
                                    //if (increaseprice == "") {
                                    //    util.showWarning("加价幅度不能为空"); return;
                                    //} else {
                                    //    if (isNaN(increaseprice)) {
                                    //        util.showWarning("加价幅度填写有误"); return;
                                    //    }
                                    //}
                                    //if (stockNum == "") {
                                    //    util.showWarning("库存不能为空"); return;
                                    //} else {
                                    //    if (isNaN(stockNum)) {
                                    //        util.showWarning("库存填写有误"); return;
                                    //    }
                                    //}
                                    //if (proDescription == "") {
                                    //    util.showWarning("简介不能为空"); return;
                                    //}
                                    //if (province == null) {
                                    //    util.showWarning("省份不能为空"); return;
                                    //}
                                    //if (city == null) {
                                    //    util.showWarning("城市不能为空"); return;
                                    //}
                                    //if (county == null) {
                                    //    util.showWarning("区县不能为空"); return;
                                    //}
                                    //if (goodcontacter == "") {
                                    //    util.showWarning("联系人不能为空"); return;
                                    //}
                                    //if (address == "") {
                                    //    util.showWarning("地址不能为空"); return;
                                    //}
                                    //if (contacterEmail == "") {
                                    //    util.showWarning("邮箱不能为空"); return;
                                    //}
                                    //else {//验证邮箱格式
                                    //    var checkEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                                    //    isEmail = checkEmail.test(contacterEmail);
                                    //    if (!isEmail) {
                                    //        util.showWarning("邮箱格式不正确！"); return;
                                    //    }
                                    //}
                                    //if (mobileNumber == "") {//联系电话格式
                                    //    util.showWarning("联系电话不能为空"); return;
                                    //} 
                                    //if (liveMan == "") {
                                    //    util.showWarning("现场看货联系人不能为空"); return;
                                    //} 
                                else {
                                    Ext.getCmp("loadStatus").setValue("ok");
                                }
                                var loadStatus = Ext.getCmp("loadStatus").getValue();
                                var loadProductId = Ext.getCmp("loadProductId").getValue();
                                if (loadStatus != null) {
                                    Ext.Ajax.request({
                                        url: util.getMobileSite() + "Shop/InsertProduct.ashx?userId=" + util.getUserId(),
                                        params: {
                                            loadProductId: loadProductId,
                                            productName: productName,
                                            language: language,
                                            productType_one: productType_one,
                                            productType_two: productType_two,
                                            productType_three: productType_three,
                                            evaluatePrice: evaluateprice,
                                            startPrice: startprice,
                                            deposit: deposit,
                                            increasePrice: increaseprice,
                                            stockNum: stockNum,
                                            proDescription: proDescription,
                                            province: province,
                                            city: city,
                                            county: county,
                                            goodContacter: goodcontacter,
                                            address: address,
                                            contacterEmail: contacterEmail,
                                            mobileNumber: mobileNumber,
                                            liveMan: liveMan,
                                            beginTime: beginTime,
                                            endTime: endTime,
                                            imgRemarkId: dict.get("imgRemarkId")
                                        },
                                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                        success: function (result, context) {
                                            var productImageId = result.responseText;
                                            dict.add("imgRemarkId", null);
                                            if (fileArray.length > 0) {
                                                util.setMasked(true, "正在提交...");
                                                var count = 0;
                                                var uploadImages = [];
                                                for (var i = 0; i <= fileArray.length - 1; i++) {
                                                    imageURI = fileArray[i];
                                                    //var form = Ext.getCmp("fileUpBtn");
                                                    var options = new FileUploadOptions();
                                                    options.fileKey = "file";        //必填与服务器对于,服务器上要求为nane= "file" 
                                                    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);    //图片名字
                                                    options.mimeType = "multipart/form-data";       //文件上传必须使用该编码（enctype="multipart/form-data"） {也可以定义上传格式（"image/jpeg";）}
                                                    //options.params = { 'stationId': stationId, 'stationContent': stationContent, 'type': 'StationCompleteRatio' }   //其他数据
                                                    var params = new Object();
                                                    params.dir = "Photos/Product/";
                                                    params.productImageId = productImageId;
                                                    //params.stationContent = stationContent;
                                                    //params.type = "StationCompleteRatio";
                                                    options.params = params;
                                                    options.chunkedMode = false;

                                                    var ft = new FileTransfer();
                                                    ft.upload(imageURI, util.getMobileSite() + "Shop/UploadImage.ashx",
                                                        function (result) {
                                                            uploadImages.push(result.response);
                                                            count += 1;
                                                            if (count == fileArray.length) {
                                                                if (loadProductId == "") {
                                                                    fileCount = 0;
                                                                    fileArray = new Array();
                                                                    Ext.getCmp("loadedImage0").setSrc("resources/images/s.gif");
                                                                    Ext.getCmp("loadedImage1").setSrc("resources/images/s.gif");
                                                                    Ext.getCmp("loadedImage2").setSrc("resources/images/s.gif");
                                                                    util.setMasked(false);
                                                                    Ext.getCmp('selectPhotoBtn').setBadgeText("");
                                                                }
                                                            }
                                                        },
                                                        function (error) {
                                                            util.setMasked(false);
                                                            util.showWarning('提交失败,未获取图片或格式错误');
                                                        },
                                                        options
                                                    );
                                                    ft.onprogress = function (progressEvent) {
                                                        if (progressEvent.lengthComputable) {
                                                            //已经上传  
                                                            var loaded = progressEvent.loaded;
                                                            //文件总长度  
                                                            var total = progressEvent.total;
                                                            //计算百分比，用于显示进度条  
                                                            var percent = parseInt((loaded / total) * 100) + "%";
                                                            //换算成MB  
                                                            loaded = (loaded / 1024).toFixed(2);
                                                            total = (total / 1024).toFixed(2);
                                                            //util.showWarning(loaded + 'KB/' + total + 'KB', true);
                                                            Ext.getCmp('selectPhotoBtn').setBadgeText(percent);
                                                        }
                                                    };
                                                }
                                            }
                                            Ext.regModel('SetClear', {
                                                fields: [
                                                    { name: 'value', type: 'string' },
                                                    { name: 'text', type: 'string' }
                                                ]
                                            });
                                            setClear = new Ext.data.Store({
                                                model: 'SetClear',
                                                data: [{ value: "", text: "" }],
                                                autoLoad: true
                                            });
                                            if (loadProductId == "") {
                                                Ext.getCmp("productName").setValue("");
                                                Ext.getCmp("language").setStore(setClear)
                                                Ext.getCmp("language").setValue("");
                                                Ext.getCmp("productType_one").setValue("");
                                                Ext.getCmp("productType_one").setStore(setClear);
                                                Ext.getCmp("productType_two").setValue("");
                                                Ext.getCmp("productType_two").setStore(setClear);
                                                Ext.getCmp("productType_three").setValue("");
                                                Ext.getCmp("productType_three").setStore(setClear);
                                                Ext.getCmp("evaluateprice").setValue("");
                                                Ext.getCmp("startprice").setValue("");
                                                Ext.getCmp("deposit").setValue("");
                                                Ext.getCmp("increaseprice").setValue("");
                                                Ext.getCmp("stockNum").setValue("");
                                                Ext.getCmp("proDescription").setValue("");
                                                Ext.getCmp("province").setValue("");
                                                Ext.getCmp("province").setStore(setClear);
                                                Ext.getCmp("city").setValue("");
                                                Ext.getCmp("city").setStore(setClear);
                                                Ext.getCmp("county").setValue("");
                                                Ext.getCmp("county").setStore(setClear);
                                                Ext.getCmp("goodcontacter").setValue("");
                                                Ext.getCmp("address").setValue("");
                                                Ext.getCmp("contacterEmail").setValue("");
                                                Ext.getCmp("mobileNumber").setValue("");
                                                Ext.getCmp("liveMan").setValue("");
                                                Ext.getCmp("beginTime").setValue(new Date());
                                                Ext.getCmp("endTime").setValue(new Date());
                                                util.showMessage("发布成功", true, 1);
                                            } else {
                                                util.showMessage("修改成功", true, 1);
                                            }
                                        },
                                        failure: function (result, context) {
                                            util.showMessage("网络异常，请重试", true);
                                        },
                                        method: "POST"
                                    });
                                }
                            }
                        }
                    });


                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('infoSubmitId'));
                    if (dict.get("addProductFlag" != "Y")) {
                        bar.add({
                            id: 'viewEditId',
                            xtype: 'img',
                            right: 0,
                            top: 2,
                            centered: true,
                            //src: 'resources/images/system/editor.png',
                            html: "<p style='color: #ffffff;font-size: 14px; margin-top: 14px;'>编辑</p>",
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    //var bar = obj.getNavigationBar();
                                    //bar.remove(Ext.getCmp('viewId'));
                                    var getproductPassId = dict.get("productId");
                                    tempParams = { 'productPassId': getproductPassId };
                                    me.redirectTo('redirec/addProducts/Y');
                                }
                            }
                        });
                    }
                }
            },
            categorySelect: {
                itemsingletap: function (list, index, target, record, e) {
                    config.tempParams = { 'categoryId': record.data.id, 'categoryName': record.data.name };
                    this.redirectTo('redirec/addProducts/1');
                    if (config.tempParams != null) {
                        Ext.getCmp('category_search_box').setValue("");
                    }
                },
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (tempParams.type == 1) {
                        Ext.getCmp('categorySelectId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetCategory.ashx?categoryId=' + tempParams.categoryId;
                    }
                    else if (tempParams.type == 2) {
                        Ext.getCmp('categorySelectId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetCategory.ashx?categoryId=' + tempParams.categoryId;
                    }
                    else if (tempParams.type == 3) {
                        Ext.getCmp('categorySelectId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetCategory.ashx?categoryId=' + tempParams.categoryId;
                    }
                    Ext.getCmp('categorySelectId').getStore().load();
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }

                    if (Ext.get('queryToolbarId') == null) {
                        var queryToolbar = Ext.create('Ext.Panel', {
                            docked: 'top',
                            id: 'queryToolbarId',
                            //cls: 'navToolbar',
                            height: '45px',
                            layout: "hbox",
                            width: document.body.clientWidth,
                            items: [{
                                xtype: 'image',
                                height: '45px',
                                width: '40px',
                                cls: "i-search-icon"
                            }, {
                                xtype: 'textfield',
                                itemId: 'category_search_box',
                                id: 'category_search_box',
                                height: '44px',
                                margin: 0,
                                cls: "i-search-text",
                                clearIcon: false,
                                placeHolder: "请输入查询条件",
                                width: document.body.clientWidth - 80,
                                //}, {
                                //    xtype: 'image',
                                //    itemId: 'cancel_select_station_search_box',
                                //    height: '45px',
                                //    width: '40px',
                                //    cls: "i-search-cancel-icon"
                            }]
                        });
                        Ext.getCmp('categorySelectId').add([queryToolbar]);
                    }
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (typeof (Ext.getCmp("categorySelectId").getStore().getProxy()._extraParams.value) != "undefined") {
                        if (Ext.getCmp("categorySelectId").getStore().getProxy()._extraParams.value != "") {
                            Ext.getCmp("categorySelectId").getStore().getProxy().setExtraParam("value", "");
                            Ext.getCmp("categorySelectId").getStore().loadPage(1);
                        }
                    }
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                }
            },
            'categorySelect textfield[itemId=category_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            provinceSelect: {
                show: function (newActiveItem, obj, eOpts) {
                    if (tempParams.addressName == undefined) {
                        globalBar.setTitle("选择省份");
                    } else {
                        globalBar.setTitle(tempParams.addressName);
                    }
                },
                itemsingletap: function (list, index, target, record, e) {
                    config.tempParams = { 'provinceId': record.data.id, 'provinceName': record.data.province_name_c };
                    if (dict.get("oldActiveItem") == "homeId") {
                        dict.add("province", record.data.province_name_c);
                        this.redirectTo('redirec/shopHome');
                    } else {
                        this.redirectTo('redirec/addProducts/1');
                    }

                    if (Ext.getCmp('province_search_box').getValue() != null) {
                        Ext.getCmp('province_search_box').setValue("");
                    }
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    dict.add("oldActiveItem", oldActiveItem._itemId);

                    if (tempParams.type == 4) {
                        Ext.getCmp('provinceSelectId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetProvince.ashx?provinceTypeId=' + tempParams.provinceTypeId;
                    }
                    else if (tempParams.type == 5) {
                        Ext.getCmp('provinceSelectId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetProvince.ashx?provinceTypeId=' + tempParams.provinceTypeId;
                    }
                    else if (tempParams.type == 6) {
                        Ext.getCmp('provinceSelectId').getStore()._proxy._url = util.getMobileSite() + 'Shop/GetProvince.ashx?cityTypeId=' + tempParams.provinceTypeId;
                    }
                    Ext.getCmp('provinceSelectId').getStore().load();
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }

                    if (Ext.get('queryToolbarId') == null) {
                        var queryToolbar = Ext.create('Ext.Panel', {
                            docked: 'top',
                            id: 'queryToolbarId',
                            //cls: 'navToolbar',
                            height: '45px',
                            layout: "hbox",
                            width: document.body.clientWidth,
                            items: [{
                                xtype: 'image',
                                height: '45px',
                                width: '40px',
                                cls: "i-search-icon"
                            }, {
                                xtype: 'textfield',
                                itemId: 'province_search_box',
                                id: 'province_search_box',
                                height: '44px',
                                margin: 0,
                                cls: "i-search-text",
                                clearIcon: false,
                                placeHolder: "请输入查询条件",
                                width: document.body.clientWidth - 80,
                                //}, {
                                //    xtype: 'image',
                                //    itemId: 'cancel_select_station_search_box',
                                //    height: '45px',
                                //    width: '40px',
                                //    cls: "i-search-cancel-icon"
                            }]
                        });
                        Ext.getCmp('provinceSelectId').add([queryToolbar]);
                    }
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    if (typeof (Ext.getCmp("provinceSelectId").getStore().getProxy()._extraParams.value) != "undefined") {
                        if (Ext.getCmp("provinceSelectId").getStore().getProxy()._extraParams.value != "") {
                            Ext.getCmp("provinceSelectId").getStore().getProxy().setExtraParam("value", "");
                            Ext.getCmp("provinceSelectId").getStore().loadPage(1);
                        }
                    }
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                }
            },
            'provinceSelect textfield[itemId=province_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },
            myCollectionProduct: {
                itemtap: function (list, index, target, record, e) {
                    if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                        Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                    }
                    Ext.Viewport.EmptyView.setRecord(record);
                    this.redirectTo('redirec/productListView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                    //util.showMessage("end", true);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //Ext.get('newsBrwId').on('swipe', 'onViewSwipe', this);
                    //Ext.getCmp('newsBrwId').getStore().load();
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //bar.titleComponent.setZIndex(-1);
                    store = Ext.getCmp('myCollectionProductId').getStore();
                    var proxy = store.getProxy();
                    //if (oldActiveItem.id == "homeId") {
                    //    proxy.setExtraParam('readFlag', "N");

                    //} else if (oldActiveItem.id == "newsView") {
                    //    proxy.setExtraParam('status', "Y");
                    //}
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records.length == 0) {
                                Ext.getCmp('myCollectionProductId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //bar.setZIndex(-1);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('news_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('news_search_box'));
                    }
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('newsSearchId'));
                }
            },
            myFootPrint: {
                itemtap: function (list, index, target, record, e) {
                    if (tempParams.loadItemEl) {
                        if (e.target.tagName == 'DIV' && e.target.className == 'action delete x-button') {
                            var productId = record._data.id;
                            Ext.Ajax.request({
                                url: util.getMobileSite() + "Shop/DeleteFootPrint.ashx?userId=" + util.getUserId(),
                                params: {
                                    productId: productId
                                },
                                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                success: function (result, context) {
                                    util.showMessage("删除成功", true);
                                },
                                failure: function (result, context) {
                                    util.showMessage("网络异常，请重试", true);
                                },
                                method: "POST"
                            });
                            var el = Ext.getCmp(target._itemId);
                            el.setHidden(true);
                        }
                        tempParams.loadItemEl.removeCls('search-item-active');
                        tempParams = { 'loadItemEl': '' };
                    }
                    else {
                        if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                            Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                        }
                        Ext.Viewport.EmptyView.setRecord(record);
                        this.redirectTo('redirec/productListView');
                    }
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //Ext.get('newsBrwId').on('swipe', 'onViewSwipe', this);
                    //Ext.getCmp('newsBrwId').getStore().load();
                    tempParams = { 'loadItemEl': '' };
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //bar.titleComponent.setZIndex(-1);
                    store = Ext.getCmp('myFootPrintId').getStore();
                    var proxy = store.getProxy();
                    //if (oldActiveItem.id == "homeId") {
                    //    proxy.setExtraParam('readFlag', "N");

                    //} else if (oldActiveItem.id == "newsView") {
                    //    proxy.setExtraParam('status', "Y");
                    //}
                    store.load(function (records, operation, success) {
                        if (success) {
                            if (records[0].data.id == "0") {
                                Ext.getCmp('myFootPrintId').getStore().setData(null);
                            }
                        }
                    }, this);
                    //bar.setZIndex(-1);
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('news_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('news_search_box'));
                    }
                    //newActiveItem.element.on("swipe", function (record, e, index, target) {
                    //    if (e.direction === 'left' && e.distance >= 20) {

                    //        util.showWarning('move left');
                    //    }
                    //    else if (e.direction === 'right' && e.distance >= 20) {
                    //        //util.showWarning('move right');
                    //    } else if (e.direction === 'up' && e.distance >= 20) {
                    //        //util.showWarning('move up');
                    //        //me.redirectTo('redirec/newsBrw');
                    //    } else if (e.direction === 'down' && e.distance >= 20) {
                    //        //util.showWarning('move down');
                    //    }
                    //});

                },
                itemswipe: function (obj, index, target, record, e, node, eOpts) {
                    if (e.direction === 'left' && e.distance >= 20) {
                        if (tempParams.loadItemEl) {
                            tempParams.loadItemEl.removeCls('search-item-active');
                        }
                        var el = Ext.get(target._itemId);
                        var hasClass = el.hasCls('search-item-active');
                        if (hasClass) {
                            el.removeCls('search-item-active');
                            tempParams = { 'loadItemEl': '' };
                        } else {
                            el.addCls('search-item-active');
                            tempParams = { 'loadItemEl': el };
                        }
                    }
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('newsSearchId'));
                }
            },
            shoppingCarts: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('shoppingCartsId').getStore().load();
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                }
            },
            progressDetail: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var productId;
                    productId = Ext.getCmp('loadProductId').getValue();
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Shop/GetProgressDetail.ashx",
                        params: {
                            productId: productId, userId: util.getUserId()
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            Ext.getCmp('stepIcon' + json[0]["NUM"]).setHtml("<img src='resources/images/icon07.gif'/>");
                        },
                        failure: function (result, context) {
                            util.showMessage("网络异常，请重试", true);
                        },
                        method: "POST"
                    });
                }
            },
            myPersonalCenter: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (util.getEmpId() == "buyer") {
                        Ext.getCmp('publishedProduct').setHidden(true);
                        Ext.getCmp('addProduct').setHidden(true);
                    }
                    var userName = util.getUserName();
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Shop/GetPersonalCounts.ashx",
                        params: {
                            userId: util.getUserId(), empId: util.getEmpId(), userCode: util.getUserCode()
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            util.getCompanyId();
                            if (userName != null) {
                                Ext.getCmp('myFootPrint').setHtml("<p style='text-align:center;font-size: 12px;color: #FFFFFF;'>" + json[0]["footPrintCount"] + "</br>我的足迹</p>");
                                Ext.getCmp('collectionProductView').setHtml("<p style='text-align:center;font-size: 12px;color: #FFFFFF;'>" + json[0]["collectionProduct"] + "</br>收藏的宝贝</p>");
                                if (json[0]["userPhotoUrl"] != "") {
                                    Ext.getCmp('IntoMyPersonalInfo').setHtml("<div><div style='float:left;padding-right:20px;padding-top:4px;'><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='" + config.webSite + json[0]["userPhotoUrl"] + "'/></div><div style='padding-top:15px;float:left'><p>" + userName + "</p><img style='width:50px;height:20px; display:none' src='" + config.webSite + "Upload/Mobile/shop/main/exh.png'/></div><div><img style='width:30px;height:45px;float:right;padding-top:15px;' src='" + config.webSite + "Upload/Mobile/shop/main/u-list-icon.png'/></div></div>");
                                } else {
                                    Ext.getCmp('IntoMyPersonalInfo').setHtml("<div><div style='float:left;padding-right:20px;padding-top:4px;'><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='resources/images/noface_60x60.jpg'/></div><div style='padding-top:15px;float:left'><p>" + userName + "</p><img style='width:50px;height:20px; display:none' src='" + config.webSite + "Upload/Mobile/shop/main/exh.png'/></div><div><img style='width:30px;height:45px;float:right;padding-top:15px;' src='" + config.webSite + "Upload/Mobile/shop/main/u-list-icon.png'/></div></div>");
                                }
                            }

                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    ////清空查询条件
                    //bar.remove(Ext.getCmp('moreId'));
                }
            },
            myPersonalInfo: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var userName = util.getUserName();
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Shop/GetPersonalInfo.ashx",
                        params: {
                            userId: util.getUserId(), empId: util.getEmpId()
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var json = result.responseText;
                            json = Ext.decode(json);
                            Ext.getCmp('userId').setHtml("<div style='float:left'><p style='font-size: 14px;'>用户ID</p></div><div style='float:right'><p style='font-size: 14px;'>" + json[0]["userInfoId"] + "</p></div>");
                            Ext.getCmp('userCode').setHtml("<div style='float:left'><p style='font-size: 14px;'>用户名</p></div><div style='float:right'><p style='font-size: 14px;'>" + json[0]["userInfoCode"] + "</p></div>");
                            if (json[0]["photoName"] != "") {
                                Ext.getCmp('userPhoto').setHtml("<div style='float:left;margin-top:19.5px;'><p style='font-size: 14px;'>头像</p></div><div style='float:right;margin-right:10px;margin-top:5px;'><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='" + config.webSite + json[0]["photoName"] + "'/></div>");
                            } else {
                                Ext.getCmp('userPhoto').setHtml("<div style='float:left;margin-top:19.5px;'><p style='font-size: 14px;'>头像</p></div><div style='float:right;margin-right:10px;margin-top:5px;'><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='resources/images/noface_60x60.jpg'/></div>");
                            }
                            if (!json[0]['userInfoName'] == "") {
                                Ext.getCmp('userNick').setHtml("<div style='float:left'><p style='font-size: 14px;'>昵称</p></div><div style='float:right'><p style='font-size: 14px;padding-right:15px;'>" + json[0]["userInfoName"] + "</p></div>");
                            }
                            if (!json[0]['email'] == "") {
                                Ext.getCmp('userEmail').setHtml("<div style='float:left'><p style='font-size: 14px;'>邮箱</p></div><div style='float:right'><p style='font-size: 14px;padding-right:15px;'>" + json[0]['email'] + "</p></div>");
                            }
                            if (!json[0]['mobileNum'] == "") {
                                Ext.getCmp('userTelephone').setHtml("<div style='float:left'><p style='font-size: 14px;'>手机</p></div><div style='float:right'><p style='font-size: 14px;padding-right:15px;'>" + json[0]['mobileNum'] + "</p></div>");
                            }
                            dict.add("userImageUrl", json[0]["photoName"]);
                            dict.add("userNick", json[0]["userInfoName"]);
                            dict.add("userEmail", json[0]["email"]);
                            dict.add("userMobileNum", json[0]["mobileNum"]);
                            //json[0]['EMAIL']
                            //json[0]['MOBILE_NUM']
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    ////清空查询条件
                    //bar.remove(Ext.getCmp('moreId'));
                }
            },
            myPersonalInfoEdit: {
                show: function (newActiveItem, obj, eOpts) {
                    globalBar.setTitle(dict.get("infoName"));
                    //dict.get("infoName");
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //html: "<p style='font-size:14px'><b>基本信息</b></p>"
                    Ext.getCmp("infoName").setHtml('<p style="font-size:14px"><b>' + dict.get("infoName") + '</b></p>');

                    if (dict.get("infoName") == "昵称") {
                        Ext.getCmp("infoValue").setValue(dict.get("userNick"));
                    } else if (dict.get("infoName") == "邮箱") {
                        Ext.getCmp("infoValue").setValue(dict.get("userEmail"));
                    } else if (dict.get("infoName") == "手机") {
                        Ext.getCmp("infoValue").setValue(dict.get("userMobileNum"));
                    }
                    bar.add({
                        id: 'viewId',
                        xtype: 'img',
                        right: 5,
                        centered: true,
                        src: 'resources/images/system/check.png',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        listeners: {
                            tap: function () {
                                var infoValue = Ext.getCmp("infoValue").getValue();
                                Ext.Ajax.request({
                                    url: util.getMobileSite() + "Shop/UpdatePersonalInfo.ashx",
                                    params: {
                                        userId: util.getUserId(), infoType: dict.get("infoType"), infoValue: infoValue, empId: util.getEmpId()
                                    },
                                    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                                    success: function (result, context) {
                                        util.showMessage1("保存成功", true);
                                    },
                                    failure: function (result, context) {
                                        util.showMessage("网络异常，请重试", true);
                                    },
                                    method: "POST"
                                });
                            }
                        }
                    });
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    bar.remove(Ext.getCmp('viewId'));
                }
            },
            myPersonalPhotoSet: {
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    if (dict.get("userImageUrl") != "") {
                        Ext.getCmp("userPhoto0").setSrc(config.webSite + dict.get("userImageUrl"));
                    } else {
                        Ext.getCmp("userPhoto0").setSrc('resources/images/noface_60x60.jpg');
                    }
                }
            },
            myBiddingBrw: {
                itemtap: function (list, index, target, record, e) {
                    if (e.target.tagName == 'DIV' && e.target.className == 'delete x-button pingzheng-css shangchaunpz') {
                        dict.add("tempRowId", record.data.id);
                        uploadImageTap();
                    } else if (e.target.tagName == 'DIV' && e.target.className == 'delete x-button  pingzheng-css chankanpz') {
                        dict.add("voucherImageId", record.data.id);
                        this.redirectTo('redirec/voucherImage');
                    }
                    else {
                        if (typeof (Ext.Viewport.EmptyView) == "undefined") {
                            Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
                        }
                        dict.add("productId", record.data.productId);
                        Ext.Viewport.EmptyView.setRecord(record);
                        this.redirectTo('redirec/productListView');
                    }
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    var me = this;
                    CSS.addStyleSheet('news');
                    var userId = util.getUserId();
                    var bar = obj.getNavigationBar();
                    store = Ext.getCmp('myBiddingBrwId').getStore();
                    var proxy = store.getProxy();
                    proxy.setExtraParam('userId', userId);
                    store.load();
                }
            },

            home12: {
                swipe: function (e, target, options, eOpts) {
                    util.showWarning("测试Swipe");
                    if (e.direction === 'left' && e.distance >= 20) {
                        util.showWarning('move left');
                    } else if (e.direction === 'right' && e.distance >= 20) {
                        util.showWarning('move right');
                    }
                },
                itemswipe: function (list, idx, target, record, evt) {
                    if (evt.direction == "left") {
                        evt.stopEvent();
                        //util.showWarning("Left");

                    }
                    else if (evt.direction == "right") {
                        evt.stopEvent();
                        util.showWarning("right");
                    }
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //util.showMessage("activate success", true);
                    var me = this;
                    newActiveItem.element.on("swipe", function (e, target, options, eOpts) {
                        if (e.direction === 'left' && e.distance >= 20) {
                            //util.showWarning('move left');
                        } else if (e.direction === 'right' && e.distance >= 20) {
                            //util.showWarning('move right');
                        } else if (e.direction === 'up' && e.distance >= 20) {
                            //util.showWarning('move up');
                            //me.redirectTo('redirec/newsBrw');
                        } else if (e.direction === 'down' && e.distance >= 20) {
                            //util.showWarning('move down');
                        }
                    });

                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //bar.titleComponent.setZIndex(-1);
                    //store = Ext.getCmp('favoirteId').getStore();
                    //var proxy = store.getProxy();
                    //store.load(function (records, operation, success) {
                    //    if (success) {
                    //        if (records[0].data.id == "-1") {
                    //            Ext.getCmp('favoirteId').getStore().setData(null);
                    //        }
                    //    }
                    //}, this);
                    var _this = this;
                    var newCard = new Ext.Panel({

                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                            + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/1.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    Ext.getCmp("RCarouselis1").add(newCard);
                    newCard = new Ext.Panel({

                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                             + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/2.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    Ext.getCmp("RCarouselis1").add(newCard);

                    newCard = new Ext.Panel({

                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                             + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/3.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    Ext.getCmp("RCarouselis1").add(newCard);

                    newCard = new Ext.Panel({

                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                             + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/4.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    Ext.getCmp("RCarouselis1").add(newCard);

                    newCard = new Ext.Panel({

                        html: '<div id="adv" style="position:relative; width:100%; height:'
                            + parseInt(document.body.clientWidth * 1)
                             + "px; background-image:url(" + config.webSite + "Upload/Mobile/shop/adv/5.jpg); background-size: 100% "
                            + parseInt(document.body.clientWidth * 0.5) + 'px"></div>'
                    });
                    //newCard.setData(row);
                    Ext.getCmp("RCarouselis1").add(newCard);
                    Ext.getCmp("RCarouselis1").setActiveItem(0, "slide");
                },
                itemsingletap: function (list, index, target, record, e) {
                }
            },
        }
    },
    onSearchKeyUp: function (field) {
        var value = field.getValue();
        var id = field.id;
        var store = null;
        switch (id) {
            case 'SearchByName':
                store = Ext.getCmp('productListBrwId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "0") {
                            Ext.getCmp('productListBrwId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'SearchByNameOnline':
                store = Ext.getCmp('onlineAuctionProId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "0") {
                            Ext.getCmp('onlineAuctionProId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'SearchByNameTrade':
                store = Ext.getCmp('tradeTestId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "0") {
                            Ext.getCmp('tradeTestId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'SearchByNameDisplay':
                store = Ext.getCmp('productsDisplayId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "0") {
                            Ext.getCmp('productsDisplayId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'category_search_box':
                store = Ext.getCmp('categorySelectId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "0") {
                            Ext.getCmp('categorySelectId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
            case 'province_search_box':
                store = Ext.getCmp('provinceSelectId').getStore();
                store.clearFilter();
                var proxy = store.getProxy();
                proxy.setExtraParam('value', value);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records[0].data.id == "0") {
                            Ext.getCmp('provinceSelectId').getStore().setData(null);
                        }
                    }
                }, this);
                break;
        }
    },
    onSearchClearIconTap: function () {
        Ext.getCmp('productListBrwId').getStore().clearFilter();
        //Ext.getCmp('messageBrwId').getStore().clearFilter();
    },
    onMoreProductsTap: function () {
        //tempParams = { 'proCategoryType': 'All' };
        dict.add("proCategoryType", 'All');
        this.redirectTo('redirec/productListBrw');
    },
    onIntoProductListBrwTap: function () {
        dict.add("proCategoryType", 'Goods');
        this.redirectTo('redirec/productListBrw');
    },
    onIntoDamagedCarProTap: function () {
        dict.add("proCategoryType", 'Car');
        this.redirectTo('redirec/productListBrw');
    },
    onIntOnlineAuctionTap: function () {
        this.redirectTo('redirec/onlineAuctionPro');
    },
    onIntProductsDisplayTap: function () {
        this.redirectTo('redirec/productsDisplay');
    },
    onBuyersCentreTap: function () {
        Ext.getCmp("personalCenterId").addCls('x-tabBar-pressing');
        Ext.getCmp("homeSelectBtn").removeCls('x-tabBar-pressing');
        this.redirectTo('redirec/myPersonalCenter');
    },
    onPlatformIntroducedTap: function () {
        tempParams = { 'contentClassID': '23' };
        this.redirectTo('redirec/cMSContentBrw');
    },
    onBiddingRulesTap: function () {
        tempParams = { 'contentClassID': '52' };
        this.redirectTo('redirec/cMSContentBrw');
    },
    onShopHomeNewsTap: function () {
        this.redirectTo('redirec/shopHomeNews');
    },
    onGoodsTypeTap: function () {
        this.redirectTo('redirec/goodsType');
    },
    onTradeTestTap: function () {
        this.redirectTo('redirec/tradeTest');
    },
    onBMapTap: function () {
        // this.redirectTo('redirec/mapLocation');
        this.redirectTo('redirec/MobileAttend');
    },

    //首页下方list 
    onHomeProductTap: function (obj, index, target, record, e, eOpts) {
        if (typeof (Ext.Viewport.EmptyView) == "undefined") {
            Ext.Viewport.EmptyView = Ext.create('ChuangCai.view.system.EmptyView');
        }
        if (util.getUserId() == null) {
            productRecord = record;
        }
        Ext.Viewport.EmptyView.setRecord(record);
        //util.showMessage("正在加载...", true);
        this.redirectTo('redirec/productListView');
    },
    onIntoTestTap: function () {
        //util.showMessage("active success", true);
    },
    //productBrw页，区域，分类，排序
    onRegionSelectTap: function () {
        Ext.getCmp("regionSelect").setCls("m-select-field m-select-field-active");
        if (!this.proRegionSelect) {
            var proProvinceStore = Ext.create("Ext.data.Store", {
                model: 'ChuangCai.model.shop.Province',
                pageSize: 100,
                proxy: {
                    type: "ajax",
                    url: util.getMobileSite() + 'Shop/GetProvince.ashx?provinceTypeId=province',
                    pageParam: 'currentPage', //当前页码  
                    limitParam: 'pageSize',//每页条数
                    reader: {
                        type: "json",
                        rootProperty: 'result',
                        totalProperty: 'totalCounts'
                    }
                },
                autoLoad: true
            });
            this.proRegionSelect = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: 2,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("regionSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "proRegionSelectId",
                    width: "100px",
                    store: proProvinceStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Province_{id}" style="width: 100%">{province_name_c}</td>', "</table></div>"]
                }]
            });
            proProvinceStore.load();
            Ext.Viewport.add(this.proRegionSelect);
            var _this = this;
            Ext.getCmp("proRegionSelectId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.proRegionSelect.hide();
                dict.add("provinceId", record.data.id);
                Ext.getCmp("regionSelect").setHtml(record.data.province_name_c + "<span></span>");
                Ext.getCmp("regionSelect").setCls("m-select-field");

                //bar.setTitle(record.data.typename);//更改标题
                var getProvinceId = record.data.id;//右tap页状态筛选
                store = Ext.getCmp('productListBrwId').getStore();
                var proxy = store.getProxy();
                proxy.setExtraParam('province', getProvinceId, 'type', dict.get("categoryTypeId"), 'sortingType', dict.get("sortingType"));
                //Ext.getCmp('productListBrwId').getStore().loadPage(1);
                store.load(function (records, operation, success) {
                    if (success) {
                        if (records.length == 0) {
                            Ext.getCmp('productListBrwId').getStore().setData(null);
                        }
                    }
                }, this);
            })
        }
        else {
            if (this.proRegionSelect.getHidden()) {
                this.proRegionSelect.show()
                Ext.getCmp("regionSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("regionSelect").setCls("m-select-field");
            }
        }
    },
    onCategorySelect: function () {
        Ext.getCmp("categorySelect").setCls("m-select-field m-select-field-active");
        if (!this.productCategory) {
            var productCategoryStore = Ext.create("ChuangCai.store.shop.ProductCategory");
            this.productCategory = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.285,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("categorySelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "productCategoryId",
                    width: "100px",
                    store: productCategoryStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{typename}</td>', "</table></div>"]
                }]
            });
            productCategoryStore.load();
            Ext.Viewport.add(this.productCategory);
            var _this = this;
            Ext.getCmp("productCategoryId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.productCategory.hide();
                Ext.getCmp("categorySelect").setHtml(record.data.typename + "<span></span>");
                Ext.getCmp("categorySelect").setCls("m-select-field");
                dict.add("categoryTypeId", record.data.id);
                store = Ext.getCmp('productListBrwId').getStore();
                //Ext.getCmp('productListBrwId').getStore().loadPage(1);
                var proxy = store.getProxy();
                proxy.setExtraParam('type', record.data.id, 'province', dict.get("provinceId"));
                store.load();
            })
        }
        else {
            if (this.productCategory.getHidden()) {
                this.productCategory.show()
                Ext.getCmp("categorySelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("categorySelect").setCls("m-select-field");
            }
        }
    },
    onSortingSelect: function () {
        Ext.getCmp("sortingSelect").setCls("m-select-field m-select-field-active");
        if (!this.productSorting) {
            var productSortingStore = Ext.create("Ext.data.Store", {
                model: 'ChuangCai.model.shop.Category',
                sorters: 'id',
                data: [{
                    id: 'default', name: '默认'
                }, {
                    id: 'timeAsc', name: '时间 (远->近)'
                }, {
                    id: 'timeDesc', name: '时间 (近->远)'
                }, {
                    id: 'priceAsc', name: '价格 (低->高)'
                }, {
                    id: 'priceDesc', name: '价格 (高->低)'
                }],
                autoLoad: true
            });
            this.productSorting = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.285 * 2,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("sortingSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                width: (document.body.clientWidth) * 0.285,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "productSortingId",
                    width: "100px",
                    store: productSortingStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{name}</td>', "</table></div>"]
                }]
            });
            productSortingStore.load();
            Ext.Viewport.add(this.productSorting);
            var _this = this;
            Ext.getCmp("productSortingId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.productSorting.hide();
                Ext.getCmp("sortingSelect").setHtml(record.data.name);
                Ext.getCmp("sortingSelect").setCls("m-select-field");
                dict.add("sortingType", record.data.id);
                store = Ext.getCmp('productListBrwId').getStore();
                //Ext.getCmp('productListBrwId').getStore().loadPage(1);
                var proxy = store.getProxy();
                proxy.setExtraParam('sortingType', record.data.id, 'province', dict.get("provinceId"), 'type', dict.get("categoryTypeId"));
                store.load();
            })
        }
        else {
            if (this.productSorting.getHidden()) {
                this.productSorting.show()
                Ext.getCmp("sortingSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("sortingSelect").setCls("m-select-field");
            }
        }
    },

    //-----------------------------------------------------------add by wind
    //tradeTestId页，区域，分类，排序
    onRegionSelectTradeTap: function () {
        Ext.getCmp("regionSelect").setCls("m-select-field m-select-field-active");
        if (!this.proRegionSelect) {
            var proProvinceStore = Ext.create("Ext.data.Store", {
                model: 'ChuangCai.model.shop.Province',
                pageSize: 100,
                proxy: {
                    type: "ajax",
                    url: util.getMobileSite() + 'Shop/GetProvince.ashx?provinceTypeId=province',
                    pageParam: 'currentPage', //当前页码  
                    limitParam: 'pageSize',//每页条数
                    reader: {
                        type: "json",
                        rootProperty: 'result',
                        totalProperty: 'totalCounts'
                    }
                },
                autoLoad: true
            });
            this.proRegionSelect = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: 2,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("regionSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "proRegionSelectId",
                    width: "100px",
                    store: proProvinceStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Province_{id}" style="width: 100%">{province_name_c}</td>', "</table></div>"]
                }]
            });
            proProvinceStore.load();
            Ext.Viewport.add(this.proRegionSelect);
            var _this = this;
            Ext.getCmp("proRegionSelectId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.proRegionSelect.hide();
                dict.add("provinceId", record.data.id);
                Ext.getCmp("regionSelect").setHtml(record.data.province_name_c + "<span></span>");
                Ext.getCmp("regionSelect").setCls("m-select-field");

                //bar.setTitle(record.data.typename);//更改标题
                var getProvinceId = record.data.id;//右tap页状态筛选
                store = Ext.getCmp('tradeTestId').getStore();
                //Ext.getCmp('onlineAuctionProId').getStore().loadPage(1);
                var proxy = store.getProxy();
                proxy.setExtraParam('province', getProvinceId, 'type', dict.get("categoryTypeId"), 'sortingType', dict.get("sortingType"));
                store.load();
            })
        }
        else {
            if (this.proRegionSelect.getHidden()) {
                this.proRegionSelect.show()
                Ext.getCmp("regionSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("regionSelect").setCls("m-select-field");
            }
        }
    },
    onCategorySelectTradeTap: function () {
        Ext.getCmp("categorySelect").setCls("m-select-field m-select-field-active");
        if (!this.productCategory) {
            var productCategoryStore = Ext.create("ChuangCai.store.shop.ProductCategory");
            this.productCategory = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.285,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("categorySelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "productCategoryId",
                    width: "100px",
                    store: productCategoryStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{typename}</td>', "</table></div>"]
                }]
            });
            productCategoryStore.load();
            Ext.Viewport.add(this.productCategory);
            var _this = this;
            Ext.getCmp("productCategoryId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.productCategory.hide();
                Ext.getCmp("categorySelect").setHtml(record.data.typename + "<span></span>");
                Ext.getCmp("categorySelect").setCls("m-select-field");
                dict.add("categoryTypeId", record.data.id);
                store = Ext.getCmp('tradeTestId').getStore();
                var proxy = store.getProxy();
                proxy.setExtraParam('type', record.data.id, 'province', dict.get("provinceId"));
                store.load();
            })
        }
        else {
            if (this.productCategory.getHidden()) {
                this.productCategory.show()
                Ext.getCmp("categorySelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("categorySelect").setCls("m-select-field");
            }
        }
    },
    onSortingSelectTradeTap: function () {
        Ext.getCmp("sortingSelect").setCls("m-select-field m-select-field-active");
        if (!this.productSorting) {
            var productSortingStore = Ext.create("Ext.data.Store", {
                model: 'ChuangCai.model.shop.Category',
                sorters: 'id',
                data: [{
                    id: 'default', name: '默认'
                }, {
                    id: 'timeAsc', name: '时间 (远->近)'
                }, {
                    id: 'timeDesc', name: '时间 (近->远)'
                }, {
                    id: 'priceAsc', name: '价格 (低->高)'
                }, {
                    id: 'priceDesc', name: '价格 (高->低)'
                }],
                autoLoad: true
            });
            this.productSorting = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.285 * 2,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("sortingSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                width: (document.body.clientWidth) * 0.285,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "productSortingId",
                    width: "100px",
                    store: productSortingStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{name}</td>', "</table></div>"]
                }]
            });
            productSortingStore.load();
            Ext.Viewport.add(this.productSorting);
            var _this = this;
            Ext.getCmp("productSortingId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.productSorting.hide();
                Ext.getCmp("sortingSelect").setHtml(record.data.name + "<span></span>");
                Ext.getCmp("sortingSelect").setCls("m-select-field");
                dict.add("sortingType", record.data.id);
                store = Ext.getCmp('tradeTestId').getStore();
                //Ext.getCmp('onlineAuctionProId').getStore().loadPage(1);
                var proxy = store.getProxy();
                proxy.setExtraParam('sortingType', record.data.id, 'province', dict.get("provinceId"), 'type', dict.get("categoryTypeId"));
                store.load();
            })
        }
        else {
            if (this.productSorting.getHidden()) {
                this.productSorting.show()
                Ext.getCmp("sortingSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("sortingSelect").setCls("m-select-field");
            }
        }
    },
    //-----------------------------------------------------------add by wind

    //onlineAuctionProId页，区域，分类，排序
    onRegionSelectOnlineTap: function () {
        Ext.getCmp("regionSelect").setCls("m-select-field m-select-field-active");
        if (!this.proRegionSelect) {
            var proProvinceStore = Ext.create("Ext.data.Store", {
                model: 'ChuangCai.model.shop.Province',
                pageSize: 100,
                proxy: {
                    type: "ajax",
                    url: util.getMobileSite() + 'Shop/GetProvince.ashx?provinceTypeId=province',
                    pageParam: 'currentPage', //当前页码  
                    limitParam: 'pageSize',//每页条数
                    reader: {
                        type: "json",
                        rootProperty: 'result',
                        totalProperty: 'totalCounts'
                    }
                },
                autoLoad: true
            });
            this.proRegionSelect = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: 2,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("regionSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "proRegionSelectId",
                    width: "100px",
                    store: proProvinceStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Province_{id}" style="width: 100%">{province_name_c}</td>', "</table></div>"]
                }]
            });
            proProvinceStore.load();
            Ext.Viewport.add(this.proRegionSelect);
            var _this = this;
            Ext.getCmp("proRegionSelectId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.proRegionSelect.hide();
                dict.add("provinceId", record.data.id);
                Ext.getCmp("regionSelect").setHtml(record.data.province_name_c + "<span></span>");
                Ext.getCmp("regionSelect").setCls("m-select-field");

                //bar.setTitle(record.data.typename);//更改标题
                var getProvinceId = record.data.id;//右tap页状态筛选
                store = Ext.getCmp('onlineAuctionProId').getStore();
                //Ext.getCmp('onlineAuctionProId').getStore().loadPage(1);
                var proxy = store.getProxy();
                proxy.setExtraParam('province', getProvinceId, 'type', dict.get("categoryTypeId"), 'sortingType', dict.get("sortingType"));
                store.load();
            })
        }
        else {
            if (this.proRegionSelect.getHidden()) {
                this.proRegionSelect.show()
                Ext.getCmp("regionSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("regionSelect").setCls("m-select-field");
            }
        }
    },
    onCategoryOnlineSelect: function () {
        Ext.getCmp("categorySelect").setCls("m-select-field m-select-field-active");
        if (!this.productCategory) {
            var productCategoryStore = Ext.create("ChuangCai.store.shop.ProductCategory");
            this.productCategory = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.285,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("categorySelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "productCategoryId",
                    width: "100px",
                    store: productCategoryStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{typename}</td>', "</table></div>"]
                }]
            });
            productCategoryStore.load();
            Ext.Viewport.add(this.productCategory);
            var _this = this;
            Ext.getCmp("productCategoryId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.productCategory.hide();
                Ext.getCmp("categorySelect").setHtml(record.data.typename + "<span></span>");
                Ext.getCmp("categorySelect").setCls("m-select-field");
                dict.add("categoryTypeId", record.data.id);
                store = Ext.getCmp('onlineAuctionProId').getStore();
                var proxy = store.getProxy();
                proxy.setExtraParam('type', record.data.id, 'province', dict.get("provinceId"));
                store.load();
            })
        }
        else {
            if (this.productCategory.getHidden()) {
                this.productCategory.show()
                Ext.getCmp("categorySelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("categorySelect").setCls("m-select-field");
            }
        }
    },
    onSortingOnlineSelect: function () {
        Ext.getCmp("sortingSelect").setCls("m-select-field m-select-field-active");
        if (!this.productSorting) {
            var productSortingStore = Ext.create("Ext.data.Store", {
                model: 'ChuangCai.model.shop.Category',
                sorters: 'id',
                data: [{
                    id: 'default', name: '默认'
                }, {
                    id: 'timeAsc', name: '时间 (远->近)'
                }, {
                    id: 'timeDesc', name: '时间 (近->远)'
                }, {
                    id: 'priceAsc', name: '价格 (低->高)'
                }, {
                    id: 'priceDesc', name: '价格 (高->低)'
                }],
                autoLoad: true
            });
            this.productSorting = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.285 * 2,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("sortingSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                width: (document.body.clientWidth) * 0.285,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "productSortingId",
                    width: "100px",
                    store: productSortingStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{name}</td>', "</table></div>"]
                }]
            });
            productSortingStore.load();
            Ext.Viewport.add(this.productSorting);
            var _this = this;
            Ext.getCmp("productSortingId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.productSorting.hide();
                Ext.getCmp("sortingSelect").setHtml(record.data.name + "<span></span>");
                Ext.getCmp("sortingSelect").setCls("m-select-field");
                dict.add("sortingType", record.data.id);
                store = Ext.getCmp('onlineAuctionProId').getStore();
                //Ext.getCmp('onlineAuctionProId').getStore().loadPage(1);
                var proxy = store.getProxy();
                proxy.setExtraParam('sortingType', record.data.id, 'province', dict.get("provinceId"), 'type', dict.get("categoryTypeId"));
                store.load();
            })
        }
        else {
            if (this.productSorting.getHidden()) {
                this.productSorting.show()
                Ext.getCmp("sortingSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("sortingSelect").setCls("m-select-field");
            }
        }
    },
    //productsDisplay页，区域，分类，排序
    onRegionSelectDisplayTap: function () {
        Ext.getCmp("regionSelect").setCls("m-select-field m-select-field-active");
        if (!this.proRegionSelect) {
            var proProvinceStore = Ext.create("Ext.data.Store", {
                model: 'ChuangCai.model.shop.Province',
                pageSize: 100,
                proxy: {
                    type: "ajax",
                    url: util.getMobileSite() + 'Shop/GetProvince.ashx?provinceTypeId=province',
                    pageParam: 'currentPage', //当前页码  
                    limitParam: 'pageSize',//每页条数
                    reader: {
                        type: "json",
                        rootProperty: 'result',
                        totalProperty: 'totalCounts'
                    }
                },
                autoLoad: true
            });
            this.proRegionSelect = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: 2,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("regionSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "proRegionSelectId",
                    width: "100px",
                    store: proProvinceStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Province_{id}" style="width: 100%">{province_name_c}</td>', "</table></div>"]
                }]
            });
            proProvinceStore.load();
            Ext.Viewport.add(this.proRegionSelect);
            var _this = this;
            Ext.getCmp("proRegionSelectId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.proRegionSelect.hide();
                dict.add("provinceId", record.data.id);
                Ext.getCmp("regionSelect").setHtml(record.data.province_name_c + "<span></span>");
                Ext.getCmp("regionSelect").setCls("m-select-field");

                //bar.setTitle(record.data.typename);//更改标题
                var getProvinceId = record.data.id;//右tap页状态筛选
                store = Ext.getCmp('productsDisplayId').getStore();
                var proxy = store.getProxy();
                proxy.setExtraParam('province', getProvinceId, 'type', dict.get("categoryTypeId"), 'sortingType', dict.get("sortingType"));
                store.load();
            })
        }
        else {
            if (this.proRegionSelect.getHidden()) {
                this.proRegionSelect.show()
                Ext.getCmp("regionSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("regionSelect").setCls("m-select-field");
            }
        }
    },
    onCategoryDisplaySelect: function () {
        Ext.getCmp("categorySelect").setCls("m-select-field m-select-field-active");
        if (!this.productCategory) {
            var productCategoryStore = Ext.create("ChuangCai.store.shop.ProductCategory");
            this.productCategory = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.285,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("categorySelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "productCategoryId",
                    width: "100px",
                    store: productCategoryStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{typename}</td>', "</table></div>"]
                }]
            });
            productCategoryStore.load();
            Ext.Viewport.add(this.productCategory);
            var _this = this;
            Ext.getCmp("productCategoryId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.productCategory.hide();
                Ext.getCmp("categorySelect").setHtml(record.data.typename + "<span></span>");
                Ext.getCmp("categorySelect").setCls("m-select-field");
                dict.add("categoryTypeId", record.data.id);
                store = Ext.getCmp('productsDisplayId').getStore();
                var proxy = store.getProxy();
                proxy.setExtraParam('type', record.data.id, 'province', dict.get("provinceId"));
                store.load();
            })
        }
        else {
            if (this.productCategory.getHidden()) {
                this.productCategory.show()
                Ext.getCmp("categorySelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("categorySelect").setCls("m-select-field");
            }
        }
    },
    onSortingDisplaySelect: function () {
        Ext.getCmp("sortingSelect").setCls("m-select-field m-select-field-active");
        if (!this.productSorting) {
            var productSortingStore = Ext.create("Ext.data.Store", {
                model: 'ChuangCai.model.shop.Category',
                sorters: 'id',
                data: [{
                    id: 'default', name: '默认'
                }, {
                    id: 'timeAsc', name: '时间 (远->近)'
                }, {
                    id: 'timeDesc', name: '时间 (近->远)'
                }, {
                    id: 'priceAsc', name: '价格 (低->高)'
                }, {
                    id: 'priceDesc', name: '价格 (高->低)'
                }],
                autoLoad: true
            });
            this.productSorting = new Ext.Panel({
                hideWhenMaskTap: true,
                hideOnMaskTap: true,
                zIndex: 11,
                top: 77,
                modal: true,
                left: (document.body.clientWidth) * 0.285 * 2,
                style: "box-shadow: #E5E5E5 0 0.2em 0.6em;padding: 10px 10px;background-color: #fff;",
                showAnimation: {
                    type: "slide",
                    direction: "top"
                },
                hideAnimation: {
                    type: "slideOut",
                    direction: "bottom"
                },
                listeners: {
                    hide: function () {
                        Ext.getCmp("sortingSelect").setCls("m-select-field");
                    }
                },
                height: document.body.clientHeight / 2,
                width: (document.body.clientWidth) * 0.285,
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "list",
                    id: "productSortingId",
                    width: "100px",
                    store: productSortingStore,
                    cls: "m-select-box-list",
                    height: document.body.clientHeight / 2 - 20,
                    itemTpl: ['<div style="color: black; font-size: 14px; ">', '<table style="width: 100%">', '<tr><td id="Category_{id}" style="width: 100%">{name}</td>', "</table></div>"]
                }]
            });
            productSortingStore.load();
            Ext.Viewport.add(this.productSorting);
            var _this = this;
            Ext.getCmp("productSortingId").addListener("itemtap",
            function (dataView, index, target, record) {
                _this.productSorting.hide();
                Ext.getCmp("sortingSelect").setHtml(record.data.name + "<span></span>");
                Ext.getCmp("sortingSelect").setCls("m-select-field");
                dict.add("sortingType", record.data.id);
                store = Ext.getCmp('productsDisplayId').getStore();
                var proxy = store.getProxy();
                proxy.setExtraParam('sortingType', record.data.id, 'province', dict.get("provinceId"), 'type', dict.get("categoryTypeId"));
                store.load();
            })
        }
        else {
            if (this.productSorting.getHidden()) {
                this.productSorting.show()
                Ext.getCmp("sortingSelect").setCls("m-select-field m-select-field-active");
            } else {
                Ext.getCmp("sortingSelect").setCls("m-select-field");
            }
        }
    },
    onCollectionProductTap: function () {
        var productId = Ext.getCmp('loadProductId').getValue();
        var collectionFlag = Ext.getCmp('loadCollectionId').getValue();
        if (util.getUserId()) {
            Ext.Ajax.request({
                url: util.getMobileSite() + "Shop/InsertCollectionProduct.ashx?userId=" + util.getUserId(),
                params: {
                    productId: productId, collectionFlag: collectionFlag
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    if (collectionFlag == "Y") {
                        Ext.getCmp('loadCollectionId').setValue("N");
                        Ext.getCmp('collectionProduct').setHtml("<img style='width:20px;height:20px;' src='" + config.webSite + "Upload/Mobile/shop/main/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>收藏</p>");
                        util.showMessage("已取消收藏", true, 0.5);
                    }
                    else {
                        Ext.getCmp('loadCollectionId').setValue("Y");
                        Ext.getCmp('collectionProduct').setHtml("<img style='width:20px;height:20px;' src='" + config.webSite + "Upload/Mobile/shop/main/already_collected.png'/><p style='text-align:center;font-size: 12px;color: #999;'>已收藏</p>");
                        util.showMessage("已收藏", true, 0.5);

                    }
                    //var msg = result.responseText;
                    //var msgs = Ext.decode(msg);
                    //var productName = msgs[0]['productName'];
                    //Ext.getCmp('subjectMatterIntroduceContentId').setHtml("<p style='text-align:center;font-size: 16px;padding-top:5px;'>" + productName + "</p></br>" + description);
                    //Ext.getCmp('biddingInstructionsContentId').setHtml(bidNeedKnow);
                    //Ext.getCmp('biddingAnnouncementContentId').setHtml(bidNotice);
                },
                failure: function (result, context) {
                    util.showMessage("网络异常，请重试", true);
                },
                method: "POST"
            });
        }
        else {
            util.showWarning("请您先登录", true);
        }
    },
    onProductIntroduceTap: function () {
        this.redirectTo('redirec/productListDetail');
    },
    onProductOfferRecordTap: function () {
        this.redirectTo('redirec/offerRecord');
    },
    onSubmitEnsureMonTap: function () {
        var me = this;
        if (util.getUserId()) {
            if (dict.get("viewDisableFlag") == "Y") {
                util.showMessage("活动已结束", true, 0.5);
            } else if (dict.get("viewDisableFlag") == "N") {
                util.showMessage("活动未开始", true, 0.5);
            } else {
                var aRecord = Ext.Viewport.EmptyView.getRecord();
                var productId = aRecord.data.id;
                var productDeposit = aRecord.data.deposit;
                var productName = aRecord.data.productname;
                Ext.Ajax.request({
                    url: util.getMobileSite() + "Shop/PaySecurityDeposit.ashx",
                    params: {
                        userId: util.getUserId(), productId: productId,
                        productDeposit: productDeposit, payType: "alipay"
                    },
                    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                    success: function (result, context) {
                        var json = result.responseText;
                        json = Ext.decode(json);
                        if (json[0]["payFlag"] == "hasPay") {
                            util.showMessage("保证金您已提交，请耐心等待审核！", true, 1);
                            return;
                        }
                        dict.add("depositRowId", json[0]["rowId"]);
                        var orderNo = json[0]["orderNo"];
                        var out_trade_no = orderNo;//15位订单号
                        var subject = productName;
                        var bodtxt = productName;
                        var total_fee = productDeposit;
                        //if (util.getClientType() == "iPhone" || util.getClientType() == "iPad") {
                        if (util.isIOS() == true) {
                            window.plugins.Pgalipay.alipay(
                                out_trade_no, subject, bodtxt, total_fee,
                                function (success) {
                                    //me.onSurePay(rowId);
                                    alert("3");
                                    //me.redirectTo('redirec/paymentSuccess');
                                }, function (fail) {
                                    alert("encoding failed: " + fail);
                                    //me.redirectTo('redirec/paymentFailure');
                                }
                            );
                        }
                        else if (util.isAndroid() == true) {
                            //if (util.getClientType() == "Android") {
                            window.plugins.Pgalipay.alipay(
                               out_trade_no, subject, bodtxt, total_fee,
                                    function (success) {
                                        //
                                        //alert("支付成功！");
                                        //支付成功
                                        //var result = success;
                                        //if (result.indexOf("9000") >= 0) {
                                        //    me.redirectTo('redirec/paymentSuccess');
                                        //}
                                        //else if (result.indexOf("6001") >= 0) {
                                        //    //用户放弃支付
                                        //    me.redirectTo('redirec/paymentFailure');
                                        //}
                                        //else{
                                        //    me.redirectTo('redirec/paymentFailure');
                                        //}
                                    },
                                    function (fail) {
                                        //me.redirectTo('redirec/paymentFailure');
                                        alert("encoding failed: " + fail);
                                    }
                            );

                        } else if (util.isWeixin() == true) {
                            wxPayRequest(out_trade_no, subject, bodtxt, total_fee, rowId);
                        }
                    },
                    failure: function (result, context) {
                        var msg = result.responseText;
                        util.showMessage(msg, true);
                    },
                    method: "POST"
                });
            }
        }
        else {
            this.onEnsureLogin();
        }
    },
    onSubmitOfferRecordTap: function () {
        if (dict.get("viewDisableFlag") == "Y") {
            util.showMessage("活动已结束", true, 0.5);
        } else if (dict.get("viewDisableFlag") == "N") {
            util.showMessage("活动未开始", true, 0.5);
        } else {
            var stepPrice = parseFloat(temParams.increaseprice);
            if (dict.get("auctionClass") == "Flash") {
                var minPrice = parseFloat(temParams.current_price);
            } else {
                var minPrice = parseFloat(temParams.current_price) + stepPrice;
            }
            //alert(dict.get("auctionClass"));
            var productId = temParams.productId;
            Ext.Msg.show({
                title: '出价',
                width: "90%",
                cls: 'x-msgbox-uuchina',
                buttons: [{
                    text: "确定",
                    itemId: "ok",
                    flex: 1,
                    cls: "msg-button msg-button-left"
                }, {
                    text: "取消",
                    itemId: "no",
                    flex: 1,
                    cls: "msg-button msg-button-right"
                }],
                items: [{
                    xtype: "spinnerfield",
                    id: "offerPriceValue",
                    minValue: minPrice,
                    stepValue: stepPrice
                }],
                listeners: {
                    show: function (obj, eOpts) {
                        Ext.getCmp("offerPriceValue").setDisabled(true);
                    }
                },
                fn: function (btn, value) {
                    if (btn == 'ok') {
                        var offerPrice = Ext.getCmp('offerPriceValue').getValue();
                        Ext.Ajax.request({
                            url: util.getMobileSite() + "Shop/InsertOfferRecord.ashx",
                            params: {
                                productId: productId, userId: util.getUserId(), offerPrice: offerPrice
                            },
                            headers: { 'X-Requested-With': 'XMLHttpRequest' },
                            success: function (result, context) {
                                Ext.getCmp('productPrice').setHtml("￥" + offerPrice + "<div style='float:left;font-size:14px;color:#4169E1;padding-left:10px;padding-right:20px;'>当前价</div></br>");
                                util.showMessage("出价成功", true);
                            },
                            failure: function (result, context) {
                                util.showMessage("网络异常，请重试", true);
                            },
                            method: "POST"
                        });
                    }
                }
            });
        }
    },
    //确认支付
    onSurePay: function (rowId) {
        Ext.Ajax.request({
            url: util.getMobileSite() + "Shop/PaySecurityDeposit.ashx",
            params: {
                rowId: rowId, delFlag: "updateIsPay", payType: "alipay"
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            success: function (result, context) {
                Ext.getCmp('submitEnsureMon').setHidden(true);
                Ext.getCmp('submitOfferRecord').setHidden(false);
            },
            failure: function (result, context) {
                var msg = result.responseText;
                util.showMessage(msg, true);
            },
            method: "POST"
        });
    },
    //确认登录
    onEnsureLogin: function () {
        Ext.Msg.show({
            title: "您还未登录",
            msg: null,
            width: "90%",
            cls: 'x-msgbox-uuchina',
            buttons: [{
                text: "确定",
                itemId: "ok",
                flex: 1,
                pressedCls: "i-msg-show",
                cls: "msg-button msg-button-left"
            }, {
                text: "取消",
                itemId: "no",
                flex: 1,
                pressedCls: "i-msg-show",
                cls: "msg-button msg-button-right"
            }],
            items: [{
                xtype: "panel",
                id: "msgContent",
                style: "margin-top: 4px;margin-bottom: 4px;margin-left: 22.5%;",
                html: "您是否要跳转至登录页?"
            }],
            fn: function test(btn) {
                if (btn == 'ok') {
                    Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
                        success: function (user) {
                            user.erase();
                        }
                    });
                    config.user = false;
                    Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
                }
                return;
            }
        });
    },
    onProductMapTap: function () {
        var lat = dict.get("lat");
        var lon = dict.get("lon");
        if (lat != "" || lon != "") {
            this.redirectTo('redirec/productMap');
        } else {
            util.showMessage("该拍品无位置信息", true);
        }
    },
    onProductImageTap: function () {
        this.redirectTo('redirec/imageViewDetail');
    },
    onProductVideoTap: function () {
        if (util.isWeixin() == true) {
            util.showMessage("微信端不支持播放！", true);
        } else {
            var url = dict.get("videoUrl");
            if (url != "") {
                url = config.webSite + "Video/" + url;
                //url = 'http://www.e-baopai.com/Tools/testVideo.flv';
                //alert(url);
                if (util.getClientType() == "iPhone" || util.getClientType() == "iPad") {
                    window.plugins.PgmediaPlayer.vplay(
                       url, function (success) {
                           alert(success);
                       }, function (fail) {
                           alert("encoding failed: " + fail);
                       });
                }
                else if (util.getClientType() == "Android") {
                    navigator.video.vplay(
                   url, function (success) {
                       alert(success);
                   }, function (fail) {
                       alert("encoding failed: " + fail);
                   });
                }

            } else {
                util.showMessage("该拍品无视频", true);
            }
        }
    },
    onTapProductTest: function () {
        this.redirectTo('redirec/progressDetail');
    },
    onTapCameraTake: function (e, node) {
        Ext.getCmp("actionsheetDisplay").setHidden(true);
        Ext.getCmp("addProductsId").setMasked(false);
        //util.showWarning("onTapCameraTake");
        var me = this;        navigator.camera.getPicture(function (imageURI) {
            //util.showWarning(imageURI);
            if (fileCount == 3) {
                util.showWarning("一次最多只能上传三张图片！")
            }
            else {
                var me = this;
                var image = Ext.getCmp("loadedImage" + fileCount);
                image.setSrc(imageURI);
                //pickUrl = imageURI;
                fileArray[fileCount] = imageURI;
                fileCount = fileCount + 1;
            }
        }, function (message) {
            util.showWarning(message);
        }, {
            sourceType: Camera.PictureSourceType.CAMERA,        //相机获取（默认的）
            destinationType: Camera.DestinationType.FILE_URI,    //返回图像文件的URI
            quality: 50,  //图像质量[0,100],必须低于50，否则可能会引起iPhone上内存不足
            //allowEdit: false,//只有iPhone下true才有效
            saveToPhotoAlbum: true,
            encodingType: Camera.EncodingType.JPEG,
            //targetWidth:500,  
            //targetHeight:730,

        });
    },
    onTapCameraSelect: function (e, node) {
        Ext.getCmp("actionsheetDisplay").setHidden(true);
        Ext.getCmp("addProductsId").setMasked(false);
        //util.showWarning("onTapCameraSelect");
        var me = this;        navigator.camera.getPicture(function (imageURI) {
            //util.showWarning(imageURI);
            if (fileCount == 3) {
                util.showWarning("一次最多只能上传三张图片！")
            }
            else {
                var me = this;
                var image = Ext.getCmp("loadedImage" + fileCount);
                image.setSrc(imageURI);
                fileArray[fileCount] = imageURI;
                fileCount = fileCount + 1;
            }
        }, function (message) {
            util.showWarning(message);
        }, {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,        //相册读取
            destinationType: Camera.DestinationType.FILE_URI,    //返回图像文件的URI
            quality: 50,  //图像质量[0,100],必须低于50，否则可能会引起iPhone上内存不足
            //allowEdit: true,
            saveToPhotoAlbum: true,
            mediaType: Camera.MediaType.PICTURE  //设置选择图片的类型PICTURE(图片)、VIDEO（video类型）、ALLMEDIA （全部）
            //targetWidth:500,  
            //targetHeight:730,

        });
    },
    onSearchProBtnTap: function (obj, index, target, record, e, eOpts) {
        var searchKeyWord = Ext.getCmp('search_content_box').getValue();
        if (searchKeyWord) {
            Ext.Ajax.request({
                url: util.getMobileSite() + "Shop/InsertSearchRecord.ashx",
                params: {
                    searchKeyWord: searchKeyWord, userId: util.getUserId()
                },
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                success: function (result, context) {
                    Ext.getCmp("loadSearchResult").setValue("OK");
                    tempParams = { 'searchKeyWord': searchKeyWord };
                },
                failure: function (result, context) {
                    Ext.getCmp("loadSearchResult").setValue("NO");
                    util.showMessage("网络异常，请重试", true);
                },
                method: "POST"
            });
            var loadSearchResult = Ext.getCmp("loadSearchResult").getValue();
            if (loadSearchResult == "OK") {
                this.redirectTo('redirec/searchResultBrw');
                Ext.getCmp('search_content_box').setValue("");
            }
        }
        else {
            util.showWarning("请输入关键字");
        }
    },
    onClearSearchBtnTap: function (obj, index, target, record, e, eOpts) {
        Ext.Ajax.request({
            url: util.getMobileSite() + "Shop/InsertSearchRecord.ashx",
            params: {
                clearSearchRecord: "Y", userId: util.getUserId()
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            success: function (result, context) {
            },
            failure: function (result, context) {
                util.showMessage("网络异常，请重试", true);
            },
            method: "POST"
        });
        util.showWarning("清空完成");
        store = Ext.getCmp('searchBrwId').getStore();
        var proxy = store.getProxy();
        store.load(function (records, operation, success) {
            if (success) {
                if (records.length == 0) {
                    Ext.getCmp('searchBrwId').getStore().setData(null);
                }
            }
        }, this);
    },
    onTextTap: function () {
        var userName = util.getUserName();
        util.showMessage(userName);
    },
    onIntoMyPersonalInfoTap: function () {
        this.redirectTo('redirec/myPersonalInfo/Y');
        //loginDirect(this, 'myPersonalInfo');
    },
    onCommentsTestBtnTap: function () {
        this.redirectTo('redirec/writeCommentsBrw');
    },
    onCollectionProductViewTap: function () {
        //this.redirectTo('redirec/myCollectionProduct/Y');
        loginDirect(this, 'myCollectionProduct');
    },
    onMyFootPrintTap: function () {
        //util.showMessage("active success", true);
        // this.redirectTo('redirec/myFootPrint/Y');
        loginDirect(this, 'myFootPrint');
    },
    onMyBinddingProTap: function () {
        //util.showMessage("active success", true);
        //this.redirectTo('redirec/myBiddingBrw/Y');
        loginDirect(this, 'myBiddingBrw');
    },
    onPublishedProductTap: function () {
        loginDirect(this, 'myPublishedPro');
        dict.add("addProductFlag", "N");
        //this.redirectTo('redirec/myPublishedPro/Y');
    },
    onAddProductTap: function () {
        tempParams = { 'productPassId': 'N' };
        dict.add("addProductFlag", "Y");
        loginDirect(this, 'addProducts');
    },
    onIntoCommentsSubmittedTap: function () {
        this.redirectTo('redirec/UserFeedbackInfo');
    },
    onAboutBaoPaiTap: function () {
        this.redirectTo('redirec/serviceTermsBrw');
    },
    onServiceTermsDetailTap: function () {
        this.redirectTo('redirec/serviceTermsBrw');
    },
    onAboutBaoPaiDetailTap: function () {
        this.redirectTo('redirec/userRegister');
    },
    onUserPhotoTap: function () {
        this.redirectTo('redirec/myPersonalPhotoSet');
    },
    //更新头像
    onUserCameraTake: function (e, node) {
        //util.showWarning("onUserCameraTake");
        var me = this;        navigator.camera.getPicture(function (imageURI) {
            var image = Ext.getCmp("userPhoto0");
            image.setSrc(imageURI);
            userPhoto = imageURI;
            me.OnTapUploadUserPhoto(userPhoto);
        }, function (message) {
            //util.showWarning(message);
        }, {
            sourceType: Camera.PictureSourceType.CAMERA,        //相机获取（默认的）
            destinationType: Camera.DestinationType.FILE_URI,    //返回图像文件的URI
            quality: 50,  //图像质量[0,100],必须低于50，否则可能会引起iPhone上内存不足
            allowEdit: false,//只有iPhone下true才有效
            saveToPhotoAlbum: true,
            encodingType: Camera.EncodingType.JPEG,
            //targetWidth:500,  
            //targetHeight:730,
        });

    },
    onUserCameraSelect: function (e, node) {
        //util.showWarning("onUserCameraSelect");
        var me = this;        navigator.camera.getPicture(function (imageURI) {
            var image = Ext.getCmp("userPhoto0");
            image.setSrc(imageURI);
            userPhoto = imageURI;
            me.OnTapUploadUserPhoto(userPhoto);
        }, function (message) {
            //util.showWarning(message);
        }, {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,        //相册读取
            destinationType: Camera.DestinationType.FILE_URI,    //返回图像文件的URI
            quality: 50,  //图像质量[0,100],必须低于50，否则可能会引起iPhone上内存不足
            allowEdit: true,
            saveToPhotoAlbum: true,
            mediaType: Camera.MediaType.PICTURE  //设置选择图片的类型PICTURE(图片)、VIDEO（video类型）、ALLMEDIA （全部）
            //targetWidth:500,  
            //targetHeight:730,
        });
    },
    OnTapUploadUserPhoto: function (userPhoto) {
        var userId = util.getUserId();
        var empId = util.getEmpId();
        var options = new FileUploadOptions();
        options.fileKey = "file";        //必填与服务器对于,服务器上要求为nane= "file" 
        options.fileName = userPhoto.substr(userPhoto.lastIndexOf('/') + 1);    //图片名字
        options.mimeType = "multipart/form-data";       //文件上传必须使用该编码（enctype="multipart/form-data"） {也可以定义上传格式（"image/jpeg";）}
        var params = new Object();
        params.dir = "Photos/User/";
        params.userId = userId;
        params.empId = empId;
        options.params = params;
        options.chunkedMode = false;
        var ft = new FileTransfer();
        ft.upload(userPhoto, util.getMobileSite() + "Shop/UploadUserPhoto.ashx",
            function (result) {
                result = result.response;
                dict.add("userImageUrl", result);
                util.showMessage("头像上传成功！", true, 1);

            },
            function (error) {
                util.showMessage("头像上传失败！", true, 1);
            },
            options
        );
        ft.onprogress = function (progressEvent) {
            if (progressEvent.lengthComputable) {
                //已经上传  
                var loaded = progressEvent.loaded;
                //文件总长度  
                var total = progressEvent.total;
                //计算百分比，用于显示进度条  
                var percent = parseInt((loaded / total) * 100) + "%";
                //换算成MB  
                loaded = (loaded / 1024).toFixed(2);
                total = (total / 1024).toFixed(2);
                //util.showWarning(loaded + 'KB/' + total + 'KB', true);
                //Ext.getCmp('selectPhotoBtn').setBadgeText(percent);
            }
        };
    },
    //信息编辑
    onUserNickEditTap: function () {
        dict.add("infoType", "Nick");
        dict.add("infoName", "昵称");
        this.redirectTo('redirec/myPersonalInfoEdit');
    },
    onUserEmailEditTap: function () {
        dict.add("infoType", "Email");
        dict.add("infoName", "邮箱");
        this.redirectTo('redirec/myPersonalInfoEdit');
    },
    onUserTelephoneEditTap: function () {
        dict.add("infoType", "Telephone");
        dict.add("infoName", "手机");
        this.redirectTo('redirec/myPersonalInfoEdit');
    },
    onLoginOutTap: function () {
        Ext.Msg.show({
            title: "提示",
            message: "你真的要退出登陆吗?",
            width: "90%",
            cls: 'x-msgbox-uuchina',
            buttons: [{
                text: "确定",
                itemId: "ok",
                flex: 1,
                pressedCls: "i-msg-show",
                cls: "msg-button msg-button-left"
            },
            {
                text: "取消",
                itemId: "no",
                flex: 1,
                pressedCls: "i-msg-show",
                cls: "msg-button msg-button-right"
            }],
            fn: function test(btn) {
                if (btn == 'ok') {
                    Ext.ModelMgr.getModel('ChuangCai.model.User').load(1, {
                        success: function (user) {
                            user.erase();
                        }
                    });
                    config.user = false;
                    localStorage.clear();
                    Ext.Viewport.setActiveItem('userLogin', { type: 'slide', direction: 'left' });
                }
            },
        });
    },
    onfindPlaceTap: function () {
        this.redirectTo('redirec/findCarPlace');
    },
    onPayFeesTap: function () {
        this.redirectTo('redirec/payFees');
    },
    onClearLocalStorageTap: function () {
        console.log("sdfdf");
        localStorage.clear();
        util.showWarning("缓存清空完成!");

    },
    onIntoPersonalInfoTap: function () {
        var userName = util.getUserCode();
        if (userName == "" || userName == null) {
            {
              //  user.erase();
                config.user = false;
                //    Ext.Viewport.setActiveItem('login', { type: 'slide', direction: 'left' });
                this.redirectTo('redirec/login');
            }
        }
    },
    onMyCarTap: function () {
        this.redirectTo('redirec/myCar');
    },
    onAboutParkTap:function () {
        this.redirectTo('redirec/aboutPark');
    },
    onParkAdvTap: function () {
        this.redirectTo('redirec/parkAdvInfo');
    },
    });