mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0cmFqMTUiLCJhIjoiY2tvYTgyZ2Y3MzQxNzJxcGcxeHM4aXZ6dSJ9.PCUSxSXQ_TRWPkbrRT1pGg';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/cheyne-campbell/ck966jun93urx1iqlhlheiknl', // style URL
  center: [-3.3816,52.4406], // starting position [lng, lat]
  minzoom:1,
  zoom: 7.3 // starting zoom
});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,

    // Limit seach results to Australia.
    countries: 'gb',
    // Use a bounding box to further limit results
    // to the geographic bounds representing the
    // region of New South Wales.
    bbox: [-5.3540, 51.3777, -2.6565, 53.4377],
    mapboxgl: mapboxgl
  })
);


// Disable zoom on double click
map.doubleClickZoom.disable();

let c = new MapboxChoropleth({
  tableUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test%20copy.csv',
  tableNumericField: 'normalized_price_dif',
  tableIdField: 'lsoa_code',
  geometryUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test_3.geojson', //'mapbox://szymon95.ac1bd6s0',
  geometryIdField: 'lsoa_code',
  layerId: 'choro',
  binCount: 6,
  sourceId: 'lsoas',
  colorScheme: ['white', 'red'],
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
  legendElement: '#legend_1'
  }).addTo(map);

  let d = new MapboxChoropleth({
    tableUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test%20copy.csv',
    tableNumericField: 'normalized_co2_dif',
    tableIdField: 'lsoa_code',
    geometryUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test_3.geojson', //'mapbox://szymon95.ac1bd6s0',
    geometryIdField: 'lsoa_code',
    layerId: 'choro_co2',
    sourceId: 'lsoas_co2',
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
    legendElement: '#legend_2'
    }).addTo(map);

    let e = new MapboxChoropleth({
      tableUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test%20copy.csv',
      tableNumericField: 'normalized_price_dif_C',
      tableIdField: 'lsoa_code',
      geometryUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test_3.geojson', //'mapbox://szymon95.ac1bd6s0',
      geometryIdField: 'lsoa_code',
      layerId: 'choro_c',
      sourceId: 'lsoas_c',
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
      legendElement: '#legend_3'
      }).addTo(map);

      let f = new MapboxChoropleth({
        tableUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test%20copy.csv',
        tableNumericField: 'normalized_co2_dif_C',
        tableIdField: 'lsoa_code',
        geometryUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test_3.geojson', //'mapbox://szymon95.ac1bd6s0',
        geometryIdField: 'lsoa_code',
        layerId: 'choro_co2_c',
        sourceId: 'lsoas_co2_c',
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
        legendElement: '#legend_4'
        }).addTo(map);

        let g = new MapboxChoropleth({
          tableUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test%20copy.csv',
          tableNumericField: 'normalized_price_dif_D',
          tableIdField: 'lsoa_code',
          geometryUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test_3.geojson', //'mapbox://szymon95.ac1bd6s0',
          geometryIdField: 'lsoa_code',
          layerId: 'choro_d',
          sourceId: 'lsoas_d',
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
          legendElement: '#legend_5'
          }).addTo(map);

          let h = new MapboxChoropleth({
            tableUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test%20copy.csv',
            tableNumericField: 'normalized_co2_dif_D',
            tableIdField: 'lsoa_code',
            geometryUrl: 'https://raw.githubusercontent.com/SPadlewski/GIS_code/main/test_3.geojson', //'mapbox://szymon95.ac1bd6s0',
            geometryIdField: 'lsoa_code',
            layerId: 'choro_co2_d',
            sourceId: 'lsoas_co2_d',
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
            legendElement: '#legend_6'
            }).addTo(map);

//	c.getLegend('legend')

  // Store which LSOA is being hovered over or clicked on
  var lsoaID = null;
  var lsoaIDClick = null;

  //var test= choropleth.getLegend('choro');
  ///legend.getHTML();
  //conosole.log(test);






         //Toggles
         // After the last frame rendered before the map enters an "idle" state.
         map.on('idle', function () {

              //calling top_10_list function
              top_10_list();

              // If these two layers have been added to the style,

              // add the toggle buttons.
              if (map.getLayer('choro') && map.getLayer('choro_co2')&&map.getLayer('choro_c')&&map.getLayer('choro_co2_c')&&map.getLayer('choro_d')&&map.getLayer('choro_co2_d')) {
              // Enumerate ids of the layers.
                var toggleableLayerIds = ['choro', 'choro_co2','choro_c','choro_co2_c','choro_d','choro_co2_d'];
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
                         var visibility = map.getLayoutProperty(
                            clickedLayer,
                            'visibility'
                          );
                         if (clickedLayer === toggleableLayerIds[j]& visibility === 'none') {
                           layers.children[j].className = 'active';
                           map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'visible');


                         }
                         else {
                           layers.children[j].className = 'deactivated';
                           map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'none');
                         }
                       }


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

                       var x = document.getElementById("legend_1");
                       var y = document.getElementById("legend_2");
                       var z = document.getElementById("legend_3");
                       var t = document.getElementById("legend_4");
                       var p = document.getElementById("legend_5");
                       var r = document.getElementById("legend_6");

                       var a = document.getElementById("top-10").children[2];
                       var m = document.getElementById("top-10").children[3];
                       var n = document.getElementById("top-10").children[4];
                       var v = document.getElementById("top-10").children[5];
                       var u = document.getElementById("top-10").children[6];
                       var h = document.getElementById("top-10").children[7];

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

                               lsoaID = e.features[0].id;
                               console.log(lsoaID);
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
                            //console.log(description);
                              //	 console.log(coordinates);
                              //	 console.log(e1.lngLat.lng);
                                 // Ensure that if the map is zoomed out such that multiple
                                 // copies of the feature are visible, the popup appears
                                 // over the copy being pointed to.
                                 //while (Math.abs(e1.lngLat.lng - coordinates[0]) > 180) {
                               //		coordinates[0] += e1.lngLat.lng > coordinates[0] ? 360 : -360;
                             //		}

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

         //legend.getHTML('choro')
         //console.log(map.getHTML());
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

          var firstclick={
           'choro': true,
         'choro_c': true,
         'choro_d': true,
         'choro_co2': true,
         'choro_co2_c': true,
         'choro_co2_d': true
          }

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


              var top_10_dic={
                'choro': ['W01000060','W01000550','W01000537','W01000028','W01000702','W01000053','W01000026','W01000442','W01000189','W01000522'],
                'choro_c': ['W01000550','W01000060','W01000053','W01000065','W01000866','W01000537','W01001177','W01000522','W01000701','W01000056'],
                'choro_co2_d': ['W01000537','W01000442','W01000060','W01000453','W01000536','W01000702','W01000550','W01000189','W01000053','W01000688'],
                'choro_co2_c': ['W01000866','W01000065','W01000550','W01001177','W01000060','W01000537','W01000688','W01001536','W01000967','W01000066'],
                'choro_co2': ['W01000867','W01000866','W01000831','W01000810','W01001536','W01000738','W01000862','W01000830','W01001633','W01001049'],
                'choro_d': ['W01000537','W01000053','W01000702','W01000060','W01000189','W01001932','W01000099','W01000442','W01000459','W01000028']
              }
              var top_10_id={
                'choro': ['W01000060','W01000550','W01000537','W01000028','W01000702','W01000053','W01000026','W01000442','W01000189','W01000522'],
                'choro_c': ['W01000550','W01000060','W01000053','W01000065','W01000866','W01000537','W01001177','W01000522','W01000701','W01000056'],
                'choro_co2_d': ['W01000537','W01000442','W01000060','W01000453','W01000536','W01000702','W01000550','W01000189','W01000053','W01000688'],
                'choro_co2_c': ['W01000866','W01000065','W01000550','W01001177','W01000060','W01000537','W01000688','W01001536','W01000967','W01000066'],
                'choro_co2': ['W01000867','W01000866','W01000831','W01000810','W01001536','W01000738','W01000862','W01000830','W01001633','W01001049'],
                'choro_d': ['W01000537','W01000053','W01000702','W01000060','W01000189','W01001932','W01000099','W01000442','W01000459','W01000028']
              }
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




              function top_10_list() {
                var layerId = ['choro', 'choro_co2','choro_c','choro_co2_c','choro_d','choro_co2_d'];
                  for (var i = 0; i < layerId.length; i++){
                    var id = layerId[i];
                    var visLayer=map.getLayoutProperty(id,'visibility');
                      if(visLayer==='visible'){
                        var features = map.queryRenderedFeatures({ layers: [id] });
                        for (var j = 0; j < features.length; j++) {
                          for (var k = 0; k < top_10_id[id].length; k++) {
                            if (features[j].properties.lsoa_code===top_10_id[id][k]) {
                              top_10_id[id][k]=features[j].id;
                            }
                          }
                        }
                      }
                  }
              }

              // When the user clicks on <div>, open the popup
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
