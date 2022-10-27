// Business Logic

function pigLatin(text) {
  const textArray = text.split(" ");
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; 
  let outPutArray = [];
  // For every word in textArray
  textArray.forEach(function(word) {
    if (vowels.includes(word[0])) {
      outPutArray.push(word + "way");
    } else if (word.slice(0,2) === "qu") { 
      outPutArray.push(word.slice(2) + "quay");
    } else {
      for (let i = 1; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          outPutArray.push(word.slice(i) + word.slice(0,i) + "ay");
          break;
        }
      } 
    }
  });  
  return outPutArray.join(" ");
}

    // if first letter is vowel, add "way" to end of word
    // else
      // For each letter in text, check if it's a vowel.
      // Stop the loop with: return text.slice(index) + text.slice(0,index) + "ay"


/////// slice() EXAMPLES
// let sentence === "triple rat"; 
//                   0123456789
// sentence.slice(1) === "riple rat";
// sentence.slice(2,6) === "iple "
// sentence.slice(2) + sentence.slice(0,2) + "ay"
//    === "iple" + "tr" + ay === "ipletray"


////// Test three function
// // function pigLatin(text) {
//   // e.g. text = "sample"
//   // sample[0] = "s", sample[1] = "a", etc. 
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; 
//   if (vowels.includes(text[0])) {
//     return text + "way";
//   } else {
//     for (let i = 1; i < text.length; i++) {
//       // For each letter in text, check if it's a vowel.
//       if (vowels.includes(text[i])) {
//       // Stop the loop with: return text.slice(index) + text.slice(0,index) + "ay"
//         return text.slice(i) + text.slice(0,i) + "ay"
//       }
//     }
//   }
// }


// 
// String.prototype.slice()
// String.prototype.includes()
// String.prototype.indexOf()
