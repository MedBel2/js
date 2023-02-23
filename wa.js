function analyzeSentence(sentence) {
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let inWord = false;
  
    for (let i = 0; i < sentence.length; i++) {
      const currentChar = sentence[i];
  
      charCount++;
  
      if (/[aeiou]/i.test(currentChar)) {
        vowelCount++;
      }
  
      if (currentChar !== ' ' && !inWord) {
        inWord = true;
        wordCount++;
      }
  
      if (currentChar === ' ') {
        inWord = false;
      }
  
      if (currentChar !== '.') {
        continue;
      } else {
        break;
      }
    }
  
    const avgWordLength = charCount / wordCount;
  
    console.log(`Length of sentence: ${charCount}`);
    console.log(`Number of words: ${wordCount}`);
    console.log(`Number of vowels: ${vowelCount}`);
    console.log(`Average word length: ${avgWordLength}`);
  }
  
  analyzeSentence("This is a sample sentence."); // Example usage
  