var fs = require('fs');
var Promise = require('bluebird');
var readFile = Promise.promisify(fs.readFile);

function parseOpts(options) {
  if (!options) options = {};
  if (!options.title) options.title = 'jspage';
  if (!options.blank) options.blank = false;
  return options;
}

function escapeScript(script) {
  return script.replace(/<\/script/g, '<\\\/script');
}

function template(blank) {
  var name = blank? 'template-blank' : 'template';
  return readFile(__dirname + '/'+ name +'.html', 'utf8');
}

function jspage(script, opts) {
  return template(opts.blank).then(function(content) {
    return content
             .replace(/__JAVASCRIPT__\n?/g, escapeScript(script))
             .replace(/__TITLE__/g, opts.title);
  });
}

function setup(opts) {
  return function(script) {
    return jspage(script, parseOpts(opts));
  };
}

module.exports = setup;
module.exports.jspage = jspage;
