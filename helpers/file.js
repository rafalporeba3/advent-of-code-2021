const fs = require("fs");

module.exports = {
    readLines(path) {
        return fs.readFileSync(path, 'utf-8').split('\n');
    },

    readInts(path) {
        return this.readLines(path).map(l => parseInt(l));
    }
}
