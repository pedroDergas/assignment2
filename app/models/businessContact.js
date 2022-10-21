import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    ContactName: String,
    EmailAddress: String,
    ContactNumber: Number
}, {
    timestamps: true,
    collection: 'business'
});

export default mongoose.model('businessContact', BusinessSchema);