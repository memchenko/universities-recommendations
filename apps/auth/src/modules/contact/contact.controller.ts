import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import ContactEntity from './contact.entity';
import ContactService from './contact.service';

@Crud({
  model: {
    type: ContactEntity,
  },
})
@Controller('contact')
export default class ContactController {
  constructor(readonly service: ContactService) {}
}
