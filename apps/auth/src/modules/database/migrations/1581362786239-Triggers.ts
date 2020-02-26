import { MigrationInterface, QueryRunner } from 'typeorm';

function createTriggerOnDictionaryItem({
  name,
  dictionaryId,
 newRecordColumnName,
  tableNameForApplyingTrigger,
  dictionaryTitle,
}: {
  name: string;
  dictionaryId: number;
  newRecordColumnName: string;
  tableNameForApplyingTrigger: string;
  dictionaryTitle: string;
}): string {
  return `\
CREATE OR REPLACE FUNCTION ${name}() RETURNS trigger AS $${name}_trigger$ \
DECLARE \
intersection int; \
BEGIN \
intersection := (SELECT COUNT(*) FROM dictionary_item WHERE (\
dictionary_id = '${dictionaryId}' AND id = NEW.${newRecordColumnName}\
)); \
IF (intersection = 0) THEN \
RAISE EXCEPTION 'Specified ${dictionaryTitle} is invalid'; \
END IF; \
RETURN NEW; \
END; \
$${name}_trigger$ LANGUAGE plpgsql; \
CREATE TRIGGER ${name}_trigger \
BEFORE INSERT OR UPDATE ON "${tableNameForApplyingTrigger}" \
FOR EACH ROW EXECUTE PROCEDURE ${name}()`;
}

function dropTriggerOnDictionaryItem({
  name,
  tableName,
}: {
  name: string;
  tableName: string;
}) {
  return `\
DROP TRIGGER ${name}_trigger ON "${tableName}" CASCADE; \
DROP FUNCTION ${name}() CASCADE;`;
}

export class Triggers1581362786239 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      createTriggerOnDictionaryItem({
        name: 'validate_contact_type',
        newRecordColumnName: 'contact_type_id',
        dictionaryId: 0,
        dictionaryTitle: 'contact type',
        tableNameForApplyingTrigger: 'contact',
      }),
      undefined,
    );
    await queryRunner.query(
      createTriggerOnDictionaryItem({
        name: 'validate_favorite',
        newRecordColumnName: 'favorite_type_id',
        dictionaryId: 1,
        dictionaryTitle: 'favorite type',
        tableNameForApplyingTrigger: 'favorite',
      }),
      undefined,
    );
    await queryRunner.query(
      createTriggerOnDictionaryItem({
        name: 'validate_role',
        newRecordColumnName: 'role_id',
        dictionaryId: 2,
        dictionaryTitle: 'role',
        tableNameForApplyingTrigger: 'role',
      }),
      undefined,
    );
    await queryRunner.query(
      createTriggerOnDictionaryItem({
        name: 'validate_setting',
        newRecordColumnName: 'setting_id',
        dictionaryId: 3,
        dictionaryTitle: 'setting',
        tableNameForApplyingTrigger: 'setting',
      }),
      undefined,
    );
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

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      dropTriggerOnDictionaryItem({
        name: 'validate_contact_type',
        tableName: 'contact',
      }),
      undefined,
    );
    await queryRunner.query(
      dropTriggerOnDictionaryItem({
        name: 'validate_favorite',
        tableName: 'favorite',
      }),
      undefined,
    );
    await queryRunner.query(
      dropTriggerOnDictionaryItem({
        name: 'validate_role',
        tableName: 'role',
      }),
      undefined,
    );
    await queryRunner.query(
      dropTriggerOnDictionaryItem({
        name: 'validate_setting',
        tableName: 'setting',
      }),
      undefined,
    );
    await queryRunner.query(
      dropTriggerOnDictionaryItem({
        name: 'validate_gender',
        tableName: 'user',
      }),
      undefined,
    );
  }
}
