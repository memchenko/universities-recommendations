import { promisify } from 'util';
import * as glob from 'glob';

export const globify = promisify(glob);