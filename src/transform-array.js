module.exports = function transform(arr) {
    let getArray = [];
    if (!Array.isArray(arr)) {
        throw new Error('Error. This argument is not an Array.');
    };
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            i++;
        }
        else if (arr[i] == '--discard-prev') {
            if (i != 0) {
                getArray.splice(getArray.length - 1, 1);
            }
        }
        else if (arr[i] == '--double-next') {
            if (i + 1 != arr.length) {
                getArray.push(arr[i + 1]);
            }
        }
        else if (arr[i] == '--double-prev') {
            if (i != 0) {
                getArray.push(arr[i - 1]);
            }
        }
        else {
            getArray.push(arr[i]);
        }
    }
    return getArray;
}