import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTopics1581433101832 implements MigrationInterface {
    name = 'AddTopics1581433101832'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "topic" ("id" SERIAL NOT NULL, "label" character varying NOT NULL, "icon" character varying NOT NULL, CONSTRAINT "UQ_40b48f6394aa77d7261778549e9" UNIQUE ("label"), CONSTRAINT "PK_33aa4ecb4e4f20aa0157ea7ef61" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "topic"`, undefined);
    }

}
