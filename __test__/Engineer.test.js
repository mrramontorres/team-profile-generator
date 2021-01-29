const Engineer = require("../lib/Engineer");

describe("Employee", () => {
    it("Should start object", () => {
        const obj = new Engineer();
        expect(typeof(obj)).toBe("object");
    });

});