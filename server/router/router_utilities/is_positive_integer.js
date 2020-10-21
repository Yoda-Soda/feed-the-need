/*  Check if customer id is not a positive integer */
const isPositiveInt = (intToBeTested) =>
  intToBeTested > 0 && Number.isInteger(Number(intToBeTested));

exports.isPositiveInt = isPositiveInt;
