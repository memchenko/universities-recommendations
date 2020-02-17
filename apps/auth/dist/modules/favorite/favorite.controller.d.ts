import FavoriteService from './favorite.service';
export default class FavoriteController {
    readonly service: FavoriteService;
    constructor(service: FavoriteService);
}
