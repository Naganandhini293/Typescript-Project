console.log("Type script live..........");
// console.log("Typescript Amazing");
class User {
    protected _courseNumber: number = 1; // can be used in inheritance class
    private readonly place = "Salem";
    constructor(
        public email: string,
        public name: string,
        private userId: number
    ) {}

    get appleId(): string {
        return this.email;
    }

    get courseCount(): number {
        return this._courseNumber;
    }

    set courseCountInc(courseCount: number) {
        if (courseCount <= 1) {
            throw new Error("Invalid");
        }
        this._courseNumber = courseCount;
    }
}
class SubUser extends User {
    family: boolean = true;
    createCourseCount() {
        this._courseNumber = 4;
    }
}

let Nandhini = new User("nandhini@gmail.com", "Nandhini", 112);
