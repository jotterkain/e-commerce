import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomersModule } from './modules/customers/customers.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { ManufacturersModule } from './modules/manufacturers/manufacturers.module';
import { SpecialOffersModule } from './modules/special-offers/special-offers.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CardsModule } from './modules/cards/cards.module';
import { SecurityModule } from './security/security.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CustomersModule,
    AddressesModule,
    CategoriesModule,
    ProductsModule,
    ManufacturersModule,
    SpecialOffersModule,
    SuppliersModule,
    OrdersModule,
    PrismaModule,
    CardsModule,
    SecurityModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
}
