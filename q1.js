function accumulator(array) {
    let tempArray = [];
    array.reduce((acc, v, i) => {
        return tempArray[i] = acc + v;
    }, 0);
    return tempArray;
}
console.log(accumulator([1, 5, 7]));