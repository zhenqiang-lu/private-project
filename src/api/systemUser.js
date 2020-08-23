define(function (require, exports, module) {
    //用户管理列表
    exports.usersList = function (data) {
        return axios({
            url: "/ITS/Security/usersList",
            method: 'post',
            data: data
        })
    }
    

})
