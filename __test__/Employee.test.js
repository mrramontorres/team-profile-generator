
const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Should start object", () => {
        const obj = new Employee();
        expect(typeof(obj)).toBe("object");
    });

    it("Sets name using constructor function", () => {
        const name = "testName";
        const obj = new Employee(name);
        expect(typeof(obj.name).toBe(name));
    });
});