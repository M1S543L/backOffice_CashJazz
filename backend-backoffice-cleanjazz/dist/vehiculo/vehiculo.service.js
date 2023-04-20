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
exports.VehiculoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vehiculo_entity_1 = require("./vehiculo.entity");
let VehiculoService = class VehiculoService {
    constructor(vehiculoRepository) {
        this.vehiculoRepository = vehiculoRepository;
    }
    async createVehiculo(vehiculo) {
        const vehiculoFound = await this.vehiculoRepository.findOne({
            where: {
                placa: vehiculo.placa
            }
        });
        if (vehiculoFound) {
            return new common_1.HttpException('Vehiculo already exists', common_1.HttpStatus.CONFLICT);
        }
        const newVehiculo = this.vehiculoRepository.create(vehiculo);
        return this.vehiculoRepository.save(newVehiculo);
    }
    async getVehiculos() {
        const vehiculoFound = await this.vehiculoRepository.find({ where: { estado: 'activo' } });
        if (!vehiculoFound) {
            return new common_1.HttpException('Vehiculos not found', common_1.HttpStatus.NOT_FOUND);
        }
        return vehiculoFound;
    }
    async getVehiculo(id) {
        const vehiculoFound = await this.vehiculoRepository.findOne({
            where: {
                id
            }
        });
        if (!vehiculoFound) {
            return new common_1.HttpException('Vehiculo not found', common_1.HttpStatus.NOT_FOUND);
        }
        return vehiculoFound;
    }
    async deleteVehiculo(id) {
        const vehiculoFound = await this.vehiculoRepository.findOne({
            where: {
                id
            }
        });
        if (!vehiculoFound) {
            return new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const softDelete = Object.assign(vehiculoFound, { estado: 'inactivo' });
        return this.vehiculoRepository.save(softDelete);
    }
    async updateVehiculo(id, vehiculo) {
        const vehiculoFound = await this.vehiculoRepository.findOne({
            where: {
                id
            }
        });
        if (!vehiculoFound) {
            return new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateUser = Object.assign(vehiculoFound, vehiculo);
        return this.vehiculoRepository.save(updateUser);
    }
};
VehiculoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vehiculo_entity_1.vehiculo)),
    __metadata("design:paramtypes", [Object])
], VehiculoService);
exports.VehiculoService = VehiculoService;
//# sourceMappingURL=vehiculo.service.js.map