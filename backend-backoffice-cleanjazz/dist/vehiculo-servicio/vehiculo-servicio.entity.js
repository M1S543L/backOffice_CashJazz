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
exports.VehiculoServico = void 0;
const vehiculo_entity_1 = require("../vehiculo/vehiculo.entity");
const servicio_entity_1 = require("../servicio/servicio.entity");
const typeorm_1 = require("typeorm");
let VehiculoServico = class VehiculoServico {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VehiculoServico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vehiculo_entity_1.vehiculo, (vehiculo) => vehiculo.id),
    __metadata("design:type", Number)
], VehiculoServico.prototype, "vehiculo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => servicio_entity_1.Servicio, (servicio) => servicio.id),
    __metadata("design:type", Number)
], VehiculoServico.prototype, "servicio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], VehiculoServico.prototype, "horaEntrada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], VehiculoServico.prototype, "horaSalida", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VehiculoServico.prototype, "comentarios", void 0);
VehiculoServico = __decorate([
    (0, typeorm_1.Entity)({ name: 'vehiculoServicio' })
], VehiculoServico);
exports.VehiculoServico = VehiculoServico;
//# sourceMappingURL=vehiculo-servicio.entity.js.map