import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'tb_user'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    name: string;

    @IsEmail()
    @Column({length: 255, nullable: false})
    user: string;

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    password: string;

    @OneToMany(() => Product, (product) => product.user)
    product: Product[];
}