module.exports = function zeros(expression) {
  let result = 0;
  const arrOfFactorials = expression.split("*");
  const substring = "!!";

  const isDoubleFactorial = str =>
    str.indexOf(substring) === -1 ? false : true;
  const getNumber = str => parseInt(str);

  const factorial = n => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
    return fact;
  };
  const doubleFactorial = n => {
    if (n <= 1) return 1;
    return n * doubleFactorial(n - 2);
  };

  const foundZeros = n => {
    let str = n.toString();
    let i = str.length - 1;
    while (str[i] === "0") {
      result++;
      i--;
    }
  };

  const solvedFactorials = arrOfFactorials.map(item => {
    const number = getNumber(item);

    return isDoubleFactorial(item)
      ? doubleFactorial(number)
      : factorial(number);
  });

  const reducedArr = BigInt(solvedFactorials.reduce((acc, item) => acc * item));

  foundZeros(reducedArr);

  return result;
};
