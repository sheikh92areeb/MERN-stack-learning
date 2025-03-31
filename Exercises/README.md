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


## Exercise 03 - Design Layout
Design a card using node.js and tailwind css

-   use card.png as template of card


## Exercise 04 - Display the Cards Using API
You have to use an api and display the data in the form of a card under a container. All the data points returned by the API should be converted to a card
Use this API:
-   [JsonPlaceholder API](https://jsonplaceholder.typicode.com/posts)

#### Hint: 
-   Create a state for the data which will be fetched using the Json Placeholder API
-   Inside useEffect, use fetch to populate that state and then use map to render the cards from that state