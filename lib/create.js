"use strict";
exports.__esModule = true;
function create(Model) {
    var handler = function (request, response, next) {
        Model.create(request.body)
            .then(function (doc) { return response.json(doc); })["catch"](function (error) { return next(error); });
    };
    return handler;
}
exports["default"] = create;
