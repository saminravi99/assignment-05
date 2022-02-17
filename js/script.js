// Click Handler for Calculate Button

document.getElementById("calc-btn").addEventListener("click", function() {
    const foodInput = getInputValue("food-input");
    const rentInput = getInputValue("rent-input");
    const clothesInput = getInputValue("clothes-input");

    let totalExpense = getInnerText("total-expense");
    totalExpense = (foodInput + rentInput + clothesInput).toFixed(2); 

    document.getElementById("balance").innerText = (getInputValue("income-input") - parseFloat(totalExpense)).toFixed(2);
    document.getElementById("total-expense").innerText = totalExpense;

    // Main Section Error Handling - 1  
    if  (isNaN( document.getElementById("income-input").value) == true  
    || isNaN(document.getElementById("food-input").value) == true 
    || isNaN(document.getElementById("rent-input").value) == true 
    || isNaN(document.getElementById("clothes-input").value) == true  // If String Input is Given
    || document.getElementById("income-input").value == "" 
    || document.getElementById("food-input").value == "" 
    || document.getElementById("rent-input").value == "" 
    || document.getElementById("clothes-input").value == "" // If empty string is Given
    || document.getElementById("income-input").value < 0
    || document.getElementById("food-input").value < 0
    || document.getElementById("rent-input").value < 0  
    || document.getElementById("clothes-input").value < 0){  // If negative value is Given
        alert("Please Enter a Valid amount in all Input fields");
        resetCalculationBtn();

    }
    // Main Section Error Handling - 2
    if( parseFloat(totalExpense.innerText) > getInputValue("income-input")){
        alert("Your Total Expense is more than yout Income");
        resetCalculationBtn();
    }
});


// Click Handler For Savings Button (Bonus Section)

document.getElementById("save-btn").addEventListener("click", function(){
    const balance = getInnerText("balance");
    const percentInput = getInputValue("percent-input");
    let savingAmount = getInnerText("saving-amount");
    let remainingBalance = getInnerText("remaining-balance");

    savingAmount= getInputValue("income-input") * (percentInput / 100);
    remainingBalance = parseFloat(balance) - parseFloat(savingAmount);
    document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
    document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);

    // Bonus Section Error Handling -1  
    if(isNaN(document.getElementById("percent-input").value) == true  // If String Input is Given
    || document.getElementById("percent-input").value == ""  // If empty string is Given
    || document.getElementById("percent-input").value < 0){ //  If negative value is Given
        alert("Please enter a valid percentage");
        resetSaveBtn();
    }

    if(isNaN(savingAmount) == true){ // If percentage value is given but income/ food/ rent/ clothes input value is not Given
        alert("Please Enter The Values in Income ,Food, Rent & Clothes Field");
        resetSaveBtn();
    }

    // Bonus Section Error Handling -2
    if(parseFloat(savingAmount) > parseFloat(balance)){ //  If Saving Amount is more than Balance Amount
        alert("You Can Not Save More Than Your Balance")
        resetSaveBtn();
    }

    
});

//Shared functions

function getInputValue(inputField){
    const inputValueText = document.getElementById(inputField).value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function getInnerText(fieldId){
    const fieldValue = document.getElementById(fieldId).innerText;
    return fieldValue;
}

function resetCalculationBtn(){
        document.getElementById("income-input").value = "";
        document.getElementById("food-input").value = "";
        document.getElementById("rent-input").value = "";
        document.getElementById("clothes-input").value = "";
        document.getElementById("total-expense").innerText = 0;
        document.getElementById("balance").innerText = 0;
};   

function resetSaveBtn(){
        document.getElementById("percent-input").value = "";
        document.getElementById("saving-amount").innerText = 0;
        document.getElementById("remaining-balance").innerText = 0;
}



