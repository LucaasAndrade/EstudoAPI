import { listarSuperHerois, adicionarHeroi } from "../repository/superHeroiRepository.js";

import { Router } from 'express';

const server = Router();


server.get('/superHerois', async (req, resp) => {
    try{
        const resposta = await listarSuperHerois();
        resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
});


server.post('/superHerois', async (req, resp) => {
    try{
        const heroiParaInserir = req.body;
        const heroiInserido = await adicionarHeroi(heroiParaInserir);

        resp.send(heroiInserido);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;