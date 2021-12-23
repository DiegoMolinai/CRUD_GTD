"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TareasController {
    index(req, res) {
        database_1.default.query('DESCRIBE tareas');
        res.json('hola diego');
    }
    create(req, res) {
        res.json({ text: 'creando una tarea' });
    }
}
const tareasController = new TareasController();
exports.default = tareasController;
