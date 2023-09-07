import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { ProductsModule } from './products/products.module';
import { PromosModule } from './promos/promos.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, CompaniesModule, ProductsModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/promo'), PromosModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
