function solution(nums){
  if (nums == [] || nums == null){
    return []
  } else {
    let ans = nums.sort(function(a, b){
      return a - b
    })
    return ans
  }
}

//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003