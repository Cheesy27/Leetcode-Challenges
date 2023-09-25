var reduce = function(nums, fn, init) {
    let val = init
    let index = 0
    for(let element of nums){
        val = fn(val, element)
    }
    return val
};