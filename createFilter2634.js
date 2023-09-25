var filter = function(arr, fn) {
    let filteredArr = []
    let index = 0
    for(let element of arr){
        if(fn(element, index)){
            filteredArr.push(element)
        }
        index++
    }
    return filteredArr
};