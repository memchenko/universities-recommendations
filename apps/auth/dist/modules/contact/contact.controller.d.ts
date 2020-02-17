import ContactService from './contact.service';
export default class ContactController {
    readonly service: ContactService;
    constructor(service: ContactService);
}
