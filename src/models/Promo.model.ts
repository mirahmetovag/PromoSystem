import { model, Schema } from 'mongoose';

export const schema: Schema = new Schema({
    promo: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
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

export const PromoModel = model('promo', schema);