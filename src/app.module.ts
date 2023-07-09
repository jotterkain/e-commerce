import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { SecurityModule } from './security/security.module'
import { AuthModule } from './auth/auth.module'
import { AddressesModule, CategoriesModule, OrdersModule, ProductsModule, UsersModule } from './modules'
import { NotificationsModule } from './notifications/notifications.module';
import { LoggerMiddleware } from './logger/logger.middleware'
import { ConfigModule } from '@nestjs/config'
import { MulterModule } from '@nestjs/platform-express'
import { uploadDirProvider } from '@eshop/common'
import { FilesController } from './files.controller'

@Module({
  imports: [
    PrismaModule,
    SecurityModule,
    AuthModule,
    NotificationsModule,

    AddressesModule,
    CategoriesModule,
    OrdersModule,
    ProductsModule,
    UsersModule,
    NotificationsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MulterModule.register({
      dest: uploadDirProvider()
    })
  ],
  controllers: [FilesController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
}
