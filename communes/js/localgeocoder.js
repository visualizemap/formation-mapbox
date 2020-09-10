var customData = {
"type": "FeatureCollection",
"name": "sql_statement",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "libelle": "vide" }, "geometry": { "type": "MultiPoint", "coordinates": [ 1.923752455912787, 49.006943586582238 ] } },

]
}


;

function forwardGeocoder(query) {
var matchingFeatures = [];
for (var i = 0; i < customData.features.length; i++) {
var feature = customData.features[i];
// handle queries with different capitalization than the source data by calling toLowerCase()
if (
feature.properties.libelle
.toLowerCase()
.search(query.toLowerCase()) !== -1
) {
// add a tree emoji as a prefix for custom data results
// using carmen geojson format: https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
feature['place_name'] = feature.properties.libelle;
feature['center'] = feature.geometry.coordinates;
feature['place_type'] = [feature.properties.description];
matchingFeatures.push(feature);
}
}
return matchingFeatures;
}


var geocoder = new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
	localGeocoder: forwardGeocoder,
	zoom: 8,
	language: 'fr',
	countries: 'fr',
	collapsed: false,
	placeholder: 'Rechercher',
	mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
