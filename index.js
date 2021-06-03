function take(array, n) {
    let result = [];

    let topEdge = array.length > n ? n : array.length;

    for (let counter = 0; counter < topEdge; counter++) {
        result.push(array[counter]);
    }

    return result;
}

function skip(array, n) {
    let result = [];

    for (let counter = n; counter < array.length; counter++) {
        result.push(array[counter]);
    }

    return result;
}

function map(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }

    return result;
}

function reduce(array, callback, initialValue) {
    let result = initialValue;

    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i]);
    }

    return result;
}

function filter(array, callback) {
    let result = [];

    for (const arrayElement of array) {
        if (callback(arrayElement)) result.push(arrayElement);
    }

    return result;
}

function foreach(array, callback) {
    for (const arrayElement of array) {
        callback(arrayElement);
    }
}