var employeeList = document.getElementById('employeeList');
var requestURL = 'employees.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var epmloyees = request.response;
    console.log(epmloyees);
    for (var key in epmloyees) {
        if (epmloyees[key].inoffice) {
            employeeList.innerHTML += `<p class="in">${key}</p>`;
        } else {
            employeeList.innerHTML += `<p class="out">${key}</p>`;
        }

    }
};
