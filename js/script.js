// Click Handler for Calculate Button

document.getElementById("calc-btn").addEventListener("click", function() {
    let foodInput = document.getElementById("food-input").value;  
    let rentInput = document.getElementById("rent-input").value;
    let clothesInput = document.getElementById("clothes-input").value;


    const totalExpense = document.getElementById("total-expense");
    totalExpense.innerText = ( parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput)); 

    document.getElementById("balance").innerText = commonIncome() - ( parseFloat(totalExpense.innerText));

    // Main Section Error Handling - 1  
    if  (isNaN( document.getElementById("income-input").value) == true  || isNaN(foodInput) == true || isNaN(rentInput) == true || isNaN(clothesInput) == true || document.getElementById("income-input").value == "" || foodInput == "" || rentInput == "" || clothesInput == ""){
        alert("Please Enter a Valid amount in all Input fields");
        resetCalculation();

    }
    // Main Section Error Handling - 2
    if( parseFloat(totalExpense.innerText) > commonIncome()){
        alert("Your Total Expense is more than yout Income");
        resetCalculation();
    }
});


// Click Handler For Savings Button (Bonus Section)

document.getElementById("save-btn").addEventListener("click", function(){
    let balance = document.getElementById("balance");
    let percentInput = document.getElementById("percent-input").value;
    let savingAmount = document.getElementById("saving-amount");
    let remainingBalance = document.getElementById("remaining-balance");

    savingAmount.innerText = commonIncome() * (parseFloat(percentInput) / 100);
    remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText)

    // Bonus Section Error Handling -1  
    if(isNaN(percentInput) == true || percentInput == "" ){
        alert("Please enter a valid percentage");
        resetSave();
    }

    if(isNaN(savingAmount.innerText) == true){
        alert("Please Enter The Values in Income ,Food, Rent & Clothes Field");
        resetSave();
    }

    // Bonus Section Error Handling -2
    if(parseFloat(savingAmount.innerText) > parseFloat(balance.innerText)){
        alert("You Can Not Save More Than Your Balance")
        resetSave();
    }

    
});

//Shared functions

function commonIncome(){
    let incomeInput = document.getElementById("income-input").value;
    let income = parseFloat(incomeInput);
    return income;
};

function resetCalculation(){
        document.getElementById("income-input").value = "";
        document.getElementById("food-input").value = "";
        document.getElementById("rent-input").value = "";
        document.getElementById("clothes-input").value = "";
        document.getElementById("total-expense").innerText = 0;
        document.getElementById("balance").innerText = 0;
};   

function resetSave(){
        document.getElementById("percent-input").value = "";
        document.getElementById("saving-amount").innerText = 0;
        document.getElementById("remaining-balance").innerText = 0;
}



