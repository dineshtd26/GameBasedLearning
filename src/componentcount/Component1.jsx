import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'


export const Component1 = () => {
  const [runCodeData] = useState(null);


  const codesnip = {
    python: `# Define a function with proper indentation
    def greet(name):
        # Indented block for the function body
        print("Hello, " + name + "!")
        # Nested block with increased indentation
        if name == "Alice":
           print("You are a special guest!")
        else:
            print("Welcome, " + name + "!")
    
    # Call the function with indentation
    greet("Alice")
    greet("Bob")
    
  `}
  const answer = {
    python: `# Define a function with proper indentation
    def greet(name):
        # Indented block for the function body
        print("Hello, " + name + "!")
        # Nested block with increased indentation
        if name == "Alice":
            print("You are a special guest!")
        else:
            print("Welcome, " + name + "!")
    
    # Call the function with indentation
    greet("Alice")
    greet("Bob")
    
  `}

  return (
    <>
      
      <Maincom

        game={'https://gunaasin.github.io/intentation/'}
        url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/7990d5b7191ae6c0f0/0913519894859161'}
        
       
        steps={[
          'In this modified version, an if-else statement is added inside the greet function.',
          'The if and else blocks are further indented compared to the rest of the function body.',
          'This demonstrates how indentation levels can be nested to represent different levels of code blocks.',
        ]}
        title={"Indentation"}
        answer={answer}
        codesnip={codesnip}

      />

    </>
  )
}


export const ChildComponent = ({ runCodeData}) => {
  // const [runCodeData] = useState(null);
  // const updateRunCodeData = (newValue) => {
  //   setRunCodeData(newValue);
  // };
  
  // // Function to simulate an event triggering the update of runCodeData
  // const simulateEvent = () => {
  //   // Example: Simulate an event (e.g., a timer, API response, etc.) that triggers the update of runCodeData
  //   setTimeout(() => {
  //     updateRunCodeData(true); // or false, or null, depending on your logic
  //   }, 2000); // Simulating a 3-second delay before updating runCodeData
  // };

  // // When runCodeData changes, log its value
  // useEffect(() => {
  //   console.log("runCodeData changed:", runCodeData);
  // }, [runCodeData]);

  // // Simulate an event that triggers the update of runCodeData when the component mounts
  // useEffect(() => {
  //   simulateEvent();
  // }, []); // 

  return (
    <div className='testcase' >
      {runCodeData === true && <p className='blutext'>Ready to Run  </p>}
      {runCodeData === false && <p className='redtext '>Test case Failed ! </p>}
      {runCodeData === null && <p className='blutext'>Waiting for code comparison...</p>}
      
    </div>
  )
}


