import { randomBytes } from "crypto"
import { join } from "path";

export const generateRandomString = (length: number): string => {
    return randomBytes(length).toString("hex").toLowerCase()
}

export function uploadDirProvider() {
    return join(process.cwd(), "uploads");
  }
  