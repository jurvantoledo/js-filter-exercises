function fiveAndGreaterOnly(arr) {
    const answer = arr.filter((num) => num > 5);
    return answer;
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]