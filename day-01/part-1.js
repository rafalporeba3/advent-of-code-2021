const depths = require('../helpers/file').readInts('day-01/input.txt');


(function() {
    let increases = 0;

    if(!depths) {
        throw Error('Please provide input first');
    }

    for(const depthIndex in depths) {
        if(depths[depthIndex - 1] && depths[depthIndex] && depths[depthIndex] > depths[depthIndex - 1]) {
            increases += 1;
        }
    }

    console.log(increases)
    return increases;
})()
