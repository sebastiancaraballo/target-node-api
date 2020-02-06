import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeUserAttrs1580922803939 implements MigrationInterface {
    name = 'ChangeUserAttrs1580922803939'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "userName" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_da5934070b5f2726ebfd3122c80" UNIQUE ("userName")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "passwordConfirmation" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "passwordConfirmation"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_da5934070b5f2726ebfd3122c80"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userName"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying NOT NULL`, undefined);
    }

}
