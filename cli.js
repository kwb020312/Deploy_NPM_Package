#!/usr/bin/env node
const greeting = require('./main');
console.log(process.argv);
console.log('Greeting : ' + greeting[process.argv[2]]);
