"use strict";

module.exports = function(pointsArr) {
    const delta = 10;
    pointsArr.forEach((point) => {
        point.x += delta;
        point.y += delta;
    });
    return pointsArr;
}
