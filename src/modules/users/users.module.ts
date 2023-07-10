import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { SecurityModule } from 'src/security/security.module'
import { uploadDirProvider } from '@eshop/common'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import * as path from 'path'

@Module({
  imports: [
    SecurityModule,
    MulterModule.register({
      storage: diskStorage({
        destination: uploadDirProvider(),
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          cb(null, `${randomName}${path.extname(file.originalname)}`)
        }
      })
    }),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule { }
