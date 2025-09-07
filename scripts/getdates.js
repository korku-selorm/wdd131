const currentyear = new Date().getFullYear();

//Insert the currentyear into the first paragraph

document.getElementById("currentyear").textContent = currentyear;


//Get the last modeified date of the documnet
const lastModified = document.lastModified;

//insert the last modified date into the second paragraph
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;