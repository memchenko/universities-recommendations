export function createTriggerOnDictionaryItem({ name, dictionaryId, newRecordColumnName, tableNameForApplyingTrigger, dictionaryTitle }: {
    name: string,
    dictionaryId: number,
    newRecordColumnName: string,
    tableNameForApplyingTrigger: string,
    dictionaryTitle: string,
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
BEFORE INSERT OR UPDATE ON ${tableNameForApplyingTrigger} \
FOR EACH ROW EXECUTE PROCEDURE ${name}()`
}

export function dropTriggerOnDictionaryItem({ name, tableName }: {
    name: string,
    tableName: string,
}) {
    return `\
DROP TRIGGER ${name}_trigger ON ${tableName} CASCADE; \
DROP FUNCTION ${name}() CASCADE;`;
}