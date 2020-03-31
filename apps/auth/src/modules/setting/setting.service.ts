import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compose, omit, pick, toPairs, fromPairs, map } from 'ramda';

import SettingEntity from './setting.entity';
import { IOwnSettingResponse, ISettingEntity } from './types';
import { toSnake, toCamel } from '../../utils/string';

const ALLOWED_SETTING_KEYS = [
  'isEmailVisible',
  'isPhoneVisible',
];

const BOOL_VALUES = [
  'true',
  'false',
];

const normalizeSetting = pick(['isEmailVisible', 'isPhoneVisible']);

@Injectable()
export default class SettingService {
  constructor(
    @InjectRepository(SettingEntity)
    readonly repository: Repository<SettingEntity>,
  ) {}

  public async getOwnSettings(userId: number): Promise<IOwnSettingResponse> {
    const settings = await this.repository.findOne({
      where: {
        userId,
      },
    });

    return normalizeSetting(settings);
  }

  public async replaceOwnSettings(
    userId: number,
    data: Partial<IOwnSettingResponse>,
  ): Promise<IOwnSettingResponse[]> {
    const valuesToSet = toPairs(data)
      .filter(
        ([key, value]) => ALLOWED_SETTING_KEYS.includes(key)
            && BOOL_VALUES.includes(value)
      )
      .map(([key, value]) => [
        toSnake(key),
        value.toUpperCase()
      ].join(' = '))
      .join(',');

    if (!valuesToSet.length) {
      throw new BadRequestException();
    }

    const entities: [ISettingEntity[], number] = await this.repository.query([
      'UPDATE "setting"',
      `SET ${valuesToSet}`,
      `WHERE user_id = ${userId}`,
      'RETURNING *',
    ].join(' '));

    return compose(
      normalizeSetting,
      fromPairs,
      map(([key, value]) => [toCamel(key), value]),
      toPairs,
    )(entities[0][0]);
  }
}
