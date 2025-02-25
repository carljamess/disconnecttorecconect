// script.js

document.addEventListener("DOMContentLoaded", function () {
    const rsvpButtons = document.querySelectorAll('.event-button');
    const pledgeButton = document.querySelector('.pledge button');

    // RSVP Button interaction
    rsvpButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Thank you for RSVPing! We look forward to seeing you on Unplugging Day!');
        });
    });

    // Pledge Button interaction
    pledgeButton.addEventListener('click', function (e) {
        e.preventDefault();
        const emailInput = document.querySelector('.pledge input').value;
        if (emailInput) {
            alert(`Thank you for pledging to unplug on March 7th, 2025!`);
        } else {
            alert('Please enter a valid email to pledge.');
        }
    });
});
// Countdown Timer JavaScript

document.addEventListener("DOMContentLoaded", function () {
    // Set the target date (March 7th, 2025)
    const targetDate = new Date("March 7, 2025 00:00:00").getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(function () {
        // Get the current time
        const now = new Date().getTime();
        
        // Calculate the time remaining
        const timeRemaining = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the results
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // If the countdown reaches zero, display a message
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerHTML = "<h3>It's Unplugging Day! 🎉</h3>";
        }
    }, 1000);
});

