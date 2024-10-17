var vg_1 = "railwayAccessByDistrictPopulationDensity.json";
vegaEmbed("#chloropleth_map", vg_1, { "actions": false }).then(function(result) {

console.log(result.view)
}).catch(console.error);

var vg_2 = "railRidership.json";
vegaEmbed("#line_chart", vg_2, { "actions": false }).then(function(result) {

console.log(result.view)
}).catch(console.error);

var vg_3 = "loadFactor.json";
vegaEmbed("#donut_chart", vg_3, { "actions": false }).then(function(result) {

console.log(result.view)
}).catch(console.error);