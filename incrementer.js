function incrementer(num) { 
  return num.map((a,i) => (a+i+1)%10);
}


function incrementer(nums) { 
  if(nums == []) return[]
  return nums.map((n,i)=> (i + n + 1)%10)
}


with(require('ramda')){
  const sumWithIndex = pipe(add, inc, flip(modulo)(10))
  var incrementer = addIndex(map)(sumWithIndex)
}


function incrementer(nums) { 
  
  if (!nums.length) return [];
  let res = [];
  for (let i = 1; i <= nums.length; i++) {
 
      let h = i + nums[i - 1];
      let b =  h > 9 ? h % 10 : h;
      res.push(b);
   
  }

   return res
}


with(require('ramda')){
  const getIndexes = pipe(length, inc, range(1))
  var incrementer = pipe(
    repeat(__, 2),
    adjust(0, getIndexes),
    transpose,
    map(sum),
    map(modulo(__, 10))
  ) 
}


let incrementer = nums => {
  // Return the array if it is empty
  if (nums.length === 0) return nums;

  // Prepend the number 0 to increment the array size by one. 
  // So, We can start from position 1 instead of 0   
  nums.unshift(0);

  // Create an empty array
  let array = [];

  // Loop through array and start by position 1
  for (let k = 1; k < nums.length; k++) {
    // Store incremented element by in calc variable
    let calc = k+nums[k];

    // Check if calc/current element has more than 1 integer than push last one only
    if (String(calc).length > 1) {
    calc = Number(String(calc)[String(calc).length-1]);
    array.push(calc)
  }
  else {
      array.push(k+nums[k]);
    }
  }
  // Return modified array
  return array;
}


function incrementer(nums) { 
  console.log(nums)
  let res = []
  for(let i=0;i<=nums.length;i++){
    let temp =nums[i] + i+1
    if((temp) >9 ){
      res.push((+temp.toString().slice(-1)))
      nums[i]=''
    }
    else {
      res.push(temp)
    }
  }
  const newArray = res.filter(function (value) {
    return !Number.isNaN(value);
});
  console.log(newArray)
  return newArray
}


function incrementer(nums) { 
  // code goes here
  for(let i = 0; i < nums.length; i++){
    let currentEl = nums[i];
    let numtoAdd = currentEl + i+1;
    let stringNum = String(numtoAdd);
    if(stringNum.length > 1){
      let lastDigit = stringNum.slice(-1);
      nums[i] = parseInt(lastDigit);
    }
    else{
      nums[i] = numtoAdd;
    }
    
  }
  return nums;
}


function incrementer(nums) { 
  // array of numbers
  // array of numbers, incremented [0+1,1+2,2+3,3+4,4+5]
  // [1,2,3]  ->  [2,4,6]     [1+1, 2+2, 3+3]
  let result = []
  if (nums.length == 0){
    return [];
  } else {
    for (let i = 0; i < nums.length; i++){
      result.push(nums[i]+i+1);
      for (let j = 0; j < result.length; j++){
        if (result[j] >= 20){
          result[j] = result[j]-20;
        } else if(result[j] >= 10){
          result[j] = result[j]-10;
        }
      }
    }
  }
  return result;
}



function incrementer(nums) { 
  // declare results array
  let results = []
  let num
  // return if nums array is empty
  if (nums.length === 0) {
    return []
  }
  // if the array has numbers in it, loop through the array to increment each number starting at 1
  for (let i = 0; i < nums.length; i++) {
    num = nums[i] + (i+1)
    // if the number is one digit, then push it to the array
    if (num < 10) {
      results.push(num)
      // if it is not, then divide it by 10 and send the remainder (second digit)
    } else {
      num = Math.floor(num % 10)
      results.push(num)
    }
    
  }
  return results
}




function incrementer(nums) { 
  const arrMap = nums.map((item, index) => item + index + 1);
  const result = [];
  for (let i = 0; i < arrMap.length; i++) {
    if (arrMap[i].length < 2) {
      result.push(arrMap[i]);
    } else {
      result.push(arrMap[i].toString().slice(-1));
    }
  }
  return result.map(Number);
}



function incrementer(nums) { 
    return nums
    .map((num, inx) => num + (inx + 1))
    .map(num => (num >= 10 ? num - 10 : num))
    .map(num => (num >= 10 ? num - 10 : num));
}


function incrementer(nums) { 
  // code goes here
  const newarr=[]
 
  for (let i=0;i<nums.length;i++){
    
    newarr.push((nums[i]+(i+1)))  
    
    
    
    if(newarr[i]>19){
      
      
      newarr[i]=newarr[i]-20
    }
    
     
  if(newarr[i]>9){
      
      
      newarr[i]=newarr[i]-10
    }
    
      if(nums===[]){
        
        return []
    }
  
  }
    return newarr
  

}



function incrementer(nums) { 
  // code goes here
  
  var arr = [];
  for (var i=0; i<nums.length; i++){
    arr.push((nums[i]+i+1)%10);
  }
  return arr;
}
Best Practices0Clever0
 0ForkCompare with your solutionLink
XiaoLGrant
function incrementer(nums) {
  let incrementedNums = nums.map( (num, index) => {
    num += (index + 1);
    if (num > 9) {
      num = +('' + num).slice(-1)
    }
    return num
  })
  return incrementedNums
}



function incrementer(nums) { 
    newArr = [];
    let count = 1
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] + count
        count++
    }
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] >= 20){
            newArr.push(nums[i] - 20)
        }else if(nums[i] >= 10){
            newArr.push(nums[i] - 10)
        }else(
            newArr.push(nums[i])
        )
    }
    return newArr
}




function incrementer(nums) { 
    //code goes here
    const arr = nums.map((el,index) => {
        if(nums === []){
            return []
        }
        index++
        return el + index
    }) 
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 10 && arr[i] < 20){
            arr[i] -= 10
        }
        if(arr[i] >= 20 && arr[i] < 30){
            arr[i] -= 20
        }
        if(arr[i] >= 30 && arr[i] < 40){
            arr[i] -= 30
        }
        if(arr[i] >= 40 && arr[i] < 50){
            arr[i] -= 40
        }
        if(arr[i] >= 50 && arr[i] < 60){
            arr[i] -= 50
        }
        if(arr[i] >= 60 && arr[i] < 70){
            arr[i] -= 60
        }
        if(arr[i] >= 70 && arr[i] < 80){
            arr[i] -= 70
        }
        if(arr[i] >= 80 && arr[i] < 90){
            arr[i] -= 80
        }
        if(arr[i] >= 90 && arr[i] < 100){
            arr[i] -= 90
        }
       
    }
    return arr

}









