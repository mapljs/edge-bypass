import { writeFile } from 'fs';
import app from '../app/index.ts';
import { aotfn } from '@mapl/app';

writeFile(
  import.meta.dir + '/fetch.js',
  `import app from '../app/index.js';export const fetch=${aotfn(app)}(...app.externalValues);`,
  console.log
);
