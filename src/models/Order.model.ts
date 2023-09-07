import { model, Schema } from 'mongoose';

export const schema: Schema = new Schema({
    promoId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'promo'
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'product'
    },
    companyId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'company'
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    sum: {
        type: Number,
        required: true
    },
    promoSum: {
        type: Number,
        required: true
    },
},
{
    timestamps: true
});

export const OrderModel = model('order', schema);