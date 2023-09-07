import { model, Schema } from 'mongoose';

export const schema: Schema = new Schema({
    name: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

export const UserModel = model('user', schema);