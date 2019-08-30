"use strict";

module.exports = function(arr) {
    const buffer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            buffer.push(arr[i]);
        }
    }
    return buffer;
}
