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

// bubble sort
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

// Selection Sort
async function selectionSort() {
    let bars = document.getElementsByClassName("bar");
    let len = bars.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        bars[minIndex].style.backgroundColor = "red"; // Highlight the minimum bar

        for (let j = i + 1; j < len; j++) {
            bars[j].style.backgroundColor = "yellow"; // Highlight current comparison
            await new Promise((resolve) => setTimeout(resolve, 100));

            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                bars[minIndex].style.backgroundColor = "blue"; // Reset previous min
                minIndex = j;
                bars[minIndex].style.backgroundColor = "red"; // Highlight new min
            } else {
                bars[j].style.backgroundColor = "blue"; // Reset non-min bars
            }
        }

        if (minIndex !== i) {
            let tempHeight = bars[i].style.height;
            bars[i].style.height = bars[minIndex].style.height;
            bars[minIndex].style.height = tempHeight;
        }

        bars[minIndex].style.backgroundColor = "blue";
        bars[i].style.backgroundColor = "green"; // Mark sorted element
    }
}

// insertion Sort
async function insertionSort() {
    let bars = document.getElementsByClassName("bar");
    let len = bars.length;

    for (let i = 1; i < len; i++) {
        let key = parseInt(bars[i].style.height);
        let j = i - 1;
        bars[i].style.backgroundColor = "red"; // Highlight the key element

        await new Promise((resolve) => setTimeout(resolve, 200));

        while (j >= 0 && parseInt(bars[j].style.height) > key) {
            bars[j + 1].style.height = bars[j].style.height;
            bars[j].style.backgroundColor = "yellow"; // Highlight moving elements
            await new Promise((resolve) => setTimeout(resolve, 100));
            j--;
        }
        bars[j + 1].style.height = `${key}px`;

        bars[i].style.backgroundColor = "green"; // Mark sorted element
    }
}

// Initialize
generateArray();
