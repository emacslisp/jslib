function upsetArr(arr){
    return arr.sort(function(){ return Math.random() - 0.5});
}


function maxArr(arr){
    return Math.max.apply(null,arr);
}

function minArr(arr){
    return Math.min.apply(null,arr);
}


function sumArray(arr){
    var sumText=0;
    for(var i=0,len=arr.length;i<len;i++){
        sumText+=arr[i];
    }
    return sumText
}

function covArr(arr){
    var sumText=sumArray(arr);
    var covText=sumText/arr.length;
    return covText
}


