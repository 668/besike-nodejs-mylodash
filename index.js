//index.js
var _ = {};

_.once = function(fn) {
    var invoked = false;
    var tmp;
    return function() {
        invoked || ((invoked = true), (tmp = fn()))
        // if (!invoked) {
        //     invoked = true;
        //     tmp = fn();
        // }
        return tmp;
    }
};


_.memoize = function(fn, resolver) {
        var cache = {};
        return function(arg) {
            var key = resolver ? resolver(arg) : arg;

            if (!cache.hasOwnProperty(key)) {
                cache[key] = fn(arg);
            }
            return cache[key];
        };
    };


_.bind = function(fn, obj) {
    return function() { 
        return fn.call(obj);
    };
};
module.exports = _;
