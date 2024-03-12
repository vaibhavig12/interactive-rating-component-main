const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

// Function to update rating display
function updateRatingDisplay(rate) {
    rating.innerHTML = rate.innerHTML;
}

// Event listener for rating buttons
rates.forEach(rate => {
    rate.addEventListener("click", () => {
        rates.forEach(rate => rate.classList.remove('selected'));
        rate.classList.add('selected');
        updateRatingDisplay(rate);
    });
});

// Event listener for submit button
submitButton.addEventListener("click", () => {
    let ratingSelected = false;
    rates.forEach(rate => {
        if (rate.classList.contains('selected')) {
            ratingSelected = true;
        }
    });

    if (!ratingSelected) {
        alert("Please select a rating before submitting.");
    } else {
        thanksContainer.classList.remove("hidden");
        mainContainer.style.display = "none";
    }
});

// Event listener for "rate again" button
rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden");
    mainContainer.style.display = "block";
    rates.forEach(rate => rate.classList.remove('selected'));
    rating.innerHTML = ""; // Clear the displayed rating
});
