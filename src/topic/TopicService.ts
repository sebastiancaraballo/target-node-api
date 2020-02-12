import Topic from '../models/Topic';
import topicRepository, { TopicRepository } from '../topic/TopicRepository';
import { validateTopic, validateTopicUpdate } from './TopicValidation';

export class TopicService {
    private repository: TopicRepository;

    constructor(repository: TopicRepository) {
        this.repository = repository;
    }

    public findOne(id: number) {
        return this.repository.findOne(id);
    }

    public find(params: any) {
        return this.repository.find(params);
    }

    public async create(topicParams: any) {
        const params = validateTopic(topicParams);
        const topic = Topic.fromJson(params);
        return await this.repository.create(topic);
    }

    public async update(id: number, topicParams: any) {
        const params = validateTopicUpdate(topicParams);
        return this.repository.update(id, params);
    }
}

export default new TopicService(topicRepository);
