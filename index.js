let string="";

let buttons=document.querySelectorAll('button');
// console.log(buttons);

buttons.forEach( (button)=>{

    button.addEventListener('click',()=>{
        // console.log(button);

        if (button.innerHTML == "=") 
        {
           string=eval(string);
           document.querySelector('input').value= string;
        } 
        else if (button.innerHTML == "C") 
        {
            string="";
            document.querySelector('input').value= string;
            
        }
        else {
            string=string+ button.innerHTML;
            document.querySelector('input').value= string;
        }


       
    })
} )


