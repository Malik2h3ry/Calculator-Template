let string = "";
let buttons = document.querySelectorAll('.row');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'b3') {
            string = slice(0, - 1);
            document.querySelector('input').value = string;
        }


        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }


        // display.innerText = display.innerText.slice(0, -1)
        //break

    })
})