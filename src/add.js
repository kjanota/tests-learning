function add(...args) {
    if (args.length === 0) {
        return null;
    }
    return args.reduce((a, b) => {
        if (typeof b === "string") {
            b = parseInt(b, 10);
            if (isNaN(b)) {
                return a;
            }
        }
        if (typeof b === "object") {
            return a;
        }
        return a + b;
    }, 0);
}

module.exports = add;