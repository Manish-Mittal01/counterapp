const router = require("express").Router();
const { increaseCounter, decreaseCounter, getCounter } = require("../controllers/counterController");


router.route("/increasecounter").post(increaseCounter)
router.route("/decreasecounter").post(decreaseCounter);
router.route("/getCounter").get(getCounter);

module.exports = router