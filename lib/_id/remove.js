"use strict";
exports.__esModule = true;
function removeById(Model) {
    var handler = function (request, response, next) {
        var id = request.params['id'];
        Model.findByIdAndRemove(id)
            .then(function () { return response.sendStatus(204); })["catch"](function (error) { return next(error); });
    };
    return handler;
}
exports["default"] = removeById;
