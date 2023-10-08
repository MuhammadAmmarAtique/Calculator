let string="";
let buttons=document.querySelectorAll('button');
// console.log(buttons);

buttons.forEach( (button)=>{

    button.addEventListener('click',()=>{
        // console.log(button);

        if (button.innerHTML == "=") 
        {
            // if there is ÷ or x in string it will be replaced with /,* which is understandable by browser.
           string= string.replace('÷','/');
           string= string.replace('x','*');
            console.log(string);

            // After concating string ,eval()  function will take concatenated string as its argument and treats that string as JavaScript code.
           string=eval(string);
           document.querySelector('input').value= string;
        } 

        // For clearing everything in input field.
        else if (button.innerHTML == "C") 
        {
            string="";
            document.querySelector('input').value= string;
        }

        //For last letter from input field
        else if(button.innerHTML == "←")
        {
            // b/c sometimes after evaluating by eval() it was converting into no, so converting back into string
            string=string.toString();
            string=string.slice(0,-1);
            document.querySelector('input').value= string;
        }

        // first of all user will type numbers so this code will be executed first!
        else 
        {
            string=string+ button.innerHTML;
            document.querySelector('input').value= string
        } 
    })
} )



