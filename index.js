let display= document.querySelector("#display");
let buttons=  Array.from(document.querySelectorAll("button"));
let string="";
 
buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
        if (e.target.innerHTML == "=") {
            string=eval(string);
            display.value=string;   
        }
        else if( e.target.innerHTML == "AC"){
            string="";
            display.value=string;
        }
        else if( e.target.innerHTML== "DE" ){
            string=string.substring(0,string.length-1);
            display.value=string;
        }else if( e.target.innerHTML == "%"){
            string=string.replace(("%","/100"));
        }
        else{
        string+=e.target.innerHTML;
        display.value=string;}
    }
    )
})

