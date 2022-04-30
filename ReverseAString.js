const reverseAString = (str) => {
  let returningStr = "";
  let splitStr = str.split("");
  for (var i = splitStr.length; i >= 0; i--) {
    console.log(splitStr[i]); // returningStr = splitStr[i] + returningStr;
  }

  return returningStr;
};

reverseAString("I love you");
