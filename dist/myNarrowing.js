"use strict";
// Narrowing - type guard - special checks and assignment and process of refining more specific type
// and declaration
function detectType(val) {
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    return val + 3;
}
//truthiness
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (let s of strs) {
            console.log(s);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//instance of narrowing
function logVal(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x);
    }
}
function isFish(pet) {
    return pet !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return "Fish Food";
    } else {
        return "Bird Food";
    }
}
function setArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.legnth * shape.width;
        default:
            const _defaultforShape = shape;
            return _defaultforShape;
    }
}
