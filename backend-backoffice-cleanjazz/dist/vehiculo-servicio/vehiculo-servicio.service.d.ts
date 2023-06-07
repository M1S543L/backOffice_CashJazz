import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VehiculoServico } from './vehiculo-servicio.entity';
import { CreateVehiculoServicioDto } from './dto/create-vehiculo-servicio.dto';
import { UpdateVehiculoServicioDto } from './dto/update-vehiculo-servicio.dto';
export declare class VehiculoServicioService {
    private VehiculoServicoRepository;
    constructor(VehiculoServicoRepository: Repository<VehiculoServico>);
    create(createVehiculoServicio: CreateVehiculoServicioDto): Promise<VehiculoServico | HttpException>;
    findAll(): Promise<HttpException | VehiculoServico[]>;
    findOne(vehiculoId: number, servicioId: number): Promise<VehiculoServico>;
    update(vehiculoId: number, servicioId: number, updateVehiculoServicioDto: UpdateVehiculoServicioDto): Promise<VehiculoServico & UpdateVehiculoServicioDto>;
}
