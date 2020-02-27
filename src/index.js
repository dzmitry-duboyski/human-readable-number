module.exports = function toReadable  (number) {
  const obj = {
    0:"zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen",
    20:"twenty",
    21:"twenty one",
    30:"thirty",
    40:"forty",
    50:"fifty",
    60:"sixty",
    70:"seventy",
    80:"eighty",
    90:"ninety",
    100:"one hundred",
    200:"two hundred",
    300:"three hundred",
    400:"four hundred",
    500:"five hundred",
    600:"six hundred",
    700:"seven hundred",
    800:"eight hundred",
    900:"nine hundred",
  }

  let hundreds;
  let howManyTens;
  let residue;
  let result="";


  if(number<=21){
    return obj[number];
  }

  howManyTens = Math.trunc(number/10)*10;
  residue = number%10;

  if(number<=100){
    result = obj[howManyTens] +" "+ obj[residue];
    if(number%10==0){
      result = obj[howManyTens];
      return result;
    }
    return result;
  }

  if(number < 1000 && number > 100){
    hundreds = Math.trunc(number/100)*100;
    howManyTens = Math.trunc(number/10)*10-hundreds;

    if(number%10==0){
      if(number%100==0){
            result = obj[hundreds]
            return result;
          }
      result = obj[hundreds]+" "+ obj[howManyTens]
      return result;
    }
    if(howManyTens==0){
      result = obj[hundreds]+ " " + obj[residue];
      return result;
    }
    if(howManyTens<20){
      result=obj[hundreds]+" "+ obj[howManyTens+residue];
      return result;
    }

    result = obj[hundreds]+" "+ obj[howManyTens] +" " + obj[residue];
    return result;
  }
  return 'sorry, input number < 1000';
}
