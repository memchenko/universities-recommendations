import { MigrationInterface, QueryRunner } from 'typeorm';

import { createTriggerOnDictionaryItem, dropTriggerOnDictionaryItem } from '../utils/triggers';

export class ExternalAddress1581262802956 implements MigrationInterface {
    name = 'ExternalAddress1581262802956'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_locality_type',
            tableName: 'address',
        }), undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_bff9739bb80e6cb39bc4b710983"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "REL_bff9739bb80e6cb39bc4b71098"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "locality_type_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "country"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "region"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "locality"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "street"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "building"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "fias_id" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "threshold_score" ALTER COLUMN "value" SET DEFAULT '0'`, undefined);
        await queryRunner.query(`ALTER TABLE "competition" ALTER COLUMN "enrollee" SET DEFAULT '0'`, undefined);
        await queryRunner.query(`ALTER TABLE "competition" ALTER COLUMN "slots" SET DEFAULT '0'`, undefined);
        await queryRunner.query(`ALTER TABLE "enrollee_score" ALTER COLUMN "value" SET DEFAULT '0'`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "enrollee_score" ALTER COLUMN "value" SET DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "competition" ALTER COLUMN "slots" SET DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "competition" ALTER COLUMN "enrollee" SET DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "threshold_score" ALTER COLUMN "value" SET DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "fias_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "building" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "street" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "locality" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "region" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "country" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "locality_type_id" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "REL_bff9739bb80e6cb39bc4b71098" UNIQUE ("locality_type_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_bff9739bb80e6cb39bc4b710983" FOREIGN KEY ("locality_type_id") REFERENCES "dictionary_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_locality_type',
            dictionaryId: 0,
            newRecordColumnName: 'locality_type_id',
            tableNameForApplyingTrigger: 'address',
            dictionaryTitle: 'locality type',
        }), undefined);
    }

}
