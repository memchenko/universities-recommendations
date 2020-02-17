import { MigrationInterface, QueryRunner } from 'typeorm';

import {
  dropTriggerOnDictionaryItem,
  createTriggerOnDictionaryItem,
} from '../utils/triggers';

export class DropUserTrigger1581793210273 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      dropTriggerOnDictionaryItem({
        name: 'validate_gender',
        tableName: 'user',
      }),
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      createTriggerOnDictionaryItem({
        name: 'validate_gender',
        newRecordColumnName: 'gender_id',
        dictionaryId: 4,
        dictionaryTitle: 'gender',
        tableNameForApplyingTrigger: 'user',
      }),
      undefined,
    );
  }
}
