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
  let newArray = [];
  if (!values || values.length < n || n < 0 || Number.isInteger(n) === false) {
    return [];
  }
  else {
    if (n === 0) {
      return values;
    }
    else {
      console.log(values);
      console.log(n);
      for (let i = 0; i < n; i++) {
        //let firstn = values.shift();
        newArray.push(values[i]);
      }
      for (let k = values.length - 1; k > n; k--) {
        //let lastn = values.pop();
        newArray.push(values[k]);
      }
      console.log(newArray);
      return newArray;
    }  
  }
}

function difference(numbers) {
  // write your code here
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
