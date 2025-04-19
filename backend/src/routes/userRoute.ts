import express from "express";
import { projects, votes, events, NFT  } from "../controllers/userController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/events", events);
router.get("/projects", projects);
router.post("/events", events);
router.post("/projects", projects);
router.post("/votes", votes);
router.post("/NFT", NFT);


export default router;

