var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_SP_UFSP_1_1 = new ol.format.GeoJSON();
var features_SP_UFSP_1_1 = format_SP_UFSP_1_1.readFeatures(json_SP_UFSP_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_UFSP_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_UFSP_1_1.addFeatures(features_SP_UFSP_1_1);
var lyr_SP_UFSP_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_UFSP_1_1, 
                style: style_SP_UFSP_1_1,
                popuplayertitle: "SP_UF — SP_1",
                interactive: true,
                title: '<img src="styles/legend/SP_UFSP_1_1.png" /> SP_UF — SP_1'
            });
var format_SP_MUNICIPIOSSPMUNICPIOS_2_2 = new ol.format.GeoJSON();
var features_SP_MUNICIPIOSSPMUNICPIOS_2_2 = format_SP_MUNICIPIOSSPMUNICPIOS_2_2.readFeatures(json_SP_MUNICIPIOSSPMUNICPIOS_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_MUNICIPIOSSPMUNICPIOS_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_MUNICIPIOSSPMUNICPIOS_2_2.addFeatures(features_SP_MUNICIPIOSSPMUNICPIOS_2_2);
var lyr_SP_MUNICIPIOSSPMUNICPIOS_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_MUNICIPIOSSPMUNICPIOS_2_2, 
                style: style_SP_MUNICIPIOSSPMUNICPIOS_2_2,
                popuplayertitle: "SP_MUNICIPIOS — SPMUNICPIOS_2",
                interactive: true,
                title: '<img src="styles/legend/SP_MUNICIPIOSSPMUNICPIOS_2_2.png" /> SP_MUNICIPIOS — SPMUNICPIOS_2'
            });
var format_L01AUTOBAN_42_3 = new ol.format.GeoJSON();
var features_L01AUTOBAN_42_3 = format_L01AUTOBAN_42_3.readFeatures(json_L01AUTOBAN_42_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L01AUTOBAN_42_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L01AUTOBAN_42_3.addFeatures(features_L01AUTOBAN_42_3);
var lyr_L01AUTOBAN_42_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L01AUTOBAN_42_3, 
                style: style_L01AUTOBAN_42_3,
                popuplayertitle: "L01AUTOBAN_42",
                interactive: true,
                title: '<img src="styles/legend/L01AUTOBAN_42_3.png" /> L01AUTOBAN_42'
            });
var format_L01AUTOBANFXD_41_4 = new ol.format.GeoJSON();
var features_L01AUTOBANFXD_41_4 = format_L01AUTOBANFXD_41_4.readFeatures(json_L01AUTOBANFXD_41_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L01AUTOBANFXD_41_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L01AUTOBANFXD_41_4.addFeatures(features_L01AUTOBANFXD_41_4);
var lyr_L01AUTOBANFXD_41_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L01AUTOBANFXD_41_4, 
                style: style_L01AUTOBANFXD_41_4,
                popuplayertitle: "L01AUTOBANFXD_41",
                interactive: true,
                title: '<img src="styles/legend/L01AUTOBANFXD_41_4.png" /> L01AUTOBANFXD_41'
            });
var format_L03TEBE_40_5 = new ol.format.GeoJSON();
var features_L03TEBE_40_5 = format_L03TEBE_40_5.readFeatures(json_L03TEBE_40_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L03TEBE_40_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L03TEBE_40_5.addFeatures(features_L03TEBE_40_5);
var lyr_L03TEBE_40_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L03TEBE_40_5, 
                style: style_L03TEBE_40_5,
                popuplayertitle: "L03TEBE_40",
                interactive: true,
                title: '<img src="styles/legend/L03TEBE_40_5.png" /> L03TEBE_40'
            });
var format_L03TEBEFXD_39_6 = new ol.format.GeoJSON();
var features_L03TEBEFXD_39_6 = format_L03TEBEFXD_39_6.readFeatures(json_L03TEBEFXD_39_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L03TEBEFXD_39_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L03TEBEFXD_39_6.addFeatures(features_L03TEBEFXD_39_6);
var lyr_L03TEBEFXD_39_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L03TEBEFXD_39_6, 
                style: style_L03TEBEFXD_39_6,
                popuplayertitle: "L03TEBEFXD_39",
                interactive: true,
                title: '<img src="styles/legend/L03TEBEFXD_39_6.png" /> L03TEBEFXD_39'
            });
var format_L06INTERVIAS_38_7 = new ol.format.GeoJSON();
var features_L06INTERVIAS_38_7 = format_L06INTERVIAS_38_7.readFeatures(json_L06INTERVIAS_38_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L06INTERVIAS_38_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L06INTERVIAS_38_7.addFeatures(features_L06INTERVIAS_38_7);
var lyr_L06INTERVIAS_38_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L06INTERVIAS_38_7, 
                style: style_L06INTERVIAS_38_7,
                popuplayertitle: "L06INTERVIAS_38",
                interactive: true,
                title: '<img src="styles/legend/L06INTERVIAS_38_7.png" /> L06INTERVIAS_38'
            });
