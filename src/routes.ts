import { Router } from "express";
import NoticiaRoutes from "./routes/noticiaRoutes";

const router = Router();

router.use("/api", NoticiaRoutes);

export default router;