import { ValidationError } from '@hapi/joi';
import { expect } from 'chai';
import topicService from '../../src/topic/TopicService';
import { fullTopic } from '../fixtures/TopicFixture';

describe('TopicService', () => {
    describe('create', () => {
        it('creates a valid topic', async () => {
            const topic = await topicService.create(fullTopic);
            expect(topic.label).to.equal(fullTopic.label);
            expect(topic.icon).to.equal(fullTopic.icon);
            expect(topic.id).to.not.undefined;
        });

        it('fails if missing params', async () => {
            try {
                await topicService.create({
                    label: 'example'
                })
            } catch (error) {
                expect((error as ValidationError).message).to.not.undefined;
            }
        })
    });

    describe('update', () => {
        it('updates a topic', async () => {
          const topic = await topicService.create(fullTopic);
          const updatedTopic = await topicService.update(topic.id, { label: 'New Topic' });
          expect(updatedTopic.label).to.equal('New Topic');
        });
    
        it('Fails if invalid params', async () => {
          try {
            await topicService.create({
              label: 'label',
            });
          } catch (error) {
            expect((error as ValidationError).message).to.not.undefined;
          }
        });
      });
    
      describe('findOne', () => {
        it('find a topic', async () => {
          const topic = await topicService.create(fullTopic);
          const found = await topicService.findOne(topic.id);
          expect(found.label).to.equal(topic.label);
          expect(found.icon).to.equal(topic.icon);
          expect(found.id).to.equal(topic.id);
        });
    
        it('returns undefined if not found', async () => {
          const topic = await topicService.findOne(20);
          expect(topic).to.undefined;
        });
      });



    describe('find', () => {
        it('returns a list of topics', async () => {
            const topic = await topicService.create(fullTopic);
            const found = await topicService.find({});
            expect(found).to.not.empty;
        })
    })
})