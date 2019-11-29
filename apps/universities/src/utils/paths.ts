import * as path from 'path';

export const fromRoot = path.resolve.bind(path, process.cwd());