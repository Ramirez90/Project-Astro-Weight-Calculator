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
        // 2. Write the code to return the correct weight  
    }
    function handleClickEvent(e) {
        // 3. Declare a variable called userWeight and assign the value of the user's weight. 

        // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 

        // 5. Declare a variable called result and assign the value of the new calculated weight. 

        // 6. Write code to display the message shown in the screenshot. 

    } 

        // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

        // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
        // feel free to add classes and id's to the HTML elements as you need, 
        // import.a google font and use it for some or all of the text on your page. 


        // Bonus Challenges 
        // 8. Reverse the drop down order so that the sun is first.//