const products = require("../data/products.json");
const router = require("express").Router();

router.get("/products", (req, res) => {
  const { search, price } = req.query;

  console.log(req.query);

  let filteredProducts = [...products];

  if (search) {
    filteredProducts = filteredProducts.filter((el) => {
      return el.name.toLowerCase().includes(search);
    });
  }

  if (price) {
    filteredProducts = filteredProducts.filter(
      (el) => el.price >= Number(price)
    );
  }

  res.send(filteredProducts);
});

router.get("/products/add", (req, res) => {
  res.send(`menampilkan form untuk menambahkan product baru`);
});

router.get("/products/:id", (req, res) => {
  res.send(`Product by id ${req.params.id}`);
});

module.exports = router;
