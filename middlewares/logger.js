const fs = require("fs");
const path = require("path");

function logger(req, res, next) {
  const currentTime = new Date().toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "long",
  });

  const { method, url, ip } = req;

  let data = `[${currentTime}] - ${ip} - ${method} ${url} \n`;
  fs.appendFile(path.join(__dirname, "../logs/access.log"), data, (err) => {
    if (err) console.log(err.message);
  });

  next();
}

module.exports = logger;
