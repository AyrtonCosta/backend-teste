import pool from "../database";
import { Noticia } from "../model/Noticia";

export const getAllNoticia = async (): Promise<Noticia[]> => {
    const resul = await pool.query("SELECT * FROM noticia");
    return resul.rows;
};


export const createNoticia = async (titulo:string, descricao:string): Promise<Noticia> => {
    const result = await pool.query("INSERT INTO noticia (titulo, descricao) VALUES ($1, $2) RETURNING *", [titulo, descricao]);
    console.log(result.rows[0]);
    return result.rows[0];
};

export const updateNoticia = async (id:string, titulo:string, descricao:string): Promise<Noticia> => {
    const result = await pool.query("UPDATE noticia SET titulo = $1, descricao = $2 WHERE id = $3 RETURNING *", [titulo, descricao, id]);
    return result.rows[0];
};    

export const deleteNoticia = async (id:string): Promise<Noticia> => {
    const result = await pool.query("DELETE FROM noticia WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};