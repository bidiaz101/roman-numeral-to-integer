function romanNumeral(string) {
  // type your code here
  const numArr = []
  let num = 0

  for(let i = 0; i < string.length; i++) {
    switch(string[i]) {
      case "I":
        numArr.push(1)
        break
      case "V":
        numArr.push(5)
        break
      case "X":
        numArr.push(10)
        break
      case "L":
        numArr.push(50)
        break
      case "C":
        numArr.push(100)
        break
      case "D":
        numArr.push(500)
        break
      case "M":
        numArr.push(1000)
        break
    }
  }

  for(let i = 0; i < numArr.length; i++){
    if(numArr[i] < numArr[i + 1]){
      num -= numArr[i]
    } else if (numArr[i] >= numArr[i + 1] || i === 0 || i === numArr.length-1){
      num += numArr[i]
    }
  }

  return num
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");

  console.log("Expecting: 3");
  console.log(romanNumeral('III'));

  console.log("");

  console.log("Expecting: 1900");
  console.log(romanNumeral('MCM'));

  console.log("");

  console.log("Expecting: 1999");
  console.log(romanNumeral('MCMXCIX'));

  console.log("");

  console.log("Expecting: 44");
  console.log(romanNumeral('XLIV'));

  console.log("");

  console.log("Expecting: 223");
  console.log(romanNumeral('CCXXIII'));

  console.log("");

  console.log("Expecting: 3848");
  console.log(romanNumeral('MMMDCCCXLVIII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file

// Declare variable to store integers and desired return value
// iterate over string
// Add values to array depending on the character using a switch statement
// Add or subtract value depending on the sequence of numerals
// Add if it's the first or last number in the array
// also add if it precedes a smaller or equal value
// subtract if it is followed by a larger value
// return final value

// And a written explanation of your solution

// See pseudocode
