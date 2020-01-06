function add(...args) {
    if (args.length === 0) {
        return null;
    }
    return args.reduce((a, b) => {
        return a + b;
    }, 0);
}

module.exports = add;