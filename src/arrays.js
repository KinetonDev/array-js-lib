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
        result.push(callback(array[i], i, array));
    }

    return result;
}

function reduce(array, callback, initialValue) {
    if (!initialValue) {
        initialValue = 0;
    }

    let result = initialValue;

    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], i, array);
    }

    return result;
}

function filter(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) result.push(array[i]);
    }

    return result;
}

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

function cacheDecorator(func) {
    let cache = new Map();

    return function() {
        let args = Array.from(arguments);

        args.forEach((elem) => {
            if (elem instanceof Array) {
                elem.sort();
            }
        });

        args.sort();
        let key = args.join();

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func(...arguments);
        cache.set(key, result);
        return result;
    }
}
take = cacheDecorator(take);
skip = cacheDecorator(skip);
map = cacheDecorator(map);
reduce = cacheDecorator(reduce);
filter = cacheDecorator(filter);

class Chainer {
    constructor(array) {
        this.current = array;
    }

    take(n) {
        let result = take(this.current, n);
        this.current = result;
        return this;
    }

    skip(n) {
        let result = skip(this.current, n);
        this.current = result;
        return this;
    }

    map(callback) {
        let result = map(this.current, callback);
        this.current = result;
        return this;
    }

    reduce(callback, initialValue) {
        let result = reduce(this.current, callback, initialValue);
        this.current = result;
        return this;
    }

    filter(callback) {
        let result = filter(this.current, callback);
        this.current = result;
        return this;
    }

    forEach(callback) {
        forEach(this.current, callback);
        return this;
    }

    value() {
        return this.current;
    }
}

function chain(array) {
    return new Chainer(array);
}