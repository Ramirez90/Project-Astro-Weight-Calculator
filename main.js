 // Write your JavaScript code here! 
const planets = [
    { name: 'Pluto', gravity: 0.06 },
    { name: 'Neptune', gravity: 1.148 },
    { name: 'Uranus', gravity: 0.917 },
    { name: 'Saturn', gravity: 1.139 },
    { name: 'Jupiter', gravity: 2.640 },
    { name: 'Mars', gravity: 0.3895 },
    { name: 'Moon', gravity: 0.1655 },
    { name: 'Earth', gravity: 1 },
    { name: 'Venus', gravity: 0.9032 },
    { name: 'Mercury', gravity: 0.377 },
    { name: 'Sun', gravity: 27.9 }
];
    
        // We are going to solve this by breaking the problem into three parts. 
        // Programmers like automating things, we'll populate the HTML drop down options using code, 
        // instead of having to type out all the values. 
        // Create a function that does the some math and gives us the new weight. 
        // Then create a function that responds when the user clicks on the button. 

        // 1. Populate the dropdown element with the data found in the planets array. 
        // The value of each option should be the planet's name. 
        // Use the following built-in methods: 
        // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 
        

    //Creating the dropdown element//Hooks HTML <select id="planetDropdown"></select>//
    const dropdown = document.getElementById("planetDropdown")
    // Creates the option to select from planets. .forEach goes through list of planets one by one, selects a planet.  //
    planets.forEach(planet =>{
    const option = document.createElement("option");
    // This sets the value of the option element// Added .name to show only name of planet in drop down//
    option.value = planet.name;
    // This shows the text to the user//
    option.textContent = planet.name;
    // This adds the option element into the dropdown so the user can see and select it//
    dropdown.appendChild(option);
});

function calculateWeight(weight, planetName) {
    // Finds the planet object in the array that matches the selection//Looks at each object and matches the planetName//
    const planet = planets.find(p => p.name === planetName);
    //If it finds a match, it saves that object//It takes the Earth weight and multiplies it by the selected planet gravity//
    if (planet) {
        return weight * planet.gravity;
    }
    return 0;
}//This function runs only when the user clicks the button//
  function handleClickEvent(e) {
    // 3. Gets the user's weight from the input field//
    const userWeight = document.getElementById("user-weight").value;

    // 4. Gets the selected planet name from the dropdown//
    const planetName = document.getElementById("planetDropdown").value;

    // 5. Calculates the result using the function//
    const result = calculateWeight(userWeight, planetName);

    // 6. Displays the message// Hooks HTML <p id="output"></p>//
    document.getElementById("output").textContent = 
        `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;

    } 

       // 7. Attach the click event to the button
     document.getElementById("calculate-button").onclick = handleClickEvent;

        // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
        // feel free to add classes and id's to the HTML elements as you need, 
        // import.a google font and use it for some or all of the text on your page. 


        // Bonus Challenges 
        // 8. Reverse the drop down order so that the sun is first.//