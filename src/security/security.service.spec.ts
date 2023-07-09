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
      imports: [ConfigModule],
      providers: [
        SecurityService,
        ConfigService
      ],
    }).compile();

    let configService = await module.resolve(ConfigService)
    service = module.get<SecurityService>(SecurityService);
    service['encryption_key'] = configService.getOrThrow<string>("ENCRYPTION_KEY")
    service["iv"] = configService.getOrThrow<string>("IV")
    service['key'] = (await promisify(scrypt)(service['encryption_key'], await genSalt(), 32)) as Buffer;
  });

  describe('encrypt and decrypt', () => {
    console.log(service["key"])
    const originalText = 'Hello, World!';

    it('should encrypt and decrypt text successfully', () => {
      const encryptedText = service.encrypt(originalText);
      console.log(encryptedText)
      const decryptedText = service.decrypt(encryptedText);

      expect(decryptedText).toBe(originalText);
    });

    it('should return the original text if cipher is empty', () => {
      const decryptedText = service.decryptOr('');

      expect(decryptedText).toBe('');
    });
  });
});
