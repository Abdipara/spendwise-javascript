// ==========================================
// 1. Store Initial Application Data
// ==========================================
let totalBudget = 0;
let totalExpenses = 0;

// ==========================================
// 2. Collect User Input
// ==========================================
// Using prompt() to gather initial user input and converting strings to numbers using parseFloat()
function getUserInput() {
    let budgetInput = prompt("Enter your total monthly budget (e.g., 1000):");
    let expenseInput = prompt("Enter your total initial expenses (e.g., 450):");

    // Convert inputs to numbers; default to 0 if input is invalid
    totalBudget = parseFloat(budgetInput) || 0;
    totalExpenses = parseFloat(expenseInput) || 0;
}

// ==========================================
// 3. Reusable Budget Calculation Functions
// ==========================================

// Function to calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Function to calculate expense percentage relative to budget
function calculateExpensePercentage(budget, expenses) {
    if (budget === 0) return 0;
    return ((expenses / budget) * 100).toFixed(2);
}

// ==========================================
// 4. Display Results in the Browser Console
// ==========================================
function runSpendWise() {
    console.log("==================================");
    console.log("   WELCOME TO SPENDWISE TRACKER   ");
    console.log("==================================");

    // Get input from user
    getUserInput();

    // Perform calculations
    let remainingBalance = calculateRemainingBalance(totalBudget, totalExpenses);
    let spendingPercentage = calculateExpensePercentage(totalBudget, totalExpenses);

    // Display formatted output in console
    console.log(`Total Monthly Budget : $${totalBudget}`);
    console.log(`Total Initial Expenses: $${totalExpenses}`);
    console.log(`Remaining Balance     : $${remainingBalance}`);
    console.log(`Spent Percentage      : ${spendingPercentage}%`);
    console.log("----------------------------------");

    // Budget Status Feedback
    if (remainingBalance < 0) {
        console.warn(" Warning: You have exceeded your budget!");
    } else if (remainingBalance === 0) {
        console.log(" Notice: You have used up your entire budget.");
    } else {
        console.log(" Good job! You are within your budget.");
    }
}

// Execute the application script
runSpendWise();