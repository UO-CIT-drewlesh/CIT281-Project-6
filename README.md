# CIT281-Project-6
Instructor: Lindy Stewart

Instructions

Please complete this project yourself. While you are encouraged to have high-level discussions with your fellow students, you must be able to complete the details of this project on your own.

Late Policy: All projects are due by 11:59 pm of the stated due date. Projects submitted after the due date/time are considered late and will not be graded.  It is your responsibility to submit projects on time.

Learning Objectives

After completing this project, you will:

Gain experience creating and working classes with inheritance
Gain more experience creating and working with classes
Gain more experience debugging code
Gain more experience using a generic block of code to process data
Gain more experience interpreting functional descriptions and specifications to complete an assignment
Gain more experience writing and executing non-web server Node.js JavaScript code using VSCode
Practice using modern JavaScript syntax
Gain more experience working with static data
Overview

You will be creating three classes. The first class is the Shape class that will serve as a base class for the other two classes. The second class is the Rectangle class that will inherit from Shape class. A class that inherits from another class can be called the child class of the base, or parent, class. The third class is the Triangle class that also will inherit from the Shape class.

The base Shape class will provide the common functionality of a method that returns the perimeter value. Each of the other two classes will provide their own versions of a method that returns the area value. 

Important: The solution for this assignment is less than sixty lines of code. The difficulty in this project is mentally conceptualizing the idea of classes as object blueprints, and using a base class to provide common functionality for child classes.

Tip: You should continue to use git to track completed versions of your code.

Requirements

Complete each of the following requirements.

Part 1. Completed Lab 6
You should have completed Lab 6, and saved lab-06.zip in cit281/p6.

Part 2. Completed Lab 7
You should have completed Lab 7, and saved lab-07.zip in cit281/p6.

Part 3. Create project file

You will create p6.js file for this project. All of the code for this project will be contained within this single file.

>>: Create p6.js in the cit281/p6 folder.  

Part 4. Create and test Shape base class

The Shape class is the base class for the other two classes. You will test your base class to make sure the single method returns an accurate value.

>>: Code the Shape class with the following functionality.

Name the class Shape
Provide a constructor that expects an array of sides, with a default value of an empty array []
Create a class property sides that contains the constructor sides array using the this object
Implement a class method perimeter that returns the value of the lengths of all sides.
You may want to create this method initially using whatever version of a function you prefer, and once complete refactor the function using the remaining requirements
This method must use an implicit arrow/lambda function
You must use the Array reduce() method to calculate the perimeter value
To make this method a single line of code, you will also need to use the ternary operator ( ? : ) to make sure the array has at least one side
>>: Test the Shape class with the following code. After you've confirmed the Shape class works, comment out this test code.

console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
Part 5. Implement and test Rectangle class

The Rectangle class inherits from the Shape class using the extends operator. 

>>: Code the Rectangle class with the following functionality.

Name the class Rectangle
Provide a constructor that expects two parameters length and width with default values of 0
Call the parent class Shape constructor using the super() method, and an array that consists of length, width, length, width, as a rectangle has four sides
Create class properties length and width from the constructor parameters using the this object
Implement a method area that returns the rectangle area, remembering that the area of a rectangle is length multiplied by width
>>: Test the Rectangle class with the following code. After you've confirmed the Rectangle class works, comment out this test code.

console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
Part 5. Implement and test Triangle class

The Triangle class inherits from the Shape class using the extends operator. 

>>: Code the Triangle class with the following functionality.

Name the class Triangle
Provide a constructor that expects three parameters sideA, sideB, and sideC with default values of 0
Call the parent class Shape constructor using the super() method, and an array that consists of sideA, sideB, and sideC
Create class properties sideA, sideB, and sideC from the constructor parameters using the this object
Implement a method area that returns the triangle area, using Heron's formula (https://www.mathsisfun.com/geometry/herons-formula.htmlLinks to an external site.), noting that implementing this formula will require using Math.sqrt()
>>: Test the Triangle class with the following code. After you've confirmed the Triangle class works, comment out this test code.

console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
Part 6. Create a generic block of code for processing an array of sides arrays

Now that all three of your classes have been tested, you will write a block of code that will process and test the following array of side arrays. The expected output of the processing is shown below. You can use any coding technique to produce the output, but below is a list of the elements used by the solution.

for..of to iterate through the array
variable initialization to null as a variable to hold the object created using new
switch() to branch based on number of sides (2, 3 and default for all other values)
spread/scatter ellipsis to pass the side array as individual values
template literal for the output
Array toString() method to produce a string of values from an array separated by commas
// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
Expected output:

Expected output  

Project Deliverables

This project will include your Lab 6 and Lab 7 deliverables lab-06.zip and lab-07.zip.

Create a compressed folder called p6.zip  that contains the files from this project, including any lab deliverables. To create a compressed folder, select the files, then right-mouse click the files, and select either Send to, then Compressed (zipped) folder  on Windows, or Compress  on Mac.

The compressed file will contain the following files (point values in parentheses).

(10) lab-06.zip
(10) lab-07.zip
(80) p6.js
Once uploaded, revisit the Project 6 page in Canvas and confirm the file was uploaded.

Remember, you are responsible to submit your assignments before the deadline. Late submissions will not be accepted.
