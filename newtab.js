/**********************************************
* File: newtab.js
* Author: Alannah Oleson
* Description: To pair with newtab.html. The logic for displaying the different Botz.
***********************************************/

//These constants hold filepaths to the different images that can be displayed.
const Bot1 = "./images/icon.svg";                  //TODO: Create images and put the correct paths here.
const Bot2 = "./images/icon_invert.svg";
const Bot3 = "./images/icon_feather.svg";

/* 
* Function: init
* Parameters: none
* Description: This is called when the page loads. It handles adding the actual image
*    node to the page.
* Preconditions: Referenced elements exist; The page has loaded
* Postconditions: An image is displayed on the page.
* Returns: none
*/
function init () {
    
    var bot_source = "";
    var image_div = document.getElementById("bot_image_wrapper");
    
    bot_source = chooseRandomBot();
    if (bot_source == null) {
        console.error("bot_source was null!");
    }
    
    //Creates and appends the chosen image to the div.
    var img = document.createElement("img");
    img.src = bot_source;
    image_div.appendChild(img);
    
}

/* 
* Function: chooseRandomBot
* Parameters: none
* Description: Picks which Bot to display on the screen. Generates a random number
     to pick the Bot, and then builds and returns a string suitable for using as
     an image src attribute.
* Preconditions: Referenced elements exist
* Postconditions: The Bot has been chosen and the src string points to it
* Returns: A string that can be used as a src attribute in an <img> tag, or null on error.
*/
function chooseRandomBot () {
    
    var min = 1;
    var max = 3;
    var rand_int = 0;
    var return_string = "";
    
    rand_int = Math.floor(Math.random() * (max - min + 1)) + min;
    
    //Error checking
    if (rand_int < min || rand_int > max) {
        console.error("rand_int out of range!", rand_int);
        return null;
    }
    
    //Build the right string        //TODO: Optimize this logic. Tried eval for dynamic vars but it's not allowed by Chrome.
    if (rand_int == 1) {
        return_string = Bot1;
    }
    if (rand_int == 2) {
        return_string = Bot2;
    }
    if (rand_int == 3) {
        return_string = Bot3;
    }
    
    return return_string;
    
}


/* 
* This event listener is necessary because Chrome doesn't allow 
* inline function calls. Therefore, we wait for the page to load
* before we call the start-up function.
*/
document.addEventListener('DOMContentLoaded', init);














