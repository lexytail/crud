"use strict";
exports.__esModule = true;
var express_1 = require("express");
var src_1 = require("./src");
function router(Model) {
    var router = express_1.Router(), crud = new src_1.CRUD(Model);
    router.get('/', crud.read);
    router.put('/', crud.create);
    router.patch('/', crud.update);
    router["delete"]('/', crud.remove);
    router.get('/:id', crud.readById);
    router.patch('/:id', crud.updateById);
    router["delete"]('/:id', crud.removeById);
    return router;
}
exports["default"] = router;
