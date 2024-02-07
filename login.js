const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.email.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        alert("new")
       // window.location.href = "dumy.html"
    }else{
      //  window.location.href = "NOREGISTRATION.html"
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "ram1234@gmail.com" && password === "1234"){
        return true
    }else{
        return false
    }
}