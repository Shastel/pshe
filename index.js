#!/usr/bin/env node

const ru = require('convert-layout/ru');
const cp = require('child_process');

const cmd = process.argv.splice(2).join(' ');

try {
  cp.execSync(`git ${ru.toEn(cmd)}`)
} catch (e) {

}
