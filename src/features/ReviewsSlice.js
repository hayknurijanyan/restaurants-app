export const rateCounter = (array) => {
  let count = 0;
  let sum = 0;
  array.forEach((el) => {
    count += +el.rating;
  });

  sum = count / array.length;
  const rounded = Math.round(sum * 10) / 10;
  return rounded;
};
