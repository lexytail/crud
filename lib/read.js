"use strict";
exports.__esModule = true;
function read(Model) {
    var handler = function (request, response, next) {
        var query = request.query;
        Model.find(query)
            .then(function (docs) {
            if (docs.length === 0)
                return response.status(404);
            response.json(docs);
        })["catch"](function (error) { return next(error); });
    };
    return handler;
}
exports["default"] = read;
