#!/usr/bin/env node

var semver = require('semver');
var pkg = require(process.cwd() + '/package.json');
var red = '\033[31m';
var reset = '\033[0m';

if( pkg && pkg.engines && pkg.engines.node ){
  var requiredVersion = pkg.engines.node;
  var currentVersion = process.versions.node;

  if(!semver.satisfies(currentVersion, requiredVersion)){
    console.warn(red + '---------------------------------------------------------------------');
    console.warn('WARNING: Node version doesn\'t match version specified in package.json!');
    console.warn('Current: ' + currentVersion + ' Required: ' + requiredVersion);
    console.warn('---------------------------------------------------------------------' + reset);
  }
} else {
  console.warn(red + 'Node version not specified in package.json!' + reset);
}

