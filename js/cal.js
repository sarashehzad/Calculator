let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '=') {
            try{
                string = eval(string);
                document.querySelector('input').value = string;
            }
            catch(error){
               alert('Error');

            }
           
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'CE') {
            const inputValue = document.querySelector('input').value;
            const newInputValue = inputValue.slice(0, -1);
            document.querySelector('input').value = newInputValue;
        }
       
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
}) 
