"use strict";
exports.__esModule = true;
var create_1 = require("./create");
var update_1 = require("./update");
var remove_1 = require("./remove");
var read_1 = require("./read");
var read_2 = require("./_id/read");
var remove_2 = require("./_id/remove");
var update_2 = require("./_id/update");
var CRUD = /** @class */ (function () {
    function CRUD(model) {
        this.model = model;
        this.create = create_1["default"](this.model);
        this.update = update_1["default"](this.model);
        this.remove = remove_1["default"](this.model);
        this.read = read_1["default"](this.model);
        this.readById = read_2["default"](this.model);
        this.removeById = remove_2["default"](this.model);
        this.updateById = update_2["default"](this.model);
    }
    return CRUD;
}());
exports.CRUD = CRUD;
var create_2 = require("./create");
exports.create = create_2["default"];
var update_3 = require("./update");
exports.update = update_3["default"];
var remove_3 = require("./remove");
exports.remove = remove_3["default"];
var read_3 = require("./read");
exports.read = read_3["default"];
var read_4 = require("./_id/read");
exports.readById = read_4["default"];
var remove_4 = require("./_id/remove");
exports.removeById = remove_4["default"];
var update_4 = require("./_id/update");
exports.updateById = update_4["default"];
