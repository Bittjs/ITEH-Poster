const debug = 1;

function pushUserData(){
    const theLogin = document.getElementById("loginSpace").value
    const thePassword = document.getElementById("passwordSpace").value
    //localStorage.setItem("login", theLogin)
    //localStorage.setItem("password", thePassword)
    if (debug == 1){
        console.log(theLogin,thePassword)
    }
}

function pullUserData(){
    const theEnteredLogin = document.getElementById("loginSpace").value
    const theEnteredPassword = document.getElementById("passwordSpace").value
    if (debug == 1){
        //if (localStorage.getItem("login", theLogin) == theEnteredLogin, localStorage.getItem("password", thePassword) == theEnteredPassword){
            console.log("IT FREAKING WORKS");
        }
        else {console.log("not today")}
        
    }
}