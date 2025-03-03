// Function to generate a random array
function generateArray() {
    let container = document.getElementById("array-container");
    container.innerHTML = "";
    let array = [];
    for (let i = 0; i < 20; i++) {
        let value = Math.floor(Math.random() * 100) + 1;
        array.push(value);
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 2}px`;
        container.appendChild(bar);
    }
    return array;
}

// Sorting Algorithms
async function bubbleSort() {
    let bars = document.getElementsByClassName("bar");
    let len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await new Promise((resolve) => setTimeout(resolve, 100));

            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                let tempHeight = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = tempHeight;
            }

            bars[j].style.backgroundColor = "blue";
            bars[j + 1].style.backgroundColor = "blue";
        }
    }
}

// Initialize
generateArray();
