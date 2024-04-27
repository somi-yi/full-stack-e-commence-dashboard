import express from "express";
import { getUser,getDashboardStats } from "../controllers/general.js"; 


const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

// router.get('/test', (req, res) => {
//   res.status(200).json({ message: "Test endpoint working" });
// });

export default router;