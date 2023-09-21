import { IsEmail } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { Diagnosis } from "./Diagnosis"
import { Anamnese } from "./Anamnese"

@Entity()
export class Student {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phone: string

    @Column()
    birthDate: Date

    @Column({length: 1})
    gender: string

    @Column()
    enrollment: string

    @OneToMany(() => Diagnosis, (diagnosis) => diagnosis.id)
    diagnosis: Diagnosis[]

    // @OneToOne(() => Anamnese, (anamnese)=>anamnese.id)
    // @JoinColumn()
    // anamneseID: Anamnese
}
