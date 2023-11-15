function TooCalc(){
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=300,height=500,left=350,top=400`;//data to open no menu login

open('https://eshangonemad.github.io/calculator', 'test', params);//opens up a no menu version of login
}
function load(){
  
if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
window.location.assign("/mobile/mobile.html");console.log('checkcom')
    
}else{
  console.log('wurks?')
     document.getElementById("cs").style.display = "none";document.getElementById("mathex").style.display = "none";document.getElementById("bio").style.display = "none";document.getElementById("chem").style.display = "none";document.getElementById("phy").style.display = "none";document.getElementById("evm").style.display = "none";document.getElementById("bstds").style.display = "none";

if (localStorage.getItem("biol") === null) {
  window.location.assign("/start/start.html");
} else {
  // Parse the values from localStorage as integers
  var chemi = parseInt(localStorage.getItem("chemi"));
  var biol = parseInt(localStorage.getItem("biol"));
  var mathext = parseInt(localStorage.getItem("mathext"));
  var phys = parseInt(localStorage.getItem("phys"));
  var cos = parseInt(localStorage.getItem("cos"));
  var evos = parseInt(localStorage.getItem("evos"))
  var bstds = parseInt(localStorage.getItem("bstds"))
  // Check the values and set the display style accordingly
  if (chemi === 1) {
    document.getElementById("chem").style.display = "block";
  }
  if (biol === 1) {
    document.getElementById("bio").style.display = "block";
  }
  if (mathext === 1) {
    document.getElementById("mathex").style.display = "block";
  }
  if (phys === 1) {
    document.getElementById("phy").style.display = "block";
  }
  if (cos === 1) {
    document.getElementById("cs").style.display = "block";
  }
   if (evos === 1) {
    document.getElementById("evm").style.display = "block";
  }
   if (bstds === 1) {
    document.getElementById("bstds").style.display = "block";
  }
}
}
}


function tbcl(){
  document.getElementById('load').src = "https://drive.google.com/embeddedfolderview?id=1k7o4XsEFYeJEnF9u_XKoebkGd4eqObDh#grid";
}
function chemcl(){
  document.getElementById('load').src = "/resources/chemistry.html";
}
function cscl(){
  document.getElementById('load').src = "/resources/cs.html";
}
function phycl(){
  document.getElementById('load').src = "/resources/physics.html";
}
function mexcl(){
  document.getElementById('load').src = "/resources/mathex.html";
}
function bicl(){
  document.getElementById('load').src = "/resources/biology.html";
}
function Giauth(){
   document.getElementById('load').src = "/home/home.html";
  }
function evcl(){
  document.getElementById('evm').src = "https://drive.google.com/embeddedfolderview?id=________#grid"
}
 function bscl(){
    document.getElementById('bstds').src = "https://drive.google.com/embeddedfolderview?id=________#grid"
 }

