/**
 * This script will install all peer dependencies
 * These will not be installed using yarn install or npm install, and needs to be installed manually
 */

import  { execSync } from 'child_process';
import fs from 'fs';

import packageJson from '../package.json'  assert { type: "json" };
const peerDeps = packageJson.peerDependencies;

Object.entries(peerDeps).forEach(([packageJson, version]) => {
  const cmd = `yarn add ${packageJson}@${version}`;
  console.log('Executing: ', cmd);
  execSync(cmd);
});

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf-8');