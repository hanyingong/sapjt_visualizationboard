function bipartite_graph() {

  var data =
  [
     ['American_Restaurant', '0', 167, 21],
     ['American_Restaurant', '1', 714, 0],
     ['American_Restaurant', '2', 196, 795],
     ['American_Restaurant', '3', 77, 46],
     ['American_Restaurant', '4', 312, 1081],
     ['American_Restaurant', '5', 94, 202],
     ['American_Restaurant', '6', 96, 0],
     ['American_Restaurant', '7', 71, 0],
     ['American_Restaurant', '8', 425, 0],
     ['Asian_Food', '0', 1, 1],
     ['Asian_Food', '1', 22, 0],
     ['Asian_Food', '2', 3, 19],
     ['Asian_Food', '3', 3, 0],
     ['Asian_Food', '4', 9, 28],
     ['Asian_Food', '5', 1, 2],
     ['Asian_Food', '6', 4, 0],
     ['Asian_Food', '7', 1, 0],
     ['Asian_Food', '8', 6, 0],
     ['Asian_Restaurant', '0', 358, 44],
     ['Asian_Restaurant', '1', 183, 0],
     ['Asian_Restaurant', '2', 537, 2290],
     ['Asian_Restaurant', '3', 36, 127],
     ['Asian_Restaurant', '4', 992, 3038],
     ['Asian_Restaurant', '5', 53, 574],
     ['Asian_Restaurant', '6', 2694, 0],
     ['Asian_Restaurant', '7', 50, 0],
     ['Asian_Restaurant', '8', 1202, 0],
     ['Bakery', '0', 205, 13],
     ['Bakery', '1', 456, 0],
     ['Bakery', '2', 164, 716],
     ['Bakery', '3', 54, 48],
     ['Bakery', '4', 389, 877],
     ['Bakery', '5', 65, 198],
     ['Bakery', '6', 74, 0],
     ['Bakery', '7', 51, 0],
     ['Bakery', '8', 406, 0],
     ['Buffet', '0', 9, 1],
     ['Buffet', '1', 74, 0],
     ['Buffet', '2', 23, 64],
     ['Buffet', '3', 22, 5],
     ['Buffet', '4', 25, 120],
     ['Buffet', '5', 5, 14],
     ['Buffet', '6', 8, 0],
     ['Buffet', '7', 5, 0],
     ['Buffet', '8', 33, 0],
     ['Cafe', '0', 3761, 51],
     ['Cafe', '2', 113, 2651],
     ['Cafe', '3', 0, 189],
     ['Cafe', '4', 1310, 3381],
     ['Cafe', '5', 86, 749],
     ['Cafe', '6', 72, 0],
     ['Cafe', '7', 141, 0],
     ['Cafe', '8', 1566, 0],
     ['Chinese_Restaurant', '0', 491, 88],
     ['Chinese_Restaurant', '1', 1, 0],
     ['Chinese_Restaurant', '2', 5557, 3832],
     ['Chinese_Restaurant', '3', 0, 198],
     ['Chinese_Restaurant', '4', 1848, 5070],
     ['Chinese_Restaurant', '5', 57, 978],
     ['Chinese_Restaurant', '6', 70, 0],
     ['Chinese_Restaurant', '7', 46, 0],
     ['Chinese_Restaurant', '8', 2132, 0],
     ['Deli', '0', 7, 1],
     ['Deli', '1', 25, 0],
     ['Deli', '2', 8, 23],
     ['Deli', '3', 0, 1],
     ['Deli', '4', 10, 46],
     ['Deli', '5', 5, 9],
     ['Deli', '6', 4, 0],
     ['Deli', '7', 1, 0],
     ['Deli', '8', 21, 0],
     ['Diner', '0', 454, 36],
     ['Diner', '1', 4, 0],
     ['Diner', '2', 483, 2515],
     ['Diner', '3', 0, 142],
     ['Diner', '4', 993, 3116],
     ['Diner', '5', 2954, 682],
     ['Diner', '6', 217, 0],
     ['Diner', '7', 29, 0],
     ['Diner', '8', 1383, 0],
     ['English_Restaurant', '0', 53, 3],
     ['English_Restaurant', '1', 116, 0],
     ['English_Restaurant', '2', 44, 141],
     ['English_Restaurant', '3', 7, 7],
     ['English_Restaurant', '4', 55, 212],
     ['English_Restaurant', '5', 12, 30],
     ['English_Restaurant', '6', 24, 0],
     ['English_Restaurant', '7', 15, 0],
     ['English_Restaurant', '8', 70, 0],
     ['European_Restaurant', '0', 297, 17],
     ['European_Restaurant', '1', 1071, 0],
     ['European_Restaurant', '2', 263, 1316],
     ['European_Restaurant', '3', 67, 85],
     ['European_Restaurant', '4', 625, 1696],
     ['European_Restaurant', '5', 161, 371],
     ['European_Restaurant', '6', 145, 0],
     ['European_Restaurant', '7', 67, 0],
     ['European_Restaurant', '8', 792, 0],
     ['Fast_Food_Restaurant', '0', 172, 27],
     ['Fast_Food_Restaurant', '1', 1, 0],
     ['Fast_Food_Restaurant', '2', 350, 1721],
     ['Fast_Food_Restaurant', '3', 0, 99],
     ['Fast_Food_Restaurant', '4', 468, 2165],
     ['Fast_Food_Restaurant', '5', 184, 427],
     ['Fast_Food_Restaurant', '6', 170, 0],
     ['Fast_Food_Restaurant', '7', 2481, 0],
     ['Fast_Food_Restaurant', '8', 634, 0],
     ['Food_Court', '0', 662, 94],
     ['Food_Court', '1', 12, 1],
     ['Food_Court', '2', 1471, 4451],
     ['Food_Court', '3', 5278, 194],
     ['Food_Court', '4', 1229, 5586],
     ['Food_Court', '5', 423, 1050],
     ['Food_Court', '6', 559, 0],
     ['Food_Court', '7', 477, 0],
     ['Food_Court', '8', 1281, 0],
     ['HongKong_Restaurant', '0', 13, 0],
     ['HongKong_Restaurant', '1', 46, 0],
     ['HongKong_Restaurant', '2', 12, 56],
     ['HongKong_Restaurant', '3', 5, 3],
     ['HongKong_Restaurant', '4', 31, 92],
     ['HongKong_Restaurant', '5', 10, 18],
     ['HongKong_Restaurant', '6', 6, 0],
     ['HongKong_Restaurant', '7', 11, 0],
     ['HongKong_Restaurant', '8', 35, 0],
     ['Indian_Restaurant', '0', 239, 30],
     ['Indian_Restaurant', '1', 1301, 0],
     ['Indian_Restaurant', '2', 275, 1239],
     ['Indian_Restaurant', '3', 176, 73],
     ['Indian_Restaurant', '4', 293, 1537],
     ['Indian_Restaurant', '5', 190, 342],
     ['Indian_Restaurant', '6', 167, 0],
     ['Indian_Restaurant', '7', 176, 0],
     ['Indian_Restaurant', '8', 408, 0],
     ['Japanese_Restaurant', '0', 485, 26],
     ['Japanese_Restaurant', '1', 1266, 0],
     ['Japanese_Restaurant', '2', 485, 1891],
     ['Japanese_Restaurant', '3', 116, 113],
     ['Japanese_Restaurant', '4', 1052, 2508],
     ['Japanese_Restaurant', '5', 199, 521],
     ['Japanese_Restaurant', '6', 196, 0],
     ['Japanese_Restaurant', '7', 84, 0],
     ['Japanese_Restaurant', '8', 1188, 0],
     ['Malay_Restaurant', '0', 31, 2],
     ['Malay_Restaurant', '1', 151, 0],
     ['Malay_Restaurant', '2', 37, 157],
     ['Malay_Restaurant', '3', 18, 9],
     ['Malay_Restaurant', '4', 74, 221],
     ['Malay_Restaurant', '5', 18, 45],
     ['Malay_Restaurant', '6', 26, 0],
     ['Malay_Restaurant', '7', 22, 0],
     ['Malay_Restaurant', '8', 62, 0],
     ['Mediterranean_Restaurant', '0', 53, 0],
     ['Mediterranean_Restaurant', '1', 169, 0],
     ['Mediterranean_Restaurant', '2', 41, 182],
     ['Mediterranean_Restaurant', '3', 16, 13],
     ['Mediterranean_Restaurant', '4', 79, 267],
     ['Mediterranean_Restaurant', '5', 26, 56],
     ['Mediterranean_Restaurant', '6', 26, 0],
     ['Mediterranean_Restaurant', '7', 16, 0],
     ['Mediterranean_Restaurant', '8', 94, 0],
     ['Mexican_Restaurant', '0', 115, 7],
     ['Mexican_Restaurant', '1', 269, 0],
     ['Mexican_Restaurant', '2', 72, 349],
     ['Mexican_Restaurant', '3', 9, 28],
     ['Mexican_Restaurant', '4', 197, 479],
     ['Mexican_Restaurant', '5', 49, 123],
     ['Mexican_Restaurant', '6', 37, 0],
     ['Mexican_Restaurant', '7', 21, 0],
     ['Mexican_Restaurant', '8', 218, 0]
   ];

  var color ={American_Restaurant:"#f44336", Asian_Food:"#b71c1c",
              Asian_Restaurant:"#e91e63", Bakery:"#ad1457", Buffet:"#283593",
              Cafe:"#0277bd", Chinese_Restaurant:"#26c6da",  Deli:"#00695c", Diner:"#2e7d32",
              English_Restaurant:"#8bc34a", European_Restaurant:"#9e9d24", Fast_Food_Restaurant:"#f9a825",
              Food_Court:"#ff8f00", HongKong_Restaurant:"#e65100", Indian_Restaurant:"#bf360c",
              Japanese_Restaurant:"#5d4037", Malay_Restaurant:"#424242", Mediterranean_Restaurant:"#263238",
              Mexican_Restaurant:"#5d4037"};

  //var svg = d3.select("body").append("svg").attr("width", 1300).attr("height", 570).attr("padding",0);

  var margin = {top: 0, right: 0, bottom: 0, left: 0};
  var width = 1300 - margin.left - margin.right,
    height = 530 - margin.top - margin.bottom;

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("text").attr("x",250).attr("y",15)
    .attr("class","header").text("Cluster by Dining Type (Count)");
  svg.append("text").attr("x",1050).attr("y",15)
    .attr("class","header").text("Cluster by Sentiment Score");

  var g =[svg.append("g").attr("transform","translate(200,50)")
      ,svg.append("g").attr("transform","translate(1000,50)")];

  var bp=[ viz.bP()
      .data(data)
      .min(12)
      .pad(1)
      .height(470)
      .width(200)
      .barSize(35)
      .fill(d=>color[d.primary])
    ,viz.bP()
      .data(data)
      .value(d=>d[3])
      .min(12)
      .pad(1)
      .height(470)
      .width(200)
      .barSize(35)
      .fill(d=>color[d.primary])
  ];

  [0,1].forEach(function(i){
    g[i].call(bp[i])

    g[i].append("text").attr("x",-50).attr("y",-8).style("text-anchor","middle").text("Restaurant Type");
    g[i].append("text").attr("x", 250).attr("y",-8).style("text-anchor","middle").text("Cluster No.");

    g[i].append("line").attr("x1",-100).attr("x2",0);
    g[i].append("line").attr("x1",200).attr("x2",300);

    g[i].selectAll(".mainBars")
      .on("mouseover",mouseover)
      .on("mouseout",mouseout);
    g[i].selectAll(".mainBars").append("text").attr("class","label")
      .attr("x",d=>(d.part=="primary"? -30: 30))
      .attr("y",d=>+6)
      .text(d=>d.key)
      .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

    g[i].selectAll(".mainBars").append("text").attr("class","perc")
      .attr("x",d=>(d.part=="primary"? -180: 80))
      .attr("y",d=>+6)
      .text(function(d){ return d3.format("0.0%")(d.percent)})
      .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));
  });
  function mouseover(d){
    [0,1].forEach(function(i){
      bp[i].mouseover(d);

      g[i].selectAll(".mainBars").select(".perc")
      .text(function(d){ return d3.format("0.0%")(d.percent)});
    });
  }
  function mouseout(d){
    [0,1].forEach(function(i){
      bp[i].mouseout(d);

      g[i].selectAll(".mainBars").select(".perc")
      .text(function(d){ return d3.format("0.0%")(d.percent)});
    });
  }
  d3.select(self.frameElement).style("height", "1800px");
}
