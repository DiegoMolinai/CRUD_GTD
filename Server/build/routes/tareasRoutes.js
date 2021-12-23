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
        this.router.get('/', tareasController_1.default.index);
        this.router.post('/', tareasController_1.default.create);
    }
}
const tareasRoutes = new TareasRoutes();
exports.default = tareasRoutes.router;
