"use strict";
function identity(val) {
    return val;
}
identity({
    brand: "nana",
    type: 3,
});
function getProducts1(products) {
    return products[3];
}
const getProducts2 = (products) => {
    return products[3];
};
//Generic class
function anaotherFunc(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class Sellable {
    constructor() {
        this.card = [];
    }
    addtoCart(product) {
        this.card.push(product);
    }
}
