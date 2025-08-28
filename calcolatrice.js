let numbers = document.querySelectorAll (".calcBtn")
//let operationSelect = document.querySelectorAll (".oper")
let display = document.getElementById ("display")
const moltiply = document.getElementById ("moltiply")
const sum = document.getElementById ("sum")
const minus = document.getElementById ("minus")
const devide = document.getElementById ("devide")
const del = document.getElementById ("delet")
let result = 0
//let n1 = null
//let n2 = null
let n1 = ""
let n2 = ""
let eq = document.getElementById ("eq")
let operation
let miniDisplay = document.getElementById ("miniDis")
let his = ""


/*numbers.forEach (button => {
         button.addEventListener ("click", () =>  {
            if (n1 === null) {
                n1 = Number(button.dataset.value)
                display.textContent = n1
            } else {
                n2 = Number(button.dataset.value)
                display.textContent = n1
            }
            console.log (n1, n2)
         })
        
})
*/

let cond = false
numbers.forEach (button => {
         button.addEventListener ("click", () =>  {
            
            if (cond === false) {
                n1 += button.dataset.value
                display.textContent = n1
                console.log ("n1:",n1, "n2:",n2)
                his += button.dataset.value
                miniDisplay.textContent = his
                
            } else if (cond = true){
                n2 += button.dataset.value
                display.textContent = n2
                console.log (n1, n2)
                his += button.dataset.value
                miniDisplay.textContent = his
            }
            
            console.log ("n1:",n1, "n2:",n2)
         })
        
})

moltiply.addEventListener ("click", () => {
    display.textContent = "x"
    operation = "moltiply"
    cond = true
    console.log ("x",n1, n2, cond)
    his += "*"
    miniDisplay.textContent = his
})
sum.addEventListener ("click", () => {
    display.textContent = "+"
    console.log ("+")
    operation = "sum"
    cond = true
    his += "+"
    miniDisplay.textContent = his
})
minus.addEventListener ("click", () => {
    display.textContent = "-"
    console.log ("-")
    operation = "minus"
    cond = true
    his += "-"
    miniDisplay.textContent = his
})
devide.addEventListener ("click", () => {
    display.textContent = "/"
    console.log ("/")
    operation = "devide"
    cond = true
    his += "/"
    miniDisplay.textContent = his
})


eq.addEventListener ("click", () => {
    n1 = Number(n1)
    n2 = Number(n2)
    switch (operation) {
        case "moltiply":
            result = n1 * n2
            break;
        case "sum":
            result = n1 + n2
            break;
        case "minus":
            result = n1 - n2
            break;
        case "devide":
            result = n1 / n2
            break;
            
        default:
             break;
    }
    display.textContent = result
    console.log (result)
    n1 = result
    n2 = ""
    his = result
    
})
        
del.addEventListener ("click", () => {
    result = null
    n1 = ""
    n2 = ""
    operation = ""
    display.textContent = ""
    cond = false
    console.log (n1, n2, result, operation )
    his = ""
    miniDisplay.textContent = his
})