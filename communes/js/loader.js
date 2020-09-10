// loader
map.on("render", function () {
	if (map.loaded()) {
		document.getElementById("loader").style.display = "none";
	}
});
