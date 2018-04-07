var inp=document.querySelector("#first");
var btn=document.querySelector("#button");

btn.onclick=function(){
    var input=inp.value;
    
    for(var i=1;i<=10;i++){
        console.log(input+"*"+i+"="+input*i);
    }

}
