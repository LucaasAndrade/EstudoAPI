import 'dotenv/config'

import express from 'express'
import cors from 'cors';

import superHeroiController from './controller/superHeroiController.js';

const server = express();
server.use(cors());
server.use(express.json());
server.use(superHeroiController)

server.listen(process.env.PORT, () => {
                console.log(`API online. PORTA ${process.env.PORT}`)
});