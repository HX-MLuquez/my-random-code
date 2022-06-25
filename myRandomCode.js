/*
             FUNCTION TO GENERATE A RANDOM POSITION         
    from the resource of the use of time for its constant change

    Sat Jun 25 2022 17:09:13 GMT-0300 (Argentina Standard Time)
                     |  |  | 
                           1° -> is for whether the last second is odd or even,
                     4° 2° 3°    
  The 9 is the 2nd of the min, the 3 the 2nd of the sec. and 7 the 2nd of the hour
  and the numMagic remains ---> 1,937
  Number of elements = array.length
  Or according to a minimum number to a maximum number that is
  determines according to the number of elements and the random
  Example for a random between 70 and 120
  item qty is 120 - 70  = 50
  If myRandomCode is 30 to use between 70 and 120 is
  30 + 70 - 1 = 99
*/

function myRandomCode(array) {
    const amount = array.length;
    let result = "";
    let date = new Date();
    const dateString = date.toString();
    // const dateString = "Sat Jun 25 2022 12:59:49 GMT-0300" // for testing
    let evenOdd;
    if (dateString[23] === 1 || dateString[23] % 2 !== 0) {
      evenOdd = 1;
    } else {
      evenOdd = 0;
    }
    let numMagic =
      evenOdd + "." + dateString[20] + dateString[23] + dateString[17];
    console.log(dateString);
    console.log(numMagic);
    let resultNum = parseFloat(numMagic) * (amount / 2);
    console.log(resultNum);
    result = resultNum.toString();
    let count = 0;
    let strFinal = "";
    for (let i = 0; i < result.length; i++) {
      if (result[i] === ".") count = i;
      if (count > 0 && result[i] >= 5) return Number(strFinal);
      if (count > 0 && result[i] < 5) return Number(strFinal) - 1;
      strFinal = strFinal + result[i];
    }
    return Number(strFinal);
  }
  
  const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  console.log(myRandomCode(arrayTest));
  