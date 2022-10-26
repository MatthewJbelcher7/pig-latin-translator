// Business Logic

function pigLatin(text) {
  // e.g. text = "sample"
  // sample[0] = "s", sample[1] = "a", etc. 
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; 
  if (vowels.includes(text[0])){
    return text + "way";
  } else {
    return text.slice(1) + text[0] + "ay";
  }
}
// UI Logic 






// 
// String.prototype.slice()
// String.prototype.includes()
// String.prototype.indexOf()
