const display = document.querySelector('#display')


const clearDisplay = ()=> {
    display.innerHTML = ''
}

const del = ()=> {
    const currentValue = display.lastChild
    currentValue.remove()
}

const appendToDisplay = (num)=> {
    display.append(num)
}

const calculation = () => {  
    try {  
        const expression = display.innerHTML;  

        const result = eval(expression);  

        clearDisplay();  
        appendToDisplay(result);  
    } catch (error) {  
        clearDisplay();  
        appendToDisplay('Error');  
    }
}