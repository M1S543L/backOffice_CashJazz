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
exports.VehiculoServicioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const vehiculo_servicio_entity_1 = require("./vehiculo-servicio.entity");
let VehiculoServicioService = class VehiculoServicioService {
    constructor(VehiculoServicoRepository) {
        this.VehiculoServicoRepository = VehiculoServicoRepository;
    }
    async create(createVehiculoServicioDto) {
        try {
            const vehiculoServicio = this.VehiculoServicoRepository.create(createVehiculoServicioDto);
            return await this.VehiculoServicoRepository.save(vehiculoServicio);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            return await this.VehiculoServicoRepository.find();
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(vehiculoId, servicioId) {
        try {
            return await this.VehiculoServicoRepository.findOneOrFail({ where: { vehiculo: vehiculoId, servicio: servicioId } });
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: error.message,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(vehiculoId, servicioId, updateVehiculoServicioDto) {
        try {
            const vehiculoServicio = await this.VehiculoServicoRepository.findOneOrFail({ where: { vehiculo: vehiculoId, servicio: servicioId } });
            const updateVehiculoServicio = Object.assign(vehiculoServicio, updateVehiculoServicioDto);
            return await this.VehiculoServicoRepository.save(updateVehiculoServicio);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: error.message,
            }, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
VehiculoServicioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vehiculo_servicio_entity_1.VehiculoServico)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VehiculoServicioService);
exports.VehiculoServicioService = VehiculoServicioService;
//# sourceMappingURL=vehiculo-servicio.service.js.map