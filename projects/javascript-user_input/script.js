let username;
document.getElementById("submit-btn").onclick = function(){
username = document.getElementById(username).value
document.getElementById("user-greet").textContent = 'Hello ${username}'
}

document.getElementById("reset-btn").onclick = function(){
document.getElementById("username").value = ""
document.getElementById("user-greet").textContent = ""
}

window.alert("Hello")