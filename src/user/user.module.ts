import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { UserController } from "./controller/user.controller";
import { User } from "./entities/user.entity";
import { UserService } from "./service/user.service";



@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [Bcrypt, UserService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule { }