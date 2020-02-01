export interface IDictionaryEntity<EntityType> {
    id: EntityType;
    title: string;
    items: IDictionaryItemEntity<EntityType>;
}

export interface IDictionaryItemEntity<EntityType> {
    id: number;
    dictionary: IDictionaryEntity<EntityType>;
    title: string;
}
