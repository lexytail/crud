"use strict";
exports.__esModule = true;
function remove(Model) {
    var handler = function (request, response, next) {
        var query = request.query;
        Model.remove(query)
            .then(function () { return response.sendStatus(204); })["catch"](function (error) { return next(error); });
    };
    return handler;
}
exports["default"] = remove;
