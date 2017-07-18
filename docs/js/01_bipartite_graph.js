function bipartite_graph() {
  var data =
  [
  ['Cluster1','CA',16,0],
  ['Cluster2','CA',1278,4],
  ['Cluster3','CA',27,0],
  ['Cluster4','CA',58,0],
  ['Cluster5','CA',1551,15],
  ['Cluster6','CA',141,0],
  ['Cluster1','AZ',5453,35],
  ['Cluster2','AZ',683,1],
  ['Cluster3','AZ',862,0],
  ['Cluster5','AZ',6228,30],
  ['Cluster1','AL',15001,449],
  ['Cluster2','AL',527,3],
  ['Cluster3','AL',836,0],
  ['Cluster4','AL',28648,1419],
  ['Cluster5','AL',3,0],
  ['Cluster1','CO',13,0],
  ['Cluster2','CO',396,0],
  ['Cluster3','CO',362,0],
  ['Cluster4','CO',78,10],
  ['Cluster5','CO',2473,32],
  ['Cluster6','CO',2063,64],
  ['Cluster3','DE',203,0],
  ['Cluster5','DE',686,2],
  ['Cluster6','DE',826,0],
  ['Cluster1','KS',1738,110],
  ['Cluster2','KS',12925,13],
  ['Cluster3','KS',15413,0],
  ['Cluster2','GA',2166,2],
  ['Cluster3','GA',86,0],
  ['Cluster4','GA',348,3],
  ['Cluster5','GA',4244,18],
  ['Cluster6','GA',1536,1],
  ['Cluster2','IA',351,0],
  ['Cluster5','IA',405,1],
  ['Cluster2','IL',914,1],
  ['Cluster3','IL',127,0],
  ['Cluster5','IL',1470,7],
  ['Cluster6','IL',516,1],
  ['Cluster1','IN',43,0],
  ['Cluster2','IN',667,1],
  ['Cluster3','IN',172,0],
  ['Cluster4','IN',149,1],
  ['Cluster5','IN',1380,5],
  ['Cluster6','IN',791,23],
  ['Cluster2','FL',1,0],
  ['Cluster5','FL',1,0],
  ['Cluster2','MD',1070,1],
  ['Cluster5','MD',1171,2],
  ['Cluster6','MD',33,0],
  ['Cluster4','TX',1,0],
  ['Cluster2','MS',407,0],
  ['Cluster3','MS',3,0],
  ['Cluster5','MS',457,2],
  ['Cluster6','MS',20,0],
  ['Cluster2','NC',557,0],
  ['Cluster3','NC',167,0],
  ['Cluster4','NC',95,1],
  ['Cluster5','NC',1090,5],
  ['Cluster6','NC',676,6],
  ['Cluster1','NM',1195,99],
  ['Cluster2','NM',350,3],
  ['Cluster3','NM',212,0],
  ['Cluster5','NM',1509,8],
  ['Cluster1','NV',3899,389],
  ['Cluster2','NV',147,0],
  ['Cluster3','NV',455,0],
  ['Cluster4','NV',1,1],
  ['Cluster5','NV',4100,16],
  ['Cluster1','OH',12,0],
  ['Cluster2','OH',634,2],
  ['Cluster3','OH',749,0],
  ['Cluster4','OH',119,1],
  ['Cluster5','OH',3705,19],
  ['Cluster6','OH',3456,25],
  ['Cluster2','PA',828,2],
  ['Cluster3','PA',288,0],
  ['Cluster4','PA',141,0],
  ['Cluster5','PA',2625,7],
  ['Cluster6','PA',1920,10],
  ['Cluster2','SC',1146,2],
  ['Cluster3','SC',212,0],
  ['Cluster4','SC',223,4],
  ['Cluster5','SC',1803,6],
  ['Cluster6','SC',761,8],
  ['Cluster2','TN',527,0],
  ['Cluster3','TN',90,0],
  ['Cluster5','TN',930,4],
  ['Cluster6','TN',395,1],
  ['Cluster1','ME',7232,58],
  ['Cluster2','ME',1272,0],
  ['Cluster3','ME',1896,0],
  ['Cluster4','ME',1,0],
  ['Cluster5','ME',10782,33],
  ['Cluster6','ME',1911,3],
  ['Cluster2','VA',495,0],
  ['Cluster3','VA',32,0],
  ['Cluster4','VA',7,0],
  ['Cluster5','VA',1557,12],
  ['Cluster6','VA',24,0],
  ['Cluster2','WA',460,1],
  ['Cluster4','WA',88,3],
  ['Cluster5','WA',956,3],
  ['Cluster2','WV',232,0],
  ['Cluster3','WV',71,0],
  ['Cluster5','WV',575,2],
  ['Cluster6','WV',368,3]
  ];
  var color ={Cluster1:"#3366CC", Cluster2:"#DC3912",  Cluster3:"#FF9900",
                  Cluster4:"#109618", Cluster5:"#990099", Cluster6:"#0099C6"};
  //var svg = d3.select("body").append("svg").attr("width", 1300).attr("height", 570).attr("padding",0);

  var margin = {top: 0, right: 0, bottom: 0, left: 0};
  var width = 1300 - margin.left - margin.right,
    height = 570 - margin.top - margin.bottom;

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("text").attr("x",250).attr("y",15)
    .attr("class","header").text("Cluster by Sentiment Score");
  svg.append("text").attr("x",1050).attr("y",15)
    .attr("class","header").text("Cluster by Freqency");

  var g =[svg.append("g").attr("transform","translate(150,50)")
      ,svg.append("g").attr("transform","translate(950,50)")];

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
