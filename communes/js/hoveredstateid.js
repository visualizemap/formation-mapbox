// Polygon selection
// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.

map.on('load', function () {
 map.addSource('carreaux-importation', {
   'type': 'vector',
   'url': 'mapbox://visualizemap.9kk9gk10',
 });

 // The feature-state dependent fill-opacity expression will render the hover effect
 // when a feature's hover state is set to true.
 map.addLayer({
   'id': 'carreauxpolygones',
   'type': 'fill',
   'source': 'carreaux-importation',
   'source-layer': 'carreaux-372tte',
   'paint': {
     'fill-color': '#627BC1',
     'fill-opacity': 0
   }
 });

 map.addLayer({
   'id': 'carreauxlignes',
   'type': 'line',
   'source': 'carreaux-importation',
   'source-layer': 'carreaux-372tte',
   'paint': {
     'line-color': '#F44336',
     'line-width': [
       'case', ['boolean', ['feature-state', 'hover'], false],
       2,
       0
     ]
   }
 });

 // When the user moves their mouse over the state-fill layer, we'll update the
 // feature state for the feature under the mouse.
 map.on('mousemove', 'carreauxpolygones', function (e) {
   if (e.features.length > 0) {
     if (hoveredStateId) {
       map.setFeatureState({
         source: 'carreaux-importation',
         sourceLayer: 'carreaux-372tte',
         id: hoveredStateId
       }, {
         hover: false
       });
     }
     hoveredStateId = e.features[0].id;
     map.setFeatureState({
       source: 'carreaux-importation',
       sourceLayer: 'carreaux-372tte',
       id: hoveredStateId
     }, {
       hover: true
     });
   }
 });

 // When the mouse leaves the state-fill layer, update the feature state of the
 // previously hovered feature.
 map.on('mouseleave', 'ugapolygones', function () {
   if (hoveredStateId) {
     map.setFeatureState({
       source: 'carreaux-importation',
       sourceLayer: 'carreaux-372tte',
       id: hoveredStateId
     }, {
       hover: false
     });
   }
   hoveredStateId = null;
 });

});
