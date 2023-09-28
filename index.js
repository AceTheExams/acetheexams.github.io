function load(){
  if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
window.location.assign("mobile.html");console.log('checkcom')
    
}else{
     document.getElementById("cs").style.display = "none";document.getElementById("mathex").style.display = "none";document.getElementById("bio").style.display = "none";document.getElementById("chem").style.display = "none";document.getElementById("phy").style.display = "none";

if (localStorage.getItem("biol") === null) {
  window.location.assign("/start/start.html");
} else {
  // Parse the values from localStorage as integers
  var chemi = parseInt(localStorage.getItem("chemi"));
  var biol = parseInt(localStorage.getItem("biol"));
  var mathext = parseInt(localStorage.getItem("mathext"));
  var phys = parseInt(localStorage.getItem("phys"));
  var cos = parseInt(localStorage.getItem("cos"));
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
}
}
}


function tbcl(){
  document.getElementById('load').src = "https://app.box.com/embed/s/0gio9nnvnse4kvwm4iikdaipvg9l4p8y?sortColumn=name";
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
