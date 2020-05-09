const express = require("express");

const Product = require("../model/product");

const router = express.Router();

// router.get("/:productId", async (req, res) => {
//     try {
//         const productById = await Product.findById(
//             req.params.productId,
//         );

//         return res.send({ productById });
//     } catch (error) {
//         return res.status(400).send({ err: "Erro ao listar o produto" });
//     }
// });

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();

        return res.send({ products });
    } catch (error) {
        return res.status(400).send({ err: "Erro ao listar os produtos" });
    }
});

router.get("/:byName", async (req, res) => {
    try {
        const productByNome = await Product.findOne({
            name: req.params.byName,
        });

        return res.send({ productByNome });
    } catch (error) {
        return res.status(400).send({ err: "Erro ao listar o produto" });
    }
});

router.post("/addProduct", async (req, res) => {
    const { name } = req.body;

    try {
        if (await Product.findOne({ name }))
            return res.status(400).send({ error: "Produto já existe" });

        const product = await Product.create(req.body);

        return res.send({ product });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ err: "Erro ao cadastrar produto" });
    }
});

router.put("/", async (req, res) => {
    res.send({ products: req.productId });
});

// router.delete("/:productName", async (req, res) => {
//     try {
//         await Product.findOneAndRemove({ name: req.params.byName });
//         return res.send();
//     } catch (error) {
//         return res.status(400).send({ err: "Erro ao remover o produto" });
//     }
// });

router.delete("/:productId", async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.productId );

        return res.send();
    } catch (error) {
        return res.status(400).send({ err: "Erro ao remover o produto" });
    }
});

module.exports = (app) => app.use("/products",router);
