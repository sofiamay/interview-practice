/*
Given a number in Roman numeral format, convert it to decimal.
*/

export function romanToDecimal(romanNumeral) {
  // throw error if input is not a string
  if (typeof romanNumeral !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const values = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    let current = values[romanNumeral[i]];
    let next = i+1 < romanNumeral.length ? values[romanNumeral[i + 1]] : 0;
    // subtractive - e.g. IV = 4
    if (current < next) {
      result -= current;
    } else {
      // additive -e.g. VI = 6
      result += current;
    }
  }
  return result;
}

export default { romanToDecimal };