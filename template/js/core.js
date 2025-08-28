let btn = document.getElementById ("btn")
let input = document.getElementById ("input")
let list = document.getElementById ("list")


btn.addEventListener("click", () => {
    let valore = input.value.trim()
    if (valore !== "") {
        let li = document.createElement("li")
        li.textContent = valore
        
        li.addEventListener("click", () => {
            list.removeChild(li)
        });

        list.appendChild(li)
        input.value = ""; 
    }
});

