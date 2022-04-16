const textBoxName = document.getElementById('input-name');
const textBoxEmail = document.getElementById('email');
const textBoxPhone = document.getElementById('phone-number');
const textBoxMessage = document.getElementById('message');
const submitButton = document.getElementById('submit-button');
const menu = document.getElementById('icon');
const menuNav = document.getElementById('navigation-list');
let nameInput;

//get the input value from the text box
function getValue(){
    nameInput = document.getElementById('input-name').value;
}

if(textBoxName){
  //turn textbox light green when click on textboard
  textBoxName.addEventListener("focus", function() {
      textBoxName.style.background = '#f5f1da';
    });

  //turn textbox back to white when the textbox is not click
  textBoxName.addEventListener("blur", function() {
      textBoxName.style.background = 'white';
    });
}

if(textBoxEmail){
    //turn textbox light green when click on textboard
    textBoxEmail.addEventListener("focus", function() {
      textBoxEmail.style.background = '#f5f1da';
    });

  //turn textbox back to white when the textbox is not click
  textBoxEmail.addEventListener("blur", function() {
      textBoxEmail.style.background = 'white';
    });
}

if(textBoxPhone){
  //turn textbox light green when click on textboard
  textBoxPhone.addEventListener("focus", function() {
      textBoxPhone.style.background = '#f5f1da';
    });

  //turn textbox back to white when the textbox is not click
  textBoxPhone.addEventListener("blur", function() {
      textBoxPhone.style.background = 'white';
    });
}

if(textBoxMessage){
    //turn textbox light green when click on textboard
  textBoxMessage.addEventListener("focus", function() {
      textBoxMessage.style.background = '#f5f1da';
    });

  //turn textbox back to white when the textbox is not click
  textBoxMessage.addEventListener("blur", function() {
      textBoxMessage.style.background = 'white';
    });
}

if(submitButton){
//send a window alert when submit button is clicked in the webform
submitButton.addEventListener("click", function() {
    getValue();
    window.alert("Hi " + nameInput + "! Thank you for showing interest in our restaurant. We will get back to you shortly through email.");
  });
}

//show/hide the navigation bar when pressed on the hamburger menu
menu.addEventListener("click", function() {
  if (menuNav.classList.contains("hide")) {
    // then the hide class will be removed
    menuNav.classList.remove("hide");

  } else {
    // otherwise, if the menu does not have the 
    // hide class present in the HTML, then the
    // class should be added
    menuNav.classList.add("hide");
  }
});

const menuBox = document.getElementById('menuInput');
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById('menuInput');
filter = input.value.toUpperCase();
table = document.getElementById('menuTable');
tr = table.getElementsByTagName('tr');
if(menuBox){
  menuBox.addEventListener("keyup", function(){
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                table.style.display = "contents";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
  });
}