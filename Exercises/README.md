# Exercises
In this course some exercises are given to you, attemp all of these and polish your skill,

## Exercise 01 - Clear the Clutter
You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

for example, these files become:
1. name.jpg
2. name.png
3. this.pdf 
4. harry.zip
5. Rohan.zip
6. cat.jpg 
7. harry.pdf

this: 
-   jpg/name.jpg, jpg/cat.jpg 
-   png/name.png 
-   pdf/this.pdf pdf/harry.pdf
-   zip/harry.zip zip/Rohan.zip


## Exercise 02 - Dummy Data Generator
Generate a dummy data in this format in a collection called employees in a db called company

```js
{   
    name: "Areeb",
    salary: 45000000,
    language: "Python",
    city: "New York",
    isManager: true
}
```
-   Generate 10 such records when a button called generate data is clicked!
-   Create an Express app with mongoose to acheive it
-   Everytime the button is clicked, you should clear the collection 