const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    name: String,
    phone: Number,
    address: String,
    itemName: String,
    totalAmount: Number,
    amountPaid: Number,
    amountToBePaid: Number,
    dateOfPurchase: String,
    dateOfPayment: String,
    paymentHistory: [String],
    amountHistory: [Number],
    initialAmount: Number,
    addPhoto:[String] 
})

const CustomerModel = mongoose.model('CustomerCollection', CustomerSchema);
module.exports = CustomerModel;