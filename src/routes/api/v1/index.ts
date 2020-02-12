import bodyParser from 'body-parser';
import express from 'express';
import topicRouter from '../../../topic/TopicRouter';
import userRouter from '../../../user/UserRouter';

const apiRouter = express.Router();

apiRouter.use(bodyParser.json());

apiRouter.use('/users', userRouter.router);

apiRouter.use('/topics', topicRouter.router);

export default apiRouter;
