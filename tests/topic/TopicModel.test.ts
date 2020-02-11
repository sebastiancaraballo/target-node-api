import { expect } from 'chai';
import Topic from '../../src/models/Topic';
import { fullTopic } from '../fixtures/TopicFixture';

describe('Topic Model', () => {
    describe('fromJson', () => {
        it('returns a valid topic', () => {
            const topic = Topic.fromJson(fullTopic);
            expect(topic.label).to.equal(fullTopic.label);
            expect(topic.icon).to.equal(fullTopic.icon)
        })
    })
})