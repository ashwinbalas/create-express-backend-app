import { Router } from "express";
import * as controller from "./user.controller.ts";

const router = Router();

router.post("/", controller.createUser);
router.get("/", controller.getUsers);

export default router;
