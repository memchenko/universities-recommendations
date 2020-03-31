import {MigrationInterface, QueryRunner} from "typeorm";

export class SettingsDefaultValue1585414167013 implements MigrationInterface {
    name = 'SettingsDefaultValue1585414167013'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "is_phone_visible" SET DEFAULT true`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "is_email_visible" SET DEFAULT true`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "is_email_visible" SET DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "setting" ALTER COLUMN "is_phone_visible" SET DEFAULT false`, undefined);
    }

}
