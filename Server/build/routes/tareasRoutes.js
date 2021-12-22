"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class TareasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send("Tareas"));
    }
}
const tareasRoutes = new TareasRoutes();
exports.default = tareasRoutes.router;
