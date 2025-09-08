// Initialize counters if not already set, and update the display fields.
function initCounters() {
    if (localStorage.getItem("drinkCount") === null) {
        localStorage.setItem("drinkCount", 0);
    }
    document.getElementById("drinkCount").value = localStorage.getItem("drinkCount");
};

function initSavedDate() {
    if (localStorage.getItem("savedDate") === null) {
        localStorage.setItem("savedDate", "");
    }
    document.getElementById("drinkCount").innerText = localStorage.getItem("drinkCount");
};

initCounters();
initSavedDate();
document.getElementById("drinkCount").value = localStorage.getItem("drinkCount");
document.getElementById("savedDate").innerText = localStorage.getItem("savedDate") || "";

// Increment the drink counter and update LocalStorage and display.
document.getElementById("addDrinkCountBtn").addEventListener("click", function() {
    let count;
    count = localStorage.getItem("drinkCount");
    count++;
    document.getElementById("drinkCount").value = count;
    localStorage.setItem("drinkCount", count);

    // save the date
    let currentDate = new Date();
    const options = {
        timeZone: 'Asia/Seoul',
        dateStyle: 'short'
    };
    const koreanFormatter = new Intl.DateTimeFormat('ko-KR', options);
    const formattedDate = koreanFormatter.format(currentDate);
    const savedDate = localStorage.getItem("savedDate");

    localStorage.setItem("savedDate", savedDate + "\n" + formattedDate);
    document.getElementById("savedDate").innerText = localStorage.getItem("savedDate");
});
    
// Initialize the drink count.
document.getElementById("initDrinkCountBtn").addEventListener("click", function() {
    localStorage.setItem("drinkCount", 0);
    localStorage.setItem("savedDate", "");
    document.getElementById("savedDate").innerText = "";
    document.getElementById("drinkCount").value = 0;
});