const firebaseConfig = {
    apiKey: "AIzaSyCHu1qL3peUyALdO_-41Qx90tPc7VfUOfQ",
    authDomain: "registerform-csrm.firebaseapp.com",
    databaseURL: "https://registerform-csrm-default-rtdb.firebaseio.com",
    projectId: "registerform-csrm",
    storageBucket: "registerform-csrm.appspot.com",
    messagingSenderId: "1057299232470",
    appId: "1:1057299232470:web:ea95871f1fd9096c95fb77",
    measurementId: "G-1FME5V24BL"
  };

  firebase.initializeApp(firebaseConfig);

  var registerFormDB = firebase.database().ref('registerForm');

  document.getElementById('registerForm').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var firstname = getElementVal('firstname');
    var lastname = getElementVal('lastname');
    var number = getElementVal('number');
    var emailid = getElementVal('emailid');
    var batch = getElementVal('batch');
    var company = getElementVal('company');
    var employmentStatus = getElementVal('employmentStatus');

    saveMessages(firstname, lastname, number, emailid, batch, company, employmentStatus);


      document.querySelector(".alert").style.display = "block";

      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      
      }, 3000);

        document.getElementById('registerForm').reset();
  }

  const saveMessages = (firstname, lastname, number, emailid, batch, company, employmentStatus) => {
    var newRegisterForm = registerFormDB.push();

    newRegisterForm.set({
        firstname: firstname,
        lastname: lastname,
        number: number,
        emailid: emailid,
        batch: batch,
        company: company,
        employmentStatus: employmentStatus
    })

  };

  

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }