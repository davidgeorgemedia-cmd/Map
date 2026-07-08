var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kashwakamak_Hazards_v1Sheet1_1 = new ol.format.GeoJSON();
var features_Kashwakamak_Hazards_v1Sheet1_1 = format_Kashwakamak_Hazards_v1Sheet1_1.readFeatures(json_Kashwakamak_Hazards_v1Sheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kashwakamak_Hazards_v1Sheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kashwakamak_Hazards_v1Sheet1_1.addFeatures(features_Kashwakamak_Hazards_v1Sheet1_1);
var lyr_Kashwakamak_Hazards_v1Sheet1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kashwakamak_Hazards_v1Sheet1_1, 
                style: style_Kashwakamak_Hazards_v1Sheet1_1,
                popuplayertitle: 'Kashwakamak_Hazards_v1 - Sheet1',
                interactive: true,
    title: 'Kashwakamak_Hazards_v1 - Sheet1<br />\
    <img src="styles/legend/Kashwakamak_Hazards_v1Sheet1_1_0.png" /> Hazard<br />\
    <img src="styles/legend/Kashwakamak_Hazards_v1Sheet1_1_1.png" /> Low Wake<br />\
    <img src="styles/legend/Kashwakamak_Hazards_v1Sheet1_1_2.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Kashwakamak_Hazards_v1Sheet1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kashwakamak_Hazards_v1Sheet1_1];
lyr_Kashwakamak_Hazards_v1Sheet1_1.set('fieldAliases', {'ID': 'ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Notes': 'Notes', });
lyr_Kashwakamak_Hazards_v1Sheet1_1.set('fieldImages', {'ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Notes': 'TextEdit', });
lyr_Kashwakamak_Hazards_v1Sheet1_1.set('fieldLabels', {'ID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Notes': 'no label', });
lyr_Kashwakamak_Hazards_v1Sheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});