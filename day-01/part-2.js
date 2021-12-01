const depths = require('../helpers/file').readInts('day-01/input.txt');

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

const getDepths = (windows) => {
    let increase = 0;
    let lastDepth = null;

    for(const depth of windows) {
        if(lastDepth !== null && depth > lastDepth) {
            increase +=1;
        }

        lastDepth = depth;
    }

    return increase;
}

console.log(getDepths(getWindows()));


