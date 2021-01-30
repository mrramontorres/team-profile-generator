const Engineer = require("../lib/Engineer");

describe("Employee", () => {
    it("Should start object", () => {
        const obj = new Engineer();
        expect(typeof(obj)).toBe("object");
    });

    it("Sets name using constructor function", () => {
        const name = "myName"
        const test = new Engineer(name);
        expect(test.name).toBe(name);
    });

    it("Sets id using constructor function", () => {
        const testID = 1234;
        const test = new Engineer("myName",testID);
        expect(test.id).toBe(testID);
    });

    it("Sets email using constructor function", () => {
        const testEmail = "my@email.com";
        const test = new Engineer("myName",1234,testEmail);
        expect(test.email).toBe(testEmail);
    });

    it("Sets detail using constructor function", () => {
        const testDetail = "gitHub account";
        const test = new Engineer("myName",1234,"my@email.com",testDetail);
        expect(test.detail).toBe(undefined);
    });

    it("Sets detail using constructor function", () => {
        const testDetail = "";
        const test = new Engineer("myName",1234,"my@email.com",testDetail);
        expect(test.detail).toBe(undefined);
    });

});