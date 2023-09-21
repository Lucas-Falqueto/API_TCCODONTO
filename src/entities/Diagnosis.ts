import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Dentist } from "./Dentist"
import { Student } from "./Student"

@Entity()
export class Diagnosis {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    date: Date

    @Column()
    description: string

    @ManyToOne(() => Dentist, (dentist)=>dentist.id)
    dentist: number

    @ManyToOne(() => Student, (student)=>student.id)
    student: number
}
