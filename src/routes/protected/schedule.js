const express = require("express");
const router = express.Router();
const authorizations = require("../../middleware/tokenVerification");
const { Schedule } = require("../../models/User");

router.get("/", authorizations, async (req, res) => {
  const schedules = await Schedule.find();
  res.status(200).send(schedules);
});

router.get("/:id", authorizations, async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  res.send(schedule);
});

router.post("/", authorizations, async (req, res) => {
  try {
    const schedule = await new Schedule({
      title: req.body.title,
      time: req.body.time,
      description: req.body.description,
    });
    schedule.save();
    res.send(schedule);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put("/:id", authorizations, async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (schedule) {
      res.json(schedule);
    } else {
      res.status(404).json({ message: "Schedule not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating Schedule" });
  }
});

router.delete("/:id", authorizations, async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);
    if (schedule) {
      res.json({ message: "Schedule deleted" });
    } else {
      res.status(404).json({ message: "Schedule not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while deleting Schedule" });
  }
});

module.exports = router;
