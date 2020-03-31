import { Controller, UseGuards, Get, Request, Patch, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import SettingService from './setting.service';
import { IOwnSettingResponse } from './types';

import { OWN_SETTINGS } from '../../constants/routes';
import { FastifyRequestWithJWTUser } from '../auth/types';

@Controller()
@UseGuards(AuthGuard('jwt'))
export default class SettingController {
  constructor(
    readonly settings: SettingService,
  ) {}

  @Get(OWN_SETTINGS)
  public getOwnSettings(
    @Request() req: FastifyRequestWithJWTUser,
  ): Promise<IOwnSettingResponse> {
    return this.settings.getOwnSettings(req.user.id);
  }

  @Patch(OWN_SETTINGS)
  public replaceOwnSettings(
    @Request() req: FastifyRequestWithJWTUser,
    @Query() query: Partial<IOwnSettingResponse>,
  ): Promise<IOwnSettingResponse[]> {
    return this.settings.replaceOwnSettings(req.user.id, query);
  }
}
