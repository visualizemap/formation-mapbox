// Polygon selection
// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.

map.on('load', function () {
  map.addSource('communes-hover', {
    'type': 'vector',
    'url': 'mapbox://jairson.5j147m24',
  });

  // The feature-state dependent fill-opacity expression will render the hover effect
  // when a feature's hover state is set to true.
  map.addLayer({
    'id': 'communespolygones',
    'type': 'fill',
    'source': 'communes-hover',
    'source-layer': 'communes',
    'paint': {
      'fill-color': '#627BC1',
      'fill-opacity': 0
    }
  });

  map.addLayer({
    'id': 'communeslignes',
    'type': 'line',
    'source': 'communes-hover',
    'source-layer': 'communes',
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
  map.on('mousemove', 'communespolygones', function (e) {
    if (e.features.length > 0) {
      if (hoveredStateId) {
        map.setFeatureState({
          source: 'communes-hover',
          sourceLayer: 'communes',
          id: hoveredStateId
        }, {
          hover: false
        });
      }
      hoveredStateId = e.features[0].id;
      map.setFeatureState({
        source: 'communes-hover',
        sourceLayer: 'communes',
        id: hoveredStateId
      }, {
        hover: true
      });
    }
  });


});
