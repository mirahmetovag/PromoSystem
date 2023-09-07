import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompaniesService } from './../companies/companies.service';
import { UsersService } from './../users/users.service';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';

@Injectable()
export class PromosService {
  constructor(
    @InjectModel('promo') private readonly promos: Model<any>,
    private readonly usersService: UsersService,
    private readonly companiesService: CompaniesService
    ) {}
  async create(body: CreatePromoDto) {
    const {promo, userId, companyId} = body;
    const data = await this.promos.create({ promo, userId, companyId });
    return {message: 'success' , data}
  }

  async findAll() {
    const data = await this.promos.find().populate(['userId', 'companyId']);
    return {message: 'Success', data};
  }

  async findOne(id: string) {
    const data = await this.promos.findById(id)
    return {data};
  }

  async update(id: string, {promo}: UpdatePromoDto) {
    const data = await this.promos.findByIdAndUpdate(id, {$set: {promo: promo}});
    return {message: 'Promo code was updated', data};
  }

  remove(id: string) {
    return `This action removes a #${id} promo`;
  }
}
