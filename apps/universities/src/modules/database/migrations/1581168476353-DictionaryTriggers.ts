import { MigrationInterface, QueryRunner } from 'typeorm';

import { createTriggerOnDictionaryItem, dropTriggerOnDictionaryItem } from '../utils/triggers';

export class DictionaryTriggers1581168476353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_locality_type',
            dictionaryId: 0,
            dictionaryTitle: 'locality type',
            newRecordColumnName: 'locality_type_id',
            tableNameForApplyingTrigger: 'address',
        }), undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_subject_of_enrollee_score',
            dictionaryId: 1,
            dictionaryTitle: 'subject',
            newRecordColumnName: 'subject_id',
            tableNameForApplyingTrigger: 'enrollee_score',
        }), undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_subject_of_threshold',
            dictionaryId: 1,
            dictionaryTitle: 'subject',
            newRecordColumnName: 'subject_id',
            tableNameForApplyingTrigger: 'threshold_score',
        }), undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_privilege_type',
            dictionaryId: 2,
            dictionaryTitle: 'privilege type',
            newRecordColumnName: 'privilege_id',
            tableNameForApplyingTrigger: 'privileged',
        }), undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_teaching_type',
            dictionaryId: 3,
            dictionaryTitle: 'teaching type',
            newRecordColumnName: 'teaching_type_id',
            tableNameForApplyingTrigger: 'specialty_teaching_type',
        }), undefined);
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_payment_type',
            dictionaryId: 4,
            dictionaryTitle: 'payment type',
            newRecordColumnName: 'payment_type_id',
            tableNameForApplyingTrigger: 'specialty_payment_type',
        }), undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_locality_type',
            tableName: 'address',
        }), undefined);
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_subject_of_enrollee_score',
            tableName: 'enrollee_score', 
        }), undefined);
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_subject_of_threshold',
            tableName: 'threshold_score', 
        }), undefined);
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_privilege_type',
            tableName: 'privileged', 
        }), undefined);
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_teaching_type',
            tableName: 'specialty_teaching_type', 
        }), undefined);
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_payment_type',
            tableName: 'specialty_payment_type', 
        }), undefined);
    }

}
