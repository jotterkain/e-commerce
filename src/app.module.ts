import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { AddressModule } from './address/address.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { SpecialOffersModule } from './special-offers/special-offers.module';
import { CustomerContactsModule } from './customer-contacts/customer-contacts.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { PurchasesModule } from './purchases/purchases.module';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [CustomersModule, AddressModule, CategoriesModule, ProductsModule, ManufacturersModule, SpecialOffersModule, CustomerContactsModule, SuppliersModule, PurchasesModule, CommandsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
