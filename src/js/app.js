const url = "http://www.mocky.io/v2/5d164fc10e00001730a118b8"

const options = {
    method: 'GET'
}

fetch(url, options)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data)
        
    })
    .catch((err) => err)