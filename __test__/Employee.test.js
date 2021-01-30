const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Should start object", () => {
        const thing = new Employee();
        const obj = "object";
        expect(typeof(thing)).toBe(obj);
    });

    it("Sets name using constructor function", () => {
        const name = "myName"
        const test = new Employee(name);
        expect(test.name).toBe(name);
    });

    it("Sets id using constructor function", () => {
        const testID = 1234;
        const test = new Employee("myName",testID);
        expect(test.id).toBe(testID);
    });
});