import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Module, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Category } from "../entities/category.entity";
import { CategoryService } from "../service/category.service";

@Controller('/category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
        return this.categoryService.findById(id)
    }

    @Get('/platform/:platform')
    @HttpCode(HttpStatus.OK)
    findByPlatform(@Param('platform') platform: string): Promise<Category[]> {
        return this.categoryService.findByPlatform(platform);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    create(@Body()category: Category): Promise<Category> {
        return this.categoryService.create(category)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() category: Category): Promise<Category> {
        return this.categoryService.update(category)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe)id: number) {
        return this.categoryService.delete(id);
    }
}