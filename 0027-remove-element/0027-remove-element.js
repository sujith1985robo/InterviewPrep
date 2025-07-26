/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement =  function(nums, val) {
    let totalcount=nums.length;
    let arr=[];
    for(i=0;i<nums.length;i++){
        if(nums[i]!=val){
            arr.push(nums[i]); 
        }
    }
    for(j=0;j<arr.length;j++){

    nums[j]=arr[j];
    }
    nums.length=arr.length;
    // console.log(nums,nums.length);
    return (nums.length);
};