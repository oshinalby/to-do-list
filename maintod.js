function maintod(){
    //console.log("hai");
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            //console.log("response");
            var output ="";
            for(var i=0;i<response.length;i++){
                output +="<ol><input type ='checkbox'>"+"&nbsp&nbsp&nbsp"+response[i].title+"</input></ol>";
    
            }  
            //console.log("output");
          
           document.getElementById("jumbotron").innerHTML=output; 
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
      newFunction();

    function newFunction() {
        xhttp.send();
    }
}
function redirect() {
    localStorage.setItem("name", "");
    location.href = "./index.html";
  }

  var n;

  var b = 0;
  $("body").change(() => {
    var countChecked = function () {
      n = $("input:checked").length;
      n = n - 90;

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (n == 0) {
            reject();
          } else if (n % 5 == 0 && b - n < 0) {
            resolve("Congrats. 5 Tasks have been Successfully Completed");
          } else {
            b = n;
          }
        }, 100);
      });

    };
    countChecked().then((s) => alert(s));



    console.log(n);
  });

