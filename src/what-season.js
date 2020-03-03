module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Error');
  }
  else {
    let month = date.getMonth();
    if (month >= 2 && month <= 4) {
      return 'spring';
    }
    else if (month >= 5 && month <= 7) {
      return 'summer';
    }
    if (month <= 1 || month == 11) {
      return 'winter';
    }
    else {
      return 'autumn';
    }
  }
};