import { model, Schema } from 'mongoose';

export const schema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    companyId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'company'
    },
},
{
    timestamps: true
});

export const ProductModel = model('product', schema);