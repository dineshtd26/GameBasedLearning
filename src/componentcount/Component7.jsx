import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component7 = () => {
  const codesnip = {
    python: `# Base class
class Shape:
    def __init__(self, color):
        self.color = color

    def draw(self):
        pass

class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
      
    def draw(self):
        return f"Drawing a {self.color} circle with radius {self.radius}"
      
      # Subclass 2
class Rectangle(Shape):
    def __init__(self, color, width, height):
        super().__init__(color)
        self.width = width
        self.height = height
      
    def draw(self):
        return f"Drawing a {self.color} rectangle with width {self.width} and height {self.height}"
      
      # Usage
circle = Circle("red", 5)
rectangle = Rectangle("blue", 3, 4)
      
print(circle.draw())     # Output:*********************************?
print(rectangle.draw())  # Output:*********************************?
      
    
    `}
    const answer = {
      python: `# Base class
class Shape:
    def __init__(self, color):
        self.color = color
      
    def draw(self):
        pass
      
    # Subclass 1
class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
      
    def draw(self):
        return f"Drawing a {self.color} circle with radius {self.radius}"
      
      # Subclass 2
class Rectangle(Shape):
    def __init__(self, color, width, height):
        super().__init__(color)
        self.width = width
        self.height = height
      
    def draw(self):
        return f"Drawing a {self.color} rectangle with width {self.width} and height {self.height}"
      
      # Usage
circle = Circle("red", 5)
rectangle = Rectangle("blue", 3, 4)
      
print(circle.draw())     # Output: Drawing a red circle with radius 5
print(rectangle.draw())  # Output: Drawing a blue rectangle with width 3 and height 4
      
      `}
  return (
    <>
    <Maincom  title={"Inheritance"}
  game={"https://dineshdiv.github.io/clsloading-clspath/"}
  url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/d390d5b7191be7c25a/ee7a31474bba1545'}
    steps={['Inheritance is a fundamental concept in object-oriented programming (OOP) where a new class, known as a subclass or derived class, can inherit attributes and methods from an existing class, known as a superclass or base class. This allows for code reuse and facilitates the creation of hierarchical relationships between classes.',
    'Base Class Definition:',
    'Here, we define a base class Shape with an __init__() method to initialize the color of the shape and a draw() method, left unimplemented (using pass), as its specific behavior will be defined in subclasses. This represents the common attributes and behaviors shared by all shapes.',
    'Subclass 1 - Circle:',
    'The Circle class is a subclass of Shape, inheriting its attributes and methods. It overrides the draw() method to specify how a circle should be drawn. This demonstrates specialization, where subclasses provide specific implementations of inherited methods.',
    'Subclass 2 - Rectangle:',
    'Similar to Circle, the Rectangle class is also a subclass of Shape and provides its own implementation of the draw() method to specify how a rectangle should be drawn',
    'Usage:',
    'We create instances of the Circle and Rectangle classes, passing color and dimension parameters. The instances inherit attributes and methods from the Shape superclass. By calling the draw() method on each instance, we see how each subclass provides its own specialized behavior while leveraging the common attributes and methods defined in the base class. This illustrates the concept of inheritance, where subclasses inherit and extend the functionality of their superclass, promoting code reuse and modularity.',
   ]}
       codesnip={codesnip}
       answer={answer}
       />
       
    </>
  )
}
