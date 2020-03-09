import {MigrationInterface, QueryRunner} from "typeorm";

export class Reafctor1583753950189 implements MigrationInterface {
    name = 'Reafctor1583753950189'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_b4c9b19a5639e9785e2d4e044b6"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "value"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "setting_type_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "is_phone_visible" boolean NOT NULL DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "is_email_visible" boolean NOT NULL DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_256b86df89fe04be3b271180745"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "UQ_256b86df89fe04be3b271180745" UNIQUE ("user_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_256b86df89fe04be3b271180745" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_256b86df89fe04be3b271180745"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "UQ_256b86df89fe04be3b271180745"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_256b86df89fe04be3b271180745" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "is_email_visible"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "is_phone_visible"`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "setting_type_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD "value" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_b4c9b19a5639e9785e2d4e044b6" FOREIGN KEY ("setting_type_id") REFERENCES "setting_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
