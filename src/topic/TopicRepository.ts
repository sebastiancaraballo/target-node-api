import {
    FindConditions,
    getRepository,
} from 'typeorm';
import Topic from '../models/Topic';

export class TopicRepository {
    public findOne(id: number) {
        return this.getRepository().findOne(id);
    }

    public find(params: FindConditions<Topic>) {
        return this.getRepository().find(params);
    }

    public async create(topic: Topic) {
        return await this.getRepository().save(topic);
    }

    public async update(id: number, params: any) {
        await this.getRepository().update(id, params);
        return this.getRepository().findOne(id);
    }

    private getRepository() {
        return getRepository(Topic);
    }
}

export default new TopicRepository();
