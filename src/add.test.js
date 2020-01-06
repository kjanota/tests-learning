const add = require("./add");

describe("add", () => {
    it("add one number to another", () => {
        expect(add(1, 2)).toBe(3);
    });
    it("add more than two numbers", () => {
        expect(add(1, 2, 7)).toBe(10);
        expect(add(1, 1, 1, 1)).toBe(4);
        expect(add(9, -3, 8, 6)).toBe(20);
    });
    it("no args", () => {
        expect(add()).toBe(null);
    });
    it("with letter", () => {
        expect(add(1, "1")).toBe(2);
        expect(add("2", 1)).toBe(3);
    });
    it("one element", () => {
        expect(add(1)).toBe(1);
    });
    it("with non-number letter", () => {
        expect(add(1, "a")).toBe(1);
    });
    it("to 1 add empty object", () => {
        expect(add(1, {})).toBe(1);
    });
});