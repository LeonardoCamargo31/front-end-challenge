"use strict";

var url = "http://www.mocky.io/v2/5d164fc10e00001730a118b8";

var options = {
    method: 'GET'
};

fetch(url, options).then(function (resp) {
    return resp.json();
}).then(function (data) {
    console.log(data);
}).catch(function (err) {
    return err;
});