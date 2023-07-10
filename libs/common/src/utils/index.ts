import { randomBytes } from "crypto"
import { resolve, join } from "path";
import { existsSync, rmSync } from "fs";
import { InternalServerErrorException } from "@nestjs/common";
export const generateRandomString = (length: number): string => {
    return randomBytes(length).toString("hex").toLowerCase()
}

export function uploadDirProvider() {
    return join(process.cwd(), "uploads");
}

/**
 * Delete a file uploaded on the server. Using its name
 * @param filename
 * @throws {InternalServerErrorException} if deletion fails
 * @returns Boolean - True if the file has been found and deleted.
**/
export function deleteFile(filename: string) {
    if (existsSync(resolve(uploadDirProvider(), `${filename}`))) {
        try {
            rmSync(resolve(uploadDirProvider(), `${filename}`))
            return true
        } catch {
            throw new InternalServerErrorException()
        }
    } else {
        return false
    }
}