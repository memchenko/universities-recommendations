"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createTriggerOnDictionaryItem({ name, dictionaryId, newRecordColumnName, tableNameForApplyingTrigger, dictionaryTitle, }) {
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
function dropTriggerOnDictionaryItem({ name, tableName, }) {
    return `\
DROP TRIGGER ${name}_trigger ON "${tableName}" CASCADE; \
DROP FUNCTION ${name}() CASCADE;`;
}
class DropUserTrigger1581793210273 {
    async up(queryRunner) {
        await queryRunner.query(dropTriggerOnDictionaryItem({
            name: 'validate_gender',
            tableName: 'user',
        }), undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(createTriggerOnDictionaryItem({
            name: 'validate_gender',
            newRecordColumnName: 'gender_id',
            dictionaryId: 4,
            dictionaryTitle: 'gender',
            tableNameForApplyingTrigger: 'user',
        }), undefined);
    }
}
exports.DropUserTrigger1581793210273 = DropUserTrigger1581793210273;
//# sourceMappingURL=1581793210273-DropUserTrigger.js.map