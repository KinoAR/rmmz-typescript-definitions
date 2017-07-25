#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);
let fileNames = [];

function getFileNames(descriptor) {
  let filenames = [];
  if(fs.lstatSync(descriptor).isDirectory()) {
    filenames = fs.readdirSync(descriptor)
      .map(filename => `${descriptor}${filename}`);
  } else {
    filenames.push(descriptor);
  }
  return filenames;
}

for(let arg in args) {
  fileNames = fileNames.concat(getFileNames(args[arg]));
}
function Concat(array) {
  return array.map(filename => fs.readFileSync(filename, 'utf8'))
    .join("");
}
const fileContents = fileNames.map(filename => fs.readFileSync(filename, 'utf8'))
  .join("");
console.log(fileContents);
