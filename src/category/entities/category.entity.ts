import { IsNotEmpty } from "class-validator";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'tb_category'})
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    platform: string

    @OneToMany (() => Product, (product) => product.category)
    product: Product[]
}