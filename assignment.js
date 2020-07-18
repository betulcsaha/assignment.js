//feetToMile
function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}
var result=feetToMile(52800);
console.log(result);
//woodCalculator
function woodCalculator(chair,table,bed){
    var chaircount=chair*1*14
    var tablecount=table*3*5
    var bedcount=bed*5*12
    var totalwood=chaircount+tablecount+bedcount;
    return totalwood;
}
var woodResult=woodCalculator(5,7,9);
console.log(woodResult);
//brickCalculator
function brickCalculator(floors){
    var=result;
    if(floors<=10){
        result1=floors*15*1000;
    }
}else if{(11<=floors<=20)
    result2=floors*12*1000;

}else{(floors>=20)
    result3=floors*10*1000;

}totalResult=result1+result2+result3;
return totalResult;
//tinyFriend
function tinyFriend(names){
    var lengthOfTinyFriend=names[0];
     for (var i=0;i<names.length;i++){
         if(names[i].length==0){
             return "You can't use empty string as a name";
         }else if(names[i].length<lengthOfTinyFriend.length){
             lengthOfTinyFriend=names[i];
         }
         return lengthOfTinyFriend;
     }
        
    }
}