"use strict";

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78

const findMax = (arr) => {
  let max;
  max=arr[0];
  for(var i=0; i<arr.length;i++){
    if (max<arr[i+1]) {
      max=arr[i+1];
    }
  }
  return max;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
const sumNums = (arr) => {
  let sum=0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i]=="number") {
      sum+=arr[i];
    }
  }
  return sum;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };
