var fs = require('fs');

function getTemplate(path) {
  var pkg = require(path.toString());
  var author = pkg.author;
  
  if (author['name']) {
    author = author.name;
  }
  
  var tmpl = [
    '/*! ',
    pkg.name.charAt(0).toUpperCase(),
    pkg.name.slice(1),
    ' v',
    pkg.version,
    ' | ',
    pkg.license,
    ' (c) ',
    new Date().getFullYear(),
    ' ',
    author,
    ' */',
    '\n'
  ].join('');

  return tmpl;
}

function banr(path) {
  if (!path) {
    path = process.cwd() + '/package.json';
  }

  try {
    var stats = fs.lstatSync(path.toString());

    if (stats.isFile()) {
      return getTemplate(path);
    }
  } catch (e) {
    return '';
  }

  return '';
}

module.exports = banr;
