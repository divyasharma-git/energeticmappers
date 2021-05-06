// Average Energy Ratings (EPC Ratings) CHOROPLETH MAP
anychart.onDocumentReady(function() {
       // create map chart
       var map = anychart.choropleth();
        // Read the GeoJSON from the URL
        anychart.data.loadJsonFile('https://raw.githubusercontent.com/divyasharma-git/energeticmappers/main/01_data/lsoasWales_maps.geojson',
        function (data) {
            // create data set
            var features = data.features
            var dataset = features.map((item)=>{
                return {id: item.properties.id, value: item.properties.CURRENT_ENERGY_EFFICIENCY}
            })

            // set map geo data
            map
              .geoData(data)
              // enable the colorRange
              .colorRange(true);

             // set the chart title
             map
                .title()
                .enabled(true)
                .text('Average Energy Ratings');

            // create choropleth series
            var series = map.choropleth(dataset);
            
            series.selectionMode('none').stroke('#B9B9B9');
    
            series.hovered().fill('#c6c6c6');

            // Set stroke.
            series.stroke({color: '#ffffff', thickness: 0.05});

             // Set tooltipe title
             map.tooltip(true);
             map.tooltip().title(true);
             map.tooltip().titleFormat('{%lsoa11name}');
             map.tooltip().format("Code: {%LSOA11Code}\nRating: {%value}");

            // create color scale
            var scale = anychart.scales.ordinalColor([
                { less: 20 },
                { from: 21, to: 38 },
                { from: 39, to: 54 },
                { from: 55, to: 68 },
                { from: 69, to: 80 },
                { from: 81, to: 91 },
                { greater: 92 }
              ]);
            scale.colors(['#e8262f','#f0702f','#F5Ae35','#F1EC37','#95CA53','#2EA949','#0A8647']);

            // set color for choropleth series for map chart
            series.colorScale(scale);
    
            // set container id for the map
            map.container('container8');
    
            // initiate chart drawing
            map.draw();

            });
});

// Median CO2 Emissions CHOROPLETH MAP
anychart.onDocumentReady(function() {
        // create map chart
        var map = anychart.choropleth();
        // Read the GeoJSON from the URL
        anychart.data.loadJsonFile('https://raw.githubusercontent.com/divyasharma-git/energeticmappers/main/01_data/lsoasWales_maps.geojson',
        function (data) {

        // create data set
         var features = data.features
         var dataset = features.map((item)=>{
             return {id: item.properties.id, value: item.properties.CO2_EMISSIONS_CURRENT}
         })

         // set map geo data
         map
           .geoData(data)
           // enable the colorRange
           .colorRange(true);

          // set the chart title
          map
             .title()
             .enabled(true)
             .text('Median CO2 Emissions by property');

         // create choropleth series
         var series = map.choropleth(dataset);
         
         series.selectionMode('none').stroke('#B9B9B9');
 
         series.hovered().fill('#c6c6c6');

         // Set stroke.
         series.stroke({color: '#ffffff', thickness: 0.005});

        // Set tooltipe title
          map.tooltip(true);
          map.tooltip().title(true);
          map.tooltip().titleFormat('{%lsoa11name}');
          map.tooltip().format("Code: {%LSOA11Code}\nEmission: {%value} tonnes/year");

         // create color scale
         var scale = anychart.scales.linearColor();
         scale.colors(['#f1eef6','#bdc9e1','#74a9cf','#2b8cbe','#045a8d']);

         // set color for choropleth series for map chart
         series.colorScale(scale);
         
         // set credits
         map.credits().enabled(true);
         map.credits().text("Data source: BIN CHI")
             
         // set container id for the map
         map.container('container9');
 
         // initiate chart drawing
         map.draw();

         });
});

// Median House Prices CHOROPLETH MAP
anychart.onDocumentReady(function() {
    // create map chart
    var map = anychart.choropleth();
    // Read the GeoJSON from the URL
     anychart.data.loadJsonFile('https://raw.githubusercontent.com/divyasharma-git/energeticmappers/main/01_data/lsoasWales_maps.geojson',
     function (data) {

         // create data set
         var features = data.features
         var dataset = features.map((item)=>{
             return {id: item.properties.id, value: item.properties.price}
         })

         // set map geo data
         map
           .geoData(data)
           // enable the colorRange
           .colorRange(true);

          // set the chart title
          map
             .title()
             .enabled(true)
             .text('Median House Prices');

         // create choropleth series
         var series = map.choropleth(dataset);
         
         series.selectionMode('none').stroke('#B9B9B9');
 
         series.hovered().fill('#c6c6c6');

         // Set stroke
         series.stroke({color: '#ffffff', thickness: 0.005});

        // Set tooltipe title
        map.tooltip(true);
        map.tooltip().title(true);
        map.tooltip().titleFormat('{%lsoa11name}');
        map.tooltip().format("Code: {%LSOA11Code}\nPrice: £{%value}");

         // create color scale
         var scale = anychart.scales.linearColor();
         scale.colors(['#edf8e9','#bae4b3','#74c476','#31a354','#006d2c']);

         // set color for choropleth series for map chart
         series.colorScale(scale);
         
         // configure the format of legend items
         map.legend().itemsFormat("£{%value}");

         // set credits
         map.credits().enabled(true);
         map.credits().text("Data source: BIN CHI")
             
         // set container id for the map
         map.container('container10');
 
         // initiate chart drawing
         map.draw();

         });
});