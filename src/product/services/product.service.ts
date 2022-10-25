import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Product } from "../entities/product.entity";

@Injectable()
export class ProductService {
    constructor (
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {}

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find({
            relations: {
                category: true,
                user: true
            }
        })
    }

    async findById(id: number): Promise<Product> {

        let product = await this.productRepository.findOne({
            where: {
                id
            },
            relations: {
                category: true,
                user: true
            }
        })

        if (!product)
            throw new HttpException ('Produto não encontrado!', HttpStatus.NOT_FOUND);
        return product;
    }

    async findByName(name: string): Promise<Product[]> {
        return await this.productRepository.find({
            where: {
                name: ILike (`%${name}%`)
            },
            relations: {
                category: true,
                user: true
            }
        })
    }

    async create(product: Product): Promise<Product> {
        return await this.productRepository.save(product)
    }

    async update(product: Product): Promise<Product> {
        
        let searchProduct: Product = await this.findById(product.id);

        if (!searchProduct || !product.id)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
        return await this.productRepository.save(product)
    }

    async delete(id: number): Promise<DeleteResult> {
        
        let searchProduct = await this.findById(id);

        if (!searchProduct)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
        return await this.productRepository.delete(id);
    }

}