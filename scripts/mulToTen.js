"use strict";

module.exports = function(objectWithArr) {
    objectWithArr.arr.forEach((element) => {
        element.value = element.value * 10;
    });
    return objectWithArr;
}
