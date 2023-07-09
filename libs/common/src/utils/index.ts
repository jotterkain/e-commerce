import { randomBytes } from "crypto"

export const generateRandomString = (length: number): string => {
    return randomBytes(length).toString("hex").toLowerCase()
}