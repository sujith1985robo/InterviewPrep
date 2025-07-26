/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
       
        for(j=0;j<=nums.length;j++){
            for(i=j+1;i<=nums.length;i++){
                if(nums[j] + nums[i] == target){
                    return [j,i];
                   }
            }
        }
    
};
