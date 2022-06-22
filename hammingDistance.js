function hamming(a,b) {
  const tab = new Array(a.length + 1).fill(0).map(
    (_, i) => new Array(b.length + 1).fill(0).map(
      (_, j) => i*j === 0 ? i+j : null
    )
  )
  for(let i = 1; i < tab.length; i++) {
    for(let j = 1; j < tab.length; j++) {
      const ach = a[i-1], bch = b[i-1]
      const cands = [
        tab[i-1][j] + 1, tab[i][j-1] + 1,
        tab[i-1][j-1] + (ach === bch ? 0 : 1)
      ]
      tab[i][j] = Math.min(...cands)
    }
  }
  return tab[a.length][b.length]
}


function hamming(a,b) {
  let arrayA = a.split("");
  let arrayB = b.split("");
  console.log(countMM(arrayA,arrayB))
  return countMM(arrayA,arrayB);
  
}
const countMM =  (arrayA, arrayB) =>{
  let missmatches = 0;
  for (let i = 0; i < arrayA.length; i++){
      if(arrayA[i] != arrayB[i]){
        missmatches++;
        
      }
  }
  return missmatches;
}

const hamming = (str1, str2) => {
  let diffCounter = 0;

  str1.split('').forEach((symbol, index) => {
    if (symbol !== str2[index]) {
      diffCounter += 1;
    }
  });

  return diffCounter;
};


function hamming(a,b) {
    let firstNum=  a.split("");
    let secondNum = b.split("");
    let newSecond = "";
    let newFirst = "";
    let count = 0;
    let diff = Math.abs(firstNum.length - secondNum.length);
    if (firstNum.length > secondNum.length) {
        newSecond = repeat("", diff) + secondNum;
    } else if (secondNum.length > firstNum.length) {
        newFirst = repeat("", diff) + firstNum;
    } else {
        newFirst = firstNum;
        newSecond = secondNum;
    }
    firstNum = newFirst ? newFirst : firstNum;
    secondNum = newSecond ? newSecond : secondNum;
    for (let i = 0; i < firstNum.length; i++) {
        if (firstNum[i] !== secondNum[i]) {
            count++;
        }
    }
    return count;
}

function repeat(word, n) {
    let newWord = "";
    for (let i = 0; i < n; i++) {
        newWord += word;
    }
    return newWord
}


function hamming(a,b) {
    let lenStr1 = a.length;
    let lenStr2 = b.length;
    let maxlen,minlen;
    if (lenStr1>lenStr2){
        maxlen = lenStr1;
        minlen = lenStr2;
    }
    else{
        maxlen = lenStr2;
        minlen = lenStr1;
    }

    let hammingDist= maxlen-minlen;

    let res = [];
    for (let i = 0;i<minlen;i++){
        let NE = (a[i] != b[i]);
        if (NE) hammingDist++;
        res.push(NE);
    }

    return hammingDist;
}


