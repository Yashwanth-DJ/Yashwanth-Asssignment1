//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}
var socialMedia = {
    facebook : 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com'
  };
  
var nameAndId = "Yashwanth Reddy - 002310456";

var heading = document.createElement("h1");
heading.style.textAlign = 'center';
heading.textContent = nameAndId;
var firstElement = document.body.firstChild;
document.body.insertBefore(heading, firstElement);

var dropDownTextArea = document.getElementsByClassName("dropDownTextArea");
console.log(dropDownTextArea);

var tableData = document.getElementById("myTable");

var rows = tableData.getElementsByTagName('tr');

console.log(rows);

const checkBoxes = document.querySelectorAll('#myTable input[type="checkbox"]');

var editTitle = document.createElement("th");
editTitle.innerHTML = 'EDIT';

var tdButton = document.createElement("td");
tdButton.innerHTML = '<button onclick="editSelectedRow()">Edit</button>';

rows[0].appendChild(editTitle);

function createEditColumn(){
    for(let i=1;i<rows.length;i++)
    {
        if(i%2!=0){
            rows[i].insertCell(-1);
        }
    }
}


createEditColumn();

function hideDropDownTextAreaAndActionColumn(){
  
    console.log("Hiding all the dropdowns by default");
    console.log("Hiding action columns");
  
    for(let i=0; i<dropDownTextArea.length;i++){
      
      dropDownTextArea[i].style.display = 'none';
    }

      rows[0].lastElementChild.style.display = 'none';
      rows[0].lastElementChild.previousElementSibling.style.display = 'none';
  
    for(let i=1;i<rows.length;i++)
    {
        if(i%2!==0)
        {
            rows[i].lastElementChild.style.display = 'none';
            rows[i].lastElementChild.previousElementSibling.style.display = 'none';
        }
      
    }
   
  
   document.getElementById("button").style.backgroundColor = 'grey';
   document.getElementById("button").style.border = '2px solid grey';
  
}
  
hideDropDownTextAreaAndActionColumn();

function onClickCheckbox(checkBox){
    var selectedRow = checkBox.parentElement.parentElement;
  
    console.log(selectedRow.lastElementChild);
  
    if(checkBox.checked == true)
    {

       rows[0].lastElementChild.style.display = '';
       rows[0].lastElementChild.previousElementSibling.style.display = '';
      
       for(let i=1;i<rows.length;i++)
       {
           if(i%2!==0)
           {
               rows[i].lastElementChild.style.display = '';
               rows[i].lastElementChild.previousElementSibling.style.display = '';
           }
         
       }
  
      selectedRow.style.backgroundColor = 'yellow';
      document.getElementById("button").style.backgroundColor = 'orange';
      document.getElementById("button").style.border = '2px solid orange';
  
      selectedRow.lastElementChild.innerHTML = '<button onclick="editSelectedRow(this)">Edit</button>';  
      selectedRow.lastElementChild.previousElementSibling.innerHTML =  '<button onclick="deleteSelectedRow(this)">Delete</button>';
      
    }
  
    else{
  
      selectedRow.style.backgroundColor = '#fff';
      document.getElementById("button").style.backgroundColor = 'grey';
      document.getElementById("button").style.border = '2px solid grey';
        
      rows[0].lastElementChild.style.display = 'none';
      rows[0].lastElementChild.previousElementSibling.style.display = 'none';
  
    for(let i=1;i<rows.length;i++)
    {
        if(i%2!==0)
        {
            rows[i].lastElementChild.style.display = 'none';
            rows[i].lastElementChild.previousElementSibling.style.display = 'none';
        }
      
        rows[i].style.backgroundColor = '#fff';
    }

    selectedRow.lastElementChild.innerHTML = '';  
    selectedRow.lastElementChild.previousElementSibling.innerHTML =  '';
      
    }
  
}

function showAndHideDropDownTextArea(dropdown){
    var selectedRow = dropdown.parentElement.parentElement;
  
    var nextElement = selectedRow.nextElementSibling;
  
    var dropDownData = nextElement.childNodes[0];
  
    console.log(dropDownData);
  
    if(nextElement.style.display == "none" && dropDownData.style.display == "none"){
  
      nextElement.style.display = 'block';
      dropDownData.style.display = 'block';
    } 
    else{
      nextElement.style.display = 'none';
      dropDownData.style.display = 'none';
    }
}

function deleteSelectedRow(deleteReference){
    var selectedRow = deleteReference.parentElement.parentElement;
    var index = selectedRow.rowIndex;

    var nextRow = selectedRow.nextElementSibling;
    var dropDownIndex = nextRow.rowIndex;

    console.log(nextRow);

    console.log(selectedRow);
    console.log(index);
    console.log(dropDownIndex);
    
    var studentName = selectedRow.querySelectorAll('td')[1];
    console.log(studentName);

    document.getElementById("myTable").deleteRow(index);
    document.getElementById("myTable").deleteRow(index);
    alert(studentName.textContent +" Record deleted successfully");
    hideDropDownTextAreaAndActionColumn();
}
function editSelectedRow(editReference){
    var selectedRow = editReference.parentElement.parentElement;
    var studentName = selectedRow.querySelectorAll('td')[1].textContent;
    var newDetails = prompt("Edit " + studentName + " details");
    if(newDetails != null && newDetails.trim() !== '') {
        alert(studentName + " data updated successfully.");
    }
}


var lastIndex = 3;

function addNewStudent(){
    try{
        var tdata = document.getElementById("myTable");
        var currentRows = tdata.getElementsByTagName('tr');
        var row_count = currentRows.length;
        var tbody = document.getElementsByTagName('tbody')[5];

        var trnode = document.createElement('tr');

        var tdCheckBoxNode = document.createElement('td');
        tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckbox(this)" /><br /><br /><img src="down.png" width="25px" onclick="showAndHideDropDownTextArea(this)"/>';

        var tdStudentNode = document.createElement('td');
        tdStudentNode.innerHTML = 'Student '+(parseInt(lastIndex)+1);

        var tdTeacherNode = document.createElement('td');
        tdTeacherNode.innerHTML = 'Teacher '+(parseInt(lastIndex)+1);

        var tdApproved = document.createElement('td');
        tdApproved.innerHTML = 'Approved '+(parseInt(lastIndex)+1);

        var tdSemester = document.createElement('td');
        tdSemester.innerHTML = 'Fall';

        var tdTA = document.createElement('td');
        tdTA.innerHTML = 'TA';
        var tdBudget = document.createElement('td');
        tdBudget.innerHTML = '25647';
        var tdPercentage = document.createElement('td');
        tdPercentage.innerHTML = '100%';

        var tdEmpty1 = document.createElement('td');
        tdEmpty1.innerHTML = '';
        tdEmpty1.style.display = 'none';

        var tdEmpty2 = document.createElement('td');
        tdEmpty2.innerHTML = '';
        tdEmpty2.style.display = 'none';

        var trnodeDropDown = document.createElement('tr');
        trnodeDropDown.className = 'dropDownTextArea';
        trnodeDropDown.style.display = 'none';

        var tdDetails = document.createElement('td');
        tdDetails.colSpan = '8';
        tdDetails.innerHTML = 'Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br />'
        
        trnode.appendChild(tdCheckBoxNode);
        trnode.appendChild(tdStudentNode);
        trnode.appendChild(tdTeacherNode);
        trnode.appendChild(tdApproved);
        trnode.appendChild(tdSemester);
        trnode.appendChild(tdTA);
        trnode.appendChild(tdBudget);
        trnode.appendChild(tdPercentage);
        trnode.appendChild(tdEmpty1);
        trnode.appendChild(tdEmpty2);

        tdata.appendChild(trnode);

        trnodeDropDown.appendChild(tdDetails);
        tdata.appendChild(trnodeDropDown);

        lastIndex++;

        alert(tdStudentNode.innerHTML + " Record Added Successfully");

    }catch(error){
        alert("Error : "+error.message);
    }
}

