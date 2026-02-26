const removeFromArray = function (arr) {
  const toDelete = Array.prototype.slice.call(arguments, 1);

  return arr.filter((elem) => !toDelete.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
