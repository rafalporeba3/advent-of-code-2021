const depths = require('../helpers/file').readInts('day-01/input.txt');
const { getDepth } = require('./part-1');

const getWindows = () => {
    const windows = [];

    for(let window = 0; window <= depths.length - 3; window++) {
        let sum = 0;

        for (let offset = 0; offset < 3; offset++) {
            sum += depths[window + offset];
        }

        windows.push(sum);
    }

    return windows;
};

console.log(getDepth(getWindows()));


