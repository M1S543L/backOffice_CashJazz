"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lavador = void 0;
const empleado_entity_1 = require("../empleado/empleado.entity");
const puesto_entity_1 = require("../puesto/puesto.entity");
const typeorm_1 = require("typeorm");
let Lavador = class Lavador {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lavador.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => empleado_entity_1.empleado),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Lavador.prototype, "empleado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => puesto_entity_1.Puesto),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Lavador.prototype, "puesto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Lavador.prototype, "horaEntrada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Lavador.prototype, "horaSalida", void 0);
Lavador = __decorate([
    (0, typeorm_1.Entity)('lavador')
], Lavador);
exports.Lavador = Lavador;
//# sourceMappingURL=lavador.entity.js.map