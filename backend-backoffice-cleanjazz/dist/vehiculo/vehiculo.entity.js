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
exports.vehiculo = void 0;
const cliente_entity_1 = require("../cliente/cliente.entity");
const modelo_entity_1 = require("../modelo/modelo.entity");
const typeorm_1 = require("typeorm");
let vehiculo = class vehiculo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], vehiculo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], vehiculo.prototype, "placa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], vehiculo.prototype, "a\u00F1o", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], vehiculo.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], vehiculo.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'activo' }),
    __metadata("design:type", String)
], vehiculo.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => cliente_entity_1.cliente, cliente => cliente.id),
    __metadata("design:type", cliente_entity_1.cliente)
], vehiculo.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => modelo_entity_1.modelo, modelo => modelo.id),
    __metadata("design:type", modelo_entity_1.modelo)
], vehiculo.prototype, "modelo", void 0);
vehiculo = __decorate([
    (0, typeorm_1.Entity)({ name: 'vehiculo' })
], vehiculo);
exports.vehiculo = vehiculo;
//# sourceMappingURL=vehiculo.entity.js.map