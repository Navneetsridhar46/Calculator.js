// display content 

const displayContent = (content) =>{
    display.value += content
}

const clearScreen = () =>{
    display.value = ""
}

const modulusOpr = () =>{
    
}

const totalOutput = () =>{
    try{display.value = eval(display.value)}
    catch{
        display.value = 'Error'
    }
}

const removeItem = () =>{
    display.value = display.value.slice(0,-1)
}