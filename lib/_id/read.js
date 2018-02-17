"use strict";
exports.__esModule = true;
function readById(Model) {
    var handler = function (request, response, next) {
        var id = request.params['id'];
        Model.findById(id)
            .then(function (doc) {
            if (doc === null)
                return response.status(404);
            response.json(doc);
        })["catch"](function (error) { return next(error); });
    };
    return handler;
}
exports["default"] = readById;
