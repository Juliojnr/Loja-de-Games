import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_product'})
export class Product {


    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    name: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    description: string

}

