import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly users: Model<any>) {}
  
  async create(body: CreateUserDto) {
    const {name} = body;
    const data = await this.users.create({ name });

    return {message: 'Success', data}
  }

  async findAll() {
    return await this.users.find()
  }

  async findOne(id: string) {
    const data = await this.users.findById(id);
    return {data};
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const data = await this.users.findByIdAndUpdate(id, {$set: { name: name}});
    return {message: 'User was successfully updated', data};
  }

  async remove(id: string) {
    await this.users.findByIdAndDelete(id);
    return {message: 'User was successfully deleted'};
  }
}
