import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomersModule } from './components/customers/customers.module';
import { AddressesModule } from './components/addresses/addresses.module';
import { CategoriesModule } from './components/categories/categories.module';
import { ProductsModule } from './components/products/products.module';
import { ManufacturersModule } from './components/manufacturers/manufacturers.module';
import { SpecialOffersModule } from './components/special-offers/special-offers.module';
import { SuppliersModule } from './components/suppliers/suppliers.module';
import { OrdersModule } from './components/orders/orders.module';
import { CommandsModule } from './components/commands/commands.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CartItemsModule } from './components/cart-items/cart-items.module';
import { CardsModule } from './components/cards/cards.module';
import { CartsModule } from './components/carts/carts.module';
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
    CommandsModule,
    PrismaModule,
    CartItemsModule,
    CardsModule,
    CartsModule,
    SecurityModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
}
