var login = 0
function chk(){
  if (login==0){
    InitLogin()
  }else if (login==1) {
    window.location('https://google.com')
  }
}