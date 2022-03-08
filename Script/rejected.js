var rejected = JSON.parse(localStorage.getItem("rejected"));

rejected.map(function (elem, index, arr) {
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
    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("#body").append(tr)
});