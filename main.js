"use strict";
exports.__esModule = true;
exports.remove = void 0;
//Names used
var names = ['Leandro', 'Leandro', 'Jose', 'Manuel'];
//function to remove duplicates
function remove(obj) {
    var x = function (obj) { return obj.filter(function (v, i) { return obj.indexOf(v) === i; }); };
    return x(obj);
}
exports.remove = remove;
exports["default"] = remove;
remove(names);
console.log();
for (var _i = 0, _a = remove(names); _i < _a.length; _i++) {
    var data = _a[_i];
    console.log(data);
}
