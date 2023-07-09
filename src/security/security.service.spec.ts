import { Test, TestingModule } from '@nestjs/testing';
import { SecurityService } from './security.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { promisify } from 'util';
import { scrypt } from 'crypto';
import { genSalt } from 'bcrypt';

describe('SecurityService', () => {
  let service: SecurityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({isGlobal: true})],
      providers: [
        SecurityService,
        ConfigService
      ],
    }).compile();
    let configService = await module.resolve(ConfigService)
    service = module.get<SecurityService>(SecurityService);
    service["iv"] = configService.getOrThrow<string>("IV")
    service['encryption_key'] = configService.getOrThrow<string>("ENCRYPTION_KEY")
    service['key'] = (await promisify(scrypt)(service['encryption_key'], await genSalt(), 32)) as Buffer;
  });

  describe('encrypt and decrypt', () => {
    const originalText = 'Hello, World!';

    it('should encrypt and decrypt text successfully', () => {
      const encryptedText = service.encrypt(originalText);
      const decryptedText = service.decrypt(encryptedText);
      expect(decryptedText).toBe(originalText);
    });
    
  });
});
