// Initialize counters if not already set, and update the display fields.
function initCounters() {
    if (localStorage.getItem("drinkCount") === null) {
        localStorage.setItem("drinkCount", 0);
    }
    // document.getElementById("drinkCount").value = localStorage.getItem("drinkCount"); // ?? duplciated
};

function getAllSavedDates() {
    let allSavedDates;
    allSavedDates = localStorage.getItem("savedDate");
    return allSavedDates;
};

initCounters();
document.getElementById("drinkCount").value = localStorage.getItem("drinkCount");
document.getElementById("savedDate").innerText = localStorage.getItem("savedDate") || "->"; // getAllSavedDates();

// Increment the drink counter and update LocalStorage and display.
document.getElementById("addDrinkCountBtn").addEventListener("click", function() {
    let count;
    count = localStorage.getItem("drinkCount");
    count++;
    document.getElementById("drinkCount").value = count;
    localStorage.setItem("drinkCount", count);

    // save the date
    let currentDate = new Date();
    currentDate = currentDate.toISOString().slice(5, 10) + "_" + currentDate.toISOString().slice(11, 16);
    const beforeDate = localStorage.getItem("savedDate");
    localStorage.setItem("savedDate", beforeDate + ", " + currentDate);
    document.getElementById("savedDate").innerText = localStorage.getItem("savedDate") || "->";
});
    
// Initialize the drink count.
document.getElementById("initDrinkCountBtn").addEventListener("click", function() {
    localStorage.setItem("drinkCount", 0);
    localStorage.setItem("savedDate", "->");
    document.getElementById("savedDate").innerText = "->";
    document.getElementById("drinkCount").value = 0;
});