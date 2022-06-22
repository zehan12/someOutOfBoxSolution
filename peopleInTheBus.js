function numberOfPairs(gloves) {
  let count = 0;
  let newArr =[...gloves]
  for (let i = newArr.length; i > 0; i--) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i] === newArr[j] && i !== j) {
        newArr.splice(i, 1);
        newArr.splice(j, 1);
        j++;
        count++;
      }}}
  return count;
}

function numberOfPairs(gloves){
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}
  
function numberOfPairs(gloves){
  let obj = gloves.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {})
  let result = 0;
  for(let key in obj){
    if(obj[key] >= 2){
      result += Math.floor(obj[key] / 2);
    }
  }
  return result;
}

    
function numberOfPairs(gloves) {
  let result = 0;

  let cache = new Set();

  for (let i = 0; i<gloves.length; i++) {
    if (cache.has(gloves[i])) {
      cache.delete(gloves[i]);
      result++;
    } else {
      cache.add(gloves[i]);
    }
  }
  return result;
}
    
    
function numberOfPairs(gloves) {
  let totalGloves = 0;
  let checked = [];
  for (let i = 0; i < gloves.length; i++) {
    if (!checked.includes(gloves[i])) {
      let glovesAvailable = gloves.filter((glove) => glove === gloves[i]).length;
      if (glovesAvailable >= 2) {
        if (glovesAvailable % 2 === 0) {
          totalGloves += glovesAvailable / 2;
        } else {
          totalGloves += (glovesAvailable - 1) / 2;
        }
        checked.push(gloves[i]);
      }
    }
  }
  return totalGloves;
}
    
/*
-----------------------------------------------------------------------
I've listed the first 3 solutions that came to my mind here... first
time i've done something like this, but it turned out to be super fun! 
-----------------------------------------------------------------------
*/

//function to generate an array of AMOUNT gloves from a set of colors
function generateGloves(amount) {
  const colorsSet = ["yellow","orange","red","brown","pink","purple","blue","green","black","white","gray"]
  let glovesArray = [];
  for (let i = 0; i < amount; i++) {
    glovesArray.push(colorsSet[Math.round(Math.random()*(colorsSet.length-1))])
  }
  return glovesArray;
}

//generating an array for testing
const testArr = generateGloves(10000000);

//first solution, about 2000ms with gloves.length = 10.000.000, D:
function solution1(gloves) {
  if (gloves == undefined) return undefined;
  let pairsNumber = 0;
  let fn_gloves = gloves;
  let colors = [...new Set(fn_gloves)];
  for (let i = 0; i < colors.length; i++) {
    pairsNumber += Math.floor(fn_gloves.filter(x=>x==colors[i]).length/2)
  }
  return pairsNumber
}

/*I thought about reducing the array size by removing the already searched pairs, but
test show that the performance is still basically the same, if not worse :(
*/
function solution2(gloves) {
  if (gloves == undefined) return undefined;
  let pairsNumber = 0;
  let fn_gloves = gloves;
  let colors = [...new Set(fn_gloves)];
  for (let i = 0; i < colors.length; i++) {
    let startAmount = fn_gloves.length;
    fn_gloves = fn_gloves.filter(x=>x!=colors[i])
    pairsNumber += Math.floor((startAmount-fn_gloves.length)/2)
  }
  return pairsNumber
}

/*this one is way faster, around 220ms for 10.000.000 gloves. Basically I'm doing only
one loop through the array and I'm assigning each color to an index so that i can store
the amount of gloves of every color and count the pairs at the end. I'm sure there 
are better solutions but i'm quite happy with this :D
*/
function solution3(gloves) {
  if (gloves == undefined) return undefined;
  let pairsNumber = 0;
  let fn_gloves = gloves;
  let colors = []
  let pairs = []
  for (let i = 0; i < fn_gloves.length; i++) {
    let colorIndex = colors.indexOf(fn_gloves[i])
    if (colorIndex == -1) {
      colors.push(fn_gloves[i])
      pairs.push(1)
    } else {
      pairs[colorIndex]++;
    }
  }
  for (let i = 0; i < pairs.length; i++) {
    pairsNumber += Math.floor(pairs[i]/2)
  };
  return pairsNumber
}

/*
solution1(testArr)
solution2(testArr)
solution3(testArr)
*/

function numberOfPairs(gloves) {
  return solution3(gloves);
}    
    
let a=Math.floor(getAllIndexes(gloves,'Red').length/2)
let b=Math.floor(getAllIndexes(gloves,'Green').length/2)
let c=Math.floor(getAllIndexes(gloves,'Blue').length/2)
let d=Math.floor(getAllIndexes(gloves,'Gray').length/2)
let e=Math.floor(getAllIndexes(gloves,'Black').length/2)
let f=Math.floor(getAllIndexes(gloves,'Purple').length/2)
let g=Math.floor(getAllIndexes(gloves,'Lime').length/2)
let h=Math.floor(getAllIndexes(gloves,'Silver').length/2)
let i=Math.floor(getAllIndexes(gloves,'Maroon').length/2)
let j=Math.floor(getAllIndexes(gloves,'Navy').length/2)
let k=Math.floor(getAllIndexes(gloves,'Teal').length/2)
let l=Math.floor(getAllIndexes(gloves,'White').length/2)
let m=Math.floor(getAllIndexes(gloves,'Aqua').length/2)
let n=Math.floor(getAllIndexes(gloves,'Fuchsia').length/2)
let o=Math.floor(getAllIndexes(gloves,'Olive').length/2)
let p=Math.floor(getAllIndexes(gloves,'Yellow').length/2)
let aa=Math.floor(getAllIndexes(gloves,'red').length/2)
let bb=Math.floor(getAllIndexes(gloves,'green').length/2)
let cc=Math.floor(getAllIndexes(gloves,'blue').length/2)
let dd=Math.floor(getAllIndexes(gloves,'gray').length/2)
let ee=Math.floor(getAllIndexes(gloves,'black').length/2)
let ff=Math.floor(getAllIndexes(gloves,'purple').length/2)
let gg=Math.floor(getAllIndexes(gloves,'lime').length/2)
let hh=Math.floor(getAllIndexes(gloves,'silver').length/2)
let ii=Math.floor(getAllIndexes(gloves,'maroon').length/2)
let jj=Math.floor(getAllIndexes(gloves,'navy').length/2)
let kk=Math.floor(getAllIndexes(gloves,'teal').length/2)
let ll=Math.floor(getAllIndexes(gloves,'white').length/2)
let mm=Math.floor(getAllIndexes(gloves,'aqua').length/2)
let nn=Math.floor(getAllIndexes(gloves,'fuchsia').length/2)
let oo=Math.floor(getAllIndexes(gloves,'olive').length/2)
let pp=Math.floor(getAllIndexes(gloves,'yellow').length/2)



return a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+aa+bb+cc+dd+ee+ff+gg+hh+ii+jj+kk+ll+mm+nn+oo+pp

}
