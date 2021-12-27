"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tareasController_1 = __importDefault(require("../controllers/tareasController"));
class TareasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tareasController_1.default.list);
        this.router.get('/:id', tareasController_1.default.getOne);
        this.router.post('/', tareasController_1.default.create);
        this.router.delete('/:id', tareasController_1.default.delete);
        this.router.put('/:id', tareasController_1.default.update);
    }
}
const tareasRoutes = new TareasRoutes();
exports.default = tareasRoutes.router;
