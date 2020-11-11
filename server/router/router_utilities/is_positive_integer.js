/*  Check if customer id is not a positive integer */
// FIXME: this looks dirty
const isPositiveInt = (intToBeTested) =>
  intToBeTested > 0 && Number.isInteger(Number(intToBeTested)) && !String(intToBeTested).includes('.');

exports.isPositiveInt = isPositiveInt;
