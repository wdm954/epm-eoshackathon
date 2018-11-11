#!/usr/bin/env node --harmony

var program = require('commander');
var chalk = require('chalk');
var request = require('superagent');
var ProgressBar = require('progress');
var fs = require('fs');

console.log(chalk.cyan.bold('Hello, world!'));

const { exec } = require('child_process');
exec('mkdir -p ./eos_modules/');

program
 .command('install <name>', 'install one or more packages')
 .action(function(name) {
 	exec('mkdir -p ./eos_modules/'+name);
 	console.log(chalk.blue.bold("Downloaing..."));
 	//sleep(2000);
 	setTimeout(function() {console.log(chalk.green.bold("package installed."))}, 10000)
 	exec('cp /Users/gopalk/Documents/code/eoshack/eosio-project-boilerplate-simple/eosio_docker/contracts/example/example.cpp ./eos_modules/'+name+'/');
 	//console.log(chalk.green.bold("package installed."));
 })

program
 .command('uninstall <name>', 'uninstall one or more packages')

program 
 .command('upload <path>', 'publish the packages to epm')

program
 .parse(process.argv);