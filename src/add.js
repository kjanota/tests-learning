function add(...args) {
    let result = 0;
    if (args.length === 0) {
        return null;
    }
    args.forEach(arg => (result += arg));
    return result;
}

module.exports = add;