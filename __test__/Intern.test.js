const Intern = require("../lib/Intern");

describe("Employee", () => {
    it("Should start object", () => {
        const obj = new Intern();
        expect(typeof(obj)).toBe("object");
    });

});