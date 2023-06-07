import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { VehiculoServicioService } from './vehiculo-servicio.service';
import { CreateVehiculoServicioDto } from './dto/create-vehiculo-servicio.dto';
import { UpdateVehiculoServicioDto } from './dto/update-vehiculo-servicio.dto';
@Controller('vehiculoservicio')
export class VehiculoServicioController {

    constructor(private vehiculoServicioService: VehiculoServicioService) { }

    //metodo para insertar un registro en la tabla vehiculo_servicio
    
    @Post()
    createVehiculoServicio(@Body() newvehiculoServicio: CreateVehiculoServicioDto) {
        return this.vehiculoServicioService.create(newvehiculoServicio)
    }

    //metodo para listar todos los registros de la tabla vehiculo_servicio
    @Get()
    getVehiculoServicio(){
        return this.vehiculoServicioService.findAll()
    }

    //metodo para listar un registro de la tabla vehiculo_servicio mediante el id del vehiculo y del servicio
    @Get('/:vehiculoId/:servicioId')
    getOneVehiculoServicio(@Param('vehiculoId', ParseIntPipe) vehiculoId: number, @Param('servicioId', ParseIntPipe) servicioId: number){
        return this.vehiculoServicioService.findOne(vehiculoId, servicioId)
    }
    
    //metodo para actualizar un registro de la tabla vehiculo_servicio mediante el id del vehiculo y del servicio
    @Patch('/:vehiculoId/:servicioId')
    updateVehiculoServicio(@Param('vehiculoId', ParseIntPipe) vehiculoId: number, @Param('servicioId', ParseIntPipe) servicioId: number, @Body() vehiculoServicio: UpdateVehiculoServicioDto){
        return this.vehiculoServicioService.update(vehiculoId, servicioId, vehiculoServicio)

    }

    }
