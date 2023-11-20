function _0x564c(_0x41fb17,_0x2c4bfc){var _0x5825ad=_0x5825();return _0x564c=function(_0x564cd3,_0x189047){_0x564cd3=_0x564cd3-0x1ef;var _0x368eed=_0x5825ad[_0x564cd3];return _0x368eed;},_0x564c(_0x41fb17,_0x2c4bfc);}var _0x234cd4=_0x564c;(function(_0x3b3afd,_0x434aee){var _0x4fa310=_0x564c,_0xd25deb=_0x3b3afd();while(!![]){try{var _0x3fe81d=parseInt(_0x4fa310(0x1f0))/0x1+parseInt(_0x4fa310(0x1fc))/0x2+parseInt(_0x4fa310(0x1f8))/0x3*(parseInt(_0x4fa310(0x1ef))/0x4)+parseInt(_0x4fa310(0x1f9))/0x5+-parseInt(_0x4fa310(0x1f3))/0x6+parseInt(_0x4fa310(0x1f6))/0x7+-parseInt(_0x4fa310(0x1f2))/0x8;if(_0x3fe81d===_0x434aee)break;else _0xd25deb['push'](_0xd25deb['shift']());}catch(_0x3c4632){_0xd25deb['push'](_0xd25deb['shift']());}}}(_0x5825,0x70782));var bstmds='';fetch('https://eshangonemad.github.io/checkcode/aCHK.json')[_0x234cd4(0x1f7)](_0x9843f9=>_0x9843f9['json']())[_0x234cd4(0x1f7)](_0x1fa5c8=>{var _0x401ba=_0x234cd4;console[_0x401ba(0x1fb)](_0x1fa5c8);var _0x357063=_0x1fa5c8[_0x401ba(0x1fd)];if(_0x357063=='enabled'){}else document['write'](_0x401ba(0x1fa)),document[_0x401ba(0x1f1)]('');})[_0x234cd4(0x1f4)](_0x1a2bd6=>console['error'](_0x234cd4(0x1f5),_0x1a2bd6));function _0x5825(){var _0x405214=['6153728TjFDXS','then','63951uTydxk','3313905KKtQGR','UNAUTHORISED\x20WEBSITE\x20401-2-9-8\x20(REPORT\x20TO\x20email:vasipallieshan@gmail.com)\x20','log','370824gHTGgD','runtime-env','168ObdNqn','590579pftlzF','write','17966288EdIuOq','3040380ledrKG','catch','Error:'];_0x5825=function(){return _0x405214;};return _0x5825();}
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

if (localStorage.getItem("cos") === null) {
  window.location.assign("/start/start.html");
} else {
  // Parse the values from localStorage as integers
  var chemi = parseInt(localStorage.getItem("chemi"));
  var biol = parseInt(localStorage.getItem("biol"));
  var mathext = parseInt(localStorage.getItem("mathext"));
  var phys = parseInt(localStorage.getItem("phys"));
  var cos = parseInt(localStorage.getItem("cos"));
  
  var evos = parseInt(localStorage.getItem("evos"));
  var bsos = parseInt(localStorage.getItem("bsos"));
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
  if (bsos === 1) {
    document.getElementById("bstds").style.display = "block";
  }
    if (evos === 1) {
    document.getElementById("evm").style.display = "block";
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
  document.getElementById('load').src= "https://drive.google.com/embeddedfolderview?id=1xoUXreOz8RXSkrPvHzNX5hKajZ-G3HSc#grid"
}

function bscl(){
  document.getElementById('load').src= "https://drive.google.com/embeddedfolderview?id=1Nm4HrAgqKUcm3R9kq_l2P1wca2vEOgwX#grid"
}

