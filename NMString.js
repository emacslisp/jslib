function trim(str,type){
    switch (type){
        case 1:return str.replace(/\s+/g,"");
        case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:return str.replace(/(^\s*)/g, "");
        case 4:return str.replace(/(\s*$)/g, "");
        default:return str;
    }
}


function replaceAll(str,AFindText,ARepText){
　　　raRegExp = new RegExp(AFindText,"g");
　　　return str.replace(raRegExp,ARepText);
}



//randomNumber(10)
//"2584316588472575"

//randomNumber(14)
//"9b405070dd00122640c192caab84537"

//Math.random().toString(36).substring(2);
//"83vhdx10rmjkyb9"
function randomNumber(count){
   return Math.random().toString(count).substring(2);
}

