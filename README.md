
Heart Generator Project Documentation
Overview
The Heart Generator project is a simple web application that allows users to input their names and generates a heart shape with their names inside it using HTML, CSS, and JavaScript.

Files
The project consists of the following files:

index.html: Contains the HTML structure for the web application.
styles.css: Contains the CSS styles for the web application.
script.js: Contains the JavaScript code to handle user input and generate the heart shape.
HTML Structure (index.html)
The HTML file defines the structure of the web application. It includes:

A container with a heading, input field, "Generate" button, and a div to display the heart shape.
The input field allows users to enter their names.
The "Generate" button triggers the generation of the heart shape with the entered name.
The div with the id "heartContainer" is where the heart shape with the user's name will be displayed.
CSS Styles (styles.css)
The CSS file contains styles to enhance the appearance of the web application. It includes:

Styles to center the container vertically and horizontally.
Styles for the heading, input field, button, and heart container.
Customization of font sizes, colors, padding, and margins for better visual appeal.
JavaScript Code (script.js)
The JavaScript file contains code to handle user input and generate the heart shape. It includes:

The generateHeart() function, which retrieves the user's input from the input field, validates it, and generates the heart shape with the entered name.
If the user's name is empty, an alert message prompts the user to enter their name.
The heart shape is created dynamically using the createElement() method and appended to the heart container.
Usage
To use the Heart Generator:

Open the index.html file in a web browser.
Enter your name into the input field.
Click the "Generate" button.
The heart shape with your name inside it will be displayed below the input field.
Customization
You can customize the styles in styles.css to change the appearance of the web application (e.g., colors, fonts, sizes).
Advanced features, such as animations or additional input fields, can be added to enhance the functionality of the application.
