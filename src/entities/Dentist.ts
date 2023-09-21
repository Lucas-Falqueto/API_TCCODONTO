import { IsEmail } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Diagnosis } from "./Diagnosis"

@Entity()
export class Dentist {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({nullable: true})
    siape: string

    @Column()
    name: string

    @Column()
    crm: string

    @Column()
    @IsEmail()
    email: string

    @Column()
    password: string

    @OneToMany(() => Diagnosis, (diagnosis) => diagnosis.id)
    diagnosis: Diagnosis[]
}
