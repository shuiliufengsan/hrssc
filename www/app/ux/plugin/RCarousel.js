Ext.define("ux.plugin.RCarousel", {
    extend: "Ext.Carousel",
    xtype: "RCarousel",
    id: "RCarousel",
    requires: ["Ext.carousel.Carousel"],
    config: {
        direction: "horizontal",
        showAnimation: "slideIn",
        hideAnimation: "slideOut",
        cls: 'i-carousel-indicator-dark',
        listeners: {
            //tap: {
            //    fn: function () {
            //        this.pause();
            //    },
            //    element: 'element'
            //},
            //swipe: {
            //    fn: function () {
            //        this.start();
            //    },
            //    element: 'innerElement'
            //}
            //"initialize": function (carousel) {
            //    var _this = this;
            //    setInterval(function () {
            //        _this.next();
            //        if (_this.getActiveIndex() === _this.getMaxItemIndex()) {
            //            _this.setActiveItem(0)
            //        }
            //    }, 3000)
            //}
        },
    },
    //pause: function () {
    //    util.showMessage("active success", true);
    //},
});
//    config: {
//        delay: 3000,
//        start: true,
//        listeners: {
//            tap: {
//                fn: function () {
//                    this.pause();
//                },
//                element: 'element'
//            },
//            swipe: {
//                fn: function () {
//                    this.start();
//                },
//                element: 'innerElement'
//            }
//        }
//    },
//    initialize: function () {
//        if (this.config.start) {
//            this.start();
//        }
//    },
//    rotate: function () {
//        if (this.timeout) {
//            clearTimeout(this.timeout);
//        }
//        if (this.getActiveIndex() === this.getMaxItemIndex()) {
//            this.setActiveItem(0, 'slide');
//        } else {
//            this.next();
//        }
//        this.timeout = Ext.defer(this.rotate, this.config.delay, this);
//    },
//    start: function (delayStart) {
//        this.timeout = Ext.defer(this.rotate, delayStart || this.config.delay, this);
//    },
//    pause: function (delayStart) {
//        //util.showMessage("active success", true);
//        if (this.timeout) {
//            clearTimeout(this.timeout);
//        }
//        if (delayStart) {
//            this.start(delayStart);
//        }
//        return this;
//    },
//    stop: function (delayStart) {
//        this.pause(delayStart);
//        this.setActiveItem(0, 'slide');
//        return this;
//    }
//});