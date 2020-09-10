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

    var popup = new mapboxgl.Popup({
        closeButton: true
    }) // afficher un bouton de fermeture du popup
        .setLngLat(map.unproject(e.point))
        // intégrer du code html dans le popup
        .setHTML(
            '<div>' + feature.properties.nom_iris + '</div>' +
            '<div>' + feature.properties.code_iris + '</div>' +
            '<div>Prix moyen au m² : ' + feature.properties.a_prix_m2_2018 + '€</div>' +
            '<div>Prix de vente moyen : ' + feature.properties.a_prix_vente_moyen_2018 + '€</div>' +
            '<div>Nombre de vente : ' + feature.properties.a_nb_ventes_2018 + '</div>'
        )
        .addTo(map)
        // configurer la largeur maximum du popup
        .setMaxWidth("300px");
});

map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['communes']
    });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});
