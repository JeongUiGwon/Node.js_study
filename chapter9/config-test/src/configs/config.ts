import common from './common';
import local from './local';
import dev from './dev';
import prod from './prod';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

const phase = process.env.NODE_ENV;

let conf = {};
console.log('phase :', phase);
if (phase === 'local') {
  conf = local;
} else if (phase === 'development') {
  conf = dev;
} else if (phase === 'prod') {
  conf = prod;
}

const yamlConfig: Record<string, any> = yaml.load(
  readFileSync(`${process.cwd()}/envs/config.yaml`, 'utf8'),
);

export default () => ({
  ...common,
  ...conf,
  ...yamlConfig,
});
