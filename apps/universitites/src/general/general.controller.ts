import { Controller, Head } from '@nestjs/common';

@Controller('')
export default class GeneralController {
    @Head()
    public isServerAlive(): string {
        return 'OK';
    }
}