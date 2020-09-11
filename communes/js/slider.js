// importation du slider et paramétrage
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 256000],
    connect: true,
    snap: true,
    tooltips: true,
    format: wNumb({ decimals: 0 }),
    range: {
        'min': [0],
        '5%': [500],
        '10%': [1000],
        '15%': [1500],
        '20%': [2000],
        '25%': [3000],
        '30%': [4000],
        '35%': [6000],
        '40%': [8000],
        '45%': [12000],
        '50%': [16000],
        '55%': [24000],
        '60%': [32000],
        '65%': [48000],
        '70%': [64000],
        '75%': [96000],
        '80%': [128000],
        '85%': [192000],
        'max': [256000]
    }
});

// filtrer les données de la carte en fonction des valeurs min et max du slider quand il y a un changement
// filtrer sur colonne 'p17_pop' de la couche 'communes' et 'communes-lignes' 
slider.noUiSlider.on('update', function () {
    try {
        var valMin = parseFloat(slider.noUiSlider.get()[0]);
        var valMax;
        if (parseFloat(slider.noUiSlider.get()[1]) >= 256000) { valMax = 500000 }
        else (valMax = parseFloat(slider.noUiSlider.get()[1]))
        map.setFilter('communes', ["all", [">=", ["get", "p17_pop"], valMin], ["<=", ["get", "p17_pop"], valMax]]);
        map.setFilter('communes-lignes', ["all", [">=", ["get", "p17_pop"], valMin], ["<=", ["get", "p17_pop"], valMax]]);
        map.setFilter('communes-centroides', ["all", [">=", ["get", "p17_pop"], valMin], ["<=", ["get", "p17_pop"], valMax]]);

    }
    catch (err) {

    }
});


