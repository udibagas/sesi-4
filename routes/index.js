const { auth } = require("../middlewares/auth");
const { pakaiSeragam, bukanHariLibur } = require("../middlewares/sekolah");
const router = require("express").Router(); // mini app

router.get("/", (req, res) => {
  res.send("Home");
});

router.use(require("./products"));

router.use("/sekolah", pakaiSeragam);
router.use("/sekolah", bukanHariLibur);

router.get("/sekolah", (req, res) => {
  res.send("Belajar di sekolah");
});

router.get("/kuliah", (req, res) => {
  res.send("Belajar di kampus");
});

router.get("/kerja", (req, res) => {
  res.send("Kerja keras bagai kuda");
});

router.get("/admin", auth, (req, res) => {
  res.send("Halaman khusus admin");
});

router.post("/login", (req, res) => {
  const users = require("../data/users.json");
  const { email, password } = req.body;

  const user = users.find((user) => user.email == email);

  if (!user) {
    return res.status(401).send("Wrong email or password");
  }

  if (user.password !== password) {
    return res.status(401).send("Wrong email or password");
  }

  res.status(200).send(`Welcome ${user.name}!`);
});

module.exports = router;
