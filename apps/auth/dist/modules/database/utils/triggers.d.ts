export declare function createTriggerOnDictionaryItem({ name, dictionaryId, newRecordColumnName, tableNameForApplyingTrigger, dictionaryTitle }: {
    name: string;
    dictionaryId: number;
    newRecordColumnName: string;
    tableNameForApplyingTrigger: string;
    dictionaryTitle: string;
}): string;
export declare function dropTriggerOnDictionaryItem({ name, tableName }: {
    name: string;
    tableName: string;
}): string;
