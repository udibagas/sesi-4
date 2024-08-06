exports.auth = (req, res, next) => {
  req.isLoggedIn = true;
  req.role = "admin";

  if (!req.isLoggedIn) {
    return res.status(401).send("Unauthenticated");
  }

  if (req.role !== "admin") {
    return res.status(403).send("Unauthorized");
  }

  next();
};
