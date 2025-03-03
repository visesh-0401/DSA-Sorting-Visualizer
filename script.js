// Speed Controller
let speed = 300; // Default speed

document.getElementById("speed").addEventListener("input", function() {
    speed = 1050-this.value;
});

// Reset
document.getElementById("resetArray").addEventListener("click", function () {
    generateArray(); // Simply regenerate the array
});

// Function to generate a random array
let arraySize = 5; // Default size
let array = [];

document.getElementById("size").addEventListener("input", function () {
    arraySize = this.value;
    generateArray(); // Regenerate array when size changes
});

function generateArray() {
    let container = document.getElementById("bars-container");
    container.innerHTML = ""; // Clear previous bars
    let array = [];

    for (let i = 0; i < arraySize; i++) {
        let value = Math.floor(Math.random() * 100) + 1;
        array.push(value);

        let barContainer = document.createElement("div");
        barContainer.classList.add("bar-container");

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.width = "20px";
        bar.style.margin = "2px";
        bar.style.backgroundColor = "blue";

        let label = document.createElement("div");
        label.classList.add("bar-label");
        label.innerText = value;

        barContainer.appendChild(bar);
        barContainer.appendChild(label);
        container.appendChild(barContainer);
    }

    document.getElementById("array-display").innerText = array.join(", ");
}

generateArray(); // Generate the initial array


// Sorting Algorithms

// bubble sort
async function bubbleSort() {
    let bars = document.getElementsByClassName("bar");
    let len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await new Promise((resolve) => setTimeout(resolve, speed));

            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                let tempHeight = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = tempHeight;

                
                document.getElementById("array-display").innerText = [...bars].map(bar => bar.style.height.replace("px", "") / 3).join(", ");

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
            await new Promise((resolve) => setTimeout(resolve, speed));

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
            
        
        document.getElementById("array-display").innerText = [...bars].map(bar => bar.style.height.replace("px", "") / 3).join(", ");

        }

        bars[minIndex].style.backgroundColor = "blue";
        bars[i].style.backgroundColor = "green"; // Mark sorted element
    }
}

// insertion Sort
async function insertionSort() {
    let bars = document.querySelectorAll(".bar-container");

    for (let i = 1; i < bars.length; i++) {
        let keyHeight = bars[i].querySelector(".bar").style.height;
        let keyValue = bars[i].querySelector(".bar-label").innerText; // Get the number
        let j = i - 1;

        bars[i].querySelector(".bar").style.backgroundColor = "red"; // Highlight current element
        await new Promise((resolve) => setTimeout(resolve, speed));

        while (j >= 0 && parseInt(bars[j].querySelector(".bar").style.height) > parseInt(keyHeight)) {
            // Swap bar heights
            bars[j + 1].querySelector(".bar").style.height = bars[j].querySelector(".bar").style.height;
            // Swap number labels
            bars[j + 1].querySelector(".bar-label").innerText = bars[j].querySelector(".bar-label").innerText;
            bars[j].querySelector(".bar").style.backgroundColor = "yellow"; // Highlight comparison

            j--;

            await new Promise((resolve) => setTimeout(resolve, speed));

            // Update displayed array values
            document.getElementById("array-display").innerText = [...bars]
                .map(bar => bar.querySelector(".bar-label").innerText)
                .join(", ");
        }

        // Place key in correct position
        bars[j + 1].querySelector(".bar").style.height = keyHeight;
        bars[j + 1].querySelector(".bar-label").innerText = keyValue; // Update number label
        bars[i].querySelector(".bar").style.backgroundColor = "green"; // Mark as sorted

        await new Promise((resolve) => setTimeout(resolve, speed));

        // Update displayed array values
        document.getElementById("array-display").innerText = [...bars]
            .map(bar => bar.querySelector(".bar-label").innerText)
            .join(", ");
    }

    // Reset colors after sorting
    for (let bar of bars) {
        bar.querySelector(".bar").style.backgroundColor = "blue";
    }
}




// Initialize
generateArray();
