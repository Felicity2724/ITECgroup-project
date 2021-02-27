var chart1;

am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var iconPath = `M455 2472 c-78 -38 -115 -96 -115 -182 0 -118 71 -223 317 -472 l195
    -196 -106 -549 c-58 -302 -106 -558 -106 -569 0 -21 147 -174 167 -174 6 0
    109 192 228 428 120 235 221 431 225 436 5 4 57 -34 117 -86 162 -141 415
    -338 522 -408 l23 -15 -40 -200 -41 -200 64 -64 c41 -42 68 -62 78 -58 8 3 61
    83 118 177 79 133 106 169 118 164 57 -23 103 -35 116 -30 21 7 18 52 -5 103
    l-19 42 161 97 c88 54 170 105 181 115 l22 18 -67 67 -66 67 -201 -40 -200
    -40 -79 111 c-97 136 -251 329 -361 453 -57 65 -77 94 -69 100 7 4 200 103
    428 220 228 116 419 219 425 227 8 13 -7 33 -71 97 l-82 82 -553 -108 c-305
    -59 -556 -109 -558 -111 -2 -2 -86 76 -185 174 -194 190 -286 266 -374 308
    -74 35 -154 41 -207 16z`

    

    chart = am4core.create("chartdiv6", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.paddingLeft = 150;

     
    var series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "votes";
    series.dataFields.category = "time";
    series.alignLabels = true;
    // this makes only A label to be visible
    series.labels.template.propertyFields.disabled = "disabled";
    series.ticks.template.propertyFields.disabled = "disabled";


    series.maskSprite.path = iconPath;
    series.ticks.template.locationX = 1;
    series.ticks.template.locationY = 0.5;

    series.labelsContainer.width = 180;

    series.maskSprite.rotation = 180;

    var title = chart.titles.create();
    title.text = "Times of Travelling in 2020";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

    chart1 = chart;
  
}); // end am4core.ready()