let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();



  // Do all of your work below in the following functions
  // DON'T FORGET TO CALL THE FUNCTIONS TO SEE YOUR WORK!


// Accessing DOM Elements (Querying)

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Change the text of the title to something shorter.
  function shortenPageTitle() {
  document.getElementById("main-title").innerText="I am Dom."
  }
  shortenPageTitle();


  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  function changeBodyBgColor() {
 document.querySelector('body').style.backgroundColor="yellow"
  }
  changeBodyBgColor();


  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  function removeLastFavoriteThing() {

  let last = document.getElementById("favorite-things").lastElementChild
  last.remove()
  }
  removeLastFavoriteThing()


  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem.
  // Remember you might have to iterate through the list of elements
  function makeSpecialTitlesBigger() {
  let elements= document.getElementsByClassName("special-title")
  for(let i=0; i<elements.length; i++){
    elements[i].style.fontSize= "2rem"
  }
  }
  makeSpecialTitlesBigger()


  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  function RemoveChicagoRace() {
  let elements=document.getElementById("past-races").childNodes
  for (let i=0; i<elements.length; i++){
    if (elements[i].innerText=== "Chicago"){
      elements[i].remove()
    }
  }
  }
  RemoveChicagoRace()



// Creating New DOM Elements

  // Part 6
  // Let's add to DOM's  Past Races  list.
  // Create a new <li> element, change the new <li> text to the name of a city, and append it to the  Past Races  list.
  function addPastRace() {
    let newEl= document.createElement('li')
    newEl.innerText= "Sofia"
    let pastRaces= document.getElementById('past-races')
    pastRaces.appendChild(newEl)
  }
  addPastRace()


  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text.
  // Think about what order you want to create the elements, and what order you want to append them in.
  function createNewBlogPost() {
  let newDiv= document.createElement('div')
  let newH2 = document.createElement("h2")
  let newP = document.createElement("p")

  newDiv.className = "blog-post purple"
  newH2.innerText= "New York"
  newP.innerText= "I ate alot of chips"
  newDiv.appendChild(newH2)
  newDiv.appendChild(newP)
  
  document.getElementsByClassName("main")[0].appendChild(newDiv)

  }

  createNewBlogPost()






});
