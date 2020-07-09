define(function (require, exports, module) {

    function SpliteCookie(value){
        len =  value.indexOf("&amp");
        if(len > 0){
            return value.substr(value,len); 
        }
        return value;
    }

    exports.setCookie = function (name, value) {
        var str = name + "=" + value +";path=/";
        document.cookie = str;
        return;
    }

    exports.getCookie = function (name) {
        var arrstr = document.cookie.split("; ");
        if (!arrstr) {
            return null;
        }
        for (var i = 0; i < arrstr.length; i++) {
            var temp = arrstr[i].split("=");
            if (temp[0] == name) {
                return SpliteCookie(temp[1]);
            }

        }
        return null;
    }

})
