function findSetBit(number) {
  //return -1 if number is not power of two
  if (!isPowerOfTwo(number)) {
    return -1;
  }
  // working with power of two
  let pos = 1,
    i = 1;
  while ((i & number) === 0) {
    i = i << 1;
    pos = pos + 1;
  }
  return pos;
}

// checking number is power of two
function isPowerOfTwo(number) {
  if (number  && !(number & (number - 1))) {
    return true;
  } else {
    return false;
  }
} 

let num = 128;
let getPosition = findSetBit(num);
if (getPosition === -1) {
  console.log(num + "=" + " " + "Invalid Number");
} else {
  console.log(num + "= " + "it contain " + getPosition);
}
