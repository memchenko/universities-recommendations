import { MigrationInterface, QueryRunner } from 'typeorm';

import { createTriggerOnDictionaryItem, dropTriggerOnDictionaryItem } from '../utils/triggers';

export class Triggers1581362786239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_contact_type',
            newRecordColumnName: 'contact_type_id',
            dictionaryId: 0,
            dictionaryTitle: 'contact type',
            tableNameForApplyingTrigger: 'contact',
        }), undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_favorite',
            newRecordColumnName: 'favorite_type_id',
            dictionaryId: 1,
            dictionaryTitle: 'favorite type',
            tableNameForApplyingTrigger: 'favorite',
        }), undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_role',
            newRecordColumnName: 'role_id',
            dictionaryId: 2,
            dictionaryTitle: 'role',
            tableNameForApplyingTrigger: 'role',
        }), undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_setting',
            newRecordColumnName: 'setting_id',
            dictionaryId: 3,
            dictionaryTitle: 'setting',
            tableNameForApplyingTrigger: 'setting',
        }), undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_gender',
            newRecordColumnName: 'gender_id',
            dictionaryId: 4,
            dictionaryTitle: 'gender',
            tableNameForApplyingTrigger: 'user',
        }), undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_contact_type',
            tableName: 'contact',
        }), undefined);
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_favorite',
            tableName: 'favorite',
        }), undefined);
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_role',
            tableName: 'role',
        }), undefined);
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_setting',
            tableName: 'setting',
        }), undefined);
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_gender',
            tableName: 'user',
        }), undefined);
    }

}
