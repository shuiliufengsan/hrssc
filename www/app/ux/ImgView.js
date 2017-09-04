Ext.define('ux.ImgView', {
    extend: 'Ext.Container',
    xtype: 'imgview',
    config: {
        //baseCls: 'imgview',
    },
    applyRightBtn: function (config) {
        return Ext.factory(config, Ext.Button, this.getRightBtn());
    },
    applyLeftBtn: function (config) {
        return Ext.factory(config, Ext.Button, this.getLeftBtn());
    },
    updateRightBtn: function (newbtn, oldbtn) {
        if (newbtn) {
            this.add(newbtn);
            newbtn.on({
                scope: this,
                tap: this.OnRightTap
            });
        }
        if (oldbtn) {
            this.remove(oldbtn);
        }
    },
    updateLeftBtn: function (newbtn, oldbtn) {
        if (newbtn) {
            this.add(newbtn);
            newbtn.on({
                scope: this,
                tap: this.OnLeftTap
            });
        }
        if (oldbtn) {
            this.remove(oldbtn);
        }
    },
    OnRightTap: function () {
        this.fireEvent('righttap', this.getRightBtn());
    },
    OnLeftTap: function () {
        this.fireEvent('lefttap', this.getLeftBtn());
    }
});