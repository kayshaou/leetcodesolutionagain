function LongestWord(sen) {
  let sanitizeWord = sen.replace(/[^a-zA-Z/\s]/g, "");
  let words = sanitizeWord.split(" ");
  let maps = new Map();
  for (let i = 0; i < words.length; ++i) {
    maps.set(words[i].length, words[i]);
  }
  let thekeys = maps.keys();
  let maxkey = Math.max(...thekeys);
  return maps.get(maxkey);
}

// keep this function call here
console.log(LongestWord("fun&!! time"));
