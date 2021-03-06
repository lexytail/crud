"use strict";
exports.__esModule = true;
function update(Model) {
    var handler = function (request, response, next) {
        var query = request.query;
        Model.update(query, request.body, { "new": true })
            .then(function (docs) {
            if (docs.length === 0)
                return response.status(404);
            response.json(docs);
        })["catch"](function (error) { return next(error); });
    };
    return handler;
}
exports["default"] = update;
