const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity == null || sampleActivity == undefined || typeof sampleActivity != 'string') {
    return false;
  }
  else if (sampleActivity.match(/[\d]+[.][\d]+[.]/)) {
    sampleActivity = sampleActivity.slice(0, sampleActivity.lastIndexOf('.')) + sampleActivity.slice(sampleActivity.lastIndexOf('.') + 1,sampleActivity.length - 1);
  }
  else if (sampleActivity <= 0 || sampleActivity > 15 || isNaN(sampleActivity)) {
    return false;
  }
  sampleActivity = Number(sampleActivity);
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / (0.693/HALF_LIFE_PERIOD));
  return result;
};