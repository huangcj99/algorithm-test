var twoSum = function (nums, target) {
  var hashMap = {},
      complement;

  for (var i = 0, len = nums.length; i < len; i++) {
    complement = target - nums[i];
    
    if (hashMap[complement] || hashMap[complement] === 0) {
      return [hashMap[complement], i];
    }

    hashMap[nums[i]] = i;
  }
};