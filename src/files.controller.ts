import { Controller, Get, Param } from "@nestjs/common";

@Controller("res")
export class FilesController {
    constructor() { }

    @Get("fileName")
    getFile(@Param("fileName") fileName: string) {
        return 
    }
}