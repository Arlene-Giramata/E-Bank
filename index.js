
  const accounts = []
     //creating account
    function createAccount (id, firstName, lastName, age, accountBalance=1000) {
      const newAccount = {
        id, 
        firstName,
        lastName,
        age,
        accountBalance
      }
        accounts.push(newAccount)
    }
    
    //deposit Money
    function depositMoney (id, amount) {
      for (let i = 0; i < accounts.length; i++){
        if (accounts[i].id === id){
          accounts[i].accountBalance  = accounts[i].accountBalance + amount 
          return accounts[i].accountBalance
        }
      }
      
    } 
    
    //check balance
    function checkBalance(id){
      for (let i=0; i <accounts.length;i++){
        if(accounts[i].id === id){
          return accounts[i].accountBalance
        }else{
          console.log("No account found with that id")
        }
      }
    }
  
    //Withdraw money
    function withdraw(id,amount){
      for(let i=0;i<accounts.length;i++){
        if(accounts[i].id === id){
          accounts[i].accountBalance = accounts[i].accountBalance - amount
          return accounts[i].accountBalance
        }else{
          console.log('No account found for that id')
        }
      }
    }
    
  
  
    //transfering money to another account
    function transfer(fromAccount, toAccount, amount) {
      for(let fAccount of accounts) {
        if(fAccount['id'] == fromAccount) {
          if(fAccount['accountBalance']<amount) {
            console.log("amount insufficient to complete the transfer")
          }else if(amount<1){
              console.log('You can not send money that is less than 1')
          } 
          for(let tAccount of accounts) {
            if(tAccount['id'] == toAccount) {
              if(amount >=1 && amount<=10000){
                  fAccount['accountBalance'] -= amount;
                  tAccount['accountBalance'] += amount;
              }else if(amount >=10000 && amount<=100000){
                  fAccount['accountBalance'] -= (amount+200);
                  tAccount['accountBalance'] += amount;
              }else if(amount>100000){
                  fAccount['accountBalance'] -= (amount+1000);
              tAccount['accountBalance'] += amount;
              }
              
            }
          }
        }
      }
    }
  
    createAccount(5463385, 'Arlene', 'Giramata', 12)
    createAccount(5463386, 'Andrew', 'Kwizera', 23)
   //console.log(depositMoney(5463385,90000))
   // transfer(5463385,5463386,20000)
    //console.log(checkBalance(5463385))
    //console.log(withdraw(5463385,10000))
    console.log(accounts)
  
  
  
  