// Désélectionner tous les checkbox
function unCheckedAll() {
    var items = document.querySelectorAll("[name=var1Checkbox],  [name=var2Checkbox],  [name=var3Checkbox],  [name=var4Checkbox],  [name=var5Checkbox],  [name=var6Checkbox],  [name=var7Checkbox],  [name=var8Checkbox],  [name=var9Checkbox],  [name=var10Checkbox],  [name=var11Checkbox],  [name=var12Checkbox],  [name=var13Checkbox],  [name=var14Checkbox],  [name=var15Checkbox],  [name=var16Checkbox],  [name=var17Checkbox],  [name=var18Checkbox],  [name=var19Checkbox],  [name=var20Checkbox], [name=var21Checkbox] , [name=var22Checkbox] , [name=var23Checkbox]");
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox') items[i].checked = false;
    }
}
// Changer le theme - Light
function changeThemeLight() {
    document.getElementById("gradient1").className = "gradient-red col h12 opacity75";
    document.getElementById("gradient3").className = "gradient-green col h12 opacity75";
    document.getElementById("gradient4").className = "gradient-teal col h12 opacity75";
    document.getElementById("gradient5").className = "gradient-orange col h12 opacity75";
    document.getElementById("gradient6").className = "gradient-red col h12 opacity75";
    document.getElementById("gradient7").className = "gradient-purple col h12 opacity75";
    document.getElementById("gradient8").className = "gradient-blue-grey col h12 opacity75";
    document.getElementById("gradient9").className = "gradient-brown col h12 opacity75";
    document.getElementById("gradient10").className = "gradient-light-green col h12 opacity75";
    document.getElementById("gradient11").className = "gradient-orange col h12 opacity75";
    document.getElementById("gradient12").className = "gradient-red col h12 opacity75";
    document.getElementById("gradient13").className = "gradient-green col h12 opacity75";
    document.getElementById("gradient14").className = "gradient-blue-grey col h12 opacity75";
    document.getElementById("gradient15").className = "gradient-brown col h12 opacity75";
    document.getElementById("gradient16").className = "gradient-purple col h12 opacity75";
    document.getElementById("gradient17").className = "gradient-grey col h12 opacity75";
    document.getElementById("gradient19").className = "gradient-red col h12 opacity75";
    document.getElementById("gradient20").className = "gradient-orange col h12 opacity75";
    document.getElementById("gradient21").className = "gradient-blue-grey col h12 opacity75";
    document.getElementById("gradient22").className = "gradient-brown col h12 opacity75";
    document.getElementById("body").classList.remove('color-lighten50');
    document.getElementById("infosDiv").classList.remove('bg-gray-dark');
    document.getElementById("filtresDiv").classList.remove('bg-gray-dark');
    document.getElementById("themesDiv").classList.remove('bg-gray-dark');
    document.getElementById("tabpopup").classList.remove('bg-gray-dark');
    unCheckedAll(); // Déselectionner tous les checkbox
    document.getElementById("var1Checkbox").checked = true;
}
// Changer le thème - Dartk
function changeThemeDark() {
    document.getElementById("gradient1").className = "gradient-dark-red col h12 opacity75";
    document.getElementById("gradient3").className = "gradient-dark-green col h12 opacity75";
    document.getElementById("gradient4").className = "gradient-dark-teal col h12 opacity75";
    document.getElementById("gradient5").className = "gradient-dark-orange col h12 opacity75";
    document.getElementById("gradient6").className = "gradient-dark-red col h12 opacity75";
    document.getElementById("gradient7").className = "gradient-dark-purple col h12 opacity75";
    document.getElementById("gradient8").className = "gradient-dark-blue-grey col h12 opacity75";
    document.getElementById("gradient9").className = "gradient-dark-brown col h12 opacity75";
    document.getElementById("gradient10").className = "gradient-dark-light-green col h12 opacity75";
    document.getElementById("gradient11").className = "gradient-dark-orange col h12 opacity75";
    document.getElementById("gradient12").className = "gradient-dark-red col h12 opacity75";
    document.getElementById("gradient13").className = "gradient-dark-green col h12 opacity75";
    document.getElementById("gradient14").className = "gradient-dark-blue-grey col h12 opacity75";
    document.getElementById("gradient15").className = "gradient-dark-brown col h12 opacity75";
    document.getElementById("gradient16").className = "gradient-dark-purple col h12 opacity75";
    document.getElementById("gradient17").className = "gradient-dark-grey col h12 opacity75";
    document.getElementById("gradient19").className = "gradient-dark-red col h12 opacity75";
    document.getElementById("gradient20").className = "gradient-dark-orange col h12 opacity75";
    document.getElementById("gradient21").className = "gradient-dark-blue-grey col h12 opacity75";
    document.getElementById("gradient22").className = "gradient-dark-brown col h12 opacity75";
    document.getElementById("body").classList.add('color-lighten50');
    document.getElementById("infosDiv").classList.add('bg-gray-dark');
    document.getElementById("filtresDiv").classList.add('bg-gray-dark');
    document.getElementById("themesDiv").classList.add('bg-gray-dark');
    document.getElementById("tabpopup").classList.add('bg-gray-dark');
    unCheckedAll(); // Déselectionner tous les checkbox
    document.getElementById("var1Checkbox").checked = true;
}
// Couleur légende pour thème Light
var colorTheme = '#FAFAFA';
// var1Checkbox
var var1Checkbox = document.querySelector("input[name=var1Checkbox]");
var1Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'p16_pop'], 0, colorTheme, 2500, '#ffebee', 5000, '#e57373', 50000, '#f44336'
        ]);

        unCheckedAll();
        document.getElementById("var1Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var2Checkbox
var var2Checkbox = document.querySelector("input[name=var2Checkbox]");
var2Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'densite'], 0, colorTheme, 500, '#ffc107', 2500, '#ff5722', 5000, '#f44336'
        ]);
        unCheckedAll();
        document.getElementById("var2Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var3Checkbox
var var3Checkbox = document.querySelector("input[name=var3Checkbox]");
var3Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'p16_pop0014_p'], 0, colorTheme, 18.1, '#e8f5e9', 24.9, '#81c784', 28.1, '#4caf50'
        ]);
        unCheckedAll();
        document.getElementById("var3Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var4Checkbox
var var4Checkbox = document.querySelector("input[name=var4Checkbox]");
var4Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'p16_pop1529_p'], 0, colorTheme, 13.5, '#e0f2f1', 18.9, '#4db6ac', 22.6, '#009688'
        ]);
        unCheckedAll();
        document.getElementById("var4Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var5Checkbox
var var5Checkbox = document.querySelector("input[name=var5Checkbox]");
var5Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'p16_pop3044_p'], 0, colorTheme, 18.4, '#fff3e0', 24.6, '#ffb74d', 27.8, '#ff9800'
        ]);
        unCheckedAll();
        document.getElementById("var5Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var6Checkbox
var var6Checkbox = document.querySelector("input[name=var6Checkbox]");
var6Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'p16_pop4559_p'], 0, colorTheme, 21.6, '#ffebee', 28.2, '#e57373', 32.9, '#f44336'
        ]);
        unCheckedAll();
        document.getElementById("var6Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var7Checkbox
var var7Checkbox = document.querySelector("input[name=var7Checkbox]");
var7Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'p16_pop6074_p'], 0, colorTheme, 17.9, '#f3e5f5', 28.7, '#ba68c8', 35.8, '#9c27b0'
        ]);
        unCheckedAll();
        document.getElementById("var7Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var8Checkbox
var var8Checkbox = document.querySelector("input[name=var8Checkbox]");
var8Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'p16_pop7589_p'], 0, colorTheme, 8.2, '#eceff1', 16.4, '#90a4ae', 21.3, '#607d8b'
        ]);
        unCheckedAll();
        document.getElementById("var8Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var9Checkbox
var var9Checkbox = document.querySelector("input[name=var9Checkbox]");
var9Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'p16_pop90p_p'], 0, colorTheme, 0.9, '#efebe9', 3.2, '#a1887f', 5.4, '#795548'
        ]);
        unCheckedAll();
        document.getElementById("var9Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var10Checkbox
var var10Checkbox = document.querySelector("input[name=var10Checkbox]");
var10Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'c16_pop15p_cs1_p'], 0, colorTheme, 2.9, '#f1f8e9', 15.4, '#aed581', 27.3, '#8bc34a'
        ]);
        m
        unCheckedAll();
        document.getElementById("var10Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var11Checkbox
var var11Checkbox = document.querySelector("input[name=var11Checkbox]");
var11Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'c16_pop15p_cs2_p'], 0, colorTheme, 4.3, '#fff3e0', 11.4, '#ffb74d', 17.6, '#ff9800'
        ]);

        unCheckedAll();
        document.getElementById("var11Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var12Checkbox
var var12Checkbox = document.querySelector("input[name=var12Checkbox]");
var12Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'c16_pop15p_cs3_p'], 0, colorTheme, 5.6, '#ffebee', 15.7, '#e57373', 24, '#f44336'
        ]);
        unCheckedAll();
        document.getElementById("var12Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var13Checkbox
var var13Checkbox = document.querySelector("input[name=var13Checkbox]");
var13Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'c16_pop15p_cs4_p'], 0, colorTheme, 13.5, '#e8f5e9', 24.1, '#81c784', 31.3, '#4caf50'
        ]);

        unCheckedAll();
        document.getElementById("var13Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var14Checkbox
var var14Checkbox = document.querySelector("input[name=var14Checkbox]");
var14Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'c16_pop15p_cs5_p'], 0, colorTheme, 15.7, '#eceff1', 25, '#90a4ae', 33.3, '#607d8b'
        ]);

        unCheckedAll();
        document.getElementById("var14Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var15Checkbox
var var15Checkbox = document.querySelector("input[name=var15Checkbox]");
var15Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'c16_pop15p_cs6_p'], 0, colorTheme, 14.5, '#efebe9', 27.3, '#a1887f', 35.7, '#795548'
        ]);

        unCheckedAll();
        document.getElementById("var15Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var16Checkbox
var var16Checkbox = document.querySelector("input[name=var16Checkbox]");
var16Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'c16_pop15p_cs7_p'], 0, colorTheme, 30, '#f3e5f5', 50, '#ba68c8', 63.6, '#9c27b0'
        ]);

        unCheckedAll();
        document.getElementById("var16Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var17Checkbox
var var17Checkbox = document.querySelector("input[name=var17Checkbox]");
var17Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'c16_pop15p_cs8_p'], 0, colorTheme, 12.2, '#fafafa', 22.4, '#e0e0e0', 30.8, '#9e9e9e'
        ]);

        unCheckedAll();
        document.getElementById("var17Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var18Checkbox
var var18Checkbox = document.querySelector("input[name=var18Checkbox]");
var18Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'snhm16'], 0, colorTheme, 10.9, '#00bcd4', 13.2, '#ffe0b2', 18.6, '#f44336', 24.7, '#b71c1c'
        ]);

        unCheckedAll();
        document.getElementById("var18Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var19Checkbox
var var19Checkbox = document.querySelector("input[name=var19Checkbox]");
var19Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'snhmc16'], 18, colorTheme, 22.8, '#ffebee', 28.9, '#e57373', 35.1, '#f44336'
        ]);

        unCheckedAll();
        document.getElementById("var19Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var20Checkbox
var var20Checkbox = document.querySelector("input[name=var20Checkbox]");
var20Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'snhmp16'], 12.6, colorTheme, 14.4, '#fff3e0', 16.5, '#ffb74d', 18, '#ff9800'
        ]);

        unCheckedAll();
        document.getElementById("var20Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var21Checkbox
var var21Checkbox = document.querySelector("input[name=var21Checkbox]");
var21Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'snhme16'], 9.3, colorTheme, 10.3, '#eceff1', 11.9, '#90a4ae', 12.6, '#607d8b'
        ]);

        unCheckedAll();
        document.getElementById("var21Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var22Checkbox
var var22Checkbox = document.querySelector("input[name=var22Checkbox]");
var22Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'snhmo16'], 9.6, colorTheme, 11.1, '#efebe9', 12.4, '#a1887f', 13.1, '#795548'
        ]);

        unCheckedAll();
        document.getElementById("var22Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// var23Checkbox
var var23Checkbox = document.querySelector("input[name=var23Checkbox]");
var23Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setLayoutProperty('communes', 'visibility', 'visible');
        map.setPaintProperty('communes', 'fill-color', ['interpolate', ['linear'],
            ['get', 'q216'],0,colorTheme, 15556, '#00bcd4', 20452, '#ffe0b2', 26016, '#f44336', 31403, '#b71c1c'
        ]);

        unCheckedAll();
        document.getElementById("var23Checkbox").checked = true;
    } else {
        map.setLayoutProperty('communes', 'visibility', 'none');
    }
});
// Thème de la carte
// Themes 1 Light
var themes1Checkbox = document.querySelector("input[name=themes1Checkbox]");
themes1Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setStyle('mapbox://styles/visualizemap/ck8isn75f1v2r1iqdf42luecz'); // light
        document.getElementById("themes2Checkbox").checked = false;
        colorTheme = '#FAFAFA';
        changeThemeLight();
    } else {
        map.setStyle('mapbox://styles/visualizemap/ck8k78fod0rta1ip9gj6vk2ki'); // dark
        document.getElementById("themes2Checkbox").checked = true;
        colorTheme = '#424242';
        changeThemeDark();
    }
});
// Themes 2 Dark
var themes2Checkbox = document.querySelector("input[name=themes2Checkbox]");
themes2Checkbox.addEventListener('change', function() {
    if (this.checked) {
        map.setStyle('mapbox://styles/visualizemap/ck8k78fod0rta1ip9gj6vk2ki'); // dark
        colorTheme = '#424242'; // Changement couleur gratiant carte
        changeThemeDark(); // Changement couleur légende gradiant
        document.getElementById("themes1Checkbox").checked = false;
    } else {
        map.setStyle('mapbox://styles/visualizemap/ck8isn75f1v2r1iqdf42luecz'); // light
        colorTheme = '#FAFAFA';
        changeThemeLight();
        document.getElementById("themes1Checkbox").checked = true;
    }
});
