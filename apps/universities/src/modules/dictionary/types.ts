export interface IDictionaryEntity {
    id: number;
    title: string;
    items: IDictionaryListEntity;
}

export interface IDictionaryListEntity {
    dictionary: IDictionaryEntity;
    item: string;
}
