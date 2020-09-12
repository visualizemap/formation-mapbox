// Popup configuration
// When a click event occurs near a polygon, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['communes']
    });
    if (!features.length) {
        return;
    }

    var feature = features[0];

    var arrowColor;
    if (feature.properties.pop_evol_12_17 < -3) { arrowColor = '#F44336' }
    if (feature.properties.pop_evol_12_17 > 3) { arrowColor = '#8BC34A' }

    var arrowColor2;
    if (feature.properties.pop_evol_07_17 < -3) { arrowColor2 = '#F44336' }
    if (feature.properties.pop_evol_07_17 > 3) { arrowColor2 = '#8BC34A' }

    var arrow;
    if (feature.properties.pop_evol_12_17 < -3) { arrow = 'arrow-down' }
    if (feature.properties.pop_evol_12_17 >= -3 && feature.properties.pop_evol_12_17 <= 3) { arrow = 'arrow-left-right' }
    if (feature.properties.pop_evol_12_17 > 3) { arrow = 'arrow-up' }

    var arrow2;
    if (feature.properties.pop_evol_07_17 < -3) { arrow2 = 'arrow-down' }
    if (feature.properties.pop_evol_07_17 >= -3 && feature.properties.pop_evol_12_17 <= 3) { arrow2 = 'arrow-left-right' }
    if (feature.properties.pop_evol_07_17 > 3) { arrow2 = 'arrow-up' }

    var popup = new mapboxgl.Popup({
        closeButton: true
    }) // afficher un bouton de fermeture du popup
        .setLngLat(map.unproject(e.point))
        // intégrer du code html dans le popup
        .setHTML(
            '<div class="flex-parent pb6 pt12 px12 bg-gray-dark"><div class="flex-child align-l txt-h4 color-lighten50">' + feature.properties.nom_com + '</div><div class="flex-child flex-child--grow align-r txt-h4 color-lighten50 w60">' + feature.properties.code_postal + '</div></div>' +
            '<div class="flex-parent pb6 pt6 px12"><div class="flex-child w240 align-l">Population 2017</div><div class="w60 flex-child flex-child--grow align-r txt-bold">' + feature.properties.p17_pop.toLocaleString() + '</div></div>' +
            '<div class="flex-parent pb6 pt6 px12"><div class="flex-child w240 align-l">Population 2012</div><div class="w60 flex-child flex-child--grow align-r txt-bold">' + feature.properties.p12_pop.toLocaleString() + '</div></div>' +
            '<div class="flex-parent pb6 pt6 px12"><div class="flex-child w240 align-l">Population 2007</div><div class="w60 flex-child flex-child--grow align-r txt-bold">' + feature.properties.p07_pop.toLocaleString() + '</div></div>' +
            '<div class="flex-parent pb6 pt6 px12"><div class="flex-child w240 align-l">Evolution sur 5 ans</div><div class="flex-child align-r w12"><svg style="color: ' + arrowColor + ';" class="icon w18 h18 mt-neg3"><use xlink:href="#icon-' + arrow + '"/></svg></div><div class="w60 flex-child flex-child--grow align-r txt-bold">' + feature.properties.pop_evol_12_17.toLocaleString() + '%</div></div></div>' +
            '<div class="flex-parent pb6 pt6 px12"><div class="flex-child w240 align-l">Evolution sur 10 ans</div><div class="flex-child align-r w12"><svg style="color: ' + arrowColor2 + ';" class="icon w18 h18 mt-neg3"><use xlink:href="#icon-' + arrow2 + '"/></svg></div><div class="w60 flex-child flex-child--grow align-r txt-bold">' + feature.properties.pop_evol_07_17.toLocaleString() + '%</div></div></div>'
        )
        .addTo(map)
        // configurer la largeur maximum du popup
        .setMaxWidth("240px");
});

map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['communes']
    });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});
