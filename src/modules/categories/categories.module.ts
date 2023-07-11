import { Module } from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { CategoriesController } from './categories.controller'
import { uploadDirProvider } from '@eshop/common'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import path from 'path'

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: uploadDirProvider(),
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          cb(null, `${randomName}${path.extname(file.originalname)}`)
        }
      })
    })
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
