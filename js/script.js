// Click Handler for Calculate Button

document.getElementById("calc-btn").addEventListener("click", function() {
   
    let incomeInput = document.getElementById("income-input").value;
    let foodInput = document.getElementById("food-input").value;  
    let rentInput = document.getElementById("rent-input").value;
    let clothesInput = document.getElementById("clothes-input").value;

    

    const totalExpense = document.getElementById("total-expense");
    totalExpense.innerText = ( parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput)); 

    const balance = document.getElementById("balance");
    balance.innerText = parseFloat(incomeInput) - ( parseFloat(totalExpense.innerText))

    // Main Section Error Handling - 1  
    if  (isNaN(incomeInput) == true || isNaN(foodInput) == true || isNaN(rentInput) == true || isNaN(clothesInput) == true || incomeInput == "" || foodInput == "" || rentInput == "" || clothesInput == ""){
        alert("Please Enter a Valid amount");
        document.getElementById("income-input").value = "";
        document.getElementById("food-input").value = "";
        document.getElementById("rent-input").value = "";
        document.getElementById("clothes-input").value = "";
        totalExpense.innerText = 0;
        balance.innerText = 0;

    }
    // Main Section Error Handling - 2
    if( parseFloat(totalExpense.innerText) > parseFloat(incomeInput)){
        alert("Your Total Expense is more than yout Income");
        document.getElementById("income-input").value = "";
        document.getElementById("food-input").value = "";
        document.getElementById("rent-input").value = "";
        document.getElementById("clothes-input").value = "";
        totalExpense.innerText = 0;
        balance.innerText = 0;
    }
    
});


// Click Handler For Savings Button (Bonus Section)

document.getElementById("save-btn").addEventListener("click", function(){
    let incomeInput = document.getElementById("income-input").value;
    let balance = document.getElementById("balance");
    let percentInput = document.getElementById("percent-input").value;
    let savingAmount = document.getElementById("saving-amount");
    let remainingBalance = document.getElementById("remaining-balance");

    savingAmount.innerText = parseInt(incomeInput) * (parseFloat(percentInput) / 100);
    remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText)

    // Bonus Section Error Handling -1  
    if(isNaN(percentInput) == true || percentInput == ""){
        alert("Please enter a valid percentage");
        document.getElementById("percent-input").value = "";
        savingAmount.innerText = 0;
        remainingBalance.innerText = 0;
    }
    // Bonus Section Error Handling -2
    if(parseFloat(savingAmount.innerText) > parseFloat(balance.innerText)){
        alert("You Can Not Save More Than Your Balance")
        document.getElementById("percent-input").value = "";
        savingAmount.innerText = 0;
        remainingBalance.innerText = 0;
    }
});