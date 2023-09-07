import { ObjectId } from "mongoose";

export class CreateUserDto {
    name: string;
    companyId: ObjectId;
}
