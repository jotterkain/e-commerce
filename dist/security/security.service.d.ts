import { ConfigService } from '@nestjs/config';
export declare class SecurityService {
    private readonly config;
    private iv;
    private key;
    constructor(config: ConfigService);
    onModuleInit(): Promise<void>;
    encrypt(text: string): string;
    decrypt(encryptedText: string): string;
    encryptOr(text: string): string;
}
