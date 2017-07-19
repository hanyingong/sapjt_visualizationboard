d3.csv(inputSaleTrans, function(data) {
    // Since its a csv file we need to format the data a bit.
    var dateFormat = d3.time.format('%Y%b%d');
    data.forEach(function(d) {
        dumbDate = 01;
        d.dateFull = dateFormat.parse(d.Year + d.Month + dumbDate);
        d.monthFmt = d3.time.month(d.dateFull); // pre-calculate month for better performance
        d.yearFmt = d3.time.year(d.dateFull); // pre-calculate year for better performance
        d.Sales = numberFormat(Math.round(d[saleCol]));
        d.propertyNameFmt = d[propertyCol];
        d.Item_number = d.Item_number;
    });
    xfProductSaleData = crossfilter(data);
    // Set up dinmensions and groups that commonly used
    yearDim = xfProductSaleData.dimension(function(d) {
        return d[yearCol]
    });
    monthDim = xfProductSaleData.dimension(function(d) {
        return d[monthCol]
    });
    productDim = xfProductSaleData.dimension(function(d) {
        return d[productCol]
    });
    sectorDim = xfProductSaleData.dimension(function(d) {
        return d[sectorCol]
    });

    hotelDim = xfProductSaleData.dimension(function(d) {
        return d.propertyNameFmt;
    });

    itemDim = xfProductSaleData.dimension(function(d) {
        return d.Item_number;
    });

    itemTypeDim = xfProductSaleData.dimension(function(d) {
        return d[itemTypeCol]
    })

    salesByProductGroup = productDim.group().reduceSum(function(d) {
        //  return d[saleCol]
        return Math.round(d[saleCol]);
    });

    yearFmtDim = xfProductSaleData.dimension(function(d) {
        return d.yearFmt
    });
    monthFmtDim = xfProductSaleData.dimension(function(d) {
        return d.monthFmt
    });
    dateMonthYearFmtDim = xfProductSaleData.dimension(function(d) {
        return d.dateFull
    });

    saleCodeDim = xfProductSaleData.dimension(function(d) {
        return d[saleCodeCol]
    });

    productSalesByMonth = monthFmtDim.group().reduceSum(function(d) {
        return Math.round(d[saleCol]);
    });
    productSalesByYear = yearFmtDim.group().reduceSum(function(d) {
        //return d[saleCol]
        return numberFormat(Math.round(d[saleCol]));
    });

    productSalesByHotel = hotelDim.group().reduce(function(p, v) {
        p.Sales += + v["Sales"];
        p.Growth += + v["Growth"];
        return p;
    }, function(p, v) {
        p.Sales -= + v["Sales"];
        //if (p.Sales < 0.001) p.Sales = 0; // do some clean up
        p.Growth -= + v["Growth"];
        return p;
    }, function() {
        return {Sales: 0, Growth: 0}
    });
