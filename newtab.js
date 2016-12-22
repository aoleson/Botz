/**********************************************
* File: newtab.js
* Author: Alannah Oleson
* Description: To pair with newtab.html. The logic for displaying the different Botz.
***********************************************/

//These constants hold filepaths to the different images that can be displayed.
const Bot1 = "./icon.png";                  //TODO: Create images and put the correct paths here.
const Bot2 = "";
const Bot3 = "";

/* 
* Function: init
* Parameters: none
* Description: This is called when the page loads. It handles adding the actual image
*    node to the page.
* Preconditions: Referenced elements exist; The page has loaded
* Postconditions: An image is displayed on the page.
*/
function init () {
    
    var image_div = document.getElementById("bot_image_div");
    
    //Creates and appends the chosen image to the div.
    var img = document.createElement("img");
    img.src = Bot1;                             //TODO: Un-hardcode this (was hardcoded for test)
    image_div.appendChild(img);
    
}


/* 
* This event listener is necessary because Chrome doesn't allow 
* inline function calls. Therefore, we wait for the page to load
* before we call the start-up function.
*/
document.addEventListener('DOMContentLoaded', init);