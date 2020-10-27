const arrayOfColors = ["red", "green", "yellow", "burlywood", "brown", "FireBrick", "GreenYellow", "MediumOrchid", "grey"];

const container = document.querySelector(".container");
const getH3 = document.querySelectorAll(".color h3");
const getDiv = document.querySelectorAll(".color");
const colorContainer = document.querySelector(".colorContainer");
const guesses = document.querySelector(".guesses");
const sortedLink = document.getElementById("sortedLink");
const titlePage = document.querySelector("title");

const sortedContainerDiv = document.querySelectorAll(".sortedContainer div")
const sortedContainerH3 = document.querySelectorAll(".sortedContainer div h3");

let guessCount = 0;

const correctColor = arrayOfColors[Math.floor(Math.random()*arrayOfColors.length)];

console.log(`The correct color is ${correctColor}.`);

if (titlePage.textContent == "COLOR GUESSING GAME") {
    //Changing colorBackground for Index Page. 
    let colorInterval = setInterval(function () {
        container.style.background = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
    }, 750);
}

if (titlePage.textContent == 'THE GUESSING GAME') {
    arrayOfColors.forEach((val, ind, arr) => {
        getDiv[ind].style.background = val;
        getH3[ind].textContent = val;
    
        getDiv[ind].addEventListener("click", function () {
            guessCount += 1;
            guesses.textContent = guessCount;
    
            if (this.innerText > correctColor) {
                this.innerText = "Your guess is alphabetically GREATER than the correct color.";
            } else if (this.innerText < correctColor) {
                this.innerText = "Your guess is alphabetically LESS than the correct color.";
            } else {
                this.innerHTML = "<h1>" + "CORRECT!!!" + "</h1>";
                arrayOfColors.forEach((val, ind, arr) => {
                    getDiv[ind].style.pointerEvents = "none";
    
                    if (getDiv[ind].innerText != "CORRECT!!!") {
                        getDiv[ind].style.opacity = 0;
                    } else {
                        getDiv[ind].style.width = "190px";
                        getDiv[ind].style.height = "75px";
                        sortedLink.style.display = "block";
                    }
                })
            }
        });
    });
}

if (titlePage.textContent = "Sorted Colors") {
    const arrayOfColorsSorted = arrayOfColors.sort();
    arrayOfColorsSorted.forEach((val, ind, arr) => {
        sortedContainerH3[ind].textContent = val;
        sortedContainerDiv[ind].style.background = val;
    });
}
