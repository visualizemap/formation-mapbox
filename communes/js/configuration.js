// mapbox access token configuration
mapboxgl.accessToken = 'pk.eyJ1IjoiamFpcnNvbiIsImEiOiJjazhvZHAwcGowdDA3M21yeHAwdHUwYXp4In0.-gJk9r_w3o1F3A5ns6UQGw';
var map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/jairson/ckekbwh0407dr19nsgpte0be3', // stylesheet location
	center: [4.859171776685287, 45.73291396168358], // lyon starting position [lng, lat]
	zoom: 8.2, // starting zoom

	attributionControl: false
});
var hoveredStateId = null;
