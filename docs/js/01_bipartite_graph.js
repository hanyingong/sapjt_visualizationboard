function bipartite_graph() {

  var data =
    [
    ['type01', 'C00', 1296, 22],
    ['type01', 'C01', 345, 0],
    ['type01', 'C02', 162, 20],
    ['type01', 'C03', 568, 2],
    ['type01', 'C04', 0, 349],
    ['type01', 'C05', 0, 62],
    ['type01', 'C06', 0, 10],
    ['type01', 'C07', 0, 841],
    ['type01', 'C08', 0, 1],
    ['type01', 'C09', 0, 159],
    ['type01', 'C11', 0, 2],
    ['type01', 'C13', 0, 897],
    ['type02', 'C00', 3534, 63],
    ['type02', 'C01', 993, 0],
    ['type02', 'C02', 603, 58],
    ['type02', 'C03', 2865, 4],
    ['type02', 'C04', 0, 1203],
    ['type02', 'C05', 0, 180],
    ['type02', 'C06', 0, 17],
    ['type02', 'C07', 0, 2901],
    ['type02', 'C09', 0, 614],
    ['type02', 'C10', 0, 3],
    ['type02', 'C11', 0, 10],
    ['type02', 'C12', 0, 1],
    ['type02', 'C13', 0, 2900],
    ['type02', 'C14', 0, 7],
    ['type03', 'C00', 1409, 101],
    ['type03', 'C01', 8457, 1],
    ['type03', 'C02', 1009, 95],
    ['type03', 'C03', 3820, 3],
    ['type03', 'C04', 0, 2159],
    ['type03', 'C05', 0, 319],
    ['type03', 'C06', 0, 51],
    ['type03', 'C07', 0, 5380],
    ['type03', 'C08', 0, 1],
    ['type03', 'C09', 0, 1026],
    ['type03', 'C10', 0, 2],
    ['type03', 'C11', 0, 33],
    ['type03', 'C12', 0, 8],
    ['type03', 'C13', 0, 5477],
    ['type03', 'C14', 0, 17],
    ['type04', 'C00', 1507, 51],
    ['type04', 'C01', 342, 0],
    ['type04', 'C02', 4464, 114],
    ['type04', 'C03', 4338, 2],
    ['type04', 'C04', 0, 1590],
    ['type04', 'C05', 0, 292],
    ['type04', 'C06', 0, 22],
    ['type04', 'C07', 0, 3774],
    ['type04', 'C08', 0, 1],
    ['type04', 'C09', 0, 860],
    ['type04', 'C10', 0, 3],
    ['type04', 'C11', 0, 22],
    ['type04', 'C12', 0, 14],
    ['type04', 'C13', 0, 3854],
    ['type04', 'C14', 0, 18],
    ['type05', 'C00', 954, 18],
    ['type05', 'C01', 254, 0],
    ['type05', 'C02', 224, 21],
    ['type05', 'C03', 591, 3],
    ['type05', 'C04', 0, 320],
    ['type05', 'C05', 0, 35],
    ['type05', 'C06', 0, 7],
    ['type05', 'C07', 0, 742],
    ['type05', 'C08', 0, 1],
    ['type05', 'C09', 0, 187],
    ['type05', 'C11', 0, 3],
    ['type05', 'C13', 0, 681],
    ['type05', 'C14', 0, 1],
    ['type06', 'C00', 1828, 27],
    ['type06', 'C01', 507, 0],
    ['type06', 'C02', 295, 32],
    ['type06', 'C03', 1236, 1],
    ['type06', 'C04', 0, 585],
    ['type06', 'C05', 0, 101],
    ['type06', 'C06', 0, 19],
    ['type06', 'C07', 0, 1455],
    ['type06', 'C09', 0, 258],
    ['type06', 'C10', 0, 1],
    ['type06', 'C11', 0, 7],
    ['type06', 'C13', 0, 1351],
    ['type06', 'C14', 0, 2],
    ['type07', 'C00', 2132, 13],
    ['type07', 'C01', 403, 0],
    ['type07', 'C02', 434, 45],
    ['type07', 'C03', 1375, 2],
    ['type07', 'C04', 0, 624],
    ['type07', 'C05', 0, 97],
    ['type07', 'C06', 0, 13],
    ['type07', 'C07', 0, 1607],
    ['type07', 'C09', 0, 328],
    ['type07', 'C10', 0, 1],
    ['type07', 'C11', 0, 5],
    ['type07', 'C12', 0, 6],
    ['type07', 'C13', 0, 1578],
    ['type07', 'C14', 0, 7],
    ['type08', 'C00', 968, 20],
    ['type08', 'C01', 198, 0],
    ['type08', 'C02', 266, 22],
    ['type08', 'C03', 992, 1],
    ['type08', 'C04', 0, 362],
    ['type08', 'C05', 0, 76],
    ['type08', 'C06', 0, 6],
    ['type08', 'C07', 0, 891],
    ['type08', 'C09', 0, 173],
    ['type08', 'C10', 0, 2],
    ['type08', 'C11', 0, 7],
    ['type08', 'C12', 0, 2],
    ['type08', 'C13', 0, 855],
    ['type09', 'C00', 1369, 27],
    ['type09', 'C01', 438, 0],
    ['type09', 'C02', 352, 36],
    ['type09', 'C03', 1637, 2],
    ['type09', 'C04', 0, 557],
    ['type09', 'C05', 0, 97],
    ['type09', 'C06', 0, 9],
    ['type09', 'C07', 0, 1338],
    ['type09', 'C09', 0, 282],
    ['type09', 'C11', 0, 7],
    ['type09', 'C12', 0, 4],
    ['type09', 'C13', 0, 1414],
    ['type09', 'C14', 0, 4],
    ['type10', 'C00', 918, 6],
    ['type10', 'C01', 179, 0],
    ['type10', 'C02', 147, 9],
    ['type10', 'C03', 409, 2],
    ['type10', 'C04', 0, 223],
    ['type10', 'C05', 0, 40],
    ['type10', 'C06', 0, 3],
    ['type10', 'C07', 0, 632],
    ['type10', 'C09', 0, 119],
    ['type10', 'C10', 0, 1],
    ['type10', 'C11', 0, 2],
    ['type10', 'C13', 0, 608],
    ['type10', 'C14', 0, 2],
    ['type11', 'C00', 959, 15],
    ['type11', 'C01', 190, 0],
    ['type11', 'C02', 308, 19],
    ['type11', 'C03', 885, 1],
    ['type11', 'C04', 0, 364],
    ['type11', 'C05', 0, 69],
    ['type11', 'C06', 0, 8],
    ['type11', 'C07', 0, 844],
    ['type11', 'C09', 0, 183],
    ['type11', 'C11', 0, 4],
    ['type11', 'C12', 0, 1],
    ['type11', 'C13', 0, 823],
    ['type11', 'C14', 0, 1],
    ['type12', 'C00', 821, 10],
    ['type12', 'C01', 237, 0],
    ['type12', 'C02', 183, 15],
    ['type12', 'C03', 626, 0],
    ['type12', 'C04', 0, 273],
    ['type12', 'C05', 0, 47],
    ['type12', 'C06', 0, 8],
    ['type12', 'C07', 0, 693],
    ['type12', 'C08', 0, 1],
    ['type12', 'C09', 0, 142],
    ['type12', 'C10', 0, 1],
    ['type12', 'C11', 0, 5],
    ['type12', 'C13', 0, 667],
    ['type12', 'C14', 0, 3],
    ['type13', 'C00', 2453, 42],
    ['type13', 'C01', 578, 0],
    ['type13', 'C02', 401, 39],
    ['type13', 'C03', 1120, 0],
    ['type13', 'C04', 0, 691],
    ['type13', 'C05', 0, 117],
    ['type13', 'C06', 0, 21],
    ['type13', 'C07', 0, 1623],
    ['type13', 'C09', 0, 344],
    ['type13', 'C10', 0, 1],
    ['type13', 'C11', 0, 23],
    ['type13', 'C12', 0, 5],
    ['type13', 'C13', 0, 1638],
    ['type13', 'C14', 0, 1],
    ['type14', 'C00', 567, 4],
    ['type14', 'C01', 98, 0],
    ['type14', 'C02', 104, 8],
    ['type14', 'C03', 347, 3],
    ['type14', 'C04', 0, 212],
    ['type14', 'C05', 0, 19],
    ['type14', 'C06', 0, 3],
    ['type14', 'C07', 0, 412],
    ['type14', 'C09', 0, 87],
    ['type14', 'C11', 0, 1],
    ['type14', 'C13', 0, 360],
    ['type14', 'C14', 0, 1],
    ['type15', 'C00', 275, 2],
    ['type15', 'C01', 73, 0],
    ['type15', 'C02', 83, 6],
    ['type15', 'C03', 245, 0],
    ['type15', 'C04', 0, 105],
    ['type15', 'C05', 0, 22],
    ['type15', 'C06', 0, 2],
    ['type15', 'C07', 0, 231],
    ['type15', 'C09', 0, 48],
    ['type15', 'C13', 0, 252],
    ['type15', 'C14', 0, 1]];

  var color ={type01:"#b71c1c", type02:"#ad1457",  type03:"#283593",
              type04:"#0277bd", type05:"#00695c", type06:"#2e7d32",
              type07:"#8bc34a", type08:"#9e9d24", type09:"#f9a825",
              type10:"#ff8f00", type11:"#e65100", type12:"#bf360c",
              type13:"#5d4037", type14:"#424242", type15:"#263238",
            };
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

  var g =[svg.append("g").attr("transform","translate(150,40)")
      ,svg.append("g").attr("transform","translate(950,40)")];

  var bp=[ viz.bP()
      .data(data)
      .min(12)
      .pad(1)
      .height(450)
      .width(200)
      .barSize(35)
      .fill(d=>color[d.primary])
    ,viz.bP()
      .data(data)
      .value(d=>d[3])
      .min(12)
      .pad(1)
      .height(450)
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
      .attr("x",d=>(d.part=="primary"? -100: 80))
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
  d3.select(self.frameElement).style("height", "800px");
}
