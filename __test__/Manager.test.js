const Manager = require("../lib/Manager");

describe("Employee", () => {
    it("Should start object", () => {
        const obj = new Manager();
        expect(typeof(obj)).toBe("object");
    });

});