function loginDirect(me, viewName) {
    if (util.getUserId() == null) {
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
    } else {
        me.redirectTo('redirec/' + viewName);
    }
}
//支付宝支付pg
function resultString(data) {
    //iOS
    var result = Ext.decode(data);
    if (result.resultStatus == "9000") {
        Ext.Ajax.request({
            url: util.getMobileSite() + "Shop/PaySecurityDeposit.ashx",
            params: {
                rowId: dict.get("depositRowId"), delFlag: "updateIsPay", payType: "alipay"
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            success: function (result, context) {
                //Ext.getCmp('submitEnsureMon').setHidden(true);
                //Ext.getCmp('submitOfferRecord').setHidden(false);
            },
            failure: function (result, context) {
                var msg = result.responseText;
                util.showMessage(msg, true);
            },
            method: "POST"
        });
    }
    else if (result.resultStatus == "6001") {
        //util.showWarning(result.memo); 
        //util.redirectTo('redirec/paymentFailure');
    }
}
function androidAlipayResult(data) {
    if (data == "9000") {
        Ext.Ajax.request({
            url: util.getMobileSite() + "Shop/PaySecurityDeposit.ashx",
            params: {
                rowId: dict.get("depositRowId"), delFlag: "updateIsPay", payType: "alipay"
            },
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            success: function (result, context) {
                //Ext.getCmp('submitEnsureMon').setHidden(true);
                //Ext.getCmp('submitOfferRecord').setHidden(false);
            },
            failure: function (result, context) {
                var msg = result.responseText;
                util.showMessage(msg, true);
            },
            method: "POST"
        });
    }
    else {
        //util.redirectTo('redirec/paymentFailure');
    }
}

function bdmap(ad, city) {
    window.plugins.BaiduMap.baiduad(
    ad, city,
    function (success) {
        // alert(“encode success: ” + success);
    }, function (fail) {
        // alert(“encoding failed: ” + fail);
    }
    );
}
//微信上传图片
function uploadImageTap() {
    chooseImage();
}
function chooseImage() {
    images = {
        localId: [],
        serverId: []
    };
    wx.chooseImage({
        success: function (res) {
            images.localId = res.localIds;
            alert('已选择 ' + res.localIds.length + ' 张图片');
            uploadImage()
        }
    });
}
function uploadImage() {
    if (images.localId.length == 0) {
        alert('请先使用 chooseImage 接口选择图片');
        return;
    }
    var i = 0, length = images.localId.length;
    images.serverId = [];
    function upload() {
        wx.uploadImage({
            localId: images.localId[i],
            success: function (res) {
                i++;
                images.serverId.push(res.serverId);
                if (i < length) {
                    upload();
                } else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/UploadWeixinImage.ashx",
                        params: {
                            imageServerId: images.serverId, productId: dict.get("tempRowId"), userId: util.getUserId()
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var result = result.responseText;
                            dict.add("singleId", result);
                            alert("成功");
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                }
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    }
    upload();
}

//微信支付
function wxPayRequest(orderNo, subject, body, total_fee, rowId) {
    if (!openid) {
        alert("用户支付ID已经过期，请关闭微信后重新进入！");
    }
    else {
        Ext.Ajax.request({
            url: util.getWeixinSite() + "GetWxPaySign.aspx",
            params: {
                url: location.href.split('#')[0], openid: openid, orderNo: orderNo, subject: subject, body: body, total_fee: total_fee
            },
            success: function (result, context) {
                var json = result.responseText;
                json = json.substring(0, json.indexOf('<!DOCTYPE'));
                json = Ext.decode(json);
                var appId = json[0]["appId"];
                var nonceStr = json[0]["nonceStr"];
                var packages = json[0]["package"];
                var paySign = json[0]["paySign"];
                var timeStamp = json[0]["timeStamp"];
                wx.chooseWXPay({
                    timestamp: timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                    nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
                    package: packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                    signType: "MD5", // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                    paySign: paySign, // 支付签名
                    success: function (res) {
                        //成功之后的处理//回调支付确认
                        onSurePay(rowId);
                        alert("支付成功！")


                    }
                });
            },
            failure: function (result) {
                var msg = result.responseText;
                util.showMessage(msg, true);
            },
            method: "POST"
        });
    }
}
function onSurePay(rowId) {
    Ext.Ajax.request({
        url: util.getMobileSite() + "Shop/PaySecurityDeposit.ashx",
        params: {
            rowId: rowId, delFlag: "updateIsPay", payType: "weiXin"
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
}
//微信上传产品照片
function uploadProductImageTap() {
    chooseProductImage();
}
function chooseProductImage() {
    images = {
        localId: [],
        serverId: []
    };
    wx.chooseImage({
        success: function (res) {
            images.localId = res.localIds;
            //alert('已选择 ' + res.localIds.length + ' 张图片');
            uploadProductImage()
        }
    });
}
function uploadProductImage() {
    if (images.localId.length == 0) {
        alert('请先使用 chooseImage 接口选择图片');
        return;
    }
    var i = 0, length = images.localId.length;
    images.serverId = [];
    function upload1() {
        wx.uploadImage({
            localId: images.localId[i],
            success: function (res) {
                i++;
                images.serverId.push(res.serverId);
                if (i < length) {
                    upload1();
                } else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/UploadProductImageByWeixin.ashx",
                        params: {
                            imageServerId: images.serverId, userId: util.getUserId()
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var result = result.responseText;
                            dict.add("imgRemarkId", result);
                            //alert(result);
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                }
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    }
    upload1();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
    {
        return unescape(arr[2]);
    }
    else
        return null;
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function setCookie(name, value, time) {
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function setTempCookie(name,value){
    document.cookie =  name + "=" + escape(value);
}

//这是有设定过期时间的使用示例： //s20是代表20秒 //h是指小时，如12小时则是：h12 //d是天数，30天则：d30 
function getsec(str) {
    //alert(str);
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    } else
        if (str2 == "h") {
            return str1 * 60 * 60 * 1000;
        } else
            if (str2 == "d") {
                return str1 * 24 * 60 * 60 * 1000;
            }
}


function showPlaceDetail(parkId, Slat, Slng, Elat, Elng, QElat, QElng) {
    //根据Id得到停车场信息，然后显示停车场详情页面
    dict.add("parkId", parkId);
    dict.add("Slat", Slat);
    dict.add("Slng", Slng);
    dict.add("Elat", Elat);
    dict.add("Elng", Elng);
    dict.add("QElat", QElat);
    dict.add("QElng", QElng);
    util.redirectTo('redirec/placeDetail');
    // me.redirectTo('redirec/parkHome');
    
}