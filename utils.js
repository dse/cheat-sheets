Object.getAllPropertyNames = function (obj) {
    var props = [];
    do {
        Object.getOwnProperties(obj).forEach(function (prop) {
            if (!props.indexOf(prop) === -1) {
                props.push(prop);
            }
        });
    } while ((obj = Object.getPrototypeOf(obj)));
};
