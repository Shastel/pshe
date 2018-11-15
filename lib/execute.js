#!/usr/bin/env node

const ru = require('convert-layout/ru');
const cp = require('child_process');

const cmd = process.argv.splice(2).join(' ');

module.exports = function execute (programm) {
  try {
    cp.execSync(`${programm} ${ru.toEn(cmd)}`, { stdio: 'inherit' });
  } catch (e) {

  }
}
