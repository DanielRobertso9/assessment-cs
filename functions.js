// Sum to zero function

function sumToZero(arr) {
    let 
      results = false
    for (let number of arr) {
      for (i = 0; i < arr.length; i++) {
        if (number + arr[i] === 0) {
          results = true 
        } } }
    console.log(results)
  }
  
  let array = [1,2,3,4,5]
  
  let array2 = [1,-2,5,3,2]
  
  sumToZero(array)
  sumToZero(array2)

//   Runtime - O(n2)

//   Unique Characters

function uniqueChar(str) {
    let results = false
    let str2 = ''
    
    for (i = 0; i < str.length; i++){
      if (str2.includes(str[i]) === false) {
          str2 += str[i];
      }
    }
    if (str === str2){
      results = true
    }
  
    console.log(results)
  }
  
  
  uniqueChar('monday')
  uniqueChar('moonday')

//   Runtime - O(n)

// Pangram Sentence

function isPangram(string) {
    let result = new Set()
    for (const ch of string.toUpperCase()) 
    {
      if (/[A-Z]/.test(ch)) 
      {
          result.add(ch)
      }
    }
    return result.size === 26
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog"))
  console.log(isPangram("I like cats, but not mice"))

//   Runtime - O(log n)

// Longest Word

function findLongestWord(arr) {
    let longestWord = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i].length > longestWord){
      longestWord = arr[i].length;
       }
    }
    return longestWord;
  }
  
  let longArr = ['The', "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
  
  console.log(findLongestWord(longArr))

  //   Runtime - O(n)