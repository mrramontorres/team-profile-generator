const Intern = require("../lib/Intern");

describe("Employee", () => {
    it("Should start object", () => {
        const obj = new Intern();
        expect(typeof(obj)).toBe("object");
    });

    it("Sets name using constructor function", () => {
        const name = "myName"
        const test = new Intern(name);
        expect(test.name).toBe(name);
    });

    it("Sets id using constructor function", () => {
        const testID = 1234;
        const test = new Intern("myName",testID);
        expect(test.id).toBe(testID);
    });

    it("Sets email using constructor function", () => {
        const testEmail = "my@email.com";
        const test = new Intern("myName",1234,testEmail);
        expect(test.email).toBe(testEmail);
    });

    it("Sets detail using constructor function", () => {
        const testDetail = "gitHub account";
        const test = new Intern("myName",1234,"my@email.com",testDetail);
        expect(test.detail).toBe(undefined);
    });

    it("Sets detail using constructor function", () => {
        const testDetail = "";
        const test = new Intern("myName",1234,"my@email.com",testDetail);
        expect(test.detail).toBe(undefined);
    });

});