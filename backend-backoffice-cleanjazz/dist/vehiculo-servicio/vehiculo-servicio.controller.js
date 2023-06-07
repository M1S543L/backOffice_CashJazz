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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoServicioController = void 0;
const common_1 = require("@nestjs/common");
const vehiculo_servicio_service_1 = require("./vehiculo-servicio.service");
const create_vehiculo_servicio_dto_1 = require("./dto/create-vehiculo-servicio.dto");
const update_vehiculo_servicio_dto_1 = require("./dto/update-vehiculo-servicio.dto");
let VehiculoServicioController = class VehiculoServicioController {
    constructor(vehiculoServicioService) {
        this.vehiculoServicioService = vehiculoServicioService;
    }
    createVehiculoServicio(newvehiculoServicio) {
        return this.vehiculoServicioService.create(newvehiculoServicio);
    }
    getVehiculoServicio() {
        return this.vehiculoServicioService.findAll();
    }
    getOneVehiculoServicio(vehiculoId, servicioId) {
        return this.vehiculoServicioService.findOne(vehiculoId, servicioId);
    }
    updateVehiculoServicio(vehiculoId, servicioId, vehiculoServicio) {
        return this.vehiculoServicioService.update(vehiculoId, servicioId, vehiculoServicio);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vehiculo_servicio_dto_1.CreateVehiculoServicioDto]),
    __metadata("design:returntype", void 0)
], VehiculoServicioController.prototype, "createVehiculoServicio", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehiculoServicioController.prototype, "getVehiculoServicio", null);
__decorate([
    (0, common_1.Get)('/:vehiculoId/:servicioId'),
    __param(0, (0, common_1.Param)('vehiculoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('servicioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], VehiculoServicioController.prototype, "getOneVehiculoServicio", null);
__decorate([
    (0, common_1.Patch)('/:vehiculoId/:servicioId'),
    __param(0, (0, common_1.Param)('vehiculoId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('servicioId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_vehiculo_servicio_dto_1.UpdateVehiculoServicioDto]),
    __metadata("design:returntype", void 0)
], VehiculoServicioController.prototype, "updateVehiculoServicio", null);
VehiculoServicioController = __decorate([
    (0, common_1.Controller)('vehiculoservicio'),
    __metadata("design:paramtypes", [vehiculo_servicio_service_1.VehiculoServicioService])
], VehiculoServicioController);
exports.VehiculoServicioController = VehiculoServicioController;
//# sourceMappingURL=vehiculo-servicio.controller.js.map