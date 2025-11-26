import { Router } from "express";
import { pushComponent, pullComponent } from "../controllers/cliComponentController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const componentRouter = Router();

componentRouter.post("/", authMiddleware, pushComponent);
componentRouter.get("/", authMiddleware, pullComponent);

export default componentRouter;
