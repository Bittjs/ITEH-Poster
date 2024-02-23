function submitData(){
    const theLogin = document.getElementById("loginSpace").value
    const thePassword = document.getElementById("passwordSpace").value
    localStorage.setItem("login", theLogin)
    localStorage.setItem("password", thePassword)
}