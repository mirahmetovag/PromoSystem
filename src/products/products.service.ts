import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CompaniesService } from './../companies/companies.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('product') private readonly products: Model<any>,
    private readonly companiesService: CompaniesService
    ) {}
  async create(body: CreateProductDto) {
    const {name, price, companyId} = body;
    const data = await this.products.create({ name, price, companyId });
    return {message: 'success' , data}
  }

  async findAll() {
    const products = await this.products.find().populate('companyId')
    return {message: 'Success', products}
  }

  async findOne(id: string) {
    const data = await this.products.findById(id);
    return {message: 'Product:', data};
  }

  async update(id: string, {name, price}: UpdateProductDto) {
    await this.products.findByIdAndUpdate(id, {$set: {name: name, price: price}})
    return {message: 'Successfully updated'};
  }

  async remove(id: string) {
    await this.products.findByIdAndDelete(id);
    return {message: 'Product successfully deleted'};
  }
}
