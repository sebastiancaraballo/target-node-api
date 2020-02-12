import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { TopicSeed } from "../seeds/topic.seed";

export class AddTopicSeeds1581435145543 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        TopicSeed.map(async (topic) => await queryRunner.query(`INSERT INTO topic (label, icon) VALUES ('${topic.label}', 'default');`));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
