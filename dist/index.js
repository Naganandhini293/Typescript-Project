"use strict";
console.log("Type script live..........");
// console.log("Typescript Amazing");
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseNumber = 1; // can be used in inheritance class
        this.place = "Salem";
    }
    get appleId() {
        return this.email;
    }
    get courseCount() {
        return this._courseNumber;
    }
    set courseCountInc(courseCount) {
        if (courseCount <= 1) {
            throw new Error("Invalid");
        }
        this._courseNumber = courseCount;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.family = true;
    }
    createCourseCount() {
        this._courseNumber = 4;
    }
}
let Nandhini = new User("nandhini@gmail.com", "Nandhini", 112);
