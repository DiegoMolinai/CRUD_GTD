"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TareasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tareas = yield database_1.default.query('SELECT * FROM tareas');
            res.json(tareas[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tareas = yield database_1.default.query('SELECT * FROM tareas WHERE id = ?', [id]);
            if (tareas.length > 0) {
                return res.json(tareas[0]);
            }
            res.status(404).json({ text: 'La tarea no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tareacreada = yield database_1.default.query('INSERT INTO tareas set ?', [req.body]);
            res.json({ message: 'Tarea Guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tareas WHERE id = ?', [id]);
            res.json({ text: 'Tarea Eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tareas set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'Tarea actualizada' });
        });
    }
}
const tareasController = new TareasController();
exports.default = tareasController;
