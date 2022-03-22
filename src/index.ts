import express from 'express';
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';

const api = express();
api.use(express.json());

const db = new MongoConnection();
db.connect();

const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

api.listen(3000, () => console.log('Express running on port 3000!'));