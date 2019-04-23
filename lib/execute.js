#!/usr/bin/env node

const ru = require('convert-layout/ru');
const cp = require('child_process');

const cmd = process.argv.splice(2).join(' ');

const SEPARATOR = '/';

const resplited = cmd.split(SEPARATOR);

module.exports = function execute (programm) {
  const actualCommand = resplited.map(p => ru.toEn(p)).join(SEPARATOR);

  try {
    cp.execSync(`${programm} ${actualCommand}`, { stdio: 'inherit' });
  } catch (e) {

  }
}
