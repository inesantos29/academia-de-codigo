function factorial(n){
  if (n == 0 || n == 1){
    return 1;
  }

  var result = n;

  while (n > 1) {
    result = result * (n -1);
    n = n - 1;
  }

  return result;
}

document.write(factorial(5));
