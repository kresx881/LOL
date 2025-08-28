let start = document.getElementById("start")
const colors = ["pink", "white", "red", "green", "blue", "yellow"]
const cells = document.querySelectorAll("#camp td")
const colorbtn = document.querySelectorAll(".btn")
let firstCell = document.getElementById("first")

let final = document.getElementById ("final")

start.addEventListener("click", () => {
    //firstCell.style.backgroundColor = "red"
    cells.forEach(cell => {
        cell.classList.remove(...cell.classList)
        const randColor = colors[Math.floor(Math.random() * colors.length)]
        cell.classList.add(randColor)
        cell.classList.remove("infected")
        firstCell.classList.add("infected")
    })
    firstCell.classList.add("red")
    final.innerHTML = ""
});



colorbtn.forEach(classColor => {
    
    classColor.addEventListener("click", () => {
        const aaa = classColor.dataset.value

        startCell = camp.rows[0].cells[0]

        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 14; j++) {
                const cella = camp.rows[i].cells[j]
                if (cella.classList.contains("infected")) {
                    cella.classList.remove(...cella.classList)
                    cella.classList.add(aaa)
                    cella.classList.add("infected")
                }


            }

        }

        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 14; j++) {
                const cella = camp.rows[i].cells[j]
                if (cella.classList.contains("infected")) {
                    fillCells(i, j, aaa)
                }


            }

        }
    })
})

function fillCells(r, c, newColor) {
    const righe = camp.rows

    if (r < 0 || r > 13 || c < 0 || c > 13) return
    const cella = righe[r].cells[c]
    if (!cella.classList.contains("infected")) {
        return
    } else {
        cella.classList.remove(...cella.classList)
        cella.classList.add(newColor)
        cella.classList.add("infected")
    }

    const vicini = [
        [r - 1, c - 1],
        [r - 1, c],
        [r - 1, c + 1],
        [r, c - 1],
        [r, c + 1],
        [r + 1, c - 1],
        [r + 1, c],
        [r + 1, c + 1],
    ]

    vicini.forEach(([vr, vc]) => {
        if (vr >= 0 && vr < 14 && vc >= 0 && vc < 14) {
            const vicino = righe[vr].cells[vc]
            
    
            if (!vicino.classList.contains("infected") && vicino.classList.contains(newColor)) {
                vicino.classList.add("infected")
                fillCells(vr, vc, newColor)
            }
        }
    })

    if (verifica()) {
        final.innerHTML = "YOU WIN!!!"
        
    }
    
}

function verifica() {
    const colore = Array.from(firstCell.classList).find(cls => colors.includes(cls));
    
    for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 14; j++) {
            const cella = camp.rows[i].cells[j];
            const coloreCella = Array.from(cella.classList).find(cls => colors.includes(cls));

            if (coloreCella !== colore) {
                return false;
            }
        }
    }
    return true;
}


