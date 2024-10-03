import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component9 = () => {
  const codesnip = {
    python:`
class Animal:
    def make_sound(self):
        return "Generic sound"

class Dog(Animal):
    def make_sound(self):
        return "Bark!"

# Create instances of the classes
animal = Animal()
dog = Dog()

# Call the make_sound method on instances
print(animal.make_sound())  # Output: ***************
print(dog.make_sound())     # Output: *****


    
    
    `}
    const answer = {
      python:`
class Animal:
      def make_sound(self):
          return "Generic sound"
  
class Dog(Animal):
      def make_sound(self):
          return "Bark!"
  
  # Create instances of the classes
animal = Animal()
dog = Dog()
  
  # Call the make_sound method on instances
print(animal.make_sound())  # Output: Generic sound
print(dog.make_sound())     # Output: Bark!
  
  
        
      `}
    
  return (
    <>
    <Maincom  title={" Method Overriding"}
    codesnip={codesnip}
           game={"https://html-classic.itch.zone/html/5257904/index.html"}
           url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/d390d5b7191ae6c25a/fe5dccf86ec9befa'}
        steps={[
          'Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. This allows the subclass to modify or extend the behavior of the method inherited from the superclass',
          'In this example, both Animal and Dog classes have a make_sound method. However, the Dog class overrides the make_sound method inherited from the Animal class with its own implementation. When calling make_sound on a Dog instance, it executes the overridden method from the Dog class rather than the one from the Animal class.',
        ]}
        answer={answer}
        />
    </>
  )
}