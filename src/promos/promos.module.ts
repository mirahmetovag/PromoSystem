import { Module } from '@nestjs/common';
import { PromosService } from './promos.service';
import { PromosController } from './promos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { schema } from 'src/models/Promo.model';
import { UsersModule } from 'src/users/users.module';
import { CompaniesModule } from './../companies/companies.module';

@Module({
  imports: [MongooseModule.forFeature([{schema: schema, name: 'promo'}]), UsersModule, CompaniesModule],
  controllers: [PromosController],
  providers: [PromosService],
  exports: [PromosService]
})
export class PromosModule {}
