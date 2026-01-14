let input = document.getElementById("inputBox"); /*identify inputbox*/
let buttons =document.querySelectorAll  /*select all the button*/
('button')

let string="";     /*keeps track of everything the user types*/
let arr=Array.from(buttons);   /*convert proper array*/
arr.forEach(button =>{ button.addEventListener('click',(e)=>{   /*Add click event to every button*/
    if(e.target.innerHTML == '='){
        string =eval(string); /*calculate the value */
        input.value = string;
    }
     
    else if(e.target.innerHTML == 'AC'){  /*All Clear*/
        string="";
        input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){            
        string=string.substring(0, string.length-1); /*removes the last character*/
        input.value = string;
    }
    else{
        string += e.target.innerHTML;
     input.value =string;
    }


   })
})