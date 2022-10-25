import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'



@Injectable()
export class Bcrypt {

    async encryptPassword (password: string): Promise<string> {

        let heels = 10;
        return await bcrypt.hash(password, heels)
    }

    async comparePassoword (bankPassword: string, typedPassword): Promise<boolean> {
        return bcrypt.compareSync(typedPassword, bankPassword)
    }
}