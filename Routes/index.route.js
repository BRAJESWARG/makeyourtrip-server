const express = require("express");

const router = express.Router();
const homeRouter = require("./home.route");
const categoryRouter = require("./category.route");

router.use("/MakeYourTrip", homeRouter);
router.use("/MakeYourTrip", categoryRouter);


module.exports=router;