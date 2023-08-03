const string = "proba1 proba1111 proba12 proba123 proba999999999";
  
let array = string.split(" ");
let maxWord = "";
let maxWordLength = 0;

for (let i = 0; i < array.length; i += 1) {
  
  if (array[i].length > maxWordLength) {
      maxWordLength = array[i].length;
      maxWord = array[i];
      console.log("i =", i);
      console.log(array[i]);
      console.log(array[i].length);
      console.log("maxWord =", maxWord);
      
 }

}
 