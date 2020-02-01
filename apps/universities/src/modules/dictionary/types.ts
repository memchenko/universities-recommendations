export interface IDictionaryEntity {
    id: number;
    title: string;
    items: IDictionaryItemEntity;
}

export interface IDictionaryItemEntity {
    dictionary: IDictionaryEntity;
    title: string;
}
