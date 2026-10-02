# SpendWise - JavaScript Foundation

## Project Description
SpendWise is a budgeting application designed to help users track their monthly budget and total expenses. This stage of the project establishes the JavaScript foundation to collect user input, perform calculations, and log structured budget summary results to the browser console.

## JavaScript Concepts Implemented
- **Variables & Data Types**: Used `let` and `const` to store numbers and strings.
- **User Input**: Utilized `prompt()` to capture input from the user and `parseFloat()` to parse strings into numerical data.
- **Operators & Calculations**: Applied subtraction (`-`), division (`/`), and multiplication (`*`) for balance and percentage calculations.
- **Functions**: Created reusable functions with parameters and `return` statements to maintain modular and organized code.
- **Control Flow**: Used `if...else` statements to provide budget warnings and feedback.
- **Console Output**: Logged formatted summary results using template literals.

## How It Works
1. When the webpage loads, `prompt()` dialogs ask the user to input their total budget and initial expenses.
2. The `calculateRemainingBalance()` function subtracts expenses from the budget.
3. The `calculateExpensePercentage()` function calculates the percentage of budget already spent.
4. The output is cleanly formatted and logged in the browser console.