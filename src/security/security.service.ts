import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as bcrypt from "bcrypt"
import { isEmpty } from 'class-validator'
import { createCipheriv, createDecipheriv, scrypt } from 'crypto'
import { promisify } from 'util'

@Injectable()
export class SecurityService implements OnModuleInit {

    private encryption_key: string
    private iv: string
    private key: Buffer;

    constructor(private configService: ConfigService) { }

    async onModuleInit() {
        this.encryption_key = this.configService.getOrThrow<string>("ENCRYPTION_KEY")
        this.iv = this.configService.getOrThrow<string>("IV")
        this.key = (await promisify(scrypt)(this.encryption_key, await bcrypt.genSalt(), 32)) as Buffer
    }

    encrypt(text: string) {
        const cipher = createCipheriv("aes-256-gcm", this.key, this.iv)
        return Buffer.concat([
            cipher.update(Buffer.from(text)),
            cipher.final()
        ]).toString("base64")
    }

    decrypt(cipher: string) {
        const decipher = createDecipheriv("aes-256-gcm", this.key, this.iv)
        return Buffer.concat([
            decipher.update(Buffer.from(cipher,"base64")),
            decipher.final(),
        ]).toString()
    }

    encryptOr(text?: string) {
        return isEmpty(text) ? text : this.encrypt(text)
    }

    decryptOr(cipher?:string){
        return isEmpty(cipher) ? cipher : this.decrypt(cipher)
    }

    /**
     * @param text the text to be hashed .
     * @returns string - The hashed text.
    **/
    async hash(text: string) {
        const salt = await bcrypt.genSalt()
        return await bcrypt.hash(text, salt)
    }
}
