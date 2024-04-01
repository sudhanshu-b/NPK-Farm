
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ 
        pageLanguage: 'en', // Default page language
        autoDisplay: false, // Disable automatic display of the widget
        gaTrack: false // Enable tracking of translation usage
    }, 'google_translate_element');

    // Add event listener for language change
    google.translate.TranslateElement.setOnSelectLanguageCallback(function (language) {
        // Handle language change event here
        console.log("Selected language: " + language);
        // You can perform any action based on the selected language, such as updating content
    });
}
function submitForm() {
    // Get form values
    var season = document.getElementById("season").value;
    var nitrogenValue = parseFloat(document.getElementById("nitrogen").value);
    var phosphorusValue = parseFloat(document.getElementById("phosphorus").value);
    var potassiumValue = parseFloat(document.getElementById("potassium").value);

    // Check season and month
    var month = (new Date()).getMonth(); // Get current month (0-indexed)

    // Case 1: Ambiya Bahar
    if (season === "Ambiya Bahar") {
        switch (month) {
            // February or March
            case 1: // February
            case 2: // March
                if (nitrogenValue >= 550 && phosphorusValue >= 360 && potassiumValue >= 300) {
                    displayResult("Nutrient level is optimum");
                } else {
                    displayResult("Optimum nutrient level not met. Consider the following suggestions: \n" +
                                  "- Consider using fertilizers with higher nitrogen content, such as urea, ammonium sulfate, or ammonium nitrate. \n" +
                                  "- Choose fertilizers with higher phosphorus content, like superphosphate or triple superphosphate. \n" +
                                  "- Try using fertilizers with higher potassium content, such as potassium chloride (muriate of potash) or potassium sulfate.");
                }
                break;
            // April, May, June, July, August, September
            case 3: // April
            case 4: // May
            case 5: // June
            case 6: // July
            case 7: // August
            case 8: // September
                if (nitrogenValue >= 450 && phosphorusValue >= 250 && potassiumValue >= 300) {
                    displayResult("Nutrient level is optimum");
                } else {
                    displayResult("Optimum nutrient level not met. Consider the following suggestions: \n" +
                                  "- Choose fertilizers like calcium ammonium nitrate (CAN) or ammonium sulfate, which provide nitrogen without adding excessive amounts of other nutrients. \n" +
                                  "- Consider using a balanced fertilizer with a lower phosphorus content to avoid overloading the soil with phosphorus. \n" +
                                  "- Opt for fertilizers with lower potassium content. This helps maintain a balanced nutrient profile in the soil.");
                }
                break;
            // October, November, December
            case 9: // October
            case 10: // November
            case 11: // December
                if (nitrogenValue >= 450 && phosphorusValue >= 250 && potassiumValue >= 300) {
                    displayResult("Nutrient level is optimum");
                } else {
                    displayResult("Optimum nutrient level not met. Consider the following suggestions: \n" +
                                  "- Choose fertilizers like calcium ammonium nitrate (CAN) or ammonium sulfate, which provide nitrogen without adding excessive amounts of other nutrients. \n" +
                                  "- Consider using a balanced fertilizer with a lower phosphorus content to avoid overloading the soil with phosphorus. \n" +
                                  "- Opt for fertilizers with lower potassium content. This helps maintain a balanced nutrient profile in the soil.");
                }
                break;
        }
    }
    // Case 2: Mrig Bahar
    else if (season === "Mrig Bahar") {
        switch (month) {
            // April, May, June, July, August
            case 3: // April
            case 4: // May
            case 5: // June
            case 6: // July
            case 7: // August
                if (nitrogenValue >= 550 && phosphorusValue >= 360 && potassiumValue >= 300) {
                    displayResult("Nutrient level is optimum");
                } else {
                    displayResult("Optimum nutrient level not met. Consider the following suggestions: \n" +
                                  "- Consider using fertilizers with higher nitrogen content, such as urea, ammonium sulfate, or ammonium nitrate. \n" +
                                  "- Choose fertilizers with higher phosphorus content, like superphosphate or triple superphosphate. \n" +
                                  "- Try using fertilizers with higher potassium content, such as potassium chloride (muriate of potash) or potassium sulfate.");
                }
                break;
            // September, October, November, December
            case 8: // September
            case 9: // October
            case 10: // November
            case 11: // December
                if (nitrogenValue >= 450 && phosphorusValue >= 250 && potassiumValue >= 300) {
                    displayResult("Nutrient level is optimum");
                } else {
                    displayResult("Optimum nutrient level not met. Consider the following suggestions: \n" +
                                  "- Choose fertilizers like calcium ammonium nitrate (CAN) or ammonium sulfate, which provide nitrogen without adding excessive amounts of other nutrients. \n" +
                                  "- Consider using a balanced fertilizer with a lower phosphorus content to avoid overloading the soil with phosphorus. \n" +
                                  "- Opt for fertilizers with lower potassium content. This helps maintain a balanced nutrient profile in the soil.");
                }
                break;
            // February, March, April
            case 1: // February
            case 2: // March
            case 3: // April
                if (nitrogenValue >= 450 && phosphorusValue >= 250 && potassiumValue >= 300) {
                    displayResult("Nutrient level is optimum");
                } else {
                    displayResult("Optimum nutrient level not met. Consider the following suggestions: \n" +
                                  "- Choose fertilizers like calcium ammonium nitrate (CAN) or ammonium sulfate, which provide nitrogen without adding excessive amounts of other nutrients. \n" +
                                  "- Consider using a balanced fertilizer with a lower phosphorus content to avoid overloading the soil with phosphorus. \n" +
                                  "- Opt for fertilizers with lower potassium content. This helps maintain a balanced nutrient profile in the soil.");
                }
                break;
        }
    }
}
// Function to get the current date and month
function getCurrentDateAndMonth() {
    var currentDateElement = document.getElementById("currentDate");
    var currentMonthElement = document.getElementById("currentMonth");

    var currentDate = new Date();
    var optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    var optionsMonth = { month: 'long' };

    var formattedDate = currentDate.toLocaleDateString('en-US', optionsDate);
    var formattedMonth = currentDate.toLocaleDateString('en-US', optionsMonth);

    currentDateElement.textContent = "Current Date: " + formattedDate;
    currentMonthElement.textContent = "Current Month: " + formattedMonth;
}
// Call the function to display the current date and month on page load
getCurrentDateAndMonth();

function displayResult(message) {
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<h2>Result:</h2><p>" + message + "</p>";
}


