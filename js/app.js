
let userInfo=document.querySelector('#user-info');
let userDom=document.querySelector('#user');
let links=document.querySelector('#links');


let username=localStorage.getItem('username');
if(username){
    // console.log("yes");
    links.remove();
    userInfo.style.display="flex";
    userDom.innerHTML=username

}