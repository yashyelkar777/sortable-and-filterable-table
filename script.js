let list = [];

function submitForm() {
    let list1 = {};
    list1.name = document.getElementById('Name').value;
    list1.e_mail = document.getElementById('E-mail').value;
    list1.age = document.getElementById('age').value;

    list.push(list1);

    document.getElementById('Name').value = "";
    document.getElementById('E-mail').value = "";
    document.getElementById('age').value = "";

    displayNames();
    displayEmails();
    displayAges();
}

function displayNames() {
    document.getElementById('output').innerHTML = "name";
    for (let i = 0; i < list.length; i++) {
        let output = document.createElement("li");
        output.innerText = list[i].name;
        document.getElementById("output").appendChild(output);
    }
}

function displayEmails() {
    document.getElementById('output1').innerHTML = "E-mail";
    for (let i = 0; i < list.length; i++) {
        let output1 = document.createElement("li");
        output1.innerText = list[i].e_mail;
        document.getElementById('output1').appendChild(output1);
    }
}

function displayAges() {
    document.getElementById('output2').innerHTML = "age";
    for (let i = 0; i < list.length; i++) {
        let output2 = document.createElement("li");
        output2.innerText = list[i].age;
        document.getElementById('output2').appendChild(output2);
    }
}

function filterNames() {
    let filterInput = document.getElementById('filterInput').value.toLowerCase();
    let filteredList = list.filter(user => user.name.toLowerCase().includes(filterInput));
    document.getElementById('output').innerHTML = "";
    for (let i = 0; i < filteredList.length; i++) {
        let output = document.createElement("table");
        output.innerText = filteredList[i].name + " (Age: " + filteredList[i].age + ", Email: " + filteredList[i].e_mail + ")";
        document.getElementById("output").appendChild(output);
    }
}