let add = document.getElementById("add");
let close = document.getElementById("close");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let mood = "create";
let temp;

add.onclick = function () {
  form.style.transform = "scale(1)";
};
close.onclick = function () {
  form.style.transform = "scale(0)";
};


function uploadImage() {
    let input = document.getElementById('imageInput');
    let file = input.files[0];
    let formData = new FormData();
    formData.append('image', file);
}

// local storage


let newuser = [];
if (localStorage.user != null) {
    savedata = JSON.parse(localStorage.user)
}
else {
    savedata = [];
}

submit.onclick = function () {
  let newuser = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value,
  };
  

  if(mood === 'create'){
      savedata.push(newuser)

  }else{
      savedata[temp] = newuser;
      mood = "create"
  }
  savedata.push(newuser)

  // local storage
  localStorage.setItem('user', JSON.stringify(savedata))
  ClearData()
};

// clear inputs
function ClearData() {
  firstname.value = ''
  lastname.value = ''
  email.value = ''
  password.value = ''
}
// clear inputs