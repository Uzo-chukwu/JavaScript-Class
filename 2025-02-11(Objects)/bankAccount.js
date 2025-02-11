const bankAccount = {};
bankAccount.owner = "Alice";
bankAccount.balance = 500;
bankAccount.deposit = function (amount) {
                            bankAccount.balance += amount;
                            console.log(amount+ " deposited successfully.\n");
                    }
bankAccount.withdraw = function (amount) {
                            bankAccount.balance -= amount;
                            console.log(amount+ " withdrawn successfully.\n");
                    }
bankAccount.printBalance = function () {
                            console.log("Balance is "+bankAccount.balance+"\n");
}

bankAccount.printBalance()
bankAccount.deposit(2000);
bankAccount.printBalance();
bankAccount.withdraw(1000);
bankAccount.printBalance();

