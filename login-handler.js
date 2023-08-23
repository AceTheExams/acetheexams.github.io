var email=''

function AfterAuth(){
  const str = AUTH_EMAIL ;
const words = str.split('@');
email=words[0];
  
  document.cookie = "auth_email="+email
  document.location.href = "/account.html";
  
}


function accountchk(){
    const str = document.cookie ;
const words = str.split('=');
  document.getElementById('user').innerHTML=(words[1]);
}