var format_L06INTERVIASFXD_37_8 = new ol.format.GeoJSON();
var features_L06INTERVIASFXD_37_8 = format_L06INTERVIASFXD_37_8.readFeatures(json_L06INTERVIASFXD_37_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L06INTERVIASFXD_37_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L06INTERVIASFXD_37_8.addFeatures(features_L06INTERVIASFXD_37_8);
var lyr_L06INTERVIASFXD_37_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L06INTERVIASFXD_37_8, 
                style: style_L06INTERVIASFXD_37_8,
                popuplayertitle: "L06INTERVIASFXD_37",
                interactive: true,
                title: '<img src="styles/legend/L06INTERVIASFXD_37_8.png" /> L06INTERVIASFXD_37'
            });
var format_L07ROTA_36_9 = new ol.format.GeoJSON();
var features_L07ROTA_36_9 = format_L07ROTA_36_9.readFeatures(json_L07ROTA_36_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L07ROTA_36_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L07ROTA_36_9.addFeatures(features_L07ROTA_36_9);
var lyr_L07ROTA_36_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L07ROTA_36_9, 
                style: style_L07ROTA_36_9,
                popuplayertitle: "L07ROTA_36",
                interactive: true,
                title: '<img src="styles/legend/L07ROTA_36_9.png" /> L07ROTA_36'
            });
var format_L07ROTAFXD_35_10 = new ol.format.GeoJSON();
var features_L07ROTAFXD_35_10 = format_L07ROTAFXD_35_10.readFeatures(json_L07ROTAFXD_35_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L07ROTAFXD_35_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L07ROTAFXD_35_10.addFeatures(features_L07ROTAFXD_35_10);
var lyr_L07ROTAFXD_35_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L07ROTAFXD_35_10, 
                style: style_L07ROTAFXD_35_10,
                popuplayertitle: "L07ROTAFXD_35",
                interactive: true,
                title: '<img src="styles/legend/L07ROTAFXD_35_10.png" /> L07ROTAFXD_35'
            });
var format_L11RENOVIAS_34_11 = new ol.format.GeoJSON();
var features_L11RENOVIAS_34_11 = format_L11RENOVIAS_34_11.readFeatures(json_L11RENOVIAS_34_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L11RENOVIAS_34_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L11RENOVIAS_34_11.addFeatures(features_L11RENOVIAS_34_11);
var lyr_L11RENOVIAS_34_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L11RENOVIAS_34_11, 
                style: style_L11RENOVIAS_34_11,
                popuplayertitle: "L11RENOVIAS_34",
                interactive: true,
                title: '<img src="styles/legend/L11RENOVIAS_34_11.png" /> L11RENOVIAS_34'
            });
var format_L11RENOVIASFXD_33_12 = new ol.format.GeoJSON();
var features_L11RENOVIASFXD_33_12 = format_L11RENOVIASFXD_33_12.readFeatures(json_L11RENOVIASFXD_33_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L11RENOVIASFXD_33_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L11RENOVIASFXD_33_12.addFeatures(features_L11RENOVIASFXD_33_12);
var lyr_L11RENOVIASFXD_33_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L11RENOVIASFXD_33_12, 
                style: style_L11RENOVIASFXD_33_12,
                popuplayertitle: "L11RENOVIASFXD_33",
                interactive: true,
                title: '<img src="styles/legend/L11RENOVIASFXD_33_12.png" /> L11RENOVIASFXD_33'
            });
var format_L12VIAOESTE_32_13 = new ol.format.GeoJSON();
var features_L12VIAOESTE_32_13 = format_L12VIAOESTE_32_13.readFeatures(json_L12VIAOESTE_32_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L12VIAOESTE_32_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L12VIAOESTE_32_13.addFeatures(features_L12VIAOESTE_32_13);
var lyr_L12VIAOESTE_32_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L12VIAOESTE_32_13, 
                style: style_L12VIAOESTE_32_13,
                popuplayertitle: "L12VIAOESTE_32",
                interactive: true,
                title: '<img src="styles/legend/L12VIAOESTE_32_13.png" /> L12VIAOESTE_32'
            });
var format_L12VIAOESTEFXD_31_14 = new ol.format.GeoJSON();
var features_L12VIAOESTEFXD_31_14 = format_L12VIAOESTEFXD_31_14.readFeatures(json_L12VIAOESTEFXD_31_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L12VIAOESTEFXD_31_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L12VIAOESTEFXD_31_14.addFeatures(features_L12VIAOESTEFXD_31_14);
var lyr_L12VIAOESTEFXD_31_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L12VIAOESTEFXD_31_14, 
                style: style_L12VIAOESTEFXD_31_14,
                popuplayertitle: "L12VIAOESTEFXD_31",
                interactive: true,
                title: '<img src="styles/legend/L12VIAOESTEFXD_31_14.png" /> L12VIAOESTEFXD_31'
            });
