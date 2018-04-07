var num = prompt("Ededlerin sayin daxil edin:");

array=[];

for(var i=0;i<num;i++){
    array.push(Number(prompt("Ededi daxil edin:")));
}

function funk(arr){
    var sum=0;

    for(var i=0;i<num;i++){
        if(arr[i]%2==0){
            sum+=arr[i];
        }
    }
    return sum;
}

console.log("Result="+funk(array));