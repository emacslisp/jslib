var datediff = function(timeStart, timeEnd) {
    
    var date1 = new Date(timeStart);
    var date2 = new Date(timeEnd);

    return ((data2 - date1)/(60*60000));
}


var tomorrow = function() {
    var t = new Date();

    return t.setDate(t.getDate() + 1);
}
