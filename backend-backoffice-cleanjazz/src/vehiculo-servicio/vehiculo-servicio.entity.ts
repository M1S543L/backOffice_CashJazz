import { vehiculo } from "src/vehiculo/vehiculo.entity";
import { Servicio } from "src/servicio/servicio.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity( { name: 'vehiculoServicio' })
export class VehiculoServico {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => vehiculo, (vehiculo) => vehiculo.id)
    vehiculo: number;
  
    @ManyToOne(() => Servicio, (servicio) => servicio.id)
    servicio: number;
  
    @Column()
    horaEntrada: Date;
  
    @Column()
    horaSalida: Date;
  
    @Column()
    comentarios: string;
}