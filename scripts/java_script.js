
let factIndex = 0; //to keep a track of current fact

//adds click eventlistener to the button with id="curiousButton"
document.getElementById("curiousButton").addEventListener("click", function() {
    
    //Declares an array named facts that stores multiple space-related facts.
    const facts = [
        "Did you know? The Sun’s corona is hotter than its surface!",
        "ISRO's Mangalyaan was the first Asian probe to reach Mars!",
        "A day on Venus is longer than a year on Venus!",
        "Neutron stars are so dense that a sugar-cube-sized amount would weigh as much as all of humanity!",
        "Jupiter's moon Europa may have an ocean beneath its icy surface that could support life!"
    ];

    // Displays the fact in an alert box
    alert(facts[factIndex]);

    // To execute the facts in the array one by one, moves back to the top once all the facts are executed.
    factIndex = (factIndex + 1) % facts.length;
});

//adds click eventlistener to the button with id="themeButton" to toggle dark theme
document.getElementById("themeButton").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

// Set the launch date (January 1, 2026, at midnight)
const launchDate = new Date("January 1, 2026 00:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime(); //to get current time

    const timeLeft = launchDate - now;//to get the time difference between the launch date and now.

    //converts the calculated time difference in the format : ddd:hh:mm:ss
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    //to format the countdown display
    const formattedTime = `
        <span>${days}d</span> : 
        <span>${String(hours).padStart(2, "0")}</span> : 
        <span>${String(minutes).padStart(2, "0")}</span> : 
        <span>${String(seconds).padStart(2, "0")}</span>`;

    //to update the countdown timer in the html
    document.getElementById("countdown").innerHTML = formattedTime;

    //to diplay the message "Launched" if the timer reaches the value 0
    if (timeLeft < 0) {
        clearInterval(timer); //to stop the timer
        document.getElementById("countdown").innerHTML = "🚀 Launched!";//updates the countdown display to launched
    }
}

// Start the countdown timer and update it every second
const timer = setInterval(updateCountdown, 1000);

updateCountdown(); // runs immediately when the page loads to prevent 1 sec delay
