
import {Request,Response} from 'express';
import * as  noticiaRepository from '../repositories/noticiaRepositories';
import { Noticia } from '../model/Noticia';

export const getNoticias = async (req: Request, res: Response) => {
    const noticias = await noticiaRepository.getAllNoticia();
    res.json(noticias);

}

export const createNoticia = async (req: Request, res: Response) => {
    const {titulo, descricao}: Noticia =  req.body;
    const noticia = await noticiaRepository.createNoticia(titulo, descricao);
    res.status(201).json(noticia);
}

export const updateNoticia = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {titulo,descricao}: Noticia = req.body;
    const noticia = await noticiaRepository.updateNoticia(id, titulo, descricao);
    res.json(noticia);
}

export const deleteNoticia = async(req: Request, res: Response) => {
    const {id} = req.params;
    await noticiaRepository.deleteNoticia(id);
    res.sendStatus(204)
}