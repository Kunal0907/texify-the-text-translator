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

//side navigation
function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// copy button
function myFunction() {
	var copyText = document.getElementById("translation_results");
	copyText.select();
	document.execCommand("copy");
  } 