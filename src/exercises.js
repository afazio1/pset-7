function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  //needs work
  else {
    firstElementa = a[0];
    firstElementb = b[0];
    lastElementa = a[a.length - 1];
    lastElementb = b[b.length - 1];
    if (firstElementa === firstElementb) {
      return true;
    }
    else if (lastElementa === lastElementb) {
      return true;
    }
    else {
      return false;
    }
  }
}
//not done
function endsMeet(values, n) {
  let array1 = [];
  let array2 = [];
  if (!values || values.length < n || n < 1 || !Number.isInteger(n)) {
    return [];
  }
  else {
      array1 = values.slice(0, n);
      array2 = values.slice(values.length - n, values.length + 1) //[1, 2, 3, 4]
      newArray = array1.concat(array2);
      return newArray;
  }
}

function difference(numbers) {
  
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
