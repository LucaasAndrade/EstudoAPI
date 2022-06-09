import { con } from './connection.js'

export async function listarSuperHerois() {
    const comando = 
    `
    SELECT
        id_superHeroi       id, 
        nm_superHeroi       nome,
        ds_poderes          poderes,
        bl_podeVoar         podeVoar
	        FROM tb_superHeroi;
    `
    const [linhas] = await con.query(comando);
    return linhas
}


export async function adicionarHeroi(heroi) {
    const comando = 
    `
    INSERT INTO tb_superHeroi(nm_superHeroi, ds_poderes, bl_podeVoar)
	    VALUES(?, ?, ?);
    `
    const [resposta] = await con.query(comando, [heroi.nome, heroi.poder, heroi.podeVoar])
    heroi.id = resposta.insertId;
    return heroi;
}   