let uname = document.getElementById("uname");
let pwd = document.getElementById("pwd");
let form = document.getElementById("frmLogin");


function validate(form)
  {
    if(uname.value == "" || pwd.value =="") {
      alert("This fields cannot be blank!");
      form.uname.focus();
      form.pwd.focus();
      return false;
    }
    
   
    else if(uname.value!="admin" || pwd.value!='12345') {
      alert("Incorrect username or password !");
      uname.focus();
      return false;
    }
   
    else{
        return true;
        alert("validation successful")
    }

  
}