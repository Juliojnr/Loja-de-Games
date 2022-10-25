import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { UserService } from "../service/user.service";


@Controller('/user')
export class UserController {
    constructor (private readonly userService: UserService) { }

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Post('/register')
    @HttpCode(HttpStatus.CREATED)
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user)
    }

    @Put('/update')
    @HttpCode(HttpStatus.OK)
    async update(@Body() user: User): Promise<User> {
        return await this.userService.update(user)
    }
}