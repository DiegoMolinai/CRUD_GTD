"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send("WENA DESDE INDEX CONTROLLER");
    }
}
exports.indexController = new IndexController();
