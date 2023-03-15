import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

@Injectable()
export class SecurityService {
  private readonly iv = randomBytes(16);
  private key: Buffer;

  constructor(private readonly config: ConfigService) {
    (async () => {
      try {
        const password = this.config.get<string>('ENCRYPT_PASSWORD');
        this.key = await promisify(scrypt)(password, 'salt', 32) as Buffer;
      } catch (err) {
        console.error(err);
      }
    })();
  }

  encrypt(text: string): string {
    const cipher = createCipheriv('aes-256-ctr', this.key, this.iv);
    return Buffer.concat([cipher.update(text), cipher.final()]).toString('base64');
  }

  decrypt(encryptedText: string): string {
    const decipher = createDecipheriv('aes-256-ctr', this.key, this.iv);
    const encryptedAsBuffer = Buffer.from(encryptedText, 'base64');
    return Buffer.concat([decipher.update(encryptedAsBuffer), decipher.final()]).toString();
  }
}
