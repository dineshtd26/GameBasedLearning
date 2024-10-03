import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component6 = () => {
  const codesnip = {
  python: `# Abstract base class for all animals
class Animal:
    def __init__(self, name):
        self.name = name
  
    def make_sound(self):
        pass  # Abstract method
  
    def move(self):
        pass  # Abstract method
  
  # Concrete class representing a specific type of animal: Lion
class Lion(Animal):
    def make_sound(self):
        return "Roar!"
  
    def move(self):
        return "Lion is running."
  
  # Concrete class representing another specific type of animal: Snake
class Snake(Animal):
    def make_sound(self):
        return "Hiss!"
  
    def move(self):
        return "Snake is slithering."
  
  # Zoo management system
lion = Lion("Simba")
print(lion.name)          # Output: *****
print(lion.make_sound())  # Output: *****
print(lion.move())        # Output: ***********
  
snake = Snake("Nagini")
print(snake.name)         # Output: *****
print(snake.make_sound()) # Output: *****
print(snake.move())       # Output: ***********
  
    
    `}
    const answer = {
      python: `# Abstract base class for all animals
class Animal:
    def __init__(self, name):
        self.name = name
        
    def make_sound(self):
        pass  # Abstract method
        
    def move(self):
        pass  # Abstract method
        
        # Concrete class representing a specific type of animal: Lion
class Lion(Animal):
    def make_sound(self):
        return "Roar!"
        
    def move(self):
        return "Lion is running."
        
        # Concrete class representing another specific type of animal: Snake
class Snake(Animal):
    def make_sound(self):
        return "Hiss!"
        
    def move(self):
        return "Snake is slithering."
        
        # Zoo management system
lion = Lion("Simba")
print(lion.name)          # Output: Simba
print(lion.make_sound())  # Output: Roar!
print(lion.move())        # Output: Lion is running.
        
snake = Snake("Nagini")
print(snake.name)         # Output: Nagini
print(snake.make_sound()) # Output: Hiss!
print(snake.move())       # Output: Snake is slithering.
        
          `

       }
  return (
    <>

      <Maincom title={"Abstraction"}
game={"https://html-classic.itch.zone/html/1796316/index.html?v=1577643881"}
url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/d390d5b7191be7c25a/ee7a31474bba1545'}
        steps={['Abstraction in Python works by creating classes that represent abstract concepts or entities, hiding the implementation details while providing a clear interface for interacting with them. Lets break this down with an understandable example',
     'Imagine you re building a zoo management system in Python. In a zoo, you have various animals with different characteristics and behaviors. To abstract this concept, you can create a general Animal class representing common attributes and actions shared by all animals. Then, you can create specific animal classes that inherit from the Animal class and provide their own implementations for unique characteristics and behavior',
     'How Abstraction Works in This Example:',
     'Abstract Base Class (Animal): The Animal class serves as an abstract base class that defines common attributes (name) and abstract methods (make_sound, move). It provides a blueprint for creating specific animal types.',
     'Concrete Classes (Lion, Snake): These classes inherit from the Animal class and provide their own implementations for the abstract methods make_sound and move. Each concrete class represents a specific type of animal and encapsulates its unique behaviors.',
     'Abstraction in Action: When creating instances of concrete classes (e.g., Lion, Snake), we interact with them through the common interface defined by the abstract base class (Animal). We don t need to know the internal details of how each animal makes sound or moves; we can simply call the methods provided by the abstract base class to perform these actions.',
        ]}
        codesnip={codesnip}
      />

    </>
  )
}
