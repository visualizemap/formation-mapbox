// mapbox scale control
var scale = new mapboxgl.ScaleControl({
	maxWidth: 150,
	unit: 'imperial',
});

map.addControl(scale, 'bottom-left');
scale.setUnit('metric');

// mapbox full screen control
map.addControl(new mapboxgl.FullscreenControl({
	container: document.querySelector('html')
}), 'top-right');

// mapbox navigation control
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
}),
'top-right');
