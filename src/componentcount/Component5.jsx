import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component5 = () => {
  const codesnip = {
    python: ` # Base class
class Animal:
    def make_sound(self):
        pass
    
    # Subclass 1
class Dog(Animal):
    def make_sound(self):
        print("Woof!")
    
    # Subclass 2
class Cat(Animal):
    def make_sound(self):
        print("Meow!")
    
    # Function to make any animal sound
def animal_sound(animal):
    animal.make_sound()
    
    # Example usage
dog = Dog()
cat = Cat()
    
animal_sound(dog)  # Output: ?
animal_sound(cat)  # Output: ?
          
    
    `}
    const answer = {
      python: `
      # Base class
class Animal:
    def make_sound(self):
        pass
          
          # Subclass 1
class Dog(Animal):
    def make_sound(self):
        print("Woof!")
          
          # Subclass 2
class Cat(Animal):
    def make_sound(self):
        print("Meow!")
          
          # Function to make any animal sound
def animal_sound(animal):
    animal.make_sound()
          
          # Example usage
dog = Dog()
cat = Cat()
          
animal_sound(dog)  # Output: Woof!
animal_sound(cat)  # Output: Meow!

`}
  return (
    <>
    <Maincom  title={"polymorphism"}
    game={"https://catprototype.vercel.app/"}
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/4d90d5b7191ae6c4c4/959adaec603cedad'}
      steps={['Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It enables flexibility and code reuse by allowing methods to do different things based on the object they are operating on. There are two main types of polymorphism: compile-time polymorphism and runtime polymorphism.',
      'Compile-time Polymorphism:',
      'Also known as static polymorphism, it is achieved through method overloading and operator overloading.Method overloading: Involves defining multiple methods with the same name but different parameters within the same class. The appropriate method to execute is determined by the number and type of arguments passed during compilation.Operator overloading: Involves defining operators to work with user-defined data types. For example, you can define how the + operator should behave for objects of a class.',
      'Runtime Polymorphism:',
      'Also known as dynamic polymorphism, it is achieved through method overriding.Method overriding: Involves redefining a method in a subclass that is already defined in its superclass. When a method is called on an object of the superclass, the implementation in the subclass is executed, provided the method is overridden. This determination is made at runtime, based on the actual type of the object.Dynamic method dispatch: The process by which the appropriate overridden method is invoked at runtime. It enables objects of different subclasses to respond to the same message with their own implementation.',
      'Base Class Definition:',
      'Here, we define a base class Animal with a method make_sound(). The method is left unimplemented (using pass), as its specific behavior will be defined in subclasses. This demonstrates abstraction, where the base class defines a common interface without specifying the exact behavior.',
      'Subclass 1 - Dog:',
      'The Dog class is a subclass of Animal, inheriting its make_sound() method. However, the make_sound() method is overridden in the Dog class to specify the sound of a dog ("Woof!"). This is an example of method overriding, where subclasses provide their own implementation of a method defined in the superclass',
      'Subclass 2 - Cat:',
      ' Similar to Dog, the Cat class is also a subclass of Animal and overrides the make_sound() method to specify the sound of a cat ("Meow!").',
      'Function to Make Any Animal Sound:',
      'This function animal_sound() accepts any object that is an instance of a subclass of Animal. It calls the make_sound() method on the provided animal object. This function demonstrates polymorphism, as it can operate on objects of different types (Dog or Cat) using a common interface (make_sound()).',
      'Example Usage - Creating Instances:',
      'We create instances of the Dog and Cat classes named dog and cat, respectively. These objects represent specific animals and inherit the behavior defined in their respective subclasses.',
      'Example Usage - Invoking Polymorphic Function:',
      'We call the animal_sound() function with instances of Dog and Cat classes as arguments. Despite the function being defined to accept objects of type Animal, it can handle objects of subclasses (Dog and Cat) due to polymorphism. The correct make_sound() method corresponding to each object type is invoked at runtime, producing the respective animal sounds. This dynamic behavior is a characteristic of polymorphism, where the appropriate method implementation is determined at runtime based on the actual object type.',


      ]}
      codesnip={codesnip}
      answer={answer}
      />
    </>
  )
}

