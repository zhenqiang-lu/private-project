define(function(require, exports, module) {
    
    exports.isEmpty = function(obj) {
      for(var i in obj) {
          if(typeof obj[i] === "string" && !obj[i]) {
            return true
          }
      }
      return false
    }
    
  })
  