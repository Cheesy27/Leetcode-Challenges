/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}
     return function(...args) {
         const key = JSON.stringify(args)
         if(cache[key]) return cache[key]
         else{
             const result = fn.apply(this,args)
             cache[key]=result
             return result
         }
     }
 }