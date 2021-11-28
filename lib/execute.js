#!/usr/bin/env node
const cp = require('child_process');

const ru = require('convert-layout/ru');
const updateNotifier = require('update-notifier');

const pkg = require('../package.json');

const notifier = updateNotifier({
    pkg,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 7 * 2 // 2 weeks
});

notifier.notify();

const cmd = process.argv.splice(2).join(' ');

const SEPARATOR = '/';

const resplited = cmd.split(SEPARATOR);

module.exports = function execute (programm) {
  const actualCommand = resplited.map(p => ru.toEn(p)).join(SEPARATOR);

  const command = `${programm} ${actualCommand}`;

  console.log(`$pshe: ${command}`);

  try {
    cp.execSync(command, { stdio: 'inherit' });
  } catch (e) {
    // ignore
  }

}
