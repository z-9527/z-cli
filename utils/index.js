exports.throwMessage = function throwMessage(err) {
  throw new Error(err).message;
};
