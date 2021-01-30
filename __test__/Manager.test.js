const Manager = require("../lib/Manager");

describe("Employee", () => {
    it("Should start object", () => {
        const obj = new Manager();
        expect(typeof(obj)).toBe("object");
    });

    it("Sets name using constructor function", () => {
        const name = "myName"
        const test = new Manager(name);
        expect(test.name).toBe(name);
    });

    it("Sets id using constructor function", () => {
        const testID = 1234;
        const test = new Manager("myName",testID);
        expect(test.id).toBe(testID);
    });

    it("Sets email using constructor function", () => {
        const testEmail = "my@email.com";
        const test = new Manager("myName",1234,testEmail);
        expect(test.email).toBe(testEmail);
    });

    it("Sets officeNumber using constructor function", () => {
        const testOfficeNumber = 111222333;
        const test = new Manager("myName",1234,"my@email.com",testOfficeNumber);
        expect(test.officeNumber).toBe(testOfficeNumber);
    });

});