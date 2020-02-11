import bodyParser from 'body-parser';
import { expect } from 'chai';
import express, { Express } from 'express';
import sinon from 'sinon';
import request from 'supertest';
import Topic from '../../src/models/Topic';
import topicRouter from '../../src/topic/TopicRouter';
import topicService from '../../src/topic/TopicService';
import { fullTopic } from '../fixtures/TopicFixture';

describe('TopicRouter', () => {
    let app: Express;

    beforeEach(() => {
        const router = express.Router();
        router.use(bodyParser.json());
        router.use('/topics', topicRouter.router);
        app = express();
        app.use(router);
    });

    describe('GET topics', () => {
        it('returns a valid topic list', async () => {
            const stub = sinon.stub(topicService, 'find')
                .callsFake(() => Promise.resolve(
                    [Topic.fromJson({...fullTopic, id: 10})],
                ));
            const { body: { topics } } = await request(app).get('/topics');
            expect(topics.length).to.equal(1);
            const topic = topics[0];
            expect(topic.label).to.equal(fullTopic.label);
            expect(topic.icon).to.equal(fullTopic.icon);
            expect(topic.id).to.not.undefined;
        })
    })
})