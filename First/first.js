const string = "Привет, меня зовут юля!"

const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и", "ю"];

const getVowels = FilterString => {
  let extractedVowels = "";

  for (let i = 0; i < FilterString.length; i++) {
    const currentLetter = FilterString[i].toLowerCase();

    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));