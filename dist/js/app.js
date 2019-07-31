const url = "http://www.mocky.io/v2/5d164fc10e00001730a118b8"

const options = {
    method: 'GET'
}

const api = async () => {
    return fetch(url, options)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log('data', data)
            return data
        })
        .catch((err) => console.log('error', err))
}


const processStars = (rating) => {
    var newStars = ''
    for (let i = 0; i < rating; i++) {
        newStars += '<div class="star"></div>'
    }
    return newStars
}

const processMoney=(money)=>{
    return "R$ "+money.toLocaleString('pt-BR')
}

const data = api().then(response => {
    console.log(response)
    var cardName = document.getElementById('cardName')
    var cardImage = document.getElementById('cardImage')
    var totalReviews = document.getElementById('totalReviews')
    var annuity = document.getElementById('annuity')
    var minimumIncome = document.getElementById('minimumIncome')
    var stars = document.getElementsByClassName('rating-stars')[0]

    cardName.textContent = response.name
    cardImage.src = response.imageUrl

    //estrelas
    const newStars = processStars(response.rating.average_score)
    stars.innerHTML = newStars

    //avaliações
    let total = response.rating.total_reviews
    total += " avaliações"
    totalReviews.textContent = total

    //anuidade
    annuity.textContent = response.firstAnnuity.textFormatted

    //Renda mínima
    var money = processMoney(response.valueOfMinimalIncomeRequired)
    minimumIncome.textContent = money

});