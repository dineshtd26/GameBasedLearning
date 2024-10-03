import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component4 = () => {
  const codesnip = {
    python: 
`class BankAccount:
    def __init__(self, balance=0):
        self._balance = balance  # Encapsulated attribute

    def deposit(self, amount):
        self._balance += amount

    def withdraw(self, amount):
        if self._balance >= amount:
            self._balance -= amount
        else:
            print("Insufficient funds")

    def get_balance(self):
        return self._balance

# Usage
acc = BankAccount(1000)
acc.withdraw(500)
print(acc.get_balance())  # Output: ?
     

  
    `}
    const answer ={
      python:
`class BankAccount:
      def __init__(self, balance=0):
          self._balance = balance  # Encapsulated attribute
  
      def deposit(self, amount):
          self._balance += amount
  
      def withdraw(self, amount):
          if self._balance >= amount:
              self._balance -= amount
          else:
              print("Insufficient funds")
  
      def get_balance(self):
          return self._balance
  
# Usage
acc = BankAccount(1000)
acc.withdraw(500)
print(acc.get_balance())  # Output: 500
      
   
    `}
    
  return (
    <>

    <Maincom  title={"Encapsulation"}
    answer={answer}
    game={"https://html-classic.itch.zone/html/1970387/index.html?v=1582568685"}
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/1190d5b7191ae1cf98/06778cc020a898c3'}
       steps={['Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, called a class. It allows for data hiding, where the internal workings of a class are hidden from the outside world, and abstraction, where only essential details are exposed to the user',
       'In this example:', 
       'balance is encapsulated within the BankAccount class. Users interact with the class through defined methods (deposit, withdraw, get_balance), maintaining data integrity and hiding the internal representation of the balance. Encapsulation ensures that the balance can only be modified through predefined methods, preventing direct access and potential misuse.',
     
       ]}
       codesnip={codesnip}
       />
    
    </>
  )
}
