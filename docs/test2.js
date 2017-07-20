function draw_bipartite_table() {
  var bartite_datatable = 'dataset/bipartite_table_final.csv';

  d3.csv(bartite_datatable, function(data2) {
      //uncomment the statement below to convert it into array
      //data2 = data2.map(function(data2) {return [data2["new_venue_type"], data2["spe_clus_id"], data2["venue_name"], +data2["med_senti_score"]];});   //Once loaded, copy to dataset.
      console.log(data2);

      // capture restaurant label for filter
      $("[class*=label]").mouseover(function() {
          var selected_label =  $(event.target).text();
          console.log(selected_label);


  d3.text(bartite_datatable, function(data2) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select('#bipartite_table')
                      .append("table")
                        .selectAll("tr")
                            .data(parsedCSV).enter()
                            .append("tr")
                        .selectAll("td")
                            .data(function(d) { return d; }).enter()
                            .append("td")
                            .text(function(d) { return d; });
                });





      //  retrieve table
      $(document).ready(function($) {
        $('myTable').hide();
      $("[class*=label]").mouseover(function() {
            $('myTable').show();
            var selected_label =  $(event.target).text();
            var selection =  selected_label;
            var dataset = DataTable.find('tr');
            dataset.show();
            dataset.filter(function(index, item) {
              return $(item).find('td:first-child').text().split(',').indexOf(selection) === -1;
            }).hide();

        });
      });

      });
  });
}




// create cross filter based on label
//  var filterdataset = crossfilter(data2);
//  var tablefilter = filterdataset.dimension(function(data2) {return data2.new_venue_type;})
//      tablefilter.filter(selected_label);
    //tablescore = filterdataset.dimension(function(data2) {return Math.floor(data2.med_senti_score);}),
    //tablefilter = filterdataset.dimension(function(data2) {return data2.new_venue_type;}),
    //filterType = tablescore.group().reduceSum(function(data2) {return +data2.med_senti_score}),
    //filterTable = tablescore.groupAll().reduceCount();

//testing - uncomment to do testing, view results in console
//  var totalCount = filterdataset.groupAll().reduceCount().value();
//  console.log(totalCount)

//construct table
