// chargement couche carreaux directement sans passer par mapbox studio
map.on('load', function() {
map.addSource('carreaux-importation', {
'type': 'vector',
'url': 'mapbox://visualizemap.9kk9gk10'
});
map.addLayer({
'id': 'carreaux',
'type': 'fill-extrusion',
'source': 'carreaux-importation',
'source-layer': 'carreaux-372tte',
'layout': {},
'paint': {
		'fill-extrusion-color': ['interpolate',['linear'],['get', 'niv_vie'],8000,'#00bcd4',21405,'#ffe0b2',32014,'#f44336',40425,'#b71c1c'],
		'fill-extrusion-height': [
				'interpolate',
				['linear'],
				['zoom'],
				10,
				[
						'interpolate',
						['linear'],
						['get', 'ind'],
						1,
						100,
						4085,
						9000
				],
				14,
				['interpolate', ['linear'], ['get', 'ind'], 1, 0, 4085, 0]
		],
		'fill-extrusion-opacity': [
				'interpolate',
				['linear'],
				['zoom'],
				13,
				0.8,
				14,
				0.2
		]
}
});
});


//

document.getElementById("infosDiv").classList.add('bg-gray-dark');
document.getElementById("filtresDiv").classList.add('bg-gray-dark');
document.getElementById("themesDiv").classList.add('bg-gray-dark');
document.getElementById("tabpopup").classList.add('bg-gray-dark');


//
var checkboxIsSelected = document.querySelectorAll('input[type=checkbox]:checked')[1].name
document.getElementById(checkboxIsSelected).checked = true;

console.log(checkboxIsSelected);


// rechercher une valeur et génération des valeur correspondante avec petit graph
function getInputValue(){
var searchInput = document.getElementById("search").value;
var i, x = "";
for (i in json) {
  if (json[i].libelle == searchInput){


  x += "<!-- "+jsonVilles[i].libelle+" --><div><div class='flex-parent wmax360 mx24'><div class='flex-child w120 align-l'>"+jsonVilles[i].libelle+"</div><div class='flex-child flex-child--grow align-r'>"+jsonVilles[i].niv_vie+"€</div></div> <div class='h6 bg-darken10 relative round-full mx24'><div class='absolute h6 bg-red-light round-full' style='width:"+jsonVilles[i].men_prop+"%;'></div> </div></div>";
document.getElementById("indicateur1").innerHTML = x;
}}
        }

//document.getElementById("demo").innerHTML = x;

// menage un individu
  //y = "<!-- "+ json[0].libelle +"--><div><div class='flex-parent wmax360 mx24'><div class='flex-child w120 align-l'>"+ json[0].libelle +"</div><div class='flex-child flex-child--grow align-r'>"+ json[0].men_1ind.toLocaleString() +"</div><div class=' txt-bold flex-child w60 align-r'>"+ json[0].men_1indp.toLocaleString() +"%</div> </div> <div class='h6 bg-darken10 relative round-full mx24'><div class='absolute h6 bg-green-light round-full' style='width:"+ json[0].men_1indp+"%;'></div> </div></div>";
//document.getElementById("demo2").innerHTML = y;


<div>
  <input id='search' class='input' type="text" placeholder="Search.." onkeyup="getInputValue()">
</div>
