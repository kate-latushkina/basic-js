module.exports = function repeater(str, options) {
    let repeatTimes = 1;
    let separator = '+';
    let addition = '';
    let additionRepeatTimes = 1;
    let additionSeparator = '|';
    let getString = '';
    if (options['repeatTimes'] != undefined) {
      repeatTimes = options['repeatTimes'];
    }
    if (options['additionRepeatTimes'] != undefined) {
      additionRepeatTimes = options['additionRepeatTimes'];
    }
    if (options['separator'] != undefined) {
      separator = options['separator'];
    }
    if (options['additionSeparator'] != undefined) {
      additionSeparator = options['additionSeparator'];
    }
    if (options['addition'] != undefined) {
      addition = options['addition'];
    }
    if (options['addition'] == null && str == null) {
      addition = 'null';
    }
    for (let i = 0; i < repeatTimes; i++) {
      getString += str;
      for (let k = 0; k < additionRepeatTimes; k++) {
        getString += addition + additionSeparator;
        if (k + 1 == additionRepeatTimes) {
          getString = getString.substr(0, getString.length - additionSeparator.length);
        }
      }
      getString += separator;
      if (i + 1 == repeatTimes) {
        getString = getString.substr(0, getString.length - separator.length);
      }
    }
    return getString;
  };