const mongoose = require('../database') 

//.set('debug', true);; verifica que query está sendo mandada

const ProdutSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
    },
    costPrice: {
        type: Number,
        required: true,
    },
    sellPrice: {
        type: Number,
        required: true,
    }

});

const Product = mongoose.model('Product', ProdutSchema);

module.exports= Product;