'use strict';
angular
.module('dndApp')
.factory('JoeCoolService', function () {
    var coolGuy = 'Joe';

    function getCoolGuy() {
        return coolGuy;
    }

    function isThisGuyCool(name) {
        return name === 'Joe';
    }

    function setCoolGuy(name) {
        coolGuy = name;
    }

    return {
        getCoolGuy: getCoolGuy,
        isThisGuyCool: isThisGuyCool,
        setCoolGuy: setCoolGuy
    };
});
