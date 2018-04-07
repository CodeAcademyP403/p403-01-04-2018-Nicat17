var inp=document.querySelector("#first");
var btn=document.querySelector("#button");
var show=document.querySelector("#show");

var array=[];

btn.onclick=function(){
    var input=inp.value;
    
    array.push(Number(input));

    var max=array[0];

    for(var i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    show.innerHTML=`Max Number= ${max}`;
}
