import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { SecurityModule } from './security/security.module'
import { AuthModule } from './auth/auth.module'
import { AddressesModule, CategoriesModule, OrdersModule, ProductsModule, UsersModule } from './modules'
import { NotificationsModule } from './notifications/notifications.module';
import { LoggerMiddleware } from './logger/logger.middleware'
import { ConfigModule } from '@nestjs/config'
import { FilesController } from './files.controller'
import { UsersService } from './modules/users/users.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    SecurityModule,
    AuthModule,

    AddressesModule,
    CategoriesModule,
    OrdersModule,
    ProductsModule,
    UsersModule,
    NotificationsModule,
  ],
  controllers: [FilesController],
  providers: [UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
}
