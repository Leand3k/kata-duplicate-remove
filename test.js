"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var chai_1 = require("chai");
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Remove function', function () {
    var names = ['Leandro', 'Leandro', 'Jose', 'Manuel'];
    it('should return remove funfction', function () {
        var result = main_1.remove(names);
        chai_1.expect(result).to.equal(['Leandro', 'Jose', 'Manuel']);
    });
});
