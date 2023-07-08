import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { SecurityModule } from './security/security.module'
import { AuthModule } from './auth/auth.module'
import { AddressesModule, CardsModule, CategoriesModule, OrdersModule, ProductsModule, UsersModule } from './modules'
import { NotificationsModule } from './notifications/notifications.module';
import { LoggerMiddleware } from './logger/logger.middleware'

@Module({
  imports: [
    PrismaModule,
    SecurityModule,
    AuthModule,
    NotificationsModule,

    AddressesModule,
    CardsModule,
    CategoriesModule,
    OrdersModule,
    ProductsModule,
    UsersModule,
    NotificationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
}
