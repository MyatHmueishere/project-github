const auth=()=>{
     var user=document.form1.user.value;
    var psw=document.form1.psw.value;
    check(user,psw);
    change();
}

const check=(user,psw)=>{
    var data=fetch("data.json");
    const result=data.then(data=>data.json())
                      .then(res=>{
                        for(const fo of res){
                            if(fo.name==user && fo.password==psw){
                               var status= true;
                            }
                        }
                        finished(status)
                      })
}

const finished=(status)=>{
   if(post){localStorage.setItem('user',user)
    alert("Finished")
    change();
}
    else{
        alert("Try Again")
    }
}

const logout=()=>{
    localStorage.clear();
    change();
}

function change(){
    if(!localStorage.getItem('user')){
        document.getElementById("auth").innerHTML="Login"
        document.form1.btn.setAttribute('onclick','auth()');
    }
    else{
        document.getElementById("auth").innerHTML = "Logout"
        document.form1.btn.setAttribute('onclick','logout()');
    }
};
change();






