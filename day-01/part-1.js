const depths = require('../helpers/file').readInts('day-01/input.txt');


const getDepth = (data) => {
    let increases = 0;

    if(!data) {
        throw Error('Please provide input first');
    }

    for(const dataIndex in data) {
        if(data[dataIndex - 1] && data[dataIndex] && data[dataIndex] > data[dataIndex - 1]) {
            increases += 1;
        }
    }

    return increases;
};

console.log(getDepth(depths));

module.exports = {
    getDepth
}
