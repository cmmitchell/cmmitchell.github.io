var bak =
{
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "OBJECTID": 1, "Id": 0, "Shape_Length": 201113917.20469776, "Shape_Area": 2423814811083795.5, "SQ_MI_Cylind": 196907160.79550892, "Sq_Mi_Mercator": 935840130.58801091 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -179.99999550841457, -88.999999921611192 ], [ -179.99999550841457, 88.999999921611177 ], [ 179.99999550841471, 88.999999921611177 ], [ 179.99999550841471, -88.999999921611192 ], [ -179.99999550841457, -88.999999921611192 ] ] ] ] } }
]
}

function back(feature) {
   return {
   fillColor: '#99cad4',
   fillOpacity: .8,
   weight: 1,
   opacity: 1,
   color: '#0099FF',
   weight: 1,
   opacity: 1,
   
   };
}

function backblack(feature) {
   return {
   fillColor: '#3e3e3e',
   fillOpacity: .8,
   weight: 10,
   opacity: 1,
   color: '#000000',
   weight: 1,
   opacity: 1,
   
   };
}
