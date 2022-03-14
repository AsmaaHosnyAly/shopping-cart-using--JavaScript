let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("sign-in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // validation
  if (username.value === "" || password.value === "") {
    alert("pleass fill the data");
  } else if (
    getUser &&getPassword &&
    getUser.trim() === "asmaa" &&
    getPassword === "123"
  ) {

    console.log("test");
    setTimeout(() => {
      window.location = "index.html";
    }, 1000);
  }else{
    console.log("usenama or password is rong");
  }
});
