import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompaniesService } from 'src/companies/companies.service';
import { ProductsService } from 'src/products/products.service';
import { PromosService } from 'src/promos/promos.service';
import { UsersService } from 'src/users/users.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('order') private readonly orders: Model <any>,
  private readonly promosService: PromosService,
  private readonly productsService: ProductsService,
  private readonly companiesService: CompaniesService,
  private readonly usersService: UsersService
  ) {}

  async create({promoId, productId, companyId, userId, sum, promoSum}: CreateOrderDto) {
    const data = await this.orders.create({promoId, productId, companyId, userId, sum, promoSum});
    return {message: 'Success', data};
  }

  async findAll() {
    const data = await this.orders.find().populate(['promoId', 'productId', 'companyId', 'userId']);
    return {message: 'Success', data}
  }

  async findOne(id: string) {
    const data = await this.orders.findById(id);
    return {data};
  }

  async update(id: string, {productId, sum, promoSum}: UpdateOrderDto) {
    const data = await this.orders.findByIdAndUpdate(id, {$set: { productId: productId, sum: sum, promoSum: promoSum }});
    return {message: 'Order was updated', data}
  }

  async remove(id: string) {
    const data = await this.orders.findByIdAndDelete(id)
    return data
  }
}
