const add = require("./add");

describe("add", () => {
    it("add one number to another", () => {
        expect(add(1, 2)).toBe(3);
    });
});