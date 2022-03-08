
var studentDataBase = JSON.parse(localStorage.getItem("studentDataBase")) || [];

document.querySelector("#form").addEventListener("submit", displayData);
function displayData() {
    var obj = {
        name: document.querySelector("#name").value,
        age: document.querySelector("#age").value,
        gender: document.querySelector("#gender").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value
    };
    studentDataBase.push(obj);
    localStorage.setItem("studentDataBase",JSON.stringify(studentDataBase));
 }