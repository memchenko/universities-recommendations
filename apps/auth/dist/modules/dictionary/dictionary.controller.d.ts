import DictionaryService from './dictionary.service';
export declare const ROUTE = "dictionary";
export default class DictionaryController {
    readonly service: DictionaryService;
    constructor(service: DictionaryService);
}
