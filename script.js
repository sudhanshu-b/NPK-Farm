
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
    var nitrogenValue = parseFloat(document.getElementById("nitrogen").value);
    var phosphorusValue = parseFloat(document.getElementById("phosphorus").value);
    var potassiumValue = parseFloat(document.getElementById("potassium").value);

    // Check if values are within optimal range
    var nitrogenSuggestion = getNutrientSuggestion(nitrogenValue, 'nitrogen');
    var phosphorusSuggestion = getNutrientSuggestion(phosphorusValue, 'phosphorus');
    var potassiumSuggestion = getNutrientSuggestion(potassiumValue, 'potassium');

    // Display the result and suggestion
    displayResult(nitrogenValue, phosphorusValue, potassiumValue, nitrogenSuggestion, phosphorusSuggestion, potassiumSuggestion);
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

function displayResult(nitrogen, phosphorus, potassium, nitrogenSuggestion, phosphorusSuggestion, potassiumSuggestion) {
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<h2>Result:</h2>" +
        "<p>Nitrogen: " + nitrogen + "<br/>Suggestion: " + nitrogenSuggestion + "</p>" +
        "<p>Phosphorus: " + phosphorus + "<br/>Suggestion: " + phosphorusSuggestion + "</p>" +
        "<p>Potassium: " + potassium + "<br/>Suggestion: " + potassiumSuggestion + "</p>";
}

function getNutrientSuggestion(value, nutrient) {
    // Define the optimal ranges and suggestions for NPK values
    var rangesAndSuggestions = {
        nitrogen: { low: [50, 200], optimal: [200, 500], high: [500, Infinity], 
                    suggestions: ["Consider using fertilizers with higher nitrogen content, such as urea, ammonium sulfate, or ammonium nitrate.",
                                  "Consider using balanced fertilizers like 10-10-10 or 14-14-14 which will provide moderate levels of nitrogen.",
                                  "Choose fertilizers like calcium ammonium nitrate (CAN) or ammonium sulfate, which provide nitrogen without adding excessive amounts of other nutrients."] },
        phosphorus: { low: [5, 20], optimal: [20, 50], high: [50, Infinity], 
                      suggestions: ["Choose fertilizers with higher phosphorus content, like superphosphate or triple superphosphate.",
                                    "Balanced fertilizers usually contain a moderate amount of phosphorus.",
                                    "Consider using a balanced fertilizer with a lower phosphorus content, such as 15-5-10, to avoid overloading the soil with phosphorus."] },
        potassium: { low: [50, 200], optimal: [200, 400], high: [400, Infinity], 
                     suggestions: ["Try using fertilizers with higher potassium content, such as potassium chloride (muriate of potash) or potassium sulfate, can be applied.",
                                    "Balanced fertilizers generally provide a moderate amount of potassium.",
                                    "Opt for fertilizers with lower potassium content, like those with a ratio of 10-10-20. This helps maintain a balanced nutrient profile in the soil."] }
    };

    // Check if value falls within the low, optimal, or high range for the given nutrient
    if (value >= rangesAndSuggestions[nutrient].low[0] && value <= rangesAndSuggestions[nutrient].low[1]) {
        return rangesAndSuggestions[nutrient].suggestions[0]; // Low range suggestion
    } else if (value >= rangesAndSuggestions[nutrient].optimal[0] && value <= rangesAndSuggestions[nutrient].optimal[1]) {
        return rangesAndSuggestions[nutrient].suggestions[1]; // Optimal range suggestion
    } else if (value >= rangesAndSuggestions[nutrient].high[0]) {
        return rangesAndSuggestions[nutrient].suggestions[2]; // High range suggestion
    }
}
