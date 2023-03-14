import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomersModule } from './components/customers/customers.module';
import { AddressModule } from './components/address/address.module';
import { CategoriesModule } from './components/categories/categories.module';
import { ProductsModule } from './components/products/products.module';
import { ManufacturersModule } from './components/manufacturers/manufacturers.module';
import { SpecialOffersModule } from './components/special-offers/special-offers.module';
import { SuppliersModule } from './components/suppliers/suppliers.module';
import { PurchasesModule } from './components/purchases/purchases.module';
import { CommandsModule } from './components/commands/commands.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CartItemsModule } from './components/cart-items/cart-items.module';
import { CardsModule } from './components/cards/cards.module';
import { CartsController } from './components/carts/carts.controller';
import { CartsModule } from './components/carts/carts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CustomersModule,
    AddressModule,
    CategoriesModule,
    ProductsModule,
    ManufacturersModule,
    SpecialOffersModule,
    SuppliersModule,
    PurchasesModule,
    CommandsModule,
    PrismaModule,
    CartItemsModule,
    CardsModule,
    CartsModule],

  controllers: [CartsController],
  providers: [AppService],
})
export class AppModule {
}
