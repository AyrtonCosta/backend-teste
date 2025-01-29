import { Router } from "express";
import { createNoticia, deleteNoticia, getNoticias, updateNoticia } from "../controllers/NoticiaController";


const router = Router();

router.get("/noticia", getNoticias )
router.post("/noticia", createNoticia)
router.put("/noticia/:id", updateNoticia)
router.delete("/noticia/:id",deleteNoticia )

export default router;