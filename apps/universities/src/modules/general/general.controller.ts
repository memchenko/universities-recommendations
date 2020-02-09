import { Controller, Head } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('general')
@Controller('')
export default class GeneralController {
    @Head()
    public isServerAlive(): string {
        return 'OK';
    }
}