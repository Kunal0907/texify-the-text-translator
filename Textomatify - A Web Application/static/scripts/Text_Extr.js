// Header
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myHeader").style.top = "0";
  } else {
    document.getElementById("myHeader").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};

// Side Navigation
function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

var selDiv = "";

// copy button
function myFunction() {
	var copyText = document.getElementById("text");
	copyText.select();
	document.execCommand("copy");
  } 
 
// Upload image

//selecting all required elements
const label = document.querySelector("label"),
input = document.querySelector("input");

let imfile; 
//this is a global variable and we'll use it inside multiple functions

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  imfile = this.files[0];
  label.classList.add("active");
  showFile(); //calling function
});

function showFile(){
  let fileType = imfile.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      label.innerHTML = imgTag; //adding that created img tag inside dropArea container
    };
    fileReader.readAsDataURL(imfile);
  }else{
    alert("This is not an Image File!");
  }
} 
