// adding MAPBOX API accessToken
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0cmFqMTUiLCJhIjoiY2tvYTgyZ2Y3MzQxNzJxcGcxeHM4aXZ6dSJ9.PCUSxSXQ_TRWPkbrRT1pGg';

// creating a map
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/cheyne-campbell/ck966jun93urx1iqlhlheiknl', // selecting a style of the map
  center: [-3.3816,52.4406], // starting position [lng, lat]
  minzoom:1,
  zoom: 7.3 // starting zoom
});

//adding search box
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,

    // Limit seach results to the UK.
    countries: 'gb',
    // Use a bounding box to further limit results
    // to the geographic bounds representing the
    // region of Wales.
    bbox: [-5.3540, 51.3777, -2.6565, 53.4377],
    mapboxgl: mapboxgl
  })
);

// Disable zoom on double click
map.doubleClickZoom.disable();

// Directory to geojson and csv
var url_geo='./data/interactivemap.geojson'
var url_csv='./data/interactivemap.csv'

// adding  6 Choropleth layers using MapboxChoropleth plugin
let c = new MapboxChoropleth({
  tableUrl: url_csv, //link to csv
  tableNumericField: 'normalized_price_dif', // column with result
  tableIdField: 'lsoa_code',  // joining csv and geojson lsoa_code column
  geometryUrl: url_geo, //link to geojson
  geometryIdField: 'lsoa_code', // joining csv and geojson lsoa_code column
  layerId: 'choro', // layer name
  binCount: 6, // number of colour bins
  sourceId: 'lsoas',  // source name
  colorScheme: ['white', 'green'], // colour panel of the choropleth map
  immediate: true,
  layout: {
      'visibility': 'none'}, // starting state - not visible
  paint: { 'fill-opacity':[
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          3, // opacity when hover is true
          0.5 // normal opacity
          ]
          },
  legendElement: '#legend_1' // name of the legend element
}).addTo(map); // add to already created map

  let d = new MapboxChoropleth({
    tableUrl: url_csv,
    tableNumericField: 'normalized_co2_dif',
    tableIdField: 'lsoa_code',
    geometryUrl: url_geo,
    geometryIdField: 'lsoa_code',
    layerId: 'choro_co2',
    sourceId: 'lsoas_co2',
    colorScheme: [ 'white','red'],
    binCount: 6,
    immediate: true,
    layout: {
        'visibility': 'none'},
    paint: { 'fill-opacity':[
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            3,
            0.5
            ]
            },
    legendElement: '#legend_2'
    }).addTo(map);

    let e = new MapboxChoropleth({
      tableUrl: url_csv,
      tableNumericField: 'normalized_price_dif_C',
      tableIdField: 'lsoa_code',
      geometryUrl: url_geo, //'mapbox://szymon95.ac1bd6s0',
      geometryIdField: 'lsoa_code',
      layerId: 'choro_c',
      sourceId: 'lsoas_c',
      colorScheme: [ 'white','green'],
      binCount: 6,
      immediate: true,
      layout: {
          'visibility': 'none'},
      paint: { 'fill-opacity':[
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              3,
              0.5
              ]
              },
      legendElement: '#legend_3'
      }).addTo(map);

      let f = new MapboxChoropleth({
        tableUrl: url_csv,
        tableNumericField: 'normalized_co2_dif_C',
        tableIdField: 'lsoa_code',
        geometryUrl: url_geo, //'mapbox://szymon95.ac1bd6s0',
        geometryIdField: 'lsoa_code',
        layerId: 'choro_co2_c',
        sourceId: 'lsoas_co2_c',
        colorScheme: [ 'white','red'],
        binCount: 6,
        immediate: true,
        layout: {
            'visibility': 'none'},
        paint: { 'fill-opacity':[
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                3,
                0.5
                ]
                },
        legendElement: '#legend_4'
        }).addTo(map);

        let g = new MapboxChoropleth({
          tableUrl: url_csv,
          tableNumericField: 'normalized_price_dif_D',
          tableIdField: 'lsoa_code',
          geometryUrl: url_geo, //'mapbox://szymon95.ac1bd6s0',
          geometryIdField: 'lsoa_code',
          layerId: 'choro_d',
          sourceId: 'lsoas_d',
          colorScheme: [ 'white','green'],
          binCount: 6,
          immediate: true,
          layout: {
              'visibility': 'none'},
          paint: { 'fill-opacity':[
                  'case',
                  ['boolean', ['feature-state', 'hover'], false],
                  3,
                  0.5
                  ]
                  },
          legendElement: '#legend_5'
          }).addTo(map);

          let h = new MapboxChoropleth({
            tableUrl: url_csv,
            tableNumericField: 'normalized_co2_dif_D',
            tableIdField: 'lsoa_code',
            geometryUrl: url_geo, //'mapbox://szymon95.ac1bd6s0',
            geometryIdField: 'lsoa_code',
            layerId: 'choro_co2_d',
            sourceId: 'lsoas_co2_d',
            colorScheme: [ 'white','red'],
            binCount: 6,
            immediate: true,
            layout: {
                'visibility': 'none'},
            paint: { 'fill-opacity':[
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    3,
                    0.5
                    ]
                    },
            legendElement: '#legend_6'
            }).addTo(map);


