// Ths code plots the column charts presented in the 'Results Page'.
// This code was used using the 'AnyChart' library. It follows the documentation from these sites: 
// https://docs.anychart.com/Quick_Start/Quick_Start, https://docs.anychart.com/Axes_and_Grids/Axis_Basics, https://codepen.io/AnyChart/pen/oWLOaV, https://docs.anychart.com/Basic_Charts/Box_Chart

// Housing prices and CO2 emissions column chart
anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile('http://dev.spatialdatacapture.org:8739/data/scenariobars',
        function(data){
            var chart = anychart.column()
            console.log(data)
            //Set series
            var priceSeries = data.map((items)=>{
                return{ x: items.Scenarios.slice(9), value: items.pct_prices}
            });
            var co2Series = data.map((items)=>{
                return{ x: items.Scenarios.slice(9), value: items.pct_co2}
            });
            // create a chart from the loaded data
            var priceChart = chart.column(priceSeries);
            var co2Chart = chart.column(co2Series);

            // set the visual parameters
            // Housing Prices
            priceChart.normal().fill("#74c476",0.8).stroke("#FFFFFF", 1);
            priceChart.hovered().fill("#74c476", 0.5).stroke("#FFFFFF", 1);
            priceChart.selected().fill("#31a354").stroke("#FFFFFF", 1);
            // CO2 emissions
            co2Chart.normal().fill("#bc1118", 0.8).stroke("#FFFFFF", 1);
            co2Chart.hovered().fill("#bc1118", 0.5).stroke("#FFFFFF", 1);
            co2Chart.selected().fill("#bc1118").stroke("#FFFFFF", 1);

            // set title
            chart.title("Impact on Housing Prices and CO2 Emissions by Scenario");

            // set the titles of the axes
            chart.xAxis().title("Scenarios");
            
            // Set tooltipe title
            // Housing Prices
            priceChart.tooltip(true);
            priceChart.tooltip().title(true);
            priceChart.tooltip().format("Housing prices: {%value}{decimalsCount:2}%");
            // CO2 emissions
            co2Chart.tooltip(true);
            co2Chart.tooltip().title(true);
            co2Chart.tooltip().format("CO2 emissions: {%value}{decimalsCount:2}%");

            // // enable legend
            chart.legend(true);
            // configure the font of legend items
            priceChart.legendItem(true);
            priceChart.legendItem().format('Housing prices');

            co2Chart.legendItem(true);
            co2Chart.legendItem().format('CO2 emissions');       

            // enable major grids
            chart.yGrid().enabled(true);
            // enable minor grids
            chart.yMinorGrid().enabled(true);

            // set the x line
            var line = line = chart.lineMarker();
            line.value(0);
            line.stroke("3 #e5e5e5")

            // space between bars
	        chart.barGroupsPadding(0.1);

            // Background
            chart.background().enabled(false);

            // turn on chart animation
            chart.animation(true);

            // draw a chart
            chart.container('FigureX').draw();

        }
    )
});


// Property numbers column chart
anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile('http://dev.spatialdatacapture.org:8739/data/scenariobars',
        function(data){
            var chart = anychart.column()
            console.log(data)
            //Set series
            var propertySeries = data.map((items)=>{
                return{ x: items.Scenarios.slice(9), value: items.pct_properties}
            });
            // create a chart from the loaded data
            var propertyChart = chart.column(propertySeries);

            // set the visual parameters
            propertyChart.normal().fill("#74c476",0.8).stroke("#FFFFFF", 1);
            propertyChart.hovered().fill("#74c476", 0.6).stroke("#FFFFFF", 1);
            propertyChart.selected().fill("#74c476").stroke("#FFFFFF", 1);

            // set the titles of the axes
            chart.xAxis().title("Scenarios");
            chart.yAxis().title("(%) of properties");

            // set title
            chart.title("Percentage of Properties Requiring Renovations");

            // Set tooltipe title
            propertyChart.tooltip(true);
            propertyChart.tooltip().title(true);
            propertyChart.tooltip().format("Properties: {%value}{decimalsCount:2}%");

            // enable major grids
            chart.yGrid().enabled(true);
            // enable minor grids
            chart.yMinorGrid().enabled(true);

            // space between bars
	        chart.barGroupsPadding(0.1);

            // Background
            chart.background().enabled(false);

            // turn on chart animation
            chart.animation(true);

            // draw a chart
            chart.container('FigureY').draw();
        }
    )
});

// Median percentage increase by WIMD Groups
anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile('http://dev.spatialdatacapture.org:8739/data/wimdbarplot', 
        function(data){
            var chart = anychart.column()
            console.log(data)            
            // set the series
            var priceMax = data.map((items)=>{
                return{ x: items.map_group, value: items.pct_pricedif_max}
                });
                console.log(priceMax)
            var priceC = data.map((items)=>{
                return{ x: items.map_group, value: items.pct_pricedif_C}
                });
                console.log(priceC)
            var priceD = data.map((items)=>{
                return{ x: items.map_group, value: items.pct_pricedif_D}
                });
                console.log(priceD)
            
            // set the series to plot
            var priceMaxSeries = chart.column(priceMax);
            var priceCSeries = chart.column(priceC);
            var priceDSeries = chart.column(priceD);

            // set the visual parameters
            // Scenario A
            priceMaxSeries.normal().fill("#31a354", 0.7).stroke("#FFFFFF", 1);
            priceMaxSeries.hovered().fill("#31a354", 0.5).stroke("#FFFFFF", 1);
            priceMaxSeries.selected().fill("#31a354", 0.9).stroke("#FFFFFF", 1);

            // Scenario B
            priceCSeries.normal().fill("#74c476", 0.7).stroke("#FFFFFF", 1);
            priceCSeries.hovered().fill("#74c476", 0.5).stroke("#FFFFFF", 1);
            priceCSeries.selected().fill("#74c476", 0.9).stroke("#FFFFFF", 1);

            // Scenario C
            priceDSeries.normal().fill("#bae4b3", 0.7).stroke("#FFFFFF", 1);
            priceDSeries.hovered().fill("#bae4b3", 0.5).stroke("#FFFFFF", 1);
            priceDSeries.selected().fill("#bae4b3", 0.9).stroke("#FFFFFF", 1);

            // set the titles of the axes
            chart.xAxis().title("WIMD groups");
            chart.yAxis().title("(%) price increase");

            // Set tooltipe settings
            priceMaxSeries.tooltip(true);
            priceMaxSeries.tooltip().title(true);
            priceMaxSeries.tooltip().titleFormat('Scenario A');
            priceMaxSeries.tooltip().format("Value: {%value}{decimalsCount:2}%");

            priceCSeries.tooltip(true);
            priceCSeries.tooltip().title(true);
            priceCSeries.tooltip().titleFormat('Scenario B');
            priceCSeries.tooltip().format("Value: {%value}{decimalsCount:2}%");

            priceDSeries.tooltip(true);
            priceDSeries.tooltip().title(true);
            priceDSeries.tooltip().titleFormat('Scenario C');
            priceDSeries.tooltip().format("Value: {%value}{decimalsCount:2}%");

            // // enable legend
            chart.legend(true);
            // configure the font of legend items
            priceMaxSeries.legendItem(true);
            priceMaxSeries.legendItem().format('Scenario A');

            priceCSeries.legendItem(true);
            priceCSeries.legendItem().format('Scenario B');

            priceDSeries.legendItem(true);
            priceDSeries.legendItem().format('Scenario C');

            // enable major grids
            chart.yGrid().enabled(true);
            // enable minor grids
            chart.yMinorGrid().enabled(true);

            //set chart title text settings
            chart.title('Median Percentage Price Increase by WIMD Groups');
            // set the container id
            chart.container("FigureZ");

            // initiate drawing the chart
            chart.draw();
        }
    )
});
