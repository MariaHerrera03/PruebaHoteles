const express = require("express");
const hotelSchema = require("../models/index");
const router = express.Router();


router.post("/hotels", (req, res) => {
    const hotel = hotelSchema(req.body);
    hotel
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/hotels", (req, res) => {
    hotelSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;