var format_L13COLINAS_30_15 = new ol.format.GeoJSON();
var features_L13COLINAS_30_15 = format_L13COLINAS_30_15.readFeatures(json_L13COLINAS_30_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L13COLINAS_30_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L13COLINAS_30_15.addFeatures(features_L13COLINAS_30_15);
var lyr_L13COLINAS_30_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L13COLINAS_30_15, 
                style: style_L13COLINAS_30_15,
                popuplayertitle: "L13COLINAS_30",
                interactive: true,
                title: '<img src="styles/legend/L13COLINAS_30_15.png" /> L13COLINAS_30'
            });
var format_L13COLINASFXD_29_16 = new ol.format.GeoJSON();
var features_L13COLINASFXD_29_16 = format_L13COLINASFXD_29_16.readFeatures(json_L13COLINASFXD_29_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L13COLINASFXD_29_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L13COLINASFXD_29_16.addFeatures(features_L13COLINASFXD_29_16);
var lyr_L13COLINASFXD_29_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L13COLINASFXD_29_16, 
                style: style_L13COLINASFXD_29_16,
                popuplayertitle: "L13COLINASFXD_29",
                interactive: true,
                title: '<img src="styles/legend/L13COLINASFXD_29_16.png" /> L13COLINASFXD_29'
            });
var format_L16CART_28_17 = new ol.format.GeoJSON();
var features_L16CART_28_17 = format_L16CART_28_17.readFeatures(json_L16CART_28_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L16CART_28_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L16CART_28_17.addFeatures(features_L16CART_28_17);
var lyr_L16CART_28_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L16CART_28_17, 
                style: style_L16CART_28_17,
                popuplayertitle: "L16CART_28",
                interactive: true,
                title: '<img src="styles/legend/L16CART_28_17.png" /> L16CART_28'
            });
var format_L16CARTFXD_27_18 = new ol.format.GeoJSON();
var features_L16CARTFXD_27_18 = format_L16CARTFXD_27_18.readFeatures(json_L16CARTFXD_27_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L16CARTFXD_27_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L16CARTFXD_27_18.addFeatures(features_L16CARTFXD_27_18);
var lyr_L16CARTFXD_27_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L16CARTFXD_27_18, 
                style: style_L16CARTFXD_27_18,
                popuplayertitle: "L16CARTFXD_27",
                interactive: true,
                title: '<img src="styles/legend/L16CARTFXD_27_18.png" /> L16CARTFXD_27'
            });
var format_L19VIARONDON_26_19 = new ol.format.GeoJSON();
var features_L19VIARONDON_26_19 = format_L19VIARONDON_26_19.readFeatures(json_L19VIARONDON_26_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L19VIARONDON_26_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L19VIARONDON_26_19.addFeatures(features_L19VIARONDON_26_19);
var lyr_L19VIARONDON_26_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L19VIARONDON_26_19, 
                style: style_L19VIARONDON_26_19,
                popuplayertitle: "L19VIARONDON_26",
                interactive: true,
                title: '<img src="styles/legend/L19VIARONDON_26_19.png" /> L19VIARONDON_26'
            });
var format_L19VIARONDONFXD_25_20 = new ol.format.GeoJSON();
var features_L19VIARONDONFXD_25_20 = format_L19VIARONDONFXD_25_20.readFeatures(json_L19VIARONDONFXD_25_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L19VIARONDONFXD_25_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L19VIARONDONFXD_25_20.addFeatures(features_L19VIARONDONFXD_25_20);
var lyr_L19VIARONDONFXD_25_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L19VIARONDONFXD_25_20, 
                style: style_L19VIARONDONFXD_25_20,
                popuplayertitle: "L19VIARONDONFXD_25",
                interactive: true,
                title: '<img src="styles/legend/L19VIARONDONFXD_25_20.png" /> L19VIARONDONFXD_25'
            });
var format_L20SPVIAS_24_21 = new ol.format.GeoJSON();
var features_L20SPVIAS_24_21 = format_L20SPVIAS_24_21.readFeatures(json_L20SPVIAS_24_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L20SPVIAS_24_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L20SPVIAS_24_21.addFeatures(features_L20SPVIAS_24_21);
var lyr_L20SPVIAS_24_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L20SPVIAS_24_21, 
                style: style_L20SPVIAS_24_21,
                popuplayertitle: "L20SPVIAS_24",
                interactive: true,
                title: '<img src="styles/legend/L20SPVIAS_24_21.png" /> L20SPVIAS_24'
            });
var format_L20SPVIASFXD_23_22 = new ol.format.GeoJSON();
var features_L20SPVIASFXD_23_22 = format_L20SPVIASFXD_23_22.readFeatures(json_L20SPVIASFXD_23_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L20SPVIASFXD_23_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L20SPVIASFXD_23_22.addFeatures(features_L20SPVIASFXD_23_22);
var lyr_L20SPVIASFXD_23_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L20SPVIASFXD_23_22, 
                style: style_L20SPVIASFXD_23_22,
                popuplayertitle: "L20SPVIASFXD_23",
                interactive: true,
                title: '<img src="styles/legend/L20SPVIASFXD_23_22.png" /> L20SPVIASFXD_23'
            });
