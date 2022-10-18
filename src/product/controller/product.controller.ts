import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Product } from "../entities/product.entity";
import { ProductService } from "../services/product.service";

@Controller('/product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

   @Get()
   @HttpCode(HttpStatus.OK)
    findAll(): Promise<Product[]> {
        return this.productService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe)id: number): Promise<Product> {
        return this.productService.findById(id);
    }

    @Get('/name/:name')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('name' )name: string): Promise<Product[]> {
        return this.productService.findByName(name)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() product: Product): Promise<Product> {
        return this.productService.create(product)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()product: Product): Promise<Product> {
        return this.productService.update(product);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe)id: number) {
        return this.productService.delete(id)
    }
    
}