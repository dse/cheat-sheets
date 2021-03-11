// https://stackoverflow.com/questions/24048547/checking-if-an-object-is-array-like
function isArrayLike(item) {
    if (Array.isArray(item)) {
        return true;
    }
    if (!item) {
        return false;
    }
    var result = Object.prototype.toString.call(item);
    if (result === '[object HTMLCollection]' ||
        result === '[object NodeList]') {
        return true;
    }
    if (typeof item !== 'object' ||
        !item.hasOwnProperty('length') ||
        typeof item.length !== 'number' ||
        item.length < 0) {
        return false;
    }
    if (item.length === 0) {
        return true;
    }
    if (item.length - 1 in item) {
        return true;
    }
    return false;
}
