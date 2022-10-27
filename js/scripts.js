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

// UI Interface

window.addEventListener("load", function() {

  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const sentenceInput = document.getElementById("sentenceInput").value;
    form.after(pigLatin(sentenceInput));

  });
});