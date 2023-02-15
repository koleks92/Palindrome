function palindrome(str) {
    // Remove non-alpha and lowercase
    let cleanStr = str.match(/[a-zA-Z0-9]/gm).join('').toLowerCase();
    // Get half of the lenght and round (turn into integer)
    let strLength = parseInt(cleanStr.length / 2)
    // Loop i - counting from  beggining, j - from the end
    for (let i = 0, j = 1; i < strLength, j < strLength + 1; i++, j++)
      {
        if (cleanStr[i] != cleanStr[cleanStr.length - j])
        {
          return false;
        }
      }
      return true;
  
  }
  
  palindrome("_eye");