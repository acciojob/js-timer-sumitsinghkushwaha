// write js code here if required
document.addEventListener("DOMContentLoaded", function () {
  // Function to update the timer
  function updateTimer() {
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    // Display the timer in the HTML
    document.getElementById("timer").textContent = `${formattedDate}, ${formattedTime}`;
  }

  // Update the timer every second
  setInterval(updateTimer, 1000);

  // Initial update
  updateTimer();
});
