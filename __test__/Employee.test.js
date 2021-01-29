const axios = require("axios");
const Employee = requires("../lib/Employee");

jest.mock("axios");

describe("Employee", () => {
    describe("Initialize", () => {
        it("Should run start object", () => {
            const test = new Employee();
            expect(typeof(test)).toBe("object");
        });
    });
});