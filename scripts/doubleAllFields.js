"use strict";

module.exports = function(obj) {
    for(let key in obj) {
        obj[key] = obj[key] + obj[key];
    }
    return obj;
}
