var admitted =JSON.parse(localStorage.getItem("admitted")) || [];
var rejected =JSON.parse(localStorage.getItem("rejected")) || [];
var studentDataBase = JSON.parse(localStorage.getItem("studentDataBase"));

studentDataBase.map(function (elem, index, arr) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = elem.name;
    var td2 = document.createElement("td");
    td2.innerText = elem.age;
    var td3 = document.createElement("td");
    td3.innerText = elem.gender;
    var td4 = document.createElement("td");
    td4.innerText = elem.email;
    var td5 = document.createElement("td");
    td5.innerText = elem.phone;
    var td6 = document.createElement("td");
    var btn1 = document.createElement("button");
    btn1.innerText = "Admit"
    btn1.addEventListener("click", function() {
        admitted.push(elem);
        localStorage.setItem("admitted",JSON.stringify(admitted));
    })
    td6.append(btn1); 
    var td7 = document.createElement("td");
    var btn2 = document.createElement("button");
    btn2.innerText = "Reject";
    btn2.addEventListener("click", function () {
        rejected.push(elem);
        localStorage.setItem("rejected",JSON.stringify(rejected));
    })
    td7.append(btn2);
    tr.append(td1, td2, td3, td4, td5,td6,td7);
    document.querySelector("#body").append(tr)
});