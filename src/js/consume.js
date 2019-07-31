const url = "http://www.mocky.io/v2/5d164fc10e00001730a118b8"

const options = {
    method: 'GET'
}

export const api = async ()=>{
    return fetch(url, options)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log('data',data)
        return data
    })
    .catch((err) => console.log('error',err))
}