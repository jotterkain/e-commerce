import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { SecurityModule } from './security/security.module'
import { AuthModule } from './auth/auth.module'
import { AddressesModule, CardsModule, CategoriesModule, OrdersModule, ProductsModule, UsersModule } from './modules'
import { NotificationsModule } from './notifications/notifications.module';
import { LoggerMiddleware } from './logger/logger.middleware'
import { ConfigModule } from '@nestjs/config'

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
    NotificationsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
}