///////// Adding toggles to the map to turn on and off layers  //////

          // Store which LSOA is being hovered over or clicked on
          var lsoaID = null;
          var lsoaIDClick = null;

         //Toggles
         // After the last frame rendered before the map enters an "idle" state.
         map.on('idle', function () {

              //calling top_10_list function
              top_10_list();

              // If these six layers have been added to the style,
              // add the toggle buttons.
              if (map.getLayer('choro') && map.getLayer('choro_co2')&&map.getLayer('choro_c')&&map.getLayer('choro_co2_c')&&map.getLayer('choro_d')&&map.getLayer('choro_co2_d')) {
                // Enumerate/name ids of the layers.
                // layer names
                var toggleableLayerIds = ['choro', 'choro_co2','choro_c','choro_co2_c','choro_d','choro_co2_d'];
                // signes on the toggles
                var toggleableLayerNames = ['Price', 'CO2','Price', 'CO2','Price', 'CO2'];
                // Set up the corresponding toggle button for each layer.
                for (var i = 0; i < toggleableLayerIds.length; i++) {
                  var id = toggleableLayerIds[i];
                  var names=toggleableLayerNames[i];
                  if (!document.getElementById(id)) {
                    // Create a link.
                    var link = document.createElement('a');
                    link.id = id;
                    link.href = '#';
                    link.textContent = names;
                    link.className = 'deactivated';
                    // Show or hide layer when the toggle is clicked.
                    link.onclick = function (e) {
                      var clickedLayer = this.id;
                      e.preventDefault();
                      e.stopPropagation();

                      for (var j = 0; j < toggleableLayerIds.length; j++) {
                        // getting the vissibility property from the cliked layer/toggle
                         var visibility = map.getLayoutProperty(
                            clickedLayer,
                            'visibility'
                          );
                          // changing the layout property from none to visible
                          // to make the layer visible if the layer was hidden
                         if (clickedLayer === toggleableLayerIds[j]& visibility === 'none') {
                           layers.children[j].className = 'active';
                           map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'visible');
                         }
                         // second click on the toogle
                         // changing the layout property from visible to none
                         // to hide the layer
                         else {
                           layers.children[j].className = 'deactivated';
                           map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'none');
                         }
                       }

                       // for loop declaring variables with name of the currently
                       //active layer its sourceId and columns from csv file
                          var SourceIds=['lsoas','lsoas_co2','lsoas_c','lsoas_co2_c','lsoas_d','lsoas_co2_d'];
                          var Variable=['normalized_price_dif','normalized_co2_dif','normalized_price_dif_C','normalized_co2_dif_C','normalized_price_dif_D','normalized_co2_dif_D'];
                          for (var k = 0; k < toggleableLayerIds.length; k++) {
                           var active= map.getLayoutProperty(toggleableLayerIds[k],'visibility');
                             if (active ==='visible') {
                             var activeLayer=toggleableLayerIds[k];
                             var activeSource=SourceIds[k];
                             var v=Variable[k];

                         }

                       }

                       // turning on elemnts related to the current active/visible layer
                       // and turning off all the other

                       // legent elements
                       var x = document.getElementById("legend_1");
                       var y = document.getElementById("legend_2");
                       var z = document.getElementById("legend_3");
                       var t = document.getElementById("legend_4");
                       var p = document.getElementById("legend_5");
                       var r = document.getElementById("legend_6");

                       // box elements with LSOAs with top 10 values
                       var a = document.getElementById("top-10").children[2];
                       var m = document.getElementById("top-10").children[3];
                       var n = document.getElementById("top-10").children[4];
                       var v = document.getElementById("top-10").children[5];
                       var u = document.getElementById("top-10").children[6];
                       var h = document.getElementById("top-10").children[7];

                       // box elements with total values
                       var bar=document.getElementById('bar');
                       var bar_co2=document.getElementById('bar-co2');
                       var scale_B=document.getElementById('billion');
                       var scale_T=document.getElementById('tonnes');


                      console.log(document.getElementById("top-10").children);
                       if (activeLayer==='choro'){

                         x.style.display = "block";
                         y.style.display = "none";
                         z.style.display = "none";
                         t.style.display = "none";
                         p.style.display = "none";
                         r.style.display = "none";

                         a.style.display ="block";
                         m.style.display ="none";
                         n.style.display ="none";
                         v.style.display ="none";
                         u.style.display ="none";
                         h.style.display ="none";

                         bar.style.height='305px';
                         bar_co2.style.height='0px';
                         scale_B.style.visibility='visible';
                         scale_T.style.visibility='hidden';


                       }
                      else if (activeLayer==='choro_co2') {
                        z.style.display = "none";
                        x.style.display = "none";
                        y.style.display = "block";
                        t.style.display = "none";
                        p.style.display = "none";
                        r.style.display = "none";

                        a.style.display ="none";
                        m.style.display ="none";
                        n.style.display ="block";
                        v.style.display ="none";
                        u.style.display ="none";
                        h.style.display ="none";

                        bar.style.height='0px';
                        bar_co2.style.height='80px';
                        scale_B.style.visibility='hidden';
                        scale_T.style.visibility='visible';
                      }
                      else if (activeLayer==='choro_c') {
                        z.style.display ="block";
                        x.style.display = "none";
                        y.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
                        r.style.display = "none";

                        a.style.display ="none";
                        m.style.display ="block";
                        n.style.display ="none";
                        v.style.display ="none";
                        u.style.display ="none";
                        h.style.display ="none";

                        bar.style.height='100px';
                        bar_co2.style.height='0px';
                        scale_B.style.visibility='visible';
                        scale_T.style.visibility='hidden';
                      }
                      else if (activeLayer==='choro_co2_c') {
                        z.style.display ="none";
                        x.style.display = "none";
                        y.style.display = "none";
                        t.style.display = "block";
                        p.style.display = "none";
                        r.style.display = "none";

                        a.style.display ="none";
                        m.style.display ="none";
                        n.style.display ="none";
                        v.style.display ="block";
                        u.style.display ="none";
                        h.style.display ="none";

                        bar.style.height='0px';
                        bar_co2.style.height='230px';
                        scale_B.style.visibility='hidden';
                        scale_T.style.visibility='visible';
                      }
                      else if (activeLayer==='choro_d') {
                        z.style.display ="none";
                        x.style.display = "none";
                        y.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "block";
                        r.style.display = "none";

                        a.style.display ="none";
                        m.style.display ="none";
                        n.style.display ="none";
                        v.style.display ="none";
                        u.style.display ="none";
                        h.style.display ="block";

                        bar.style.height='55px';
                        bar_co2.style.height='0px';
                        scale_B.style.visibility='visible';
                        scale_T.style.visibility='hidden';
                      }
                      else if (activeLayer==='choro_co2_d') {
                        z.style.display ="none";
                        x.style.display = "none";
                        y.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
                        r.style.display = "block";

                        a.style.display ="none";
                        m.style.display ="none";
                        n.style.display ="none";
                        v.style.display ="none";
                        u.style.display ="block";
                        h.style.display ="none";

                        bar.style.height='0px';
                        bar_co2.style.height='255px';
                        scale_B.style.visibility='hidden';
                        scale_T.style.visibility='visible';
                      }
                      else {
                        z.style.display ="none";
                        x.style.display = "none";
                        y.style.display = "none";
                        t.style.display = "none";
                        p.style.display = "none";
                        r.style.display = "none";

                        a.style.display ="none";
                        m.style.display ="none";
                        n.style.display ="none";
                        v.style.display ="none";
                        u.style.display ="none";
                        h.style.display ="none";

                        bar.style.height='0px';
                        bar_co2.style.height='0px';
                        scale_B.style.visibility='hidden';
                        scale_T.style.visibility='hidden';
                      }



                       console.log(activeLayer);
                       console.log(activeSource);

///////// Adding hover function highlighting LSOAs under the mouse ///////////////
///////// Adding click function creating popup with LSOA value ///////////////

                       // Store which LSOA is being hovered over or clicked on
                       var lsoaID = null;
                       var lsoaIDClick = null;
                       // When the mouse hovers over the LSOA, change the opacity
                           map.on('mousemove', activeLayer, function(e) {

                             map.getCanvas().style.cursor = 'pointer';

                             // Check that the feature exits
                             if (e.features.length > 0) {
                               if (lsoaID) {
                                   map.setFeatureState(
                                   { source: activeSource, id: lsoaID },
                                   { hover: false }
                                 );
                               }
                               //assign hovered lsoa
                               lsoaID = e.features[0].id;
                               console.log(lsoaID);
                               // change hover property to true of the lsoa under the pointer
                               map.setFeatureState(
                                 { source: activeSource, id: lsoaID },
                                 { hover: true }
                               );

                               /// click popup
                               map.on('click', activeLayer, function (e1) {

                                 // Check that the feature exits
                                 if (e1.features.length > 0) {
                                  if (lsoaIDClick) {
                                    console.log('Storing selected LSOA ID...');
                                 }

                                 // Store lsoa_code of currently selected LSOA
                                  lsoaIDClick = e1.features[0].properties.lsoa_code;
                                 console.log(lsoaIDClick);

                                 // displaying appropriate information in the popup
                                 if (activeLayer==='choro'){
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties.normalized_price_dif;
                               }else if (activeLayer==='choro_co2') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties.normalized_co2_dif;
                               }
                               else if (activeLayer==='choro_c') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties.normalized_price_dif_C;
                               }
                               else if (activeLayer==='choro_co2_c') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties.normalized_co2_dif_C;
                               }
                               else if (activeLayer==='choro_d') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties.normalized_price_dif_D;
                               }
                               else if (activeLayer==='choro_co2_d') {
                                 var coordinates = e1.features[0].geometry.coordinates.slice();
                                 var description = e1.features[0].properties.normalized_co2_dif_D;
                               }

                               // create a popup under coordinates location and assign description
                                 new mapboxgl.Popup()
                                 .setLngLat(e1.lngLat)
                                  .setHTML('<h4>'+lsoaIDClick+'</h4><p>' +'<\p>Value: '+(Math.round(description * 10000) / 100)+"% </p>")
                                 .addTo(map);
                                 }
                               });

                             } // end of feature length - hover
                           }); // end of on hover

                           // When the mouse leaves the LSOA, return opacity to normal
                             map.on('mouseleave', activeLayer, function() {
                               if (lsoaID) {
                                 map.setFeatureState(
                                   { source: activeSource, id: lsoaID},
                                   { hover: false }
                                 );
                               }
                               lsoaID = null;
                             });


          };


          // positioning the toggles
         var layers = document.getElementById('menu');
         if (link.id==='choro_c'){
           link.style.position='absolute';
           link.style.bottom='-18px';
           layers.appendChild(link);
         }
         else if(link.id==='choro_co2_c'){
           link.style.position='relative';
           link.style.bottom='-95px';

           layers.appendChild(link);
         }
         else if(link.id==='choro_d'){
          link.style.position='absolute';
          link.style.bottom='-155px';

          layers.appendChild(link);
        }
        else if(link.id==='choro_co2_d'){
         link.style.position='relative';
         link.style.bottom='-193px';

         layers.appendChild(link);
       }
         else {
          layers.appendChild(link);
         }
            }
            }
          }
         });

         //Function Highliting top 10 lsoas after click
         var firstclick={
           'choro': true,
         'choro_c': true,
         'choro_d': true,
         'choro_co2': true,
         'choro_co2_c': true,
         'choro_co2_d': true
          }

          // declaring the function to Highlight LSOAs with the top 10 values after a click
         function top_10() {
              var toggleableLayerIds = ['choro', 'choro_co2','choro_c','choro_co2_c','choro_d','choro_co2_d'];
              var SourceIds=['lsoas','lsoas_co2','lsoas_c','lsoas_co2_c','lsoas_d','lsoas_co2_d'];
              for (var i = 0; i < toggleableLayerIds.length; i++){
                var id = toggleableLayerIds[i];
                var visLayer=map.getLayoutProperty(id,'visibility');
                var activeSource=SourceIds[i]
                if(visLayer==='visible'& firstclick[id]===true){
                  firstclick[id]= false;
                    for (var k = 0; k < top_10_id[id].length; k++){
                      var lsoasId=top_10_id[id][k];
                      console.log(lsoasId);
                      map.setFeatureState(
                        { source: activeSource, id: lsoasId },
                        { hover: true }
                      );

                    }
                  }
                else if(visLayer==='visible' & firstclick[id]=== false){
                    for (var k = 0; k < top_10_id[id].length; k++){
                      var lsoasId=top_10_id[id][k];
                      map.setFeatureState(
                        { source: activeSource, id: lsoasId },
                        { hover: false }

                      );
                      firstclick[id]= true;

                    }

                }

                }

              }

              //api url for top10
              let apiUrl = 'http://dev.spatialdatacapture.org:8739/data/top10_price_choro';
              let apiUrl_c = 'http://dev.spatialdatacapture.org:8739/data/top10_price_choro_C';
              let apiUrl_d = 'http://dev.spatialdatacapture.org:8739/data/top10_price_choro_D';
              let apiUrl_co2 = 'http://dev.spatialdatacapture.org:8739/data/top10_choro_co2';
              let apiUrl_co2_d = 'http://dev.spatialdatacapture.org:8739/data/top10_choro_co2_D';
              let apiUrl_co2_c = 'http://dev.spatialdatacapture.org:8739/data/top10_choro_co2_C';

              //funtion fetching data
              async function getTop10Data(url){
                const response = await fetch(url);
                const data = await response.json();
                return data;
              };
              // function asigning data and creating <p>
              async function main() {

                data = await getTop10Data(apiUrl);
                data_c = await getTop10Data(apiUrl_c);
                data_d = await getTop10Data(apiUrl_d);
                data_co2 = await getTop10Data(apiUrl_co2);
                data_co2_c = await getTop10Data(apiUrl_co2_c);
                data_co2_d = await getTop10Data(apiUrl_co2_d);

              // assigning the LSOAs with the top 10 values
              var top_10_dic={
                'choro': data,
                'choro_c': data_c,
                'choro_co2_d': data_co2_d,
                'choro_co2_c': data_co2_c,
                'choro_co2': data_co2,
                'choro_d': data_d
              }

              // adding the list of the LSOAs with the top 10 values 6 corresponding elements
              var layerId = ['choro', 'choro_co2','choro_c','choro_co2_c','choro_d','choro_co2_d'];
              for (var i = 0; i < layerId.length; i++) {
                var element=document.getElementById('#'+layerId[i]);
                for (var j = 0; j < top_10_dic[layerId[i]].length; j++) {
                  var p=document.createElement("p");
                  var loc=j+1;
                  var text = document.createTextNode(loc+'. '+top_10_dic[layerId[i]][j]);
                  p.appendChild(text);
                  element.appendChild(p);
                }
                element.style.display= 'none';
              }
            };
              main();

              var top_10_id={
                'choro': [],
                'choro_c': [],
                'choro_co2_d': [],
                'choro_co2_c': [],
                'choro_co2': [],
                'choro_d': []
              }

              // getting the lsoas IDs from the layers in order to specify which ones to highlight
              function top_10_list() {
                var layerId = ['choro', 'choro_co2','choro_c','choro_co2_c','choro_d','choro_co2_d'];
                  for (var i = 0; i < layerId.length; i++){
                    var id = layerId[i];
                    var visLayer=map.getLayoutProperty(id,'visibility');
                      if(visLayer==='visible'){
                        var list=document.getElementById('#'+id);
                        var features = map.queryRenderedFeatures({ layers: [id] });
                        for (var j = 0; j < features.length; j++) {
                          for (var k = 0; k < list.children.length; k++) {
                            var lsoasCode=list.children[k].textContent;
                            var lsoasCode=lsoasCode.substring(lsoasCode.length-9, lsoasCode.length);
                            if (features[j].properties.lsoa_code===lsoasCode) {
                              top_10_id[id][k]=features[j].id;
                            }
                          }
                        }
                      }
                  }
                  console.log(top_10_id);
              }



              // adding information popups next to scenario (menu boxes) elements
              function myFunction_1() {
                var popup = document.getElementById("myPopup_1");
                popup.classList.toggle("show");
              }
              function myFunction_2() {
                var popup = document.getElementById("myPopup_2");
                popup.classList.toggle("show");
              }
              function myFunction_3() {
                var popup = document.getElementById("myPopup_3");
                popup.classList.toggle("show");

              }
              function myFunction_4() {
                var popup = document.getElementById("myPopup_4");
                popup.classList.toggle("show");

              }
