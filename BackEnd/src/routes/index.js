const express = require("express");
const hotelSchema = require("../models/index");
const router = express.Router();


router.get("/hotels", (req, res) => {
    hotelSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

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

router.put("/hotels/:id", (req, res) => {
    const hotelId = req.params.id;
    const updatedData = req.body;

    hotelSchema
        .findByIdAndUpdate(hotelId, updatedData, { new: true })
        .then((updatedHotel) => res.json(updatedHotel))
        .catch((error) => res.json({ message: error }));
});

router.delete("/hotels/:id", (req, res) => {
    const hotelId = req.params.id;

    hotelSchema
        .findByIdAndRemove(hotelId)
        .then(() => res.json({ message: "Hotel eliminado correctamente" }))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;