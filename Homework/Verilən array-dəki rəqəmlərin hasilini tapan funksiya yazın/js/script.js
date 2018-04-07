var num = prompt("Ededlerin sayin daxil edin:");

array=[];

for(var i=0;i<num;i++){
    array.push(Number(prompt("Ededi daxil edin:")));
}

function funk(arr){
    var mult=1;

    for(var i=0;i<num;i++){
        mult*=arr[i];
    }
    return mult;
}

console.log("Result="+funk(array));