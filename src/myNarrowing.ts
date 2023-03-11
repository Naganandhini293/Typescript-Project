// Narrowing - type guard - special checks and assignment and process of refining more specific type
// and declaration

function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    return val + 3;
}

//truthiness
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (let s of strs) {
            console.log(s);
        }
    }
}

//in operator

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}

//instance of narrowing

function logVal(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x);
    }
}

// type predict

type Fish = {
    swim: () => void;
};

type Bird = {
    fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish) !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        return "Fish Food";
    } else {
        return "Bird Food";
    }
}

//Discriminated Union

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    legnth: number;
    width: number;
}

type Shape = Circle | Square | Rectangle;

function setArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius;
        case "square":
            return shape.side * shape.side;

        case "rectangle":
            return shape.legnth * shape.width;
        default:
            const _defaultforShape: never = shape;
            return _defaultforShape;
    }
}
