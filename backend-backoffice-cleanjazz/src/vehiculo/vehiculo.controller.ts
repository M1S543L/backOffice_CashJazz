import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';

@Controller('vehiculos')
export class VehiculoController {

    constructor(private vehiculoService: VehiculoService) { }

    //metodo para insertar vehiculos
    @Post() 
    async createVehiculo(@Body() newVehiculo: CreateVehiculoDto){
        return this.vehiculoService.createVehiculo(newVehiculo)
    }

    //metodo para obtener todos los vehiculos
    @Get()
    async getVehiculos(){
        return this.vehiculoService.getVehiculos()
    }

    //metodo para obtener un vehiculo por id
    @Get( ':id')  
    async getVehiculo(@Param ('id',ParseIntPipe) id: number){
        return this.vehiculoService.getVehiculo(id)
    }

    //metodo para borrar vehiculo
    @Delete( ':id')
    async deleteVehiculo(@Param ('id',ParseIntPipe) id: number){
        return this.vehiculoService.deleteVehiculo(id)
    }

    @Patch( ':id')
    //metodo para actualizar vehiculo
    async updateVehiculo(@Param ('id',ParseIntPipe) id: number, vehiculo: CreateVehiculoDto){
        return this.vehiculoService.updateVehiculo(id, vehiculo)
    }

}
