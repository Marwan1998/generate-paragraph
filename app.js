/*
Made By MG45.
getPara() is a function that returns a generated paragraph in Arabic.

parammeters:
    - optional number of words in the paragraph, defualt is random between 5 to 15
    - optional number of the letters in the word.
    - optional ; in the next update, an array of letters to pick from (more languages). 

*/


document.getElementById('formData').onsubmit = () => {
    let wordsNum = 0, lettersNum = 0;
    wordsNum = document.getElementById('wordsNum').value === '' ? 0 : document.getElementById('wordsNum').value;
    lettersNum = document.getElementById('lettersNum').value === '' ? 0 : document.getElementById('lettersNum').value;
    document.getElementById('para').innerText = genPara(wordsNum, lettersNum);
    return false;
}
document.getElementById('para').innerText = genPara(wordsNum, lettersNum);

function genPara(wordsnumber = 0, wordLength = 0){
    // words number in the paragraph will be between 5 and 15 words or it may be sent to the function.
    wordsnumber = wordsnumber === 0 ? Math.floor(Math.random() * 15) + 5 : wordsnumber;
    let para = "";
    for(let i = 0; i < wordsnumber; i++){
        // const word = wordLength == 0 ? genWord(): genWord(wordLength);
        para += " " + genWord(wordLength); 
    }
    return para;
}

function genWord(wordLength = 0) {
  // generate a random word.
//   const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const letters = ['ا' ,'ب' ,'ت' ,'ث' ,'ج' ,'ح' ,'خ' ,'د' ,'ذ' ,'ر' ,'ز' ,'س' ,'ش' ,'ص' ,'ض' ,'ط' ,'ظ' ,'ع' ,'غ' ,'ف' ,'ق' ,'ك' ,'ل' ,'م' ,'ن' ,'ه' ,'و' ,'ى'];
  let word = "";
  // length of word may be between 3 to 10 or sent to the function
  wordLength = wordLength === 0 ? Math.floor(Math.random() * 10) + 3 : wordLength;
  for (let i = 0; i < wordLength; i++) {
    let letter = Math.floor(Math.random() * letters.length); // random index to use in letters array
    word += letters[letter];
  }
  return word;
}