var format_L21TIET_22_23 = new ol.format.GeoJSON();
var features_L21TIET_22_23 = format_L21TIET_22_23.readFeatures(json_L21TIET_22_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L21TIET_22_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L21TIET_22_23.addFeatures(features_L21TIET_22_23);
var lyr_L21TIET_22_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L21TIET_22_23, 
                style: style_L21TIET_22_23,
                popuplayertitle: "L21TIET_22",
                interactive: true,
                title: '<img src="styles/legend/L21TIET_22_23.png" /> L21TIET_22'
            });
var format_L21TIETFXD_21_24 = new ol.format.GeoJSON();
var features_L21TIETFXD_21_24 = format_L21TIETFXD_21_24.readFeatures(json_L21TIETFXD_21_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L21TIETFXD_21_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L21TIETFXD_21_24.addFeatures(features_L21TIETFXD_21_24);
var lyr_L21TIETFXD_21_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L21TIETFXD_21_24, 
                style: style_L21TIETFXD_21_24,
                popuplayertitle: "L21TIETFXD_21",
                interactive: true,
                title: '<img src="styles/legend/L21TIETFXD_21_24.png" /> L21TIETFXD_21'
            });
var format_L22ECOVIAS_20_25 = new ol.format.GeoJSON();
var features_L22ECOVIAS_20_25 = format_L22ECOVIAS_20_25.readFeatures(json_L22ECOVIAS_20_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L22ECOVIAS_20_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L22ECOVIAS_20_25.addFeatures(features_L22ECOVIAS_20_25);
var lyr_L22ECOVIAS_20_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L22ECOVIAS_20_25, 
                style: style_L22ECOVIAS_20_25,
                popuplayertitle: "L22ECOVIAS_20",
                interactive: true,
                title: '<img src="styles/legend/L22ECOVIAS_20_25.png" /> L22ECOVIAS_20'
            });
var format_L22ECOVIASFXD_19_26 = new ol.format.GeoJSON();
var features_L22ECOVIASFXD_19_26 = format_L22ECOVIASFXD_19_26.readFeatures(json_L22ECOVIASFXD_19_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L22ECOVIASFXD_19_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L22ECOVIASFXD_19_26.addFeatures(features_L22ECOVIASFXD_19_26);
var lyr_L22ECOVIASFXD_19_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L22ECOVIASFXD_19_26, 
                style: style_L22ECOVIASFXD_19_26,
                popuplayertitle: "L22ECOVIASFXD_19",
                interactive: true,
                title: '<img src="styles/legend/L22ECOVIASFXD_19_26.png" /> L22ECOVIASFXD_19'
            });
var format_L23ECOPISTAS_18_27 = new ol.format.GeoJSON();
var features_L23ECOPISTAS_18_27 = format_L23ECOPISTAS_18_27.readFeatures(json_L23ECOPISTAS_18_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L23ECOPISTAS_18_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L23ECOPISTAS_18_27.addFeatures(features_L23ECOPISTAS_18_27);
var lyr_L23ECOPISTAS_18_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L23ECOPISTAS_18_27, 
                style: style_L23ECOPISTAS_18_27,
                popuplayertitle: "L23ECOPISTAS_18",
                interactive: true,
                title: '<img src="styles/legend/L23ECOPISTAS_18_27.png" /> L23ECOPISTAS_18'
            });
var format_L23ECOPISTASFXD_17_28 = new ol.format.GeoJSON();
var features_L23ECOPISTASFXD_17_28 = format_L23ECOPISTASFXD_17_28.readFeatures(json_L23ECOPISTASFXD_17_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L23ECOPISTASFXD_17_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L23ECOPISTASFXD_17_28.addFeatures(features_L23ECOPISTASFXD_17_28);
var lyr_L23ECOPISTASFXD_17_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L23ECOPISTASFXD_17_28, 
                style: style_L23ECOPISTASFXD_17_28,
                popuplayertitle: "L23ECOPISTASFXD_17",
                interactive: true,
                title: '<img src="styles/legend/L23ECOPISTASFXD_17_28.png" /> L23ECOPISTASFXD_17'
            });
var format_L24RODOANEL_16_29 = new ol.format.GeoJSON();
var features_L24RODOANEL_16_29 = format_L24RODOANEL_16_29.readFeatures(json_L24RODOANEL_16_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L24RODOANEL_16_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L24RODOANEL_16_29.addFeatures(features_L24RODOANEL_16_29);
var lyr_L24RODOANEL_16_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L24RODOANEL_16_29, 
                style: style_L24RODOANEL_16_29,
                popuplayertitle: "L24RODOANEL_16",
                interactive: true,
                title: '<img src="styles/legend/L24RODOANEL_16_29.png" /> L24RODOANEL_16'
            });
var format_L24RODOANELFXD_15_30 = new ol.format.GeoJSON();
var features_L24RODOANELFXD_15_30 = format_L24RODOANELFXD_15_30.readFeatures(json_L24RODOANELFXD_15_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L24RODOANELFXD_15_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L24RODOANELFXD_15_30.addFeatures(features_L24RODOANELFXD_15_30);
var lyr_L24RODOANELFXD_15_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L24RODOANELFXD_15_30, 
                style: style_L24RODOANELFXD_15_30,
                popuplayertitle: "L24RODOANELFXD_15",
                interactive: true,
                title: '<img src="styles/legend/L24RODOANELFXD_15_30.png" /> L24RODOANELFXD_15'
            });
var format_L25SPMAR_14_31 = new ol.format.GeoJSON();
var features_L25SPMAR_14_31 = format_L25SPMAR_14_31.readFeatures(json_L25SPMAR_14_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L25SPMAR_14_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L25SPMAR_14_31.addFeatures(features_L25SPMAR_14_31);
var lyr_L25SPMAR_14_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L25SPMAR_14_31, 
                style: style_L25SPMAR_14_31,
                popuplayertitle: "L25SPMAR_14",
                interactive: true,
                title: '<img src="styles/legend/L25SPMAR_14_31.png" /> L25SPMAR_14'
            });
var format_L25SPMARFXD_13_32 = new ol.format.GeoJSON();
var features_L25SPMARFXD_13_32 = format_L25SPMARFXD_13_32.readFeatures(json_L25SPMARFXD_13_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L25SPMARFXD_13_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L25SPMARFXD_13_32.addFeatures(features_L25SPMARFXD_13_32);
var lyr_L25SPMARFXD_13_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L25SPMARFXD_13_32, 
                style: style_L25SPMARFXD_13_32,
                popuplayertitle: "L25SPMARFXD_13",
                interactive: true,
                title: '<img src="styles/legend/L25SPMARFXD_13_32.png" /> L25SPMARFXD_13'
            });
var format_L27TAMOIOS_12_33 = new ol.format.GeoJSON();
var features_L27TAMOIOS_12_33 = format_L27TAMOIOS_12_33.readFeatures(json_L27TAMOIOS_12_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L27TAMOIOS_12_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L27TAMOIOS_12_33.addFeatures(features_L27TAMOIOS_12_33);
var lyr_L27TAMOIOS_12_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L27TAMOIOS_12_33, 
                style: style_L27TAMOIOS_12_33,
                popuplayertitle: "L27TAMOIOS_12",
                interactive: true,
                title: '<img src="styles/legend/L27TAMOIOS_12_33.png" /> L27TAMOIOS_12'
            });
var format_L27TAMOIOSFXD_11_34 = new ol.format.GeoJSON();
var features_L27TAMOIOSFXD_11_34 = format_L27TAMOIOSFXD_11_34.readFeatures(json_L27TAMOIOSFXD_11_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L27TAMOIOSFXD_11_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L27TAMOIOSFXD_11_34.addFeatures(features_L27TAMOIOSFXD_11_34);
var lyr_L27TAMOIOSFXD_11_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L27TAMOIOSFXD_11_34, 
                style: style_L27TAMOIOSFXD_11_34,
                popuplayertitle: "L27TAMOIOSFXD_11",
                interactive: true,
                title: '<img src="styles/legend/L27TAMOIOSFXD_11_34.png" /> L27TAMOIOSFXD_11'
            });
var format_L28ENTREVIAS_10_35 = new ol.format.GeoJSON();
var features_L28ENTREVIAS_10_35 = format_L28ENTREVIAS_10_35.readFeatures(json_L28ENTREVIAS_10_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L28ENTREVIAS_10_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L28ENTREVIAS_10_35.addFeatures(features_L28ENTREVIAS_10_35);
var lyr_L28ENTREVIAS_10_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L28ENTREVIAS_10_35, 
                style: style_L28ENTREVIAS_10_35,
                popuplayertitle: "L28ENTREVIAS_10",
                interactive: true,
                title: '<img src="styles/legend/L28ENTREVIAS_10_35.png" /> L28ENTREVIAS_10'
            });
var format_L28ENTREVIASFXD_9_36 = new ol.format.GeoJSON();
var features_L28ENTREVIASFXD_9_36 = format_L28ENTREVIASFXD_9_36.readFeatures(json_L28ENTREVIASFXD_9_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L28ENTREVIASFXD_9_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L28ENTREVIASFXD_9_36.addFeatures(features_L28ENTREVIASFXD_9_36);
var lyr_L28ENTREVIASFXD_9_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L28ENTREVIASFXD_9_36, 
                style: style_L28ENTREVIASFXD_9_36,
                popuplayertitle: "L28ENTREVIASFXD_9",
                interactive: true,
                title: '<img src="styles/legend/L28ENTREVIASFXD_9_36.png" /> L28ENTREVIASFXD_9'
            });
var format_L29VIAPAULISTA_8_37 = new ol.format.GeoJSON();
var features_L29VIAPAULISTA_8_37 = format_L29VIAPAULISTA_8_37.readFeatures(json_L29VIAPAULISTA_8_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L29VIAPAULISTA_8_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L29VIAPAULISTA_8_37.addFeatures(features_L29VIAPAULISTA_8_37);
var lyr_L29VIAPAULISTA_8_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L29VIAPAULISTA_8_37, 
                style: style_L29VIAPAULISTA_8_37,
                popuplayertitle: "L29VIAPAULISTA_8",
                interactive: true,
                title: '<img src="styles/legend/L29VIAPAULISTA_8_37.png" /> L29VIAPAULISTA_8'
            });
var format_L29VIAPAULISTAFXD_7_38 = new ol.format.GeoJSON();
var features_L29VIAPAULISTAFXD_7_38 = format_L29VIAPAULISTAFXD_7_38.readFeatures(json_L29VIAPAULISTAFXD_7_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L29VIAPAULISTAFXD_7_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L29VIAPAULISTAFXD_7_38.addFeatures(features_L29VIAPAULISTAFXD_7_38);
var lyr_L29VIAPAULISTAFXD_7_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L29VIAPAULISTAFXD_7_38, 
                style: style_L29VIAPAULISTAFXD_7_38,
                popuplayertitle: "L29VIAPAULISTAFXD_7",
                interactive: true,
                title: '<img src="styles/legend/L29VIAPAULISTAFXD_7_38.png" /> L29VIAPAULISTAFXD_7'
            });
var format_L30EIXOSP_6_39 = new ol.format.GeoJSON();
var features_L30EIXOSP_6_39 = format_L30EIXOSP_6_39.readFeatures(json_L30EIXOSP_6_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L30EIXOSP_6_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L30EIXOSP_6_39.addFeatures(features_L30EIXOSP_6_39);
var lyr_L30EIXOSP_6_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L30EIXOSP_6_39, 
                style: style_L30EIXOSP_6_39,
                popuplayertitle: "L30EIXOSP_6",
                interactive: true,
                title: '<img src="styles/legend/L30EIXOSP_6_39.png" /> L30EIXOSP_6'
            });
var format_L30EIXOSPFXD_5_40 = new ol.format.GeoJSON();
var features_L30EIXOSPFXD_5_40 = format_L30EIXOSPFXD_5_40.readFeatures(json_L30EIXOSPFXD_5_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L30EIXOSPFXD_5_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L30EIXOSPFXD_5_40.addFeatures(features_L30EIXOSPFXD_5_40);
var lyr_L30EIXOSPFXD_5_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L30EIXOSPFXD_5_40, 
                style: style_L30EIXOSPFXD_5_40,
                popuplayertitle: "L30EIXOSPFXD_5",
                interactive: true,
                title: '<img src="styles/legend/L30EIXOSPFXD_5_40.png" /> L30EIXOSPFXD_5'
            });
var format_L31ECONOROESTE_4_41 = new ol.format.GeoJSON();
var features_L31ECONOROESTE_4_41 = format_L31ECONOROESTE_4_41.readFeatures(json_L31ECONOROESTE_4_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L31ECONOROESTE_4_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L31ECONOROESTE_4_41.addFeatures(features_L31ECONOROESTE_4_41);
var lyr_L31ECONOROESTE_4_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L31ECONOROESTE_4_41, 
                style: style_L31ECONOROESTE_4_41,
                popuplayertitle: "L31ECONOROESTE_4",
                interactive: true,
                title: '<img src="styles/legend/L31ECONOROESTE_4_41.png" /> L31ECONOROESTE_4'
            });
var format_L31ECONOROESTEFXD_3_42 = new ol.format.GeoJSON();
var features_L31ECONOROESTEFXD_3_42 = format_L31ECONOROESTEFXD_3_42.readFeatures(json_L31ECONOROESTEFXD_3_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L31ECONOROESTEFXD_3_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L31ECONOROESTEFXD_3_42.addFeatures(features_L31ECONOROESTEFXD_3_42);
var lyr_L31ECONOROESTEFXD_3_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L31ECONOROESTEFXD_3_42, 
                style: style_L31ECONOROESTEFXD_3_42,
                popuplayertitle: "L31ECONOROESTEFXD_3",
                interactive: true,
                title: '<img src="styles/legend/L31ECONOROESTEFXD_3_42.png" /> L31ECONOROESTEFXD_3'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_SP_UFSP_1_1.setVisible(false);lyr_SP_MUNICIPIOSSPMUNICPIOS_2_2.setVisible(true);lyr_L01AUTOBAN_42_3.setVisible(true);lyr_L01AUTOBANFXD_41_4.setVisible(true);lyr_L03TEBE_40_5.setVisible(true);lyr_L03TEBEFXD_39_6.setVisible(true);lyr_L06INTERVIAS_38_7.setVisible(true);lyr_L06INTERVIASFXD_37_8.setVisible(true);lyr_L07ROTA_36_9.setVisible(true);lyr_L07ROTAFXD_35_10.setVisible(true);lyr_L11RENOVIAS_34_11.setVisible(true);lyr_L11RENOVIASFXD_33_12.setVisible(true);lyr_L12VIAOESTE_32_13.setVisible(true);lyr_L12VIAOESTEFXD_31_14.setVisible(true);lyr_L13COLINAS_30_15.setVisible(true);lyr_L13COLINASFXD_29_16.setVisible(true);lyr_L16CART_28_17.setVisible(true);lyr_L16CARTFXD_27_18.setVisible(true);lyr_L19VIARONDON_26_19.setVisible(true);lyr_L19VIARONDONFXD_25_20.setVisible(true);lyr_L20SPVIAS_24_21.setVisible(true);lyr_L20SPVIASFXD_23_22.setVisible(true);lyr_L21TIET_22_23.setVisible(true);lyr_L21TIETFXD_21_24.setVisible(true);lyr_L22ECOVIAS_20_25.setVisible(true);lyr_L22ECOVIASFXD_19_26.setVisible(true);lyr_L23ECOPISTAS_18_27.setVisible(true);lyr_L23ECOPISTASFXD_17_28.setVisible(true);lyr_L24RODOANEL_16_29.setVisible(true);lyr_L24RODOANELFXD_15_30.setVisible(true);lyr_L25SPMAR_14_31.setVisible(true);lyr_L25SPMARFXD_13_32.setVisible(true);lyr_L27TAMOIOS_12_33.setVisible(true);lyr_L27TAMOIOSFXD_11_34.setVisible(true);lyr_L28ENTREVIAS_10_35.setVisible(true);lyr_L28ENTREVIASFXD_9_36.setVisible(true);lyr_L29VIAPAULISTA_8_37.setVisible(true);lyr_L29VIAPAULISTAFXD_7_38.setVisible(true);lyr_L30EIXOSP_6_39.setVisible(true);lyr_L30EIXOSPFXD_5_40.setVisible(true);lyr_L31ECONOROESTE_4_41.setVisible(true);lyr_L31ECONOROESTEFXD_3_42.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_SP_UFSP_1_1,lyr_SP_MUNICIPIOSSPMUNICPIOS_2_2,lyr_L01AUTOBAN_42_3,lyr_L01AUTOBANFXD_41_4,lyr_L03TEBE_40_5,lyr_L03TEBEFXD_39_6,lyr_L06INTERVIAS_38_7,lyr_L06INTERVIASFXD_37_8,lyr_L07ROTA_36_9,lyr_L07ROTAFXD_35_10,lyr_L11RENOVIAS_34_11,lyr_L11RENOVIASFXD_33_12,lyr_L12VIAOESTE_32_13,lyr_L12VIAOESTEFXD_31_14,lyr_L13COLINAS_30_15,lyr_L13COLINASFXD_29_16,lyr_L16CART_28_17,lyr_L16CARTFXD_27_18,lyr_L19VIARONDON_26_19,lyr_L19VIARONDONFXD_25_20,lyr_L20SPVIAS_24_21,lyr_L20SPVIASFXD_23_22,lyr_L21TIET_22_23,lyr_L21TIETFXD_21_24,lyr_L22ECOVIAS_20_25,lyr_L22ECOVIASFXD_19_26,lyr_L23ECOPISTAS_18_27,lyr_L23ECOPISTASFXD_17_28,lyr_L24RODOANEL_16_29,lyr_L24RODOANELFXD_15_30,lyr_L25SPMAR_14_31,lyr_L25SPMARFXD_13_32,lyr_L27TAMOIOS_12_33,lyr_L27TAMOIOSFXD_11_34,lyr_L28ENTREVIAS_10_35,lyr_L28ENTREVIASFXD_9_36,lyr_L29VIAPAULISTA_8_37,lyr_L29VIAPAULISTAFXD_7_38,lyr_L30EIXOSP_6_39,lyr_L30EIXOSPFXD_5_40,lyr_L31ECONOROESTE_4_41,lyr_L31ECONOROESTEFXD_3_42];
