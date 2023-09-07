import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel('company') private readonly companies: Model<any>
    ) {}
  async create(body: CreateCompanyDto) {
    const {name} = body;
    const data = await this.companies.create({ name });
    return {message: 'success', data}
  }

  async findAll() {
    const companies = await this.companies.find();
    return {companies};
  }

  async findOne(id: string) {
    const data = await this.companies.findById(id);
    return {message: 'success', data};
  }

  async update(id: string, {name}: UpdateCompanyDto) {
    const data = await this.companies.findByIdAndUpdate(id, {$set: {name: name}});
    return {message: 'Company name was successfully updated', data};
  }

  async remove(id: string) {
    await this.companies.findByIdAndDelete(id);
    return {message: 'Company was removed'};
  }
}
