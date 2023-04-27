import request from './../utils/request';

export function userInfo() {
    return request({
        url: 'user/get/info',
        method: 'GET'
    })
}

export function reward(data) {
    return request({
        url: 'user/get/reward/' + data,
        method: 'GET'
    })
}


export function weChatLogin(data) {
    console.log("传入的参数：", data);
    return request({
        url: 'auth/wx/login',
        method: 'POST',
        data
    }).then((resp) => {
        console.log("请求返回结果：", resp);
        return Promise.resolve(resp);
    }).catch((error) => {
        console.log("请求发生错误：", error);
        return Promise.reject(error);
    });
}


export function weChatLogout() {
    return request({
        url: 'auth/wx/logout',
        method: 'POST'
    })
}

export function exchangeCode(data) {
    return request({
        url: 'user/get/exchange/' + data,
        method: 'GET'
    })
}

