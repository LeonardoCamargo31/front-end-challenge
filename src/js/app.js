const url = "http://www.mocky.io/v2/5d164fc10e00001730a118b8"

const options = {
    method: 'GET'
}

const api = async ()=>{
    return fetch(url, options)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log('data',data)
        return data
    })
    .catch((err) => console.log('error',err))
}

// const data = api().then(response => {
//     console.log(response)
//     var cardName = document.getElementById('cardName')
//     var cardImage = document.getElementById('cardImage')
//     var totalReviews = document.getElementById('totalReviews')
//     var averageScore = document.getElementById('averageScore')
//     var annuity = document.getElementById('annuity')
//     var minimumIncome = document.getElementById('minimumIncome')

//     cardName.textContent = response.name
//     cardImage.src=response.imageUrl

//     totalReviews.textContent = response.rating.total_reviews
//     //averageScore.textContent = response.rating.total_reviews

//     annuity.textContent = response.firstAnnuity.textFormatted
//     minimumIncome.textContent = response.valueOfMinimalIncomeRequired

// });