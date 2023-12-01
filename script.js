function addData() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const add = document.getElementById('add').value;
    const pcode = document.getElementById('pcode').value;
    const common = document.getElementById('common').value;
    const food = document.getElementById('food').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
 
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
     
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = add;
    cell4.innerHTML = pcode;
    cell5.innerHTML = common;
    cell6.innerHTML = food;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

}











































//  const txt1 = document.getElementById("form");
//  const btn1 = document.getElementById("btn1");
//  const  out1 = document.getElementById("output1");

//  function fun1(){
//     out1.innerHTML= txt1.value;
//  }

//  btn1.addEventListener('click',fun1);
