module.exports = function() {
  var pkg = require('./package.json');
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
    pkg.author.name,
    ' */',
    '\n'
  ].join('');

  return tmpl;
};
