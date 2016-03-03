var convert = require('../node_modules/AVS-File-Decoder/app/scripts/convert');
var convertPreset = convert.convertPreset;

module.exports = function (source) {
  'use strict';

  if (this.cacheable) {
    this.cacheable();
  }

  var name = this.resourcePath.replace(this.context + '/', '');
  var preset = {
    name: name
  };

  return JSON.stringify(convertPreset(source, preset));
};

module.exports.raw = true;
