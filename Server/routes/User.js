const router = require("express").Router();

const { homepage, signup, login } = require("../controllers/User");

router.get("/", homepage);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
