var num = prompt("Ededlerin sayin daxil edin:");

array=[];

for(var i=0;i<num;i++){
    array.push(Number(prompt("Ededi daxil edin:")));
}

function funk(arr){
    var sum=0;

    for(var i=0;i<num;i++){
        sum+=arr[i]*arr[i];
    }
    return sum;
}

console.log("Result="+funk(array));