import express from 'express';
import asyncMiddleware from '../middlewares/AsyncMiddleware';
import serializeTopic from './TopicSerializer';
import topicService, { TopicService } from './TopicService';

export class TopicRouter {
    public router: express.Router;
    private service: TopicService;

    constructor(service: TopicService) {
        this.service = service;
        this.router = express.Router();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router.get('/', asyncMiddleware(async (req, res) => {
            const topics = await this.service.find(req.query);
            res.send({
                topics: topics.map((topic) => serializeTopic(topic)),
            });
        }));
    }
}

export default new TopicRouter(topicService);
