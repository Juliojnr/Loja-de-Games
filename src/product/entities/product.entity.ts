import { IsNotEmpty } from "class-validator";
import { Category } from "src/category/entities/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


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

    @ManyToOne(() => Category, (category) => category.product, {
        onDelete: "CASCADE"
    })
    category: Category;
}

