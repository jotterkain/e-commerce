import { uploadDirProvider } from "@eshop/common";
import { Controller, Get, NotFoundException, Param, Res } from "@nestjs/common";
import { Response } from "express";
import * as fs from "fs"
@Controller("res")
export class FilesController {
    constructor() { }

    @Get(":filename")
    getFile(@Param("filename") filename: string, @Res() res: Response) {
        try {
            const path = uploadDirProvider() + "/" + filename
            if (fs.existsSync(path)) {
                res.sendFile(path)
            } else {
                throw new NotFoundException()
            }
        } catch (error) {
            throw error
        }
    }
}