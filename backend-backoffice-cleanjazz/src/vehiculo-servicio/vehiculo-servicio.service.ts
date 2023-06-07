import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehiculoServico } from './vehiculo-servicio.entity';
import { CreateVehiculoServicioDto } from './dto/create-vehiculo-servicio.dto';
import { UpdateVehiculoServicioDto } from './dto/update-vehiculo-servicio.dto';

@Injectable()
export class VehiculoServicioService {

    constructor(@InjectRepository(VehiculoServico) private VehiculoServicoRepository: Repository<VehiculoServico>) { }

    //metodo para insertar un registro en la tabla vehiculo_servicio con httpsException
    async create(createVehiculoServicio: CreateVehiculoServicioDto) {
        const vehiculoFound = await this.VehiculoServicoRepository.findOne({
            where: {
               
            }
        })
        if(vehiculoFound){
            return new HttpException('Vehiculo already exists', HttpStatus.CONFLICT)
        }
        const newVehiculo = this.VehiculoServicoRepository.create(createVehiculoServicio)
        return this.VehiculoServicoRepository.save(newVehiculo)
    }
    
    //metodo para listar todos los registros de la tabla vehiculo_servicio con httpsException
    async findAll() {
        const vehiculoFound = await this.VehiculoServicoRepository.find()
        if(!vehiculoFound){
            return new HttpException('Vehiculos not found', HttpStatus.NOT_FOUND)
        }
        return vehiculoFound;
    }

    //metodo para listar un registro de la tabla vehiculo_servicio mediante el id del vehiculo y del servicio con httpsException
    async findOne(vehiculoId: number, servicioId:number){
        try {
            return await this.VehiculoServicoRepository.findOneOrFail({where:{vehiculo:vehiculoId, servicio:servicioId}});
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: error.message,
            }, HttpStatus.NOT_FOUND);
        }

    } 

    //metodo para actualizar un registro de la tabla vehiculo_servicio mediante el id del vehiculo y del servicio con httpsException
    async update(vehiculoId: number, servicioId:number, updateVehiculoServicioDto: UpdateVehiculoServicioDto) {
        try {
            const vehiculoServicio = await this.VehiculoServicoRepository.findOneOrFail({where:{vehiculo:vehiculoId, servicio:servicioId}});
            const updateVehiculoServicio = Object.assign(vehiculoServicio, updateVehiculoServicioDto);
            return await this.VehiculoServicoRepository.save(updateVehiculoServicio);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: error.message,
            }, HttpStatus.NOT_FOUND);
        }
    }
}
