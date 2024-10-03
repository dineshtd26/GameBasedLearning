import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component8 = () => {
  const codesnip = {
    python: `
class MathOperations:
    # Method to perform addition
  def add(self, a, b, c=None):
      if c is None:
          return a + b
      else:
          return a + b + c

# Usage
math_ops = MathOperations()

# Scenario 1: Passing only two parameters
result1 = math_ops.add(5, 3)
print("Addition (two parameters):", result1)  # Output: ?

# Scenario 2: Passing three parameters
result2 = math_ops.add(5, 3, 2)
print("Addition (three parameters):", result2)  # Output: ?
   
    
    `}
    const answer = {
      python: `
class MathOperations:
      # Method to perform addition
   def add(self, a, b, c=None):
        if c is None:
            return a + b
        else:
            return a + b + c
  
  # Usage
math_ops = MathOperations()
  
  # Scenario 1: Passing only two parameters
result1 = math_ops.add(5, 3)
print("Addition (two parameters):", result1)  # Output: 8
  
  # Scenario 2: Passing three parameters
result2 = math_ops.add(5, 3, 2)
print("Addition (three parameters):", result2)  # Output: 10
  
      `}
  return (
    <>
    <Maincom  title={" Method Overloading" }
           codesnip={codesnip}
           game={"https://html-classic.itch.zone/html/10151090/htmlBuild/index.html"}
           url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/ac90d5b7191ae6c125/b60b0f0b79c9ca62'}
        steps={[
      
    'Explanation:',
    'We define the add method with three parameters, with the third parameter c set to None by default.',
    'Inside the method, we check if the third parameter c is None. If it is, we return the sum of the first two parameters (a and b).',
    'If the third parameter c is not None, we add it to the sum of the first two parameters (a, b, and c).',
    'n Scenario 1, we call the add method with only two parameters (5 and 3). Since the third parameter is not provided, the method returns the sum of the two parameters (5 + 3 = 8).',
    'n Scenario 2, we call the add method with three parameters (5, 3, and 2). Here, all three parameters are provided, so the method returns the sum of all three parameters (5 + 3 + 2 = 10).',
  ]}
  answer={answer}
    />
    </>
  )
}
