// This code plots a column chart with the Official values of the UK Energy Performance Certificates (EPC) ratings.
// This code was used using the 'AnyChart' library. It follows the documentation from these sites: 
// https://docs.anychart.com/Quick_Start/Quick_Start, https://docs.anychart.com/Common_Settings/Labels, 
anychart.onDocumentReady(function () {
    data = anychart.data.set([
        ['Rating', 20, 38, 54, 68, 80, 91,100]
    ])

    // map data for the first series
    seriesDataA = data.mapAs({x: 0, value: 1});
    seriesDataB = data.mapAs({x: 0, value: 2});
    seriesDataC = data.mapAs({x: 0, value: 3});
    seriesDataD = data.mapAs({x: 0, value: 4});
    seriesDataE = data.mapAs({x: 0, value: 5});
    seriesDataF = data.mapAs({x: 0, value: 6});
    seriesDataG = data.mapAs({x: 0, value: 7});

    // create a column chart
    var chart = anychart.column();

    // set series
    var seriesA = chart.column(seriesDataA);
    var seriesB = chart.column(seriesDataB);
    var seriesC = chart.column(seriesDataC);
    var seriesD = chart.column(seriesDataD);
    var seriesE = chart.column(seriesDataE);
    var seriesF = chart.column(seriesDataF);
    var seriesG = chart.column(seriesDataG);

    // change the orientation of the chart
    chart.isVertical(true);
    // invert the order of the axis
    chart.xScale().inverted(true);
    chart.yScale().inverted(false);

    // set labels
    seriesA.labels(true);
    seriesA.labels().format('A (92-100)').position('left-center').fontColor("#FFFFFF").fontWeight(500).fontSize(14);

    seriesB.labels(true);
    seriesB.labels().format('B (81-91)').position('left-center').fontColor("#FFFFFF").fontWeight(500).fontSize(14);

    seriesC.labels(true);
    seriesC.labels().format('C (69-80)').position('left-center').fontColor("#FFFFFF").fontWeight(500).fontSize(14);

    seriesD.labels(true);
    seriesD.labels().format('D (55-68)').position('left-center').fontColor("#FFFFFF").fontWeight(500).fontSize(14);

    seriesE.labels(true);
    seriesE.labels().format('E (39-54)').position('left-center').fontColor("#FFFFFF").fontWeight(500).fontSize(14);

    seriesF.labels(true);
    seriesF.labels().format('F (21-38)').position('left-center').fontColor("#FFFFFF").fontWeight(500).fontSize(14);

    seriesG.labels(true);
    seriesG.labels().format('G (1-20)').position('left-center').fontColor("#FFFFFF").fontWeight(500).fontSize(14);

    // remove axis
    // x
    var labelsxAxis = chart.xAxis().labels();
    labelsxAxis.enabled(false);
    // y
    var labelsyAxis = chart.yAxis().labels();
    labelsyAxis.enabled(false);

    // set the padding between bar groups
    chart.barsPadding(0);

    // set tooltip
//     seriesA.tooltip().titleFormat('A').format("92-100");
//     seriesB.tooltip().titleFormat('B').format("81-91");
//     seriesC.tooltip().titleFormat('C').format("69-80");
//     seriesD.tooltip().titleFormat('D').format("55-68");
//     seriesE.tooltip().titleFormat('E').format("39-54");
//     seriesF.tooltip().titleFormat('F').format("21-38");
//     seriesG.tooltip().titleFormat('G').format("1-20");

    // set colors
    seriesA.normal().fill('#0A8647').stroke("#FFFFFF", 1);
    seriesA.hovered().fill("#0A8647", 0.5).stroke("#FFFFFF", 1);
    seriesA.selected().fill("#0A8647").stroke("#FFFFFF", 1);

    seriesB.normal().fill('#2EA949').stroke("#FFFFFF", 1);
    seriesB.hovered().fill("#2EA949", 0.5).stroke("#FFFFFF", 1);
    seriesB.selected().fill("#2EA949").stroke("#FFFFFF", 1);

    seriesC.normal().fill('#95CA53').stroke("#FFFFFF", 1);
    seriesC.hovered().fill("#95CA53", 0.5).stroke("#FFFFFF", 1);
    seriesC.selected().fill("#95CA53").stroke("#FFFFFF", 1);

    seriesD.normal().fill('#F1EC37').stroke("#FFFFFF", 1);
    seriesD.hovered().fill("#F1EC37", 0.5).stroke("#FFFFFF", 1);
    seriesD.selected().fill("#F1EC37").stroke("#FFFFFF", 1);

    seriesE.normal().fill('#F5Ae35').stroke("#FFFFFF", 1);
    seriesE.hovered().fill("#F5Ae35", 0.5).stroke("#FFFFFF", 1);
    seriesE.selected().fill("#F5Ae35").stroke("#FFFFFF", 1);

    seriesF.normal().fill('#f0702f').stroke("#FFFFFF", 1);
    seriesF.hovered().fill("#f0702f", 0.5).stroke("#FFFFFF", 1);
    seriesF.selected().fill("#f0702f").stroke("#FFFFFF", 1);

    seriesG.normal().fill('#e8262f').stroke("#FFFFFF", 1);
    seriesG.hovered().fill("#e8262f", 0.5).stroke("#FFFFFF", 1);
    seriesG.selected().fill("#e8262f").stroke("#FFFFFF", 1);

    // set title
    chart.title("Energy Efficiency Rating");
    chart.title().align("left");

    // set the container id
    chart.container("containerEPC");

    // initiate drawing the chart
    chart.draw();
});
