function add(...args) {
    if (args.length === 0) {
        return null;
    }
    return args.reduce((a, b) => {
        if (typeof b === "string") {
            try {
                b = parseInt(b, 10);
            } catch (error) {}
        }
        return a + b;
    }, 0);
}

module.exports = add;