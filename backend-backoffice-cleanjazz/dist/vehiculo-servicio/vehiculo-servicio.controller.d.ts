import { VehiculoServicioService } from './vehiculo-servicio.service';
import { CreateVehiculoServicioDto } from './dto/create-vehiculo-servicio.dto';
import { UpdateVehiculoServicioDto } from './dto/update-vehiculo-servicio.dto';
export declare class VehiculoServicioController {
    private vehiculoServicioService;
    constructor(vehiculoServicioService: VehiculoServicioService);
    createVehiculoServicio(newvehiculoServicio: CreateVehiculoServicioDto): Promise<import("@nestjs/common").HttpException | import("./vehiculo-servicio.entity").VehiculoServico>;
    getVehiculoServicio(): Promise<import("@nestjs/common").HttpException | import("./vehiculo-servicio.entity").VehiculoServico[]>;
    getOneVehiculoServicio(vehiculoId: number, servicioId: number): Promise<import("./vehiculo-servicio.entity").VehiculoServico>;
    updateVehiculoServicio(vehiculoId: number, servicioId: number, vehiculoServicio: UpdateVehiculoServicioDto): Promise<import("./vehiculo-servicio.entity").VehiculoServico & UpdateVehiculoServicioDto>;
}
