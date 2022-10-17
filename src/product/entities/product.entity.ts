import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity({name: 'tb_product'})
export class Product {


    @PrimaryGeneratedColumn()
    id: number

}