lyr_SP_UFSP_1_1.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_SP_MUNICIPIOSSPMUNICPIOS_2_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'description': 'description', });
lyr_L01AUTOBAN_42_3.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L01AUTOBANFXD_41_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L03TEBE_40_5.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L03TEBEFXD_39_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L06INTERVIAS_38_7.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L06INTERVIASFXD_37_8.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L07ROTA_36_9.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L07ROTAFXD_35_10.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L11RENOVIAS_34_11.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L11RENOVIASFXD_33_12.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L12VIAOESTE_32_13.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L12VIAOESTEFXD_31_14.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L13COLINAS_30_15.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L13COLINASFXD_29_16.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L16CART_28_17.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L16CARTFXD_27_18.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L19VIARONDON_26_19.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L19VIARONDONFXD_25_20.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L20SPVIAS_24_21.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L20SPVIASFXD_23_22.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L21TIET_22_23.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L21TIETFXD_21_24.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L22ECOVIAS_20_25.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L22ECOVIASFXD_19_26.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L23ECOPISTAS_18_27.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L23ECOPISTASFXD_17_28.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L24RODOANEL_16_29.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L24RODOANELFXD_15_30.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L25SPMAR_14_31.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L25SPMARFXD_13_32.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L27TAMOIOS_12_33.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L27TAMOIOSFXD_11_34.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L28ENTREVIAS_10_35.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L28ENTREVIASFXD_9_36.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L29VIAPAULISTA_8_37.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L29VIAPAULISTAFXD_7_38.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L30EIXOSP_6_39.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L30EIXOSPFXD_5_40.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_L31ECONOROESTE_4_41.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'RODOVIA': 'RODOVIA', 'KM': 'KM', 'LOTE': 'LOTE', });
lyr_L31ECONOROESTEFXD_3_42.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_SP_UFSP_1_1.set('fieldImages', {'fid': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_SP_MUNICIPIOSSPMUNICPIOS_2_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', });
lyr_L01AUTOBAN_42_3.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L01AUTOBANFXD_41_4.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L03TEBE_40_5.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L03TEBEFXD_39_6.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L06INTERVIAS_38_7.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L06INTERVIASFXD_37_8.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L07ROTA_36_9.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L07ROTAFXD_35_10.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L11RENOVIAS_34_11.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L11RENOVIASFXD_33_12.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L12VIAOESTE_32_13.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L12VIAOESTEFXD_31_14.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L13COLINAS_30_15.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L13COLINASFXD_29_16.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L16CART_28_17.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L16CARTFXD_27_18.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L19VIARONDON_26_19.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L19VIARONDONFXD_25_20.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L20SPVIAS_24_21.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L20SPVIASFXD_23_22.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L21TIET_22_23.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L21TIETFXD_21_24.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L22ECOVIAS_20_25.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L22ECOVIASFXD_19_26.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L23ECOPISTAS_18_27.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L23ECOPISTASFXD_17_28.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L24RODOANEL_16_29.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L24RODOANELFXD_15_30.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L25SPMAR_14_31.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L25SPMARFXD_13_32.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L27TAMOIOS_12_33.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L27TAMOIOSFXD_11_34.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L28ENTREVIAS_10_35.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L28ENTREVIASFXD_9_36.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L29VIAPAULISTA_8_37.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L29VIAPAULISTAFXD_7_38.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L30EIXOSP_6_39.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L30EIXOSPFXD_5_40.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_L31ECONOROESTE_4_41.set('fieldImages', {'LAT': '', 'LON': '', 'RODOVIA': '', 'KM': '', 'LOTE': '', });
lyr_L31ECONOROESTEFXD_3_42.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_SP_UFSP_1_1.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_SP_MUNICIPIOSSPMUNICPIOS_2_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', });
lyr_L01AUTOBAN_42_3.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L01AUTOBANFXD_41_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L03TEBE_40_5.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L03TEBEFXD_39_6.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L06INTERVIAS_38_7.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L06INTERVIASFXD_37_8.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L07ROTA_36_9.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L07ROTAFXD_35_10.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L11RENOVIAS_34_11.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L11RENOVIASFXD_33_12.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L12VIAOESTE_32_13.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L12VIAOESTEFXD_31_14.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L13COLINAS_30_15.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L13COLINASFXD_29_16.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L16CART_28_17.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L16CARTFXD_27_18.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L19VIARONDON_26_19.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L19VIARONDONFXD_25_20.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L20SPVIAS_24_21.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L20SPVIASFXD_23_22.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L21TIET_22_23.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L21TIETFXD_21_24.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L22ECOVIAS_20_25.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L22ECOVIASFXD_19_26.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L23ECOPISTAS_18_27.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L23ECOPISTASFXD_17_28.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L24RODOANEL_16_29.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L24RODOANELFXD_15_30.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L25SPMAR_14_31.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L25SPMARFXD_13_32.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L27TAMOIOS_12_33.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L27TAMOIOSFXD_11_34.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L28ENTREVIAS_10_35.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L28ENTREVIASFXD_9_36.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L29VIAPAULISTA_8_37.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L29VIAPAULISTAFXD_7_38.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L30EIXOSP_6_39.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L30EIXOSPFXD_5_40.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L31ECONOROESTE_4_41.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'RODOVIA': 'no label', 'KM': 'no label', 'LOTE': 'no label', });
lyr_L31ECONOROESTEFXD_3_42.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_L31ECONOROESTEFXD_3_42.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});