import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'

export const Component2 = () => {
  const [runCodeData] = useState(null);
const codesnip = {
    python: `
#Lists: 

my_list = [1, 2, 3]
my_list[0] = 10  # Modifying the first element
print(my_list)   # Output: [?, 2, 3]

#Dictionaries:

my_dict = {'name': 'Alice', 'age': 30}
my_dict['age'] = 25  # Modifying the value associated with the key 'age'
print(my_dict)       # Output: {'name': 'Alice', 'age': ?}

#Sets:

my_set = {1, 2, 3}
my_set.add(4)  # Adding a new element to the set
print(my_set)  # Output: {1, 2, 3, ?}
    
        
`}

    const answer = {
      python: `
#Lists:

my_list = [1, 2, 3]
my_list[0] = 10  # Modifying the first element
print(my_list)   # Output: [10, 2, 3]

#Dictionaries:

my_dict = {'name': 'Alice', 'age': 30}
my_dict['age'] = 25  # Modifying the value associated with the key 'age'
print(my_dict)       # Output: {'name': 'Alice', 'age': 25}

#Sets:

my_set = {1, 2, 3}
my_set.add(4)  # Adding a new element to the set
print(my_set)  # Output: {1, 2, 3, 4}

  
       `}
  return (
    <>
      <Maincom title={"Mutable Objects"}

       game={'https://html-classic.itch.zone/html/907611/index.html?v=1542780907&quot'}
       url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/0690d5b7191ae6c38f/0615462a0f2694c1'}
       
        steps={['Mutable Objects:',
        
        'Lists are one of the most commonly used data structures in Python. They are ordered collections of elements, and their elements can be modified after creation.Elements within a list can be accessed using indexing, and because lists are mutable, individual elements or slices of elements can be modified, added, or removed.',
        'Dictionaries are another fundamental data structure in Python. They consist of key-value pairs, and like lists, dictionaries are mutable.Key-value pairs in dictionaries can be added, removed, or modified after creation.',
        'Sets are collections of unique elements. They are unordered and do not allow duplicate elements.Sets are mutable, meaning elements can be added or removed after creation.',
         
        ]}
         answer={answer}
         codesnip={codesnip}

      />

    </>
  )
}

export const ChildComponent = ({ runCodeData}) => {
  
  return (
    
    <div className='testcase' >
      {runCodeData === true && <p className='blutext'>Ready to Run  </p>}
      {runCodeData === false && <p className='redtext '>Test case Failed ! </p>}
      {runCodeData === null && <p className='blutext'>Waiting for code comparison...</p>}
    </div>
    
  )
}
