import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

router.get("/performance/:id", (req, res) => { // Second definition, this overrides the first
  res.send("Performance endpoint reached");
});

router.use((req, res, next) => {
  console.log(`Handling ${req.method} request for ${req.url}`);
  next();
});


export default router;