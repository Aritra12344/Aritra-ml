 // Your web app's Firebase configuration
  var firebaseConfig = {
 apiKey: "AIzaSyAKmCyRu3j_0SsEfKw_BmD8Z7HGyTPI8ZE",


    authDomain: "aritra-ml.firebaseapp.com",


    projectId: "aritra-ml",


    storageBucket: "aritra-ml.appspot.com",


    messagingSenderId: "228570434663",


    appId: "1:228570434663:web:130c10fcd9ed513573d8c2",


    measurementId: "G-250SNRPZ1W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  var signupbtn=document.getElementById("signupbtn")
  var emailsignup=document.getElementById("useremail")
  var passswordsignup=document.getElementById("userpass")

var city=document.getElementById("city").value;
var zip=document.getElementById("zip").value;



  //================Signup With Email and Password==========================
  signupbtn.onclick=function(){
      signupbtn.disabled=true;
      signupbtn.textContent="Registering Your Account! Please Wait";
      firebase.auth().createUserWithEmailAndPassword(emailsignup.value,passswordsignup.value).then(function(response){
        alert("successful");
            

      })
      .catch(function(error){
        signupbtn.disabled=false;
        signupbtn.textContent="Sign Up";
          console.log(error);
  alert("Something went wrong");
      })


  }


  //================End Signup With Email and Password======================

   var googleLogin=document.getElementById("googleLogin");

   googleLogin.onclick=function(){
       var provider=new firebase.auth.GoogleAuthProvider();

       firebase.auth().signInWithPopup(provider).then(function(response){
           var userobj=response.user;
            var token=userobj.xa;
            var provider="google";
            var email=userobj.email;
            if(token!=null && token!=undefined && token!=""){
            sendDatatoServerPhp(email,provider,token,userobj.displayName);
            }

           console.log(response);
       })
       .catch(function(error){
           console.log(error);
       })

}

var signinbtn=document.getElementById("signinbtn")
  var emailsignup=document.getElementById("useremail")
  var passswordsignup=document.getElementById("userpass")



  

signinbtn.onclick=function(){
      signinbtn.disabled=true;
      signinbtn.textContent="Logging to Your Account! Please Wait";
      firebase.auth().signInWithEmailAndPassword(emailsignup.value, passswordsignup.value).then(function(response){
        alert("user successfully logged in");
  window.location.replace("https://aritra12344.github.io/haaaa/index.html");
  const pNode = document.getElementById("userpro"); pNode.innerText += emailsignup;
      
      })
      .catch(function(error){
        signinbtn.disabled=false;
        signinbtn.textContent="Login";
          console.log(error);
      })


  }

