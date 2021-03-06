var Const = require('./Const');

/**
 * @mixin
 */
var DisplayObjectMixin = {
    /**
     * please specify it to handle zOrder and zIndex
     * @type {PIXI.DisplayGroup}
     */
    displayGroup: null,

    /**
     * calculated inside displayList. Can be set to manual mode
     * @type {number}
     */
    displayFlag: Const.DISPLAY_FLAG.AUTO_CHILDREN,

    /**
     * calculated inside displayList. Cleared on displayList.clear()
     * Equal to 'this' if displayGroup is specified
     * @type {PIXI.Container}
     */
    displayParent: null,

    /**
     * zOrder is distance between screen and object. Objects with largest zOrder will appear first in their DisplayGroup
     * @type {number}
     */
    zOrder: 0,

    /**
     * updateOrder is calculated by DisplayList, it is required for sorting inside DisplayGroup
     * @type {number}
     */
    updateOrder: 0
};

module.exports = DisplayObjectMixin;
