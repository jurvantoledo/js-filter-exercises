function fiveCharactersOrFewerOnly(arr) {
    return arr.filter((words) => words.length <= 5);
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  