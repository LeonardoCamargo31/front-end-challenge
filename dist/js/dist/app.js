'use strict';

var url = "http://www.mocky.io/v2/5d164fc10e00001730a118b8";

var options = {
    method: 'GET',
    mode: 'no-cors'
};

var api = async function api() {
    return fetch(url, options).then(function (resp) {
        return resp.json();
    }).then(function (data) {
        return data;
    }).catch(function (err) {
        return console.log('error', err);
    });
};

var processStars = function processStars(rating) {
    var newStars = '';
    for (var i = 0; i < rating; i++) {
        newStars += '<div class="star"></div>';
    }
    return newStars;
};

var processMoney = function processMoney(money) {
    return "R$ " + money.toLocaleString('pt-BR');
};

var data = api().then(function (response) {
    var cardName = document.getElementById('cardName');
    var cardImage = document.getElementById('cardImage');
    var totalReviews = document.getElementById('totalReviews');
    var annuity = document.getElementById('annuity');
    var minimumIncome = document.getElementById('minimumIncome');
    var stars = document.getElementsByClassName('rating-stars')[0];

    //nome do cartão
    cardName.textContent = response.name;

    //imagem do cartão
    cardImage.src = response.imageUrl;

    //estrelas
    var newStars = processStars(response.rating.average_score);
    stars.innerHTML = newStars;

    //avaliações
    var total = response.rating.total_reviews;
    total += " avaliações";
    totalReviews.textContent = total;

    //anuidade
    annuity.textContent = response.firstAnnuity.textFormatted;

    //Renda mínima
    var money = processMoney(response.valueOfMinimalIncomeRequired);
    minimumIncome.textContent = money;
});