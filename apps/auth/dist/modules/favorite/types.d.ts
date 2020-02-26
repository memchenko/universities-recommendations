export interface IFavoriteEntity {
    id: number;
    value: string;
    favoriteType: IFavoriteTypeEntity;
}
export interface IFavoriteTypeEntity {
    id: number;
    title: string;
    favorites: IFavoriteEntity[];
}
