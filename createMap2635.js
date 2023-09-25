var map = function(arr, fn) {
    let Newarr = []
    let index = 0
    for(const item of arr){
        Newarr[index] = fn(item, index)
        index++
    }
    return Newarr
};