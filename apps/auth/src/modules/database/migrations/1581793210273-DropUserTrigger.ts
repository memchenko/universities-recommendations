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
