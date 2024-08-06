function pakaiSeragam(req, res, next) {
  // req.query, req.params, req.body, req.session, req.headers
  const seragam = false;
  if (!seragam) {
    return res.send("Sekolah harus pakai seragam");
  }

  next();
}

function bukanHariLibur(req, res, next) {
  const hari = "senin";

  if (hari == "minggu") {
    return res.send("Hari minggu libur");
  }

  if (hari == "sabtu") {
    return res.send("Hari sabtu libur");
  }

  next();
}

module.exports = { pakaiSeragam, bukanHariLibur